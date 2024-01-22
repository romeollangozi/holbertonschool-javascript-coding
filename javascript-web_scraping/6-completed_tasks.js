#!/usr/bin/node
const request = require('request');

request(
  'https://jsonplaceholder.typicode.com/todos',
  (error, request, body) => {
    if (error) {
      console.log(error);
    }

    const res = JSON.parse(body);
    const completedTasks = {};

    res.map((ele) => {
      if (ele.completed) {
        if (ele.userId in completedTasks) {
          completedTasks[ele.userId] += 1;
        } else {
          completedTasks[ele.userId] = 1;
        }
      }
    });

    console.log(completedTasks);
  }
);
