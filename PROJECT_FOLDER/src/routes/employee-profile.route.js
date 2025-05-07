const express = require('express')
const employeeProfileController = require('../controllers/employee-profile.controller')

const router = express.Router()
router.get('/', employeeProfileController.getAll)
router.get('/:id', employeeProfileController.getSingle)
router.get('/employee/:employeeId', employeeProfileController.getByEmployee)
router.post('/', employeeProfileController.create)
router.put('/:id', employeeProfileController.edit)
router.delete('/:id', employeeProfileController.destroy)

module.exports = router