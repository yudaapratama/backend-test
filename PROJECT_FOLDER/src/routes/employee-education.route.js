const express = require('express')
const employeeEducationController = require('../controllers/employee-education.controller')

const router = express.Router()
router.get('/', employeeEducationController.getAll)
router.get('/:id', employeeEducationController.getSingle)
router.get('/employee/:employeeId', employeeEducationController.getByEmployee)
router.post('/', employeeEducationController.create)
router.put('/:id', employeeEducationController.edit)
router.delete('/:id', employeeEducationController.destroy)

module.exports = router