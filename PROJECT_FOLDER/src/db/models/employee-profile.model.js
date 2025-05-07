const { DataTypes } = require('sequelize');
const dayjs = require('dayjs')
const { connection } = require('../config/config');

const EmployeeProfile = connection.define('employee_profiles', {
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
		unique: {
			name: 'employee_id_unique',
			msg: 'Employee ID already exists'
		},
		validate: {
			notNull: {
				msg: 'Employee ID is required'
			}
		}
	},
	place_of_birth: {
		type: DataTypes.STRING
	},
	date_of_birth: {
		type: DataTypes.DATEONLY
	},
	gender: {
		type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
		validate: {
			isIn: {
				args: [['Laki-laki', 'Perempuan']],
				msg: 'Gender must be Laki-laki or Perempuan'
			}
		}
	},
	is_married: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	},
	prof_pict: {
		type: DataTypes.STRING
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

module.exports = EmployeeProfile