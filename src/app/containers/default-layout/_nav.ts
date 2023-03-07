import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   iconComponent: { name: 'cil-speedometer' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },

  // {
  //   name: 'Blogs',
  //   url: '/listingpage',
  //   iconComponent: { name: 'cil-pencil' },
  // },

  {
    name: 'Blogs',
    url: '/listingpage',
    iconComponent: { name: 'cil-pencil' },
    children: [
      {
        name: 'Manage Blogs',
        url: '/listingpage'
      },
      {
        name: 'Create a Blog',
        url: '/editingpage'
      },
    ]
  },
  {
    name: 'Case Studies',
    url: '/case-studies',
    iconComponent: { name: 'cil-notes' },
  },
 
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   iconComponent: { name: 'cil-drop' }
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'someAnchor' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
  
  {
    name: 'Users',
    url: '/login',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
];
