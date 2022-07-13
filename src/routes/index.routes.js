import { Router } from "express";
import path from "path";
const router = Router();

router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../views"));
});

export default router;
