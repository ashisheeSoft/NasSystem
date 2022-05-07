import React,{useEffect} from 'react'
import axios from 'axios'

export default function CreateFolder(){
 
    const handleOnclick = (_)=>{
        let reqBody = {folderName:"ReactFolder"};
           axios.post('http://localhost:5000/createfolder',reqBody).then((data)=>{
               console.log(data)
           }).catch((err)=>{
               console.log(err)
           })
        
        console.log('clicked')
    }
    return(
        <>
        <button onClick={handleOnclick}>CreateFolder</button>
        </>
    )
        
}