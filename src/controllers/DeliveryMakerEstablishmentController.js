const { findOrCreate } = require('../models/DeliveryMaker');
const DeliveryMaker = require('../models/DeliveryMaker');
const UsersEstablishment = require('../models/UsersEstablishment');

module.exports = {
    async store(req, res){
        const {delivery_maker_id, user_establishment_id } = req.body;

        const user = await UsersEstablishment.findByPk(user_establishment_id)
        const deliverymaker = await DeliveryMaker.findByPk(delivery_maker_id)

        if(!user){
            return res.status(400).json({error: 'User Not Found', user: user_establishment_id});
        }

        if(!deliverymaker){
            return res.status(400).json({error: 'Delivery Maker Not Found', delivery_maker: deliverymaker});
        } else {
            return res.status(400).json({error: 'Delivery Maker Not Found', delivery_maker: deliverymaker});

        }

        const deliverymakerestablishment = await user.addDeliveryMaker(deliverymaker);
 
        
        return res.json(deliverymakerestablishment);
    },
    async index(req, res){
        
    }
};