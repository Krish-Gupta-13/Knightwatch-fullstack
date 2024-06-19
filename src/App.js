import React from 'react';
import './App.css';
import Login from './components/structures/Login';
import Signup from './components/structures/Signup';
import Welcome from './components/structures/Welcome';
import {Routes, Route} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/structures/Navbar'
import Description from './components/structures/Description';
import { useSelector } from "react-redux";
import ChessClock from './components/structures/ChessClock';
import Bullet from './components/structures/Bullet'
import Rapid from './components/structures/Rapid'
import Blitz from './components/structures/Blitz'
import Footer from './components/structures/Footer'

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Navbar/>
      </header>
      
      <main>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          {isLoggedIn && <Route path="/user" element={<Welcome/>} />}
          {isLoggedIn && <Route path="/clock" element={<ChessClock/>} />}
          {isLoggedIn && <Route path="/bullet" element={<Bullet/>} />}
          {isLoggedIn && <Route path="/blitz" element={<Blitz/>} />}
          {isLoggedIn && <Route path="/rapid" element={<Rapid/>} />}
          <Route path="/description" element={<Description/>} />
          <Route path="/logout" element={<Signup/>} />
        </Routes>
      </main>
      
  
      
    </React.Fragment>
  );
}

export default App;
