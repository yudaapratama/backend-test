const { Employee, EmployeeEducation, EmployeeFamily, EmployeeProfile } = require('../db/models/index')

const fetchAll = async (request = {
	limit: 10,
	offset: 0
}) => {
	try {
		const data = await Employee.findAndCountAll({ 
			limit: request.limit, 
			offset: request.offset,
			distinct: true,
			include: [
				{
					model: EmployeeEducation,
					as: 'educations',
					attributes: {
						exclude: ['employee_id']
					}
				},
				{
					model: EmployeeFamily,
					as: 'families',
					attributes: {
						exclude: ['employee_id']
					}
				},
				{
					model: EmployeeProfile,
					as: 'profile',
					attributes: {
						exclude: ['employee_id']
					}
				}
			]
		})
		return data
	} catch (error) {
		throw error
	}
}

const fetchSingle = async (id) => {
	try {
		const data = await Employee.findByPk(id)
		return data
	} catch (error) {
		throw error
	}
}

const insert = async (request) => {
	try {
		const {
			nik,
			name,
			is_active,
			start_date,
			end_date,
		} = request

		const data = await Employee.create({
			nik,
			name,
			is_active,
			start_date,
			end_date
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
			nik,
			name,
			is_active,
			start_date,
			end_date,
		} = request

		const data = await Employee.findOne({
			where: {
				id
			}
		})

		data.nik = nik ? nik : data.nik
		data.name = name ? name : data.name
		data.is_active = typeof is_active === 'undefined' ? data.is_active : is_active
		data.start_date = start_date ? start_date : data.start_date
		data.end_date = end_date ? end_date : data.end_date
		
		await	data.save(),
		await	data.reload()

		return data	

	} catch (error) {
		throw error
	}
}

const destroy = async (id) => {
	try {
		const data = await Employee.destroy({ where: { id } })
		
		return data
	} catch (error) {
		throw error
	}
}

module.exports = {
	fetchAll,
	fetchSingle,
	insert,
	update,
	destroy
}