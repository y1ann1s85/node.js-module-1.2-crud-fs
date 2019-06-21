const fs = require("fs");
const endOfLine = require("os").EOL;
const command = process.argv[2];
const item = process.argv[3];
const myFile = "list.txt";

if (command === "help") {
    console.log("This is a To Do list");
    console.log(" ");
    console.log("- list: List all To Do items in the list");
    console.log("- add: Add To Do item in the list");
    console.log("- remove: Remove To Do item from the list");
    console.log("- reset: Clear all To Do items from the list");
}

if (command === "show") {
    fs.readFile(myFile, "utf-8", (err, listItems) => {
        if (err) throw err;
        console.log("To Do list items:");
        console.log(listItems);
    });
}

else if (command === "add") {

    fs.readFile(myFile, "utf-8", (err, listItems) => {
        if (err) throw err;
        let arr = JSON.parse(listItems);
        arr.push(item);


        fs.writeFile(myFile, JSON.stringify(arr), (err) => {
            if (err) throw err;
            console.log("Added to list:");
            console.log(arr);
        });
    });
}

else if (command === "reset") {
    fs.writeFile(myFile, '[]', "utf-8", (err) => {
        if (err) throw err;
        console.log("All list items have been removed");
    });
}

else if (command === "remove") {

    fs.readFile(myFile, "utf-8", (err, listItems)=>{
        if(err) throw err;
        let arr = JSON.parse(listItems);
        arr.splice(item-1 , 1);
        fs.writeFile(myFile, JSON.stringify(arr),(err)=>{
            if(err) throw err;
            console.log('the item removed')
        });
    });
}