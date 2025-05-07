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
	 await queryInterface.bulkInsert('employee_profiles', [
		 {
			 employee_id: 1,
			 place_of_birth: 'Jakarta',
			 date_of_birth: '1997-05-02',
			 gender: 'Laki-laki',
			 is_married: true,
			 prof_pict: '',
			 created_by: 'admin',
			 created_at: '2022-12-12',
			 updated_by: 'admin',
			 updated_at: '2022-12-12'
		 },
		 {
			 employee_id: 2,
			 place_of_birth: 'Sukabumi',
			 date_of_birth: '1996-05-02',
			 gender: 'Laki-laki',
			 is_married: false,
			 prof_pict: '',
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
	 await queryInterface.bulkDelete('employee_profiles', null, {});
  }
};
