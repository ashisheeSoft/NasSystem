const fs = require('fs')
const basePath = `D:/work/NASSystem/NasSystem/ExternalStorage`




const createNewFolder = async (folderName) => {
    let folderPath = `${basePath}/${folderName}`
    try {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            return true;
        }
        else {
            throw new Error('Folder already Exist');
        }

    } catch (err) {

        throw new Error(err.message);
    }
}


const listItems = async (path)=>{
   let relPath = `${basePath}${path}`;
   try{
     let list = fs.readdirSync(relPath);
     console.log(list);
    //  return {
    //      list: list
    //  }
   }
   catch(err)
   {
     console.log(err.message)
   }
}

module.exports = {
    createNewFolder,
    listItems
}