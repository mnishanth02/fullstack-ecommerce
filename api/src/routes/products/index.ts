import {Router} from "express";


const router = Router();

router.get('/', (req, res) => {
    res.send("List of products");
})
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send("A Product");
})

router.post('/', (req, res) => {
    res.send("New Product created");
})

export default router;
