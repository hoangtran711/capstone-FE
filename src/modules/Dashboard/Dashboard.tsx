import { SidebarLayout } from 'components';
import React from 'react';
import DashboardAdmin from './components/DashboardAdmin';

const Dashboard = () => {
  return (
    <SidebarLayout>
      <DashboardAdmin />
    </SidebarLayout>
  );
};

export default Dashboard;
