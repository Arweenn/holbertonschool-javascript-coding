#!/usr/bin/node

const request = require('request');
const movieId = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

request(movieId, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.parse(body).title);
  }
});
