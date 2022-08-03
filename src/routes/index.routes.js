import { Router } from "express";
import path from "path";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/1", (req, res) => {
  res.render("auth/login");
});

export default router;
