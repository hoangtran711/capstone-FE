import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/projects';

const Project: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/Project/Project')),
  name: 'Project',
};

export default Project;
