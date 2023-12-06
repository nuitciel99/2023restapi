import axios from 'axios'
import './App.css';
import { useEffect, useState } from 'react';
import { getArticles, getArticleById } from '../api';
import MainListView from '../components/MainListView';
import ViewPost from '../components/ViewPost';
import {Routes, Route} from 'react-router-dom'
import NewPost from '../components/NewPost';

function App() {
  

  return (
    <div className="App">
      <ul className='menu' style={{"display":"flex", margin:"10px"}}>
        <li style={{padding:"10px"}}><a href="/">list</a></li>
        <li style={{padding:"10px"}}><a href="/articles/1">view</a></li>
        <li style={{padding:"10px"}}><a href="/articles/new">new article</a></li>
      </ul>
      <Routes>
        <Route path="/" element={<MainListView />} />
        <Route path="/articles/:id" element={<ViewPost />} />
        <Route path="/articles/new" element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App;
