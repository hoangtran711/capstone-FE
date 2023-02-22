import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
// import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubjectIcon from '@mui/icons-material/Subject';
// import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TaskIcon from '@mui/icons-material/Task';
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
    path: '/dashboard',
    Icon: HomeIcon,
  },
  {
    title: ' Attendance',
    path: '/attendance',
    Icon: CalendarMonthIcon,
  },
  {
    title: 'Requests',
    path: '/request',
    Icon: ForwardToInboxIcon,
  },
  {
    title: 'Students',
    path: '/students',
    Icon: PeopleAltIcon,
  },
  {
    title: 'Projects',
    path: '/projects',
    Icon: SubjectIcon,
  },
  {
    title: 'Tasks',
    path: '/task/teacher',
    Icon: TaskIcon,
  },
];
export const SidebarItemsStudent: ISidebarItem[] = [
  {
    title: 'Home',
    path: '/dashboard',
    Icon: HomeIcon,
  },
  {
    title: ' Attendance',
    path: '/attendancestudent',
    Icon: CalendarMonthIcon,
  },
  {
    title: 'Requests',
    path: '/request',
    Icon: ForwardToInboxIcon,
  },
  {
    title: 'Projects',
    path: '/projects',
    Icon: SubjectIcon,
  },
  {
    title: 'Tasks',
    path: '/task/student',
    Icon: TaskIcon,
  },
];
