// Refactor Challenge for Spinner 
let delay = 100;
let arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
for (let item of arr) {
  // for(let item of arr) {
  setTimeout(() => {
    process.stdout.write(`\r${item}   `); 
}, delay += 200 ); //Command Prompt is not returnning in new line 
};


