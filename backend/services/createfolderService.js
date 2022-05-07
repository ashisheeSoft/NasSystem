const fs = require('fs')
const basePath = `D:/Work/Personal/NasSystem/Storage`




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


module.exports = {
    createNewFolder
}