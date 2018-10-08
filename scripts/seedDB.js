const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Recruiters collection and inserts the recruiters below.

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project-recruit"
);

const recruiterSeed = [
  {
    first_name: "Jan",
    last_name: "Janison",
    email_address: "janjanison@email.com",
    company: 'Janison, Inc.',
    phone: "(555) 555-5555",
    website: "www.janison.com",
    date: new Date(Date.now())
  },
  {
    first_name: "Sam",
    last_name: "Samison",
    email_address: "samsamison@email.com",
    company: 'Samison, Inc.',
    phone: "(555) 555-5555",
    website: "www.samison.com",
    date: new Date(Date.now())
  }
];

db.Recruiter
  .remove({})
  .then(() => db.Recruiter.collection.insertMany(recruiterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
