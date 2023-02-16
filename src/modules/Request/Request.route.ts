import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/request';

const Request: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/Request/Request')),
  name: 'Request',
};

export default Request;
