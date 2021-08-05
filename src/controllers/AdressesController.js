const Adresses = require('../models/Adresses');
const UsersEstablishment = require('../models/UsersEstablishment');

module.exports = {
    async store(req, res){
        const {zipcode, street, number, user_establishment_id } = req.body;

        const user = await UsersEstablishment.findByPk(user_establishment_id)

        if(!user){
            return res.status(400).json({error: 'User Not Found', user: user_establishment_id});
        }

        const address = await Adresses.create({
            zipcode,
            street,
            number,
            user_establishment_id
        });
        return res.json(address);
    },
    async index(req, res){
        const { user_establishment_id } = req.body;

        const user = await UsersEstablishment.findByPk(user_establishment_id, {
            include: {
                association: 'adresses'
            }
        })

        if(!user){
            return res.status(400).json({error: 'User Not Found', user: user_establishment_id});
        }

       
        return res.json(user.adresses);
    }
};