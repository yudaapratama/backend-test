const { DataTypes } = require('sequelize');
const { connection } = require('../config/config');
const dayjs = require('dayjs');

const EmployeeFamily = connection.define('employee_families', {
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
	identifier: {
		type: DataTypes.STRING,
		unique: {
			name: 'identifier_unique',
			msg: 'Identifier already exists'
		}
	},
	job: {
		type: DataTypes.STRING
	},
	place_of_birth: {
		type: DataTypes.STRING
	},
	date_of_birth: {
		type: DataTypes.DATEONLY
	},
	religion: {
		type: DataTypes.ENUM('Islam', 'Protestan', 'Katolik', 'Hindu', 'Budha', 'Konghucu'),
		validate: {
			isIn: {
				args: [['Islam', 'Protestan', 'Katolik', 'Hindu', 'Budha', 'Konghucu']],
				msg: 'Religion must be one of Islam, Protestan, Katolik, Hindu, Budha, Konghucu'
			}
		}
	},
	is_life: {
		type: DataTypes.BOOLEAN,
		defaultValue: true
	},
	is_divorced: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	},
	relation_status: {
		type: DataTypes.ENUM('Suami', 'Istri', 'Anak', 'Anak Sambung', 'Lainnya'),
		validate: {
			isIn: {
				args: [['Suami', 'Istri', 'Anak', 'Anak Sambung', 'Lainnya']],				
				msg: 'Relation Status must be one of Suami, Istri, Anak, Anak Sambung, Lainnya'
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
	},
}, {
	timestamps: false
});

module.exports = EmployeeFamily