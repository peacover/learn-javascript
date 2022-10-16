"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const arr = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ arr });
});
router.post('/test/', (req, res, next) => {
    const newArr = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    arr.push(newArr);
    res.status(201).json({ arr });
});
exports.default = router;
