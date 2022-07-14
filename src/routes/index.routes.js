import { Router } from "express";
import path from "path";

const router = Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

export default router;
