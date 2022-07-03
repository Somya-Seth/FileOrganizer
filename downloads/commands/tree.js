

function tree(somePath,indent)
{
    const fs=require("fs");
    const path=require("path");
    if(somePath==undefined)
    {
        console.log("Please enter a valid path");
        return;
    }
    let allfiles=fs.readdirSync(somePath);
    //console.log(allfiles);
    for(let i=0;i<allfiles.length;i++)
    {
        //let ext=path.extname(allfiles[i]);
        //console.log(ext);
        let fullpathoffile=path.join(somePath,allfiles[i]);
        //console.log(fullpathoffile);
        let fileorfolder=fs.lstatSync(fullpathoffile).isDirectory();
        //console.log(fileorfolder);
        if(fileorfolder==true)
        {
            // somePath=path.join(somePath,allfiles[i]);
            console.log(indent+"└──" +allfiles[i]);
            tree(fullpathoffile,indent+" ");
        }
        else 
        {
            console.log(indent+"├──"+allfiles[i]);
        }
    }
}

module.exports={
  tree:tree
}
//tree("D:\\pepcoding\\node","   ");