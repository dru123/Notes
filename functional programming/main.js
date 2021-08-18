let treeObj=require('./commands/tree');
let organizeObj=require('./commands/organize');
let helpObj=require('./commands/help');
let inputArr=process.argv.slice(2);
let command=inputArr[1];
console.log(command);