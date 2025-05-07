const { Employee, EmployeeFamily } = require('../db/models/index')

const fetchAll = async (request = {
	limit: 10,
	offset: 0
}) => {
	try {
		const data = await EmployeeFamily.findAndCountAll({ 
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
		const data = await EmployeeFamily.findByPk(id)
		return data
	} catch (error) {
		throw error
	}
}

const fetchByEmployee = async (id) => {
	try {
		const data = await EmployeeFamily.findAll({
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
			name,
			identifier,
			job,
			place_of_birth,
			date_of_birth,
			religion,
			is_life,
			is_divorced,
			relation_status
		} = request

		const data = await EmployeeFamily.create({
			employee_id,
			name,
			identifier,
			job,
			place_of_birth,
			date_of_birth,
			religion,
			is_life,
			is_divorced,
			relation_status
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
			name,
			identifier,
			job,
			place_of_birth,
			date_of_birth,
			religion,
			is_life,
			is_divorced,
			relation_status
		} = request

		const data = await EmployeeFamily.findOne({
			where: {
				id
			}
		})

		data.employee_id = employee_id ? employee_id : data.employee_id
		data.name = name ? name : data.name
		data.identifier = identifier ? identifier : data.identifier
		data.job = job ? job : data.job
		data.place_of_birth = place_of_birth ? place_of_birth : data.place_of_birth
		data.date_of_birth = date_of_birth ? date_of_birth : data.date_of_birth
		data.religion = religion ? religion : data.religion
		data.is_life = typeof is_life !== 'undefined' ? is_life : data.is_life
		data.is_divorced = typeof is_divorced !== 'undefined' ? is_divorced : data.is_divorced
		data.relation_status = relation_status ? relation_status : data.relation_status
		
		await	data.save(),
		await	data.reload()

		return data	

	} catch (error) {
		throw error
	}
}

const destroy = async (id) => {
	try {
		const data = await EmployeeFamily.destroy({ where: { id } })
		
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