import { Router } from 'express';
import studentsModel from '../models/student.model.js';

const router = Router();

router.get('/students/:pageId', async (req, res) => {
  const pageId = parseInt(req.params.pageId);

  const result = await studentsModel.paginate(
    {},
    {
      page: pageId,
      limit: 5,
      lean: true,
    }
  );

  const prevLink = result.hasPrevPage
    ? `http://localhost:8080/students/${result.prevPage}`
    : false;

  const nextLink = result.hasNextPage
    ? `http://localhost:8080/students/${result.nextPage}`
    : false;

  res.render('students', { students: result.docs, prevLink, nextLink });
});

export default router;
