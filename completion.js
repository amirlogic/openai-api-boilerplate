
require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async()=>{

    const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "The speed equals distance divided by",
    });

    //let stack = completion.data.choices.map()

    

    console.table(completion.data.choices.map((row)=>{

        return row.text;

    }));

    

    /* }
    catch(aierr){

        console.error(aierr)
    } */

    //console.log(completion.data)


    //const response = await openai.listModels();

    //console.log(response.data)


})();



