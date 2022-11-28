#!/usr/bin/node

const request = require('request');
let myurl = process.argv[2];

request(myurl, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log('code: ' + response.statusCode);
  }
});
