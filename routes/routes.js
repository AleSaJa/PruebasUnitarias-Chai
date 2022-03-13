import express from 'express';
const router = express.Router();

import IndexController from '../controllers/indexController.js';
import DetailController from '../controllers/detailController.js';
import NewController from '../controllers/newController.js';
import DeleteController from '../controllers/deleteController.js';

router.get('/', IndexController.getAll);
router.get('/detail', DetailController.getDetail);
router.get('/new', NewController.getNew);
router.post('/new', NewController.postNew);
router.get('/delete', DeleteController.getDelete);
router.post('/delete', DeleteController.postDelete);

export default router;

