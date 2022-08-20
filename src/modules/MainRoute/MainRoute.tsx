import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IRouteProps } from 'modules';
import enhance from 'modules/MainRoute/MainRoute.enhance';
import { IProps } from 'modules/MainRoute/MainRoute.inteface';

const MainRoute = (props: IProps & any) => {
  const { routes } = props;

  if (!routes || routes.length === 0) return null;
  return (
    <Switch>
      <Suspense fallback={null}>
        {routes.map((route: IRouteProps) => (
          <Route {...route} key={route.path} />
        ))}
      </Suspense>
    </Switch>
  );
};

export default enhance(React.memo(MainRoute));
