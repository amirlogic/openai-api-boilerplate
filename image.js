
require('dotenv').config()

const readline = require('node:readline')

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const imagesize = "512x512";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
console.log("Welcome to Image Generator from OpenAI, please input your prompt")

rl.on('line', async (line) => {

    const response = await openai.createImage({
        prompt: line,
        n: 1,
        size: imagesize,
    });
  
    console.log(response.data.data[0].url);
  
  });

