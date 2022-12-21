import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/sign-up';

const SignUpPage: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/Authenticate/SignUpPage')),
  name: 'SignUp Page',
};

export default SignUpPage;
