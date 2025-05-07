const { Employee, EmployeeEducation } = require('../db/models/index')

const fetchAll = async (request = {
	limit: 10,
	offset: 0
}) => {
	try {
		const data = await EmployeeEducation.findAndCountAll({ 
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
		const data = await EmployeeEducation.findByPk(id)
		return data
	} catch (error) {
		throw error
	}
}

const fetchByEmployee = async (id) => {
	try {
		const data = await EmployeeEducation.findAll({
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
			level,
			description
		} = request

		const data = await EmployeeEducation.create({
			employee_id,
			name,
			level,
			description
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
			level,
			description
		} = request

		const data = await EmployeeEducation.findOne({
			where: {
				id
			}
		})

		data.employee_id = employee_id ? employee_id : data.employee_id
		data.name = name ? name : data.name
		data.level = level ? level : data.level
		data.description = description ? description : data.description
		
		await	data.save(),
		await	data.reload()

		return data	

	} catch (error) {
		throw error
	}
}

const destroy = async (id) => {
	try {
		const data = await EmployeeEducation.destroy({ where: { id } })
		
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