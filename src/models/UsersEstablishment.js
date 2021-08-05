const {Model, DataTypes} = require('sequelize')

class UsersEstablishment extends Model {
    static init(sequelize){
        super.init({
            nameEstablishment: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Adresses, {foreignKey: 'user_establishment_id', as: 'adresses'})
        this.belongsToMany(models.DeliveryMaker, {foreignKey: 'user_establishment_id', through: 'delivery_maker_establishment', as: 'delivery_makers' })
    }

}

module.exports = UsersEstablishment;