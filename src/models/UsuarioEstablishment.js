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
        this.hasMany(models.Adresses, {foreignKey: 'user_estabishment_id', as: 'adresses'})
    }
}

module.exports = UsersEstablishment;