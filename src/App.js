import React from 'react';


import './App.css';
import{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import Home from "./components/Home"
//import ResturentUpdate from "./components/ResturentUpdate"
import Login from "./components/Login"
//import ResturentSearch from "./components/ResturentSearch"
//import ResturentCreate from "./components/ResturentCreate"
import List from "./components/List"
import Protective from "./components/Protective"
import Logout from "./components/Logout"

  

function App() {
  return (
    <div className="App">
  
      <Router>
     
     
    {/* <Route path="/list">
      <List/>
      </Route>
     <Route path="/create">
      <ResturentCreate/>
      </Route>*/} 
     
        <Route path="/logout">
      < Logout/>
      </Route>
      
      <Route path="/login"
      render={props=>(
      <Login{...props}/>
       ) }
      >
      </Route>
     {/* <Route path="/update/:id"
      render={props=>(
      <ResturentUpdate{...props}/>
       ) }
      > 
     </Route>*/ }
<Route exact path="/">
      <Home/>
      </Route>  
     <Protective exact path="/list"  component={List} />
    
        
        
      </Router>
    </div>
  );
}

export default App;
