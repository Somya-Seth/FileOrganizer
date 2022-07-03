//taking input 

let helpFunc=require("./commands/help");
//let orgFunc=require(".commands/organize");
let treefunc=require("./commands/tree");
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];
switch(command)
{
    case "tree":
        // call tree function
        treefunc.tree("D:\\pepcoding\\node\\fileOrganizer\\downloads"," ");
        console.log("Tree function called and executed successfully");
        break;
    case "organize":
        // call organize function 
        //organize(..);
        console.log("Organize function called and executed successfully");
        break;
    case "help":
        // call help function
        helpFunc.help();
        console.log("Help function called and executed successfully");
        break;
    default:
        console.log("Invalid command");
        break;
}