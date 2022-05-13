const fs = require('fs')


const downloadFile = async (filePath,res)=>{
   try{
       res.download(filePath);
   }
   catch{
       throw new Error('Unable to download file');
   }

}

module.exports={
    downloadFile
}
