exports.up = (knex, Promise) => {
  return knex.schema.createTable('gifts', (table) => {
    table.increments();
    table
      .string('itemId')
      .notNullable()
      .unique();
    table.string('itemPic').notNullable();
    table.string('shortTitle').notNullable();
    table.string('title').notNullable();
    table.string('itemPrice').nullable();
    table.string('discountRate').nullable();
    table.string('itemType').notNullable();
    table.specificType('salePoints', 'text[]').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('gifts');
};
