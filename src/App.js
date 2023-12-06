import {Route,Switch} from "react-router-dom";

import ProtectedRoute from "./middleware/ProtectedRoute"

import { Login, Register } from "./pages";
import React from "react";
import { useDispatch, useSelector } from "react-redux/es";

import {Page} from "./router/index";
import { withRouter, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { SET_AUTH } from "stores/users/functions";

function App() {
  let isAuthenticated=useSelector((state)=>state.users.isAuthenticated);
  let history=useHistory();
  let dispatch=useDispatch();


  React.useLayoutEffect(()=>{
    let auth_token=localStorage.getItem("token")||null;
    let account=JSON.stringify(localStorage.getItem("account"))||null;
    if(auth_token){
      dispatch(SET_AUTH({ isAuthenticated: true, account }));
      history.push("/pages/jobs")
    }else{
      history.push("/");
    }
  },[history]);

  return (
      <main>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/pages" isAuthenticated={isAuthenticated} component={Page} />
        </Switch>
      </main>
  );
}

export default withRouter(App);
