import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/task';

const Task: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/Task/Task')),
  name: 'Task',
};

export default Task;
