#!/usr/bin/node


request(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('code: ', response && response.statusCode);
});
