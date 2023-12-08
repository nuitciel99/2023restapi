import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postArticle } from '../api';

function NewPost(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({title:'', content:''})
    const handleSubmit = async (e)=>{
        // alert("write")
        e.preventDefault();
        try {
            // const response = await axios.post("http://localhost:8081/api/articles", formData)
            const response = await postArticle(formData)
            if(response.state === 200){
                console.log("write completed");
                // alert("write completed")
                navigate("/")
            }else{
                console.error("error while writing");
            }
        } catch (error) {
            console.error("error", error);
        }
    }

    const handleChange = (e)=>{
        // clone Data
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>title : <input type="text" name="title" placeholder="title" onChange={handleChange} value={formData.title} /></div>    
                <div>content : <input type="text" name="content" placeholder="content" onChange={handleChange} value={formData.content} /></div>    
                <input type="submit" value="write" />
            </form>        
        </>
    )
}

export default NewPost