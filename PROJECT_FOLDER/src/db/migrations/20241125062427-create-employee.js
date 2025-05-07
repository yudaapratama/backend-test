'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nik: {
        type: Sequelize.STRING,
				unique: true
      },
      name: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      start_date: {
        type: Sequelize.DATEONLY,
				allowNull: false
      },
      end_date: {
        type: Sequelize.DATEONLY,
				allowNull: false
      },
			created_by: {
				type: Sequelize.STRING
			},
			created_at: {
				type: Sequelize.DATEONLY,
				allowNull: false
			},
			updated_by: {
				type: Sequelize.STRING
			},
			updated_at: {
				type: Sequelize.DATEONLY,
				allowNull: false
			},
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employees');
  }
};