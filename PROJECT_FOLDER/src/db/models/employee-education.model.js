const { DataTypes } = require('sequelize');
const { connection } = require('../config/config');
const dayjs = require('dayjs');

const EmployeeEducation = connection.define('employee_educations', {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	employee_id: {
		type: DataTypes.INTEGER,
		references: {
			model: 'employees',
			key: 'id'
		},
		allowNull: false,
		validate: {
			notNull: {
				msg: 'Employee ID is required'
			}
		}
	},
	name: {
		type: DataTypes.STRING
	},
	level: {
		type: DataTypes.ENUM('TK','SD','SMP', 'SMA', 'Strata 1', 'Strata 2', 'Doktor', 'Profesor'),
		validate: {
			isIn: {
				args: [['TK','SD','SMP', 'SMA', 'Strata 1', 'Strata 2', 'Doktor', 'Profesor']],
				msg: 'Level must be one of TK, SD, SMP, SMA, Strata 1, Strata 2, Doktor, Profesor'
			}
		}
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notNull: {
				msg: 'Description is required'
			}
		}
	},
	created_by: {
		type: DataTypes.STRING,
		defaultValue: 'admin'
	},
	created_at: {
		type: DataTypes.DATEONLY,
		allowNull: false,
		defaultValue: dayjs().format('YYYY-MM-DD')
	},
	updated_by: {
		type: DataTypes.STRING,
		defaultValue: 'admin'
	},
	updated_at: {
		type: DataTypes.DATEONLY,
		allowNull: false,
		defaultValue: dayjs().format('YYYY-MM-DD')
	}
}, {
	timestamps: false
});

module.exports = EmployeeEducation