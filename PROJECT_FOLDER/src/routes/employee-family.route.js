const express = require('express')
const employeeFamilyController = require('../controllers/employee-family.controller')

const router = express.Router()
router.get('/', employeeFamilyController.getAll)
router.get('/:id', employeeFamilyController.getSingle)
router.get('/employee/:employeeId', employeeFamilyController.getByEmployee)
router.post('/', employeeFamilyController.create)
router.put('/:id', employeeFamilyController.edit)
router.delete('/:id', employeeFamilyController.destroy)

module.exports = router