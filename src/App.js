import logo from './logo.svg';
import './App.css';
import Users from './users/Users';
import WelcomeClassComponent from './components/Welcome';
import GreetFunctionalComponent from './components/GreetF';

import React from 'react'

function App() {
  return (
    // <h1>
    //     Here is the Latest React version: <strong>{React.version}</strong>
    // </h1>
    <div className="App">
      <Users title="User listing"></Users>
      <WelcomeClassComponent/>
      <GreetFunctionalComponent/>
    </div>
  );
}

export default App;