import axios from 'axios'
import './App.css';
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import MainListView from '../components/MainListView';
import ViewPost from '../components/ViewPost';

function App() {

  const [articleData, setArticleData] = useState([])
  const callApi = async ()=>{
    try {
      // Real URL for API
      const request = await axios.get("http://localhost:8081/api/articles")
      console.log(request.data);
      setArticleData(request.data)
    } catch (error) {
      console.error("error ::: " + error);
    }
  }

  useEffect(()=>{
    callApi()
    // 밑에 [] 없으면 반복 호출
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainListView listData = {articleData} />} />
        <Route path='/article/:id' element={<ViewPost listData = {articleData} />} />
      </Routes>
    </div>
  );
}

export default App;
