import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './Login';
import FeedPage from './state/FeedPage';
import Creater from './Create';

export default function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/feed' element = {<FeedPage/>} />
            <Route path='/' element = {<Login/>} />
            <Route path='/creater' element = {<Creater/>} />
        </Routes>
    </BrowserRouter>
  )
}
