exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("clients")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("clients").insert([
        {
          id: 1,
          firstName: "Mehak",
          lastName: "Vohra",
          linkedInUrl: "www.linkedin.com"
        },
        {
          id: 2,
          firstName: "Andrew",
          lastName: "Linfoot",
          linkedInUrl: "www.linkedin.com"
        },
        {
          id: 3,
          firstName: "Ayush",
          lastName: "Jaiswal",
          linkedInUrl: "www.linkedin.com"
        }
      ]);
    });
};
