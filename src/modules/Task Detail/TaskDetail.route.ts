import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/task/teacher/:id';

const Request: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/Task Detail/TaskDetail')),
  name: 'Task Detail',
};

export default Request;
