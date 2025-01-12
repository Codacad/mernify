import { Router } from "express";
import {
  users,
  signin,
  signup,
  logout,
} from "../controllers/userController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";
import { dashboard } from "../controllers/dashboardController.js";
const router = Router();

router.get("/", users);
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);
router.get("/dashboard", authenticateToken, dashboard);

export default router;
