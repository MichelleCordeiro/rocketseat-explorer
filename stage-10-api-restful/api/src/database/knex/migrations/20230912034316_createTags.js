exports.up = knex =>
  knex.schema.createTable('tags', table => {
    table.increments('id');
    table.text('name').notNullable();

    // onDelete(CASCADE) garante consistência do banco, uma vez q 
    // se deletar a nota suas tags tbm serão deletadas
    table.integer('note_id').references('id').inTable('notes').onDelete('CASCADE');
    table.integer('user_id').references('id').inTable('users');
  });

exports.down = knex => knex.schema.dropTable('tags');
