'use strict';
const Employee = require('./employees.model')
const EmployeeEducation = require('./employee-education.model')
const EmployeeProfile = require('./employee-profile.model')
const EmployeeFamily = require('./employee-family.model')

Employee.hasMany(EmployeeEducation, {
	as: 'educations',
	foreignKey: 'employee_id'
})
EmployeeEducation.belongsTo(Employee, {
	as: 'employee',
	foreignKey: 'employee_id'
})

Employee.hasOne(EmployeeProfile, {
	as: 'profile',
	foreignKey: 'employee_id'
})
EmployeeProfile.belongsTo(Employee, {
	as: 'employee',
	foreignKey: 'employee_id'
})

Employee.hasMany(EmployeeFamily, {
	as: 'families',
	foreignKey: 'employee_id'
})
EmployeeFamily.belongsTo(Employee, {
	as: 'employee',
	foreignKey: 'employee_id'
})

module.exports = {
	Employee,
	EmployeeEducation,
	EmployeeFamily,
	EmployeeProfile
}
