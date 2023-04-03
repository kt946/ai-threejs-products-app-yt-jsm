import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router(); // Create an express router

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}); // Create an OpenAI API configuration

const openai = new OpenAIApi(config); // Create an OpenAI API instance

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E Routes!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body; // Get the prompt from the request body

    const response = await openai.createImage({
      prompt, // Prompt
      n: 1, // Number of images to generate
      size: '1024x1024', // Size of the generated images
      response_format: 'b64_json', // Response format
    });

    const image = response.data.data[0].b64_json; // Get the image from the response

    res.status(200).json({ photo: image }); // Send the image back to the client
  } catch (error) {
    console.error(error);
    req.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;
