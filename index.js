const fs = require("fs");
const endOfLine = require("os").EOL;
const command = process.argv[2];
const message = process.argv[3];
const myFile = "txt.txt";

if (command === "help") {
    // fs.writeFile(myFile, message, (err) => {
    //     if (err) throw err;
        console.log("This is a To Do list");
        console.log(" ");
        console.log("- list: List all To Do items in the list");
        console.log("- add: Add To Do item in the list");
        console.log("- remove: Remove To Do item from the list");
        console.log("- reset: Clear all To Do items from the list");
    // });
}