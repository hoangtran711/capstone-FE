import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/';

const HomePageRoute: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/HomePage')),
  name: 'HomePage',
};

export default HomePageRoute;
