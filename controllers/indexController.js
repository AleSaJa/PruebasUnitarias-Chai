
import connection from './db';

export const getData = () => {
  return new Promise((resolve) => {
    connection.query('SELECT * FROM todos WHERE userId = ?', [1], function(error, results, fields) {
      //console.log('Resultado lista:', results);
      resolve(results);
    });
  })
}

class IndexController {
  // Get all students
  static getAll(req, res) {
    getData().then((data) => {
      return res.render('index', { name: 'ToDos', todos: data });
    });
  }
}
export default IndexController;
