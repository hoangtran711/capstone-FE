import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/attendance';

const Attendance: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/Attendance/Attendance')),
  name: 'Attendance',
};

export default Attendance;
