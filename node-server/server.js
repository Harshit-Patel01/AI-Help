import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
const port = 3000;
import cors from 'cors';
app.use(cors());
const apiKey = process.env.API_KEY;  // Securely store your API key
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


app.get('/', async (req, res) => {
  const prompt = req.query.prompt || "Hey GPT";

  try {
    const result = await model.generateContent(prompt);
    res.send(result.response.text());
  } catch (error) {
    console.error("Error generating Data:", error);
    res.status(500).send("Error generating Data.");
  }
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});