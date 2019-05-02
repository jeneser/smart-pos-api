exports.up = (knex, Promise) => {
  return knex.schema.createTable('products', (table) => {
    table.increments();
    table
      .string('itemId')
      .notNullable()
      .unique();
    table.string('itemPic').notNullable();
    table.string('shortTitle').notNullable();
    table.string('title').notNullable();
    table.string('itemPrice').notNullable();
    table.string('originalPrice').notNullable();
    table.string('itemSize').notNullable();
    table.string('itemColor').notNullable();
    table.specificType('salePoints', 'text[]').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('products');
};
