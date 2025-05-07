const express = require('express')
const employeeController = require('../controllers/employee.controller')

const router = express.Router()
router.get('/', employeeController.getAll)
router.get('/:id', employeeController.getSingle)
router.post('/', employeeController.create)
router.put('/:id', employeeController.edit)
router.delete('/:id', employeeController.destroy)

module.exports = router