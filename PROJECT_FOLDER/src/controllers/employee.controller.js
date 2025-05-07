const { UniqueConstraintError, ValidationError } = require('sequelize')
const employeeService = require('../services/employee.services')
const { pagination, dataPaginate } = require('../utils/index')

const getAll = async (req, res) => {
	try {
		const { page, size } = req.query
		const { limit, offset } = pagination(page-1, size)

		const employee = await employeeService.fetchAll({
			limit,
			offset
		})
		
		const result = dataPaginate(employee, page-1, limit)
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
		const employee = await employeeService.fetchSingle(id)
		
		if (!employee) {
			return res.status(404).json({
				success: false,
				message: 'Data not found'
			})
		}

		return res.status(200).json({
			success: true,
			message: 'Fetch single data successfully',
			data: employee
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
			nik,
			name,
			is_active,
			start_date,
			end_date,
		} = req.body

		const employee = await employeeService.insert({
			nik,
			name,
			is_active,
			start_date,
			end_date
		})

		return res.status(200).json({
			success: true,
			message: 'Insert data successfully',
			data: employee
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
			nik,
			name,
			is_active,
			start_date,
			end_date,
		} = req.body

		const findEmployee = await employeeService.fetchSingle(id)

		if (!findEmployee) {
			return res.status(404).json({
				success: false,
				message: 'Data not found'
			})
		}

		const employee = await employeeService.update({
			id,
			nik,
			name,
			is_active,
			start_date,
			end_date
		})

		return res.status(200).json({
			success: true,
			message: 'Update data successfully',
			data: employee
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

		const findEmployee = await employeeService.fetchSingle(id)

		if (!findEmployee) {
			return res.status(404).json({
				success: false,
				message: 'Data not found'
			})
		}

		await employeeService.destroy(id)
		
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
	create,
	edit,
	destroy
}
