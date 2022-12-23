import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { Kategoria,Termékek } from './Element';
import { useState } from 'react';

function App() {
  return <BrowserRouter>
    <Kategoria/>
    <Termékek/>
  </BrowserRouter>
}

export default App;
