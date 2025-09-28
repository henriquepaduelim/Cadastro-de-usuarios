import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"; 

import Home from "../components/template/home/Home";
import UserCrud from "../components/template/user/UserCrud"; 

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />      
      <Route path="/users" component={UserCrud} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
