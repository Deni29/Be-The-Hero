exports.up = function(knex) { // metódo up responsavel pela criação da tabela
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) { // metódo dwn responsavel por desfazer a criação de uma tabela
    return knex.schema.dropTable('ongs');
};
