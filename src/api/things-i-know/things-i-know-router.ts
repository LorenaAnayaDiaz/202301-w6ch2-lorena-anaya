import express from 'express';
import { getThingsController } from './things-i-know-controllers.js';

const router = express.Router();

router.route('/').get(getThingsController);
//   .post(createStudentController)
//   .put();

// router
//   .route('/things/:idThing')
//   .get(getStudentByIdController)
//   .delete(deleteStudentByIdController);

export default router;
