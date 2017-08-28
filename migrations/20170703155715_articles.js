
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', (table) => {
    table.increments("title").primary();
    table.string("title").unique();
    table.text("content");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles');
};
