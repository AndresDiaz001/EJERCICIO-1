'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('habitaciones', [{
      precio_por_noche: 35000, 
      piso: 1,
      max_personas: 2,
      tiene_cama_bebe: "No",
      tiene_ducha: "Si",
      tiene_bano: "Si",
      tiene_balcon: "No",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('habitaciones', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
