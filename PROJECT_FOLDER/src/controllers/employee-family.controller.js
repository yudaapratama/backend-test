const { UniqueConstraintError, ValidationError } = require('sequelize')
const employeeFamilyService = require('../services/employee-family.services')
const employeeService = require('../services/employee.services')
const { pagination, dataPaginate } = require('../utils/index')

const getAll = async (req, res) => {
	try {
		const { page, size } = req.query
		const { limit, offset } = pagination(page-1, size)

		const employeeFamily = await employeeFamilyService.fetchAll({
			limit,
			offset
		})
		
		const result = dataPaginate(employeeFamily, page-1, limit)
		return res.status(200).json({
			success: true,
			message: 'Fetch all data successfully',
			data: result
		})
	} catch (error) {
		console.error(error)
		
		return res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

const getSingle = async (req, res) => {
	try {
		const { id } = req.params
		const employeeFamily = await employeeFamilyService.fetchSingle(id)
		
		if (!employeeFamily) {
			return res.status(404).json({
				success: false,
				message: 'Data not found'
			})
		}

		return res.status(200).json({
			success: true,
			message: 'Fetch single data successfully',
			data: employeeFamily
		})
	} catch (error) {
		console.error(error)
		return res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

const getByEmployee = async (req, res) => {
	try {
		const { employeeId } = req.params
		const employeeFamily = await employeeFamilyService.fetchByEmployee(employeeId)
		
		if (!employeeFamily) {
			return res.status(404).json({
				success: false,
				message: 'Data not found'
			})
		}

		return res.status(200).json({
			success: true,
			message: 'Fetch data successfully',
			data: employeeFamily
		})
	} catch (error) {
		console.error(error)
		return res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

const create = async (req, res) => {
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
		} = req.body

		const findEmployee = await employeeService.fetchSingle(employee_id)
		if(!findEmployee) {
			return res.status(404).json({
				success: false,
				message: 'Employee not found'
			})
		}

		const employeeFamily = await employeeFamilyService.insert({
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

		return res.status(200).json({
			success: true,
			message: 'Insert data successfully',
			data: employeeFamily
		})

	} catch (error) {
		console.error(error)
		if(error instanceof UniqueConstraintError || error instanceof ValidationError) {
			return res.status(400).json({
				success: false,
				message: error.message
			})
		}
		return res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

const edit = async (req, res) => {
	try {
		const { id } = req.params
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
		} = req.body

		const findEmployeeFamily = await employeeFamilyService.fetchSingle(id)

		if (!findEmployeeFamily) {
			return res.status(404).json({
				success: false,
				message: 'Data not found'
			})
		}

		const findEmployee = await employeeService.fetchSingle(employee_id)
		if(!findEmployee) {
			return res.status(404).json({
				success: false,
				message: 'Employee not found'
			})
		}

		const employeeFamily = await employeeFamilyService.update({
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
		})

		return res.status(200).json({
			success: true,
			message: 'Update data successfully',
			data: employeeFamily
		})
	} catch (error) {
		console.error(error)
		if(error instanceof UniqueConstraintError || error instanceof ValidationError) {
			return res.status(400).json({
				success: false,
				message: error.message
			})
		}

		return res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

const destroy = async (req, res) => {
	try {
		const { id } = req.params

		const findEmployeeFamily = await employeeFamilyService.fetchSingle(id)

		if (!findEmployeeFamily) {
			return res.status(404).json({
				success: false,
				message: 'Data not found'
			})
		}

		await employeeFamilyService.destroy(id)
		
		return res.status(200).json({
			success: true,
			message: 'Delete data successfully'
		})
	} catch (error) {
		console.error(error)
		return res.status(500).json({
			success: false,
			message: error.message
		})
	}
}

module.exports = {
	getAll,
	getSingle,
	getByEmployee,
	create,
	edit,
	destroy
}
