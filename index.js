const fs = require("fs");
const endOfLine = require("os").EOL;
const command = process.argv[2];
const item = process.argv[3];
const myFile = "list.txt";

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

// if (command === "add") {
//     fs.writeFile(myFile, message, (err) => {
//         if (err) throw err;
//         console.log(message, "added to list");
//     });
// }

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
        console.log("my todo list:", listItems);
    });

    myArray = [];
    myArray.push(item);

    fs.appendFile(myFile, item + endOfLine, (err) => {
        if (err) throw err;
        console.log("Added to list:");
        console.log(item);
        myArray.push(item);
    });
    console.log(myArray);
    
}

else if (command === "reset") {
    fs.writeFile(myFile, " ", (err) => {
        if (err) throw err;
        console.log("All list items have been removed");
    });
}

// else if (process.argv[2] === "remove") {
//     if (err) throw err;
//     let selectedItem = process.argv[4];
//     itemNum = Number(selectedItem);
//     arrayNum = itemNum - 1;
//     process.argv.splice(arrayNum, 1);
//     console.log("Item removed");
// }

else if (command === "remove") {

    function remove(error) {
        if (error) {
            console.log(error);
        }
        else {
            let selectedItem = process.argv[4];
            itemNum = Number(selectedItem);
            arrayNum = itemNum - 1;
            myArray.splice(arrayNum, 1);
            console.log("Item removed");
        }
    }
}