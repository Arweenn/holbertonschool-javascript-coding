#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
let count = 0;

request(url, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    for (const movie of JSON.parse(body).results) {
      for (const character of movie.characters) {
        if (character.includes('18')) {
          count += 1;
        }
      }
    }
  }
  console.log(count);
});
