const UsersEstablishment = require('../models/UsersEstablishment')

module.exports = {
    async store(req, res){
        const { nameEstablishment, email } = req.body;

        const usersEstablishment = await UsersEstablishment.create({nameEstablishment, email});

        return res.json(usersEstablishment);
    },
    async index(req, res){

        const usersEstablishment = await UsersEstablishment.findAll();

        return res.json(usersEstablishment);
    }
}