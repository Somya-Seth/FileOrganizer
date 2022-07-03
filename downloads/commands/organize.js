const fs=require("fs");
const path=require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath)
{
    if(srcPath==undefined)
    {
        console.log(srcPath);
        // The process.cwd() method returns the current working directory of the Node.js process.
        srcPath=process.cwd();
        console.log(srcPath);
    }
    else{
        console.log(srcPath);
    }

    let organizedFiles=path.join(srcPath,"organized_files");
    console.log(organizedFiles);
    if(!fs.existsSync(organizedFiles))//creating a new folder if not exists already
      {
          fs.mkdirSync(organizedFiles);
      }
    else
    {
        console.log("Folder already exists");
    }

    let allFiles=fs.readdirSync(srcPath);
    console.log(allFiles);

    for(let i=0;i<allFiles.length;i++)
    { 
        // let ext=allFiles.split(".")[1];
        // let ext=path.extname(allFiles[i]);
        // console.log(ext);

        let fullpathoffile=path.join(srcPath,allFiles[i]);
        console.log(fullpathoffile);
        //1. check for file or folder
        let isFile=fs.lstatSync(fullpathoffile).isFile;
        if(isFile)
            {
             //1.1 get extension name if it is a file
             let ext=path.extname(allFiles[i]).split(".")[1];
             console.log(ext);
             //1.2 get folder name
             let foldername=getfoldername(ext);
             //1.3 copy from source to destination
             //cfstd(srcPath,fullpathoffile,foldername);
            }
           
    }
}

function getfoldername(ext)
{
    for(let key in types)
    {
        //console.log(key);
        for(let i=0;i<types[key].length;i++)
        {
            if(types[key][i]==ext)
            {
              return key;
            }
        }
    }
    return "miscellaneous";
}

function cfstd(srcPath,fullpathoffile,foldername)
{
    let destfolderpath=path.join(srcPath,"organized_files",foldername);
    if(!fs.existsSync(destfolderpath))
    {
        fs.mkdirSync(destfolderpath);
    }
    let filename=path.basename(fullpathoffile);
    let destfilename=path.join(destfolderpath,filename)
    fs.copyFileSync(fullPathOfFile, destFileName);
}

let filePath="D:\\pepcoding\\html\\js\\node\\fileOrganizer\\downloads";
organize(filePath);