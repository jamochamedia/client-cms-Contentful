exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("linkedInPost")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("linkedInPost").insert([
        {
          id: 1,
          clientId: 1,
          title: "A Great Title",
          status: "In Client Review",
          question: "What is this question?",
          url: "www.linkedin.com",
          date: "January 20, 2019"
        },
        {
          id: 2,
          clientId: 3,
          title: "What a Title",
          status: "Question Sent",
          question: "This is a different question?",
          date: "February 21, 2019"
        },
        {
          id: 3,
          clientId: 2,
          title: "Such a Title",
          status: "Posted",
          question: "How is this a question?",
          url: "www.linkedin.com",
          date: "January 27, 2019"
        }
      ]);
    });
};
