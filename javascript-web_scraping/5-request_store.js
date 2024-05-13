#!/usr/bin/node

const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const file = process.argv[3];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(file, body, 'utf-8', (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
