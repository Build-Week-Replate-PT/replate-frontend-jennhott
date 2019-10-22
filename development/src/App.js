import React from 'react';
import logo from './logo.svg';
import './App.css';

//import components
import Links from './Components/Links';
import BusinessForm from './Components/BusinessForm';
import NonProfitForm from './Components/NonProfitForm';

function App() {
  return (
    <div className="App">
      <div>
        <Links />
      </div>
      <div>
        <BusinessForm />
      </div>
      <div>
        <NonProfitForm />
      </div>
    </div>
  );
}

export default App;
