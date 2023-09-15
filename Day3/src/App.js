import * as React from 'react';
import './assets/css/App.css';
import Signup from './components/Signup';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
