import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/attendancestudent';

const AttendanceStudent: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/AttendanceStudent/AttendanceStudent')),
  name: 'AttendanceStudent',
};

export default AttendanceStudent;
