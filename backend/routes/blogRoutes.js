import { Router } from "express";
import { blogs, createBlog } from "../controllers/blogControllers.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = Router();

router.get("/blogs", blogs);
router.post("/blog/create", authenticateToken, createBlog);

export default router;
