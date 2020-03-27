
const crypto = require('crypto');

/**
  * CONNECT WITH DATABASE
  */ 
 const connection = require('../database/connection');

  /**
 * ALL MODELES IMPORTED
 */
 module.exports = {
    //LISTA 
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    //CREATE
    async create(request, response) {
        
        const { name, email, whatsapp, city, uf } = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    // AFTER SAVE RETORN ID SAVED.
        return response.json({ id });
    }
 };