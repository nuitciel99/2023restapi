import {useParams} from 'react-router-dom'
import { getArticleById, getComments, delComment, postComment } from '../api';
import { useEffect, useState } from 'react';
import CommentInput from '../components/CommentInput';

function ViewPost(){
    let {id} = useParams();

    const [postData,setPostData] = useState(null)
    const [commentData,setCommentData] = useState(null)
    const [deleteMsg,setDeleteMsg] = useState('')

    useEffect(()=>{
        const articlePost = async ()=>{
            try {
                const post = await getArticleById(id)
                setPostData(post.data)

                const comment = await getComments(id)
                console.log(comment.data);
                setCommentData(comment.data)
            } catch (error) {
                console.error("에러",error)
            }
        }
        articlePost();
    },[id, deleteMsg])

    // if(!postData){
    //     return "데이터가 없음"
    // }

    const commentDel = async (id)=>{
        try {
            delComment(id)
            setDeleteMsg("Delete completed")
        } catch (error) {
            console.error("delete reply : ", error);
            setDeleteMsg("Fail to delete reply")
        }
        

    }

    const addNewComment = async (newComment)=>{
        try {
            await postComment(id, newComment) // articleId, nickname, body
            setDeleteMsg("Successfully add reply")

            // const updateComment = await getComments(id)
            // setCommentData(updateComment)
        } catch (error) {
            setDeleteMsg("Fail to add reply")
        }
    }

    return (
        <>
        {postData?.title} <br></br>
        {postData?.content}

        <hr />
        <h4>Reply</h4>
        <ul className='commList'>
            {
                commentData?.map(function(item, i){
                    return(
                        <li key={i}><p>{item.nickname}</p> 
                        <span className='btn' onClick={()=>{commentDel(item.id)}}>Delete</span></li>
                    )
                })
            }
        </ul>
        <hr />
        <h4>Write Reply</h4>
        <CommentInput onAddComment={addNewComment} />
        
        <div className='tost'>
            {deleteMsg}
        </div>
        </>
    )
}

export default ViewPost;