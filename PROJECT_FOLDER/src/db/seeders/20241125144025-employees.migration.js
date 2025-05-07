'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
	 await queryInterface.bulkInsert('employees', [
		 {
			 nik: '11012',
			 name: 'Budi',
			 is_active: true,
			 start_date: '2022-12-12',
			 end_date: '2029-12-12',
			 created_by: 'admin',
			 created_at: '2022-12-12',
			 updated_by: 'admin',
			 updated_at: '2022-12-12'
		 },
		 {
			 nik: '11013',
			 name: 'Jarot',
			 is_active: true,
			 start_date: '2021-09-01',
			 end_date: '2028-09-01',
			 created_by: 'admin',
			 created_at: '2022-12-12',
			 updated_by: 'admin',
			 updated_at: '2022-12-12'
		 }
	 ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	 await queryInterface.bulkDelete('employees', null, {});
  }
};
