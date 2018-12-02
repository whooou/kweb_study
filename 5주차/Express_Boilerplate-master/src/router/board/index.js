import Express from 'express';

const router: Router = new Express.Router();

router.get('/', (req,res) => {
    res.render('index', { msg: "MySQL with Node.js" })
});

router.post('/', (req,res) => {
    res.render('index', { msg: "MySQL with Node.js" })
});

export default router;