exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("linkedInPost", table => {
      table.increments("id").primary();
      table.string("client");
      table.string("title");
      table.string("status");
      table.string("question");
      table.string("url");
      table.string("date");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("linkedInPost")]);
};
