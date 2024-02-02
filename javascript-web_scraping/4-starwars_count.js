#!/usr/bin/node
/*eslint-disable*/
const process = require('process');
const request = require('request');
const api = process.argv[2];

request(api, function (error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  }
<<<<<<< HEAD
  const films = JSON.parse(response.body); // Print the response status code if a response was received
  const filtered = films.results.filter(film => {
    for (const character of film.characters) {
      if (character.includes('18')) {
        return true;
      }
    }
    return false;
=======
  const res = JSON.parse(body);
  const newData = res.results.filter((ele) => {
    return ele.characters.includes(`'https://swapi-api.hbtn.io/api/people/18/'`);
>>>>>>> 03fdf60 (starwars_count)
  });
  console.log(filtered.length);
});
