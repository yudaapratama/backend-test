const express = require('express')
const employeeRoutes = require('./employee.route')
const employeeProfileRoutes = require('./employee-profile.route')
const employeeEducationRoutes = require('./employee-education.route')
const employeeFamilyRoutes = require('./employee-family.route')
const reportRoutes = require('./report.route')

const router = express.Router()
router.use('/employee', employeeRoutes)
router.use('/profile', employeeProfileRoutes)
router.use('/education', employeeEducationRoutes)
router.use('/family', employeeFamilyRoutes)
router.use('/report', reportRoutes)

module.exports = router