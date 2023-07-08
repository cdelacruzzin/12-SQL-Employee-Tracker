const prompts = require ('./db/index');

prompts().then( (response) => {
    console.log("hi: ", response);
})