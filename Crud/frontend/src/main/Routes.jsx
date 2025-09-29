import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"; 

import Home from "../components/template/home/Home";
import UserCrud from "../components/template/user/UserCrud"; 
import Clients from "../components/template/clients/Clients";
import Contact from "../components/template/contact/Contact";
import Settings from "../components/template/settings/Settings";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />      
      <Route path="/users" component={UserCrud} />
      <Route path="/clients" component={Clients} />
      <Route path="/settings" component={Settings} />
      <Route path="/contact" component={Contact} />
      <Redirect from="*" to="/" />
    </Switch>
    
  );
  
}
