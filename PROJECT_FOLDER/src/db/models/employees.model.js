const { DataTypes } = require('sequelize');
const dayjs = require('dayjs');
const { connection } = require('../config/config');

const Employee = connection.define('employees', {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	nik: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: {
			name: 'nik_unique',
			msg: 'NIK already exists'
		},
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notNull: {
				msg: 'Name is required'
			}
		}
	},
	is_active: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		validate: {
			notNull: {
				msg: 'Status is required'
			}
		}
	},
	start_date: {
		type: DataTypes.DATEONLY,
		allowNull: false,
		validate: {
			notNull: {
				msg: 'Start date is required'
			}
		}
	},
	end_date: {
		type: DataTypes.DATEONLY,
		allowNull: false,
		validate: {
			notNull: {
				msg: 'End date is required'
			}
		}
	},
	created_by: {
		type: DataTypes.STRING,
		defaultValue: 'admin',
	},
	created_at: {
		type: DataTypes.DATEONLY,
		allowNull: false,
		defaultValue: dayjs().format('YYYY-MM-DD'),
	},
	updated_by: {
		type: DataTypes.STRING,
		defaultValue: 'admin',
	},
	updated_at: {
		type: DataTypes.DATEONLY,
		allowNull: false,
		defaultValue: dayjs().format('YYYY-MM-DD'),
	},
}, {
	timestamps: false
});

module.exports = Employee;