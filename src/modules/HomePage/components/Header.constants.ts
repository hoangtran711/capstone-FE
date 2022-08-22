export interface IMenuItem {
  title: string;
  path: string;
  child?: IMenuItem[];
}

export const menu: IMenuItem[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/',
    child: [
      {
        title: 'Company Overview',
        path: '/',
      },
      {
        title: 'Partners',
        path: '/',
      },
      {
        title: 'Careers',
        path: '/',
      },
      {
        title: 'Location',
        path: '/',
      },
    ],
  },
  {
    title: 'Services',
    path: '/',
    child: [
      {
        title: 'Pauroll Solution',
        path: '/',
      },
      {
        title: 'Time & Attendance',
        path: '/',
      },
      {
        title: 'HR Management',
        path: '/',
      },
      {
        title: 'Skilled Development',
        path: '/',
      },
    ],
  },
  {
    title: 'Blog',
    path: '/',
    child: [
      {
        title: 'Blog Classic',
        path: '/',
      },
      {
        title: 'News Grid',
        path: '/',
      },
      {
        title: 'Single Post',
        path: '/',
      },
      {
        title: 'Contact Us',
        path: '/',
      },
    ],
  },
];
