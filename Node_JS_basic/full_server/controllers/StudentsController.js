import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      let message = 'This is the list of our students';
      for (const key of Object.keys(data).sort()) {
        const metaData = `\nNumber of students in ${key}: ${
          data[key].length
        }. List: ${data[key].join(', ')}`;
        message += metaData;
      }
      return res.status(200).send(message);
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getStudentsByMajor(req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      const { major } = req.params;
      if (!(major in data)) {
        return res.status(500).send('Major parameter must be CS or SWE');
      }
      return res.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
