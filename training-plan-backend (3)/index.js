const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let chatHistory = [
  {
    role: 'system',
    content:
      'You are a certified triathlon coach. Your name is BM Coach. Generate a physiologically sound, zone-based training plan using LTHR or FTP. Include key sessions. Mention the athlete’s name in your response. Ask if they want a more detailed plan after sending the first one.',
  },
];

app.post('/generate-plan', async (req, res) => {
  const userMessage = req.body.message;
  chatHistory.push({ role: 'user', content: userMessage });

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: chatHistory,
      temperature: 0.7,
    });

    const reply = completion.data.choices[0].message.content;
    chatHistory.push({ role: 'assistant', content: reply });

    res.json({ reply });
  } catch (error) {
    console.error('OpenAI error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate training plan.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
