import { FunctionComponent } from 'react';
import { RouteProps } from 'react-router-dom';

export interface IRouteProps extends RouteProps {
  id?: string | number;
  name: string;
  path: string;
  component: FunctionComponent | any;
  authed?: boolean;
}

export { default as MainRoute } from './MainRoute';
