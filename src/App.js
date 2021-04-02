import React from 'react';
import './App.css'
import HeaderContainer from './Containers/HeaderContainer';

//  In Redux, <Home /> Component is not using directly in our project
//  We use this from "Container" ( i.e.: responsible for 'connection' b/w "Components" and "Services ") folder

// import Home from './Components/Home'

import HomeContainer from './Containers/HomeContainer';


// V. V. Imp. 
//  In Redux, <Home /> Component is not using directly in our project
//  We use this from "Container" ( i.e.: responsible for 'connection' b/w "Components" and "Services ") folder
//  So, 1st we send "Home" Component to 'container' and then we import them from there.
//  And then we connect them of "Redux".


function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
