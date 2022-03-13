
/* GET users listing. */
import connection from './db';

class DetailController {
  // Get all students
  static getDetail(req, res) {
    connection.query('SELECT * FROM todos WHERE id = ?', [req.query.id], function(error, results, fields) {
      console.log('ToDo recibido:', results);
      res.render('detail', { name: 'ToDos', todo: results[0] });
    });
  }
}
export default DetailController;
