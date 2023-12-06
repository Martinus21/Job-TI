import React from "react";
import { Switch, Route , useRouteMatch } from "react-router-dom";
import { Jobs, Profile } from '../pages';

function App() {

  let {path} = useRouteMatch();

  return (
      <main>
        <Switch>
          <Route path={`${path}/jobs`} component={Jobs} exact />
          <Route path={`${path}/profile`} component={Profile} />
        </Switch>
      </main>
  );
}

export default App;