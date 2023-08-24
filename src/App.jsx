import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './PlayerList';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';


const App = () => {
  return (
    <div>
      <div className="Header" style ={{textAlign: 'center', marginTop: '30px'}}>
      <Navbar.Brand href="#home" style = {{fontSize: '50px', fontWeight: '600'}}>FIFA player cards</Navbar.Brand></div>
      <PlayerList/>
    </div>
  )
}

export default App