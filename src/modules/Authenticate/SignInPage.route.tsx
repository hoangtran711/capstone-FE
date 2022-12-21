import { lazy } from 'react';
import { IRouteProps } from 'modules';

const route = '/sign-in';

const SignInPage: IRouteProps = {
  path: route,
  exact: true,
  component: lazy(() => import('modules/Authenticate/SignInPage')),
  name: 'Sign In Page',
};

export default SignInPage;
