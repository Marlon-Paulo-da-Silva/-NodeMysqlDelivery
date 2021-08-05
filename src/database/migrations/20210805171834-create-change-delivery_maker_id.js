'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('delivery_maker_establishment', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_establishment_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'users_establishments', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      delivery_maker_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'delivery_makers', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      name_delivery_maker: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
      });
     
  },

  down: async (queryInterface, Sequelize) => {
   
     return queryInterface.dropTable('delivery_maker_establishment');
    
  }
};
