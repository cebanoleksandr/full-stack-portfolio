import { createHashRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import App from '../App';
import HomeLayout from '../layouts/HomeLayout';
import ProjectsLayout from '../layouts/ProjectsLayout';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetail from '../pages/ProjectDetail';
import NotFoundPage from '../pages/NotFoundPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '',
        Component: HomeLayout,
        children: [
          {
            index: true,
            Component: HomePage,
          },
        ],
      },
      {
        path: 'projects',
        Component: ProjectsLayout,
        children: [
          {
            index: true,
            Component: ProjectsPage,
          },
          {
            path: ':slug',
            Component: ProjectDetail,
          },
        ],
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
];

const router = createHashRouter(routes);

export default router;
