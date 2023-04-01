
require('dotenv').config()

const readline = require('node:readline')

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to ChatGPT from OpenAI, please input your prompt")

rl.on('line', async (line) => {

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: line}],  // "What is javascript hoisting?"
  });

  console.log(completion.data.choices[0].message.content);

  console.log(JSON.stringify(completion.data.usage));

});




