const reportService = require('../services/report.services')

const getReport = async (req, res) => {
	try {

		const report = await reportService.getReportEmployee()

		return res.status(200).json({
			success: true,
			message: 'Fetch all data successfully',
			data: report
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
	getReport
}
