const { QueryTypes } = require('sequelize')
const { connection } = require('../db/config/config')

const getReportEmployee = async () => {
	try {
		const data = connection.query("SELECT employees.ID AS employee_id, employees.nik, employees.NAME, employees.is_active, employee_profiles.gender, concat ( date_part( 'year', age( employee_profiles.date_of_birth ) ), ' years old' ) AS age, employee_educations.name AS school_name, employee_educations.level AS LEVEL, COALESCE ( family_employee.family_data, '-' ) as family_data FROM employees LEFT JOIN employee_profiles ON employees.ID = employee_profiles.employee_id LEFT JOIN employee_educations ON employees.ID = employee_educations.employee_id LEFT JOIN ( SELECT employee_id, string_agg ( summary, ' & ' ) AS family_data  FROM (SELECT employee_id, COUNT ( ID ) AS total, relation_status, concat ( COUNT ( ID ), ' ', relation_status ) AS summary  FROM employee_families  GROUP BY relation_status, employee_id  ORDER BY total ASC)  GROUP BY employee_id ) AS family_employee ON employees.ID = family_employee.employee_id", {
			type: QueryTypes.SELECT
		})

		return data
	} catch (error) {
		throw error
	}
}

module.exports = {
	getReportEmployee
}