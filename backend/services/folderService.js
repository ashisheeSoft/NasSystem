const fs = require('fs')
const varPath = require('path')
const basePath = `D:/work/NASSystem/NasSystem/Storage`




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

const isFile = fileName => {
    return fs.lstatSync(fileName).isFile();
  };


const listItems = async (path) => {
    let relPath = `${basePath}${path}`;
    try {

        let items = fs.readdirSync(relPath).map((fileName) => {
            let fileType =  isFile(relPath+"/"+fileName) ? varPath.extname(fileName) : 'dir';
            return {
                itemName: fileName,
                relativePath: varPath.join(relPath, fileName).replace(/\\/g,"/"),
                type: fileType
            }
        });
        console.log(items);
        return items
    }
    catch (err) {
        console.log(err)
        throw new Error(err.message);
    }
}

module.exports = {
    createNewFolder,
    listItems
}