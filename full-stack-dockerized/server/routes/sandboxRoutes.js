import express from "express";
import {
  createSandbox,
  deleteSandbox,
  readSandbox,
  updateSandbox,
} from "../controllers/sandboxController.js";

const router = express.Router();

router.post("/create", createSandbox);
router.get("/read", readSandbox);
router.put("/update/:id", updateSandbox);
router.delete("/delete/:id", deleteSandbox);

export default router;