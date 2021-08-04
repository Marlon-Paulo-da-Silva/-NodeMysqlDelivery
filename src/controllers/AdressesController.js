const Adresses = require('../models/Adresses');
const UsersEstablishment = require('../models/UsuarioEstablishment');

module.exports = {
    async store(req, res){
        const { user_estabishment_id } = req.params;
        const {zipcode, street, number } = req.body;

        const user = await UsersEstablishment.findByPk(user_estabishment_id)

        if(!user){
            return res.status(400).json({error: 'User Not Found'});
        }

        const address = await Adresses.create({
            zipcode,
            street,
            number,
            user_estabishment_id
        });
        return res.json(address);
    },
    async index(req, res){
        const { user_estabishment_id } = req.params;

        const user = await UsersEstablishment.findByPk(user_estabishment_id, {
            include: {
                association: 'adresses'
            }
        })

       
        return res.json(user.adresses);
    }
};