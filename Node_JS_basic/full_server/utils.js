import fs from 'fs/promises';

const readDatabase = async (path) => {
  try {
    let data = await fs.readFile(path, 'utf-8');
    data = data.trim('').split('\n');
    data.shift();
    const result = {};
    for (const line of data) {
      const arrOfData = line.split(',');
      const key = arrOfData[arrOfData.length - 1];
      if (key in result) {
        result[key].push(arrOfData[0]);
      } else {
        result[key] = [];
        result[key].push(arrOfData[0]);
      }
    }
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export default readDatabase;
