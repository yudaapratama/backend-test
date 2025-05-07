const { Employee, EmployeeProfile } = require('../db/models/index')

const fetchAll = async (request = {
	limit: 10,
	offset: 0
}) => {
	try {
		const data = await EmployeeProfile.findAndCountAll({ 
			limit: request.limit, 
			offset: request.offset,
			distinct: true,
			include: [
				{
					model: Employee,
					as: 'employee',
					attributes: ['id', 'nik', 'name']
				},
			]
		})
		return data
	} catch (error) {
		throw error
	}
}

const fetchSingle = async (id) => {
	try {
		const data = await EmployeeProfile.findByPk(id)
		return data
	} catch (error) {
		throw error
	}
}

const fetchByEmployee = async (id) => {
	try {
		const data = await EmployeeProfile.findAll({
			where: {
				employee_id: id
			}
		})
		return data
	} catch (error) {
		throw error
	}
}

const insert = async (request) => {
	try {
		const {
			employee_id,
			place_of_birth,
			date_of_birth,
			gender,
			is_married,
			prof_pict
		} = request

		const data = await EmployeeProfile.create({
			employee_id,
			place_of_birth,
			date_of_birth,
			gender,
			is_married,
			prof_pict
		})

		return data

	} catch (error) {
		throw error
	}
}

const update = async (request) => {
	try {
		const {
			id,
			employee_id,
			place_of_birth,
			date_of_birth,
			gender,
			is_married,
			prof_pict
		} = request

		const data = await EmployeeProfile.findOne({
			where: {
				id
			}
		})

		data.employee_id = employee_id ? employee_id : data.employee_id
		data.place_of_birth = place_of_birth ? place_of_birth : data.place_of_birth
		data.date_of_birth = date_of_birth ? date_of_birth : data.date_of_birth
		data.gender = gender ? gender : data.gender
		data.is_married = typeof is_married !== 'undefined' ? is_married : data.is_married
		data.prof_pict = prof_pict ? prof_pict : data.prof_pict
		
		await	data.save(),
		await	data.reload()

		return data	

	} catch (error) {
		throw error
	}
}

const destroy = async (id) => {
	try {
		const data = await EmployeeProfile.destroy({ where: { id } })
		
		return data
	} catch (error) {
		throw error
	}
}

module.exports = {
	fetchAll,
	fetchSingle,
	fetchByEmployee,
	insert,
	update,
	destroy
}