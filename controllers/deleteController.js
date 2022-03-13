

import connection from './db';

export const deleteItem = (id) => {
  return new Promise((resolve) => {
    connection.query('DELETE FROM todos WHERE id = ?', [id], function(error, results, fields) {
      resolve();
    });
  })
}

class DeleteController {
  // Get all students
  static getDelete(req, res) {
    res.render('delete', { name: 'ToDos', id: req.query.id });
  }

  static postDelete(req, res) {
    const subject = req.body.subject;
    const description = req.body.description;
    if (req.query.id) {
      deleteItem(req.query.id).then(() => {
        console.log('Eliminado ToDo');
        res.redirect('/');
      });
    } else {
      res.render('delete', { name: 'ToDos', id: req.query.id });
    }
  }
}
export default DeleteController;


