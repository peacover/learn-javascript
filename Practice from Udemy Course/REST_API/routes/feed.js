import express, { Router } from "express";
import  { getPosts }  from "../controllers/feed.js";
const router = Router();

router.get('/posts', getPosts);
router.post('/posts', createPost);

export default router;
