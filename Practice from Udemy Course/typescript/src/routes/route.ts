import { Router } from "express";
import { model } from "../models/model"
import bodyParser from "body-parser";

const router = Router();
const arr : model[] = [];

router.get('/', (req, res, next) => {
    res.status(200).json({arr});
});

router.post('/test/', (req, res, next) => {
    const newArr : model = {
        id : new Date().toISOString(),
        text: req.body.text
    }
    arr.push(newArr);
    res.status(201).json( {arr} );
});

export default router;