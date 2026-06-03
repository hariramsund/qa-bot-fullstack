import type { Request, Response } from "express";
import { getHealthStatus, getRootMessage, askQuestion } from "../services/qa.service";

// ✅ health route
export const healthCheck = (req: Request, res: Response) => {
  const data = getHealthStatus();

  res.json({
    success: true,
    data
  });
};

// ✅ root route
export const rootHandler = (req: Request, res: Response) => {
  const message = getRootMessage();
  res.send(message);
};

// ✅ ask route (AI + validation)
export const askHandler = async (req: Request, res: Response) => {
  try {
    let { question } = req.body;

    // ❌ Missing input
    if (!question) {
      return res.status(400).json({
        success: false,
        error: "Question is required"
      });
    }

    // ✅ Trim spaces
    question = question.trim();

    // ❌ Empty after trim
    if (question.length === 0) {
      return res.status(400).json({
        success: false,
        error: "Question cannot be empty"
      });
    }

    // ❌ Too long input
    if (question.length > 200) {
      return res.status(400).json({
        success: false,
        error: "Question too long (max 200 characters)"
      });
    }

    // ✅ CALL SERVICE
    const answer = await askQuestion(question);

    res.json({
      success: true,
      data: {
        answer
      }
    });

  } catch (error: any) {
    console.error("ASK ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message || "Internal Server Error"
    });
  }
};