exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("clients", table => {
      table.increments("id").primary();
      table.string("firstName");
      table.string("lastName");
      table.string("linkedInUrl");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("clients")]);
};
