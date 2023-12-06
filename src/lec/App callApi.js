import axios from 'axios'
import './App.css';
import { useEffect, useState } from 'react';
import { getArticles, getArticleById } from './components/api';

function App() {
  const [listData, setListData] = useState([])

  const callApi = async ()=>{
    try {
      // const articles = await getArticles();
      const articles = await getArticleById(1);
      console.log(articles.data);
      setListData(articles.listData)
    } catch (error) {
      console.error("error :: ", error);
    }
  }
  useEffect(()=>{
    callApi()
  },[])

  return (
    <div className="App">
      {/* {
        listData.map(function(item, i){
          return (
            <>
              <li>{item.title}</li>
            </>
          )
        })
      } */}
      title : {listData.title} <br/>
      content : {listData.content}
    </div>
  );
}

export default App;
