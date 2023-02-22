import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/task/student';

const Request: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/Task Student/TaskStudent')),
  name: 'Task Student',
};

export default Request;
