#!/usr/bin/node
const request = require('request');

request('https://swapi-api.hbtn.io/api/films/', (error, response, body) => {
  if (error) {
    console.log(error);
  }
  const res = JSON.parse(body);
  const newData = res.results.filter((ele) => {
    return ele.characters.includes('https://swapi-api.hbtn.io/api/people/18/');
  });
  console.log(newData.length);
});
