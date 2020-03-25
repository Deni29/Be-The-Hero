exports.up = function(knex) { // metódo up responsavel pela criação da tabela
    return knex.schema.createTable('incidents', function(table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) { // metódo dwn responsavel por desfazer a criação de uma tabela
    return knex.schema.dropTable('incidents');
};
