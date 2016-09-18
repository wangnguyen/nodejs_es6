import express from 'express';
import Twig from 'twig';
import path from 'path';

const router = express.Router();
let visitCount = 0;

router.get('/', (req, res, next) => {
    visitCount++;
    res.render(path.join(__dirname, '../views/main.twig'), {
       visits: visitCount,
    });
});

export default router;