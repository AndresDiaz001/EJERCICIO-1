'use strict';

    module.exports = {
      async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('huespedes', [{
          nombres: "Kevin Santiago", 
          apellidos: "Rendon",
          telefono: "3227230414",
          correo: "santigo24@gmail.com",
          direccion: "Manzana 15 #15-42",
          ciudad: "Popayan",
          Pais: "Colombia",
          createdAt: new Date(),
          updatedAt: new Date()
        }]);
      },
    
      async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('huespedes', null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
      }
    };
