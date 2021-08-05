const {Model, DataTypes} = require('sequelize')

class Adresses extends Model {
    static init(sequelize){
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        },{
            sequelize
        })

    }

    static associate(models) {
        this.belongsTo(models.UsersEstablishment, {foreignKey: 'user_establishment_id', as: 'owner'})
    }
}

module.exports = Adresses;