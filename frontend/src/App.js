import React from "react";
import Login from "./components/Login";
import Home from "./components/Home"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import UsersBlog from "./components/UsersBlog";






function App() {
  return (
    <div style={{height:"100vh"}}>
      <BrowserRouter>
        <Switch>
             <Route exact path="/logIn" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/UsersBlog" component={UsersBlog} /> 
            <Route exact path="/" component={Home} />   
 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;