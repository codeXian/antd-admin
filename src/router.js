import React from 'react';
import { Route, Switch, routerRedux } from 'dva/router';
import Authorized from "./utils/Authorized";
import { getRouterData } from "./common/router";

const { ConnectedRouter } = routerRedux;
const { AuthorizedRoute } = Authorized;

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const UserLayout = routerData['/user'].component;
  const BasicLayout = routerData['/'].component;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/user" component={UserLayout} />
        <AuthorizedRoute
          path="/"
          render={props => <BasicLayout {...props} />}
          authority={['admin']}
          redirectPath="/user"
        >
        </AuthorizedRoute>
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
