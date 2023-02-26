import { SidebarLayout } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectRole } from 'reducer/account/account.selector';
import DashboardAdmin from './components/DashboardAdmin';
import DashboardStudent from './components/DashboardStudent';

const Dashboard = () => {
  const role = useSelector(selectRole);
  if (!role) {
    return null;
  }
  return (
    <SidebarLayout>
      {role === 'Admin' ? (
        <DashboardAdmin />
      ) : role === 'Student' ? (
        <DashboardStudent />
      ) : null}
    </SidebarLayout>
  );
};

export default Dashboard;
