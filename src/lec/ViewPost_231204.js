import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import {useParams} from 'react-router-dom'

function ViewPost(){
    let {id} = useParams();
    
    const [postData, setPostData] = useState(null)
    useEffect(()=>{
    const articlePost = async ()=>{
        try {
          const post = await getArticleById(id)  
          setPostData(post.data)
        } catch (error) {
            console.error("error", error)
        }
    }
    articlePost()
   },[id])
//    if(!postData){
//     return "KNOWN DATA"
//    }
    return(
        <>
            {postData?.title}
            {postData?.content}
        </>
    )
}

export default ViewPost;