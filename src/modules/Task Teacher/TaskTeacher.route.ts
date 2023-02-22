import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/task/teacher';

const Request: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/Task Teacher/TaskTeacher')),
  name: 'Task Teacher',
};

export default Request;
