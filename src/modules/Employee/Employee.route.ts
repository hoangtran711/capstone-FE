import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/students';

const Employee: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/Employee/Employee')),
  name: 'Employee',
};

export default Employee;
