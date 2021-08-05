const {Model, DataTypes} = require('sequelize')

class DeliveryMaker extends Model {
    static init(sequelize){
        super.init({
            name_delivery_maker: DataTypes.STRING,
        },{
            sequelize
        })

    }

    static associate(models) {
        this.belongsToMany(models.UsersEstablishment, {foreignKey: 'delivery_maker_id', through: 'delivery_maker_establishment', as: 'user_establishment' })
    }
}


module.exports = DeliveryMaker;