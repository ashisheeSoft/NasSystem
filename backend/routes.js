const { createNewFolder,listItems } = require('./services/folderService')
const createFolder = async (req, res) => {
    let { folderName } = req.body;
    console.log(`Creating folder of name : ${folderName}` )
    try {
        let status = await createNewFolder(folderName);
        if (status) {
            res.status(200).end('folder Created')
        }
    }
    catch (err) {
         res.status(400).end(err.message)
    }
}

const listFolder = async (req,res)=>{
    const { relativePath } = req.query;
    await listItems(relativePath);
    res.send('get Query');
}

module.exports = {
    createFolder,
    listFolder
}