import React from 'react';
import './App.css';
import Login from './Components/Login';
import MainPage from './Components/MainPage';
import Sigin from './Components/Signup';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Book from './Components/Book';



export const App = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route element={<Login/>}  path="/"/>
      <Route element={<Sigin/>}  path="signin"/>
      <Route element={<MainPage/>}  path="main"/>
      <Route element={<Book/>}  path="book"/>
      {/* <Route element={<NavBar/>} path="Navbar"/> */}
    </Routes>
    
    </BrowserRouter>


  )
}

export default App
