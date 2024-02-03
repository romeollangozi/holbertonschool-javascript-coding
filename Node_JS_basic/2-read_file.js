const fs = require('node:fs');

const countStudents = (path) => {
  const stats = {
    total_students: 0,
    fields: {},
  };
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const arr = data.split('\n');
    arr.shift();
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].length === 0) {
        arr.splice(i, 1);
      }
      arr[i] = arr[i].split(',');
    }
    stats.total_students = arr.length;

    for (const ele of arr) {
      if (ele[3] in stats.fields) {
        stats.fields[ele[3]].number += 1;
        stats.fields[ele[3]].students.push(ele[0]);
      } else {
        stats.fields[ele[3]] = { name: ele[3], number: 1, students: [ele[0]] };
      }
    }

    console.log(`Number of students: ${stats.total_students}`);
    for (const field of Object.values(stats.fields)) {
      console.log(
        `Number of students in ${field.name}: ${
          field.number
        }. List: ${field.students.join(', ')})`,
      );
    }
  });
};

module.exports = countStudents;
