import prompt from 'prompt';
import getData from "./app.js"

console.log("Give me a Number!");

prompt.get(['input'], function (err, result) {
    
        console.log(`Oh, so your number is ${result.input}`);
    
        getData(result.input).then(res =>{
            console.log(res);
        });
  });

