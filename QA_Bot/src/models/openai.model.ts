import OpenAI from "openai";

// create client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// main function
export const askOpenAI = async (question: string) => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",

      // 🔥 control response length + quality
      max_tokens: 60,

      messages: [
        {
          role: "system",
          content:
            "Answer in EXACTLY 2 short sentences. Do not exceed 2 sentences. No extra explanation. Plain text only.",
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    return (
      response.choices?.[0]?.message?.content || "No response from AI"
    );
  } catch (error: any) {
    console.error("FULL ERROR:", error);

    return "AI failed: " + (error.message || "Unknown error");
  }
};