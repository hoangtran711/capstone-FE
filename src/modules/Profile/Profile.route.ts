import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/profile';

const Profile: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/Profile/Profile')),
  name: 'Profile',
};

export default Profile;
