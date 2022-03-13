
import connection from './db';

class NewController {
  // Get all students
  static getNew(req, res) {
    res.render('new', { name: 'ToDos', error: false });
  }

  static postNew(req, res) {
    const subject = req.body.subject;
    const description = req.body.description;
    if (subject && description) {
      connection.query('INSERT INTO todos (userId, subject, description) VALUES (?, ?, ?)', [1, subject, description], (err, results) => {
        if(err) throw err;

        res.redirect('/');
      });
    } else {
      res.render('new', { name: 'ToDos', error: true });
    }
  }
}
export default NewController;

