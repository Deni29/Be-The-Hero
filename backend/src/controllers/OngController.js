const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) { // método para listar ongs cadastradas
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) { // método para criar ongs
        const { name, email, whatsapp, city, uf } = request.body; // acessar dados

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    }
}