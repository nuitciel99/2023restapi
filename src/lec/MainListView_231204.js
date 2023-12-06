import { getArticles } from '../api';
import { useEffect, useState } from 'react';


function MainListView(){
    const [listData, setListData] = useState([])

  const callApi = async ()=>{
    try {
      const articles = await getArticles();
    //   const articles = await getArticleById(1);
      console.log(articles.data);
      setListData(articles.listData)
    } catch (error) {
      console.error("error :: ", error);
    }
  }
  useEffect(()=>{
    callApi()
  },[])

    return(
        <>
            {
                listData.map(function(item, i){
                    return(
                        <li key={i}><a href={`/articles/${item.id}`}>{item.title}</a></li>
                    )
                })
            }
        </>
    )
}

export default MainListView;