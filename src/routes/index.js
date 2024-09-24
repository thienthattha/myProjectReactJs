import HeaderOnly from '~/layout/HeaderOnly';
import Home from '~/page/Home';
import Page1 from '~/page/Page1';
import Page2 from '~/page/Page2';

// Public Routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/page1', component: Page1, layout: HeaderOnly },
  { path: '/page2', component: Page2, layout: null },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
