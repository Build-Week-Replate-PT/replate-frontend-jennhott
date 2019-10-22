import React from 'react';
import logo from './logo.svg';
import './App.css';

//import components
import Links from './Components/Links';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';


function App() {
  return (
    <div className="App">
      <div>
        <Links />
      </div>
      <div>
        <LoginPage />
      </div>
    <div>
      <SignupPage />
    </div>
      
    </div>
  );
}

export default App;
