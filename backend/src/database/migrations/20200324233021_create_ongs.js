/**
 * metodo UP sempre responsavel pela criacao da tabela.
 */

exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();

  } );
    
};

/**
 * Metodo DOWN e uma garantia, caso de errado algo na UP, ela entra em acao.
 */
exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};
