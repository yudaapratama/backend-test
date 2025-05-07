'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
		await queryInterface.createTable('employee_families', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			employee_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'employees',
					key: 'id'
				},
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING
			},
			identifier: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			job: {
				type: Sequelize.STRING
			},
			place_of_birth: {
				type: Sequelize.STRING
			},
			date_of_birth: {
				type: Sequelize.DATEONLY
			},
			religion: {
				type: Sequelize.ENUM('Islam', 'Protestan', 'Katolik', 'Hindu', 'Budha', 'Konghucu')
			},
			is_life: {
				type: Sequelize.BOOLEAN
			},
			is_divorced: {
				type: Sequelize.BOOLEAN
			},
			relation_status: {
				type: Sequelize.ENUM('Suami', 'Istri', 'Anak', 'Anak Sambung', 'Lainnya')
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
			}
		})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
		await queryInterface.dropTable('employee_families');
  }
};
