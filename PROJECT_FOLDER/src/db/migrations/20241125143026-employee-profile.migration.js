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
		await queryInterface.createTable('employee_profiles', {
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
				unique: true
			},
			place_of_birth: {
				type: Sequelize.STRING
			},
			date_of_birth: {
				type: Sequelize.DATEONLY
			},
			gender: {
				type: Sequelize.ENUM('Laki-laki', 'Perempuan')
			},
			is_married: {
				type: Sequelize.BOOLEAN
			},
			prof_pict: {
				type: Sequelize.STRING
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
		await queryInterface.dropTable('employee_profiles');
  }
};
