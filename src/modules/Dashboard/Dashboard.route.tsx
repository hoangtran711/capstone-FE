import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/dashboard';

const DashboardPage: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('./Dashboard')),
  name: 'Dashboard',
};

export default DashboardPage;
