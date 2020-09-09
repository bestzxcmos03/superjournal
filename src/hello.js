import React from 'react';
import './App.css';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
function Hello(){
    return (
        <div className="App">
          <header className="App-header">
            <h1>
              Super Journal
            </h1>
            <Link to = "/login">
              <img  src={logo} className="App-logo" alt="logo" />
            </Link>
            <p>
              Under developping....
            </p>
          </header>
        </div>
    );
}
export default Hello;