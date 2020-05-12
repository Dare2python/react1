import React from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import { useState } from 'react';

function App() {
  const [userState, setUserState ] = useState({
    username: "second"
  });

  const setUser = (event) => {
    setUserState({
      username: event.target.value    
    });
  };


  return (
    <div className="App">
      <UserInput changed={setUser} username={userState.username}/>
      <UserOutput username="first"/>
      <UserOutput username={userState.username}/>
      <UserOutput username="third"/>
    </div>
  );
}

export default App;
