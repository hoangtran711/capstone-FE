import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/projects/me';

const Project: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/Project/MyProject/Project')),
  name: 'Project',
};

export default Project;
