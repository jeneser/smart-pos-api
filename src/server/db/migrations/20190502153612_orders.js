exports.up = (knex, Promise) => {
  return knex.schema.createTable('orders', (table) => {
    table.increments();
    table
      .string('orderId')
      .notNullable()
      .unique();
    table.string('payAmount').notNullable();
    table.string('payStatus').notNullable();
    table.string('discountAmount').notNullable();
    table.string('taxAmount').notNullable();
    table.string('cashier').notNullable();
    table.string('payUser').notNullable();
    table.datetime('payTime', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.specificType('productsIds', 'text[]').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('orders');
};
