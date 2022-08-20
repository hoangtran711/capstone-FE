import React, { FunctionComponent } from 'react';
import { IRouteProps } from 'modules';

const context = (require as any).context('src/modules', true, /\.route.tsx?/);

const enhance = (WrappedComponent: FunctionComponent) => (props: any) => {
  const [routes, setRoutes] = React.useState<Array<IRouteProps>>([]);

  const handleGetRoutes = async () => {
    const allRoutes: IRouteProps[] = [];
    context
      .keys()
      .map((path: any) => allRoutes.push(context(`${path}`).default));
    setRoutes([...allRoutes]);
  };
  React.useEffect(() => {
    handleGetRoutes().then();
  }, []);

  return <WrappedComponent {...props} routes={routes} />;
};

export default enhance;
