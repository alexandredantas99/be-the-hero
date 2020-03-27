
/**
 * Apos a Barra Indica a ROTA/ROUTE
 */
    const express = require('express');
    const cors = require('cors');
    const routes = require('./routes');

    const app = express();

// IMPORTAR ROTAS DO ARQUIVO ROTA
    app.use(cors());
    app.use(express.json());
    app.use(routes);

/**
 * METODOS HTTP
 * 
 * GET: Buscar as informacões no back-end
 * POST: Enviar as informações back-end
 * PUT: Alterar informações back-end
 * DELETE: Deletar info back-end
 */ 

 /**
  * TIPOS DE PARAMETROS
  * 
  * Query Params: Parametros enviados na Rota apos "?" (Filtros, Paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: 
  */

    app.listen(3333);
