
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

console.log("Welcome to OpenAI, please input your prompt")

rl.on('line', async (line) => {

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: line,
        });

    completion.data.choices.map((row)=>{

        console.log(row.text);

    })
    
});



