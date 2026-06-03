import OpenAI from "openai";

// ✅ helper functions (keep your existing logic)
export const getHealthStatus = () => {
  return "Server is healthy";
};

export const getRootMessage = () => {
  return "QA Bot API is running 🚀";
};

// ✅ MAIN AI FUNCTION (FIXED)
export const askQuestion = async (question: string) => {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("API key not found. Check .env file");
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: question,
  });

  // ✅ FIXED LINE (ONLY CHANGE)
  return response.output_text;
};