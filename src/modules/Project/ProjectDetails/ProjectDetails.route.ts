import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/projectdetails';

const ProjectDetails: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/Project/ProjectDetails')),
  name: 'ProjectDetails',
};

export default ProjectDetails;
