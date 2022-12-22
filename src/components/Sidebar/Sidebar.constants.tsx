import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubjectIcon from '@mui/icons-material/Subject';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

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
    title: 'Home',
    path: '/Homepage',
    Icon: HomeIcon,
  },
  {
    title: ' Students',
    path: '/Students',
    Icon: AccountCircleIcon,
  },
  {
    title: ' Courses',
    path: '/Courses',
    Icon: AccountTreeIcon,
  },
  {
    title: ' Subjects',
    path: '/Subjects',
    Icon: SubjectIcon,
  },
  // {
  //   title: 'Dashboard',
  //   Icon: DashboardIcon,
  //   children: [
  //     {
  //       title: 'Teacher Dashboard',
  //       path: '/dashboard',
  //     },
  //     {
  //       title: 'Student Dashboard',
  //       path: '/dashboard',
  //     },
  //   ],
  // },
  {
    title: 'Apps',
    path: '/apps',
    Icon: AppsIcon,
  },
];
