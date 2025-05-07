'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {

  /**
   * Add altering commands here.
   *
   * Example:
   * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employee_educations', {
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
      level: {
        type: Sequelize.ENUM('TK','SD','SMP', 'SMA', 'Strata 1', 'Strata 2', 'Doktor', 'Profesor'),
      },
      description: {
        type: Sequelize.STRING,
				allowNull: false
      },
      created_by: {
        type: Sequelize.STRING,
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employee_educations');
  }
};