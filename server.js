const prompts = require ('./db/prompts');

prompts().then( (response) => {
    console.log("hi: ", response);
})