import { Router } from "express";
import { healthCheck, rootHandler, askHandler } from "../controllers/qa.controller";

const router = Router();

// root route
router.get("/", rootHandler);

// health route
router.get("/health", healthCheck);

// ask route
router.post("/ask", askHandler);

export default router;