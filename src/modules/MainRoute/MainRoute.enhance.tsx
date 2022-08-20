import React, { FunctionComponent } from 'react';
import { IRouteProps } from 'modules';

const context = (require as any).context('modules/', true, /\.route.tsx?/);

const enhance = (WrappedComponent: FunctionComponent) => (props: any) => {
  const [routes, setRoutes] = React.useState<Array<IRouteProps>>([]);

  const handleGetRoutes = async () => {
    const allRoutes: IRouteProps[] = [];
    console.log('context', context.keys());
    context.keys().map((path: any) => console.log(path));
    console.log(allRoutes);
    setRoutes([...allRoutes]);
  };
  React.useEffect(() => {
    handleGetRoutes().then();
  }, []);

  return <WrappedComponent {...props} routes={routes} />;
};

export default enhance;
