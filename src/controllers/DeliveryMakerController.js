const DeliveryMaker = require('../models/DeliveryMaker');

module.exports = {
    async store(req, res){
        const { name_delivery_maker } = req.body;

        const delivery_maker = await DeliveryMaker.create({name_delivery_maker});

        return res.json(delivery_maker);
    },
    async index(req, res){

        const delivery_maker = await DeliveryMaker.findAll();

        return res.json(delivery_maker);
    }
};