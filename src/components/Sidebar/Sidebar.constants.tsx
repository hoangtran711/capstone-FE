import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppsIcon from '@mui/icons-material/Apps';

export interface ISidebarItem {
  children?: ISidebarItem[];
  title: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  path?: string;
}
export const SidebarItems: ISidebarItem[] = [
  {
    title: 'Dashboard',
    Icon: DashboardIcon,
    children: [
      {
        title: 'Admin Dashboard',
        path: '/dashboard',
      },
      {
        title: 'Employee Dashboard',
        path: '/dashboard',
      },
    ],
  },
  {
    title: 'Apps',
    path: '/apps',
    Icon: AppsIcon,
  },
];
