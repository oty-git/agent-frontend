import HomePage from '../../../../pages/HomePage';
import {
  AppRoutes,
  getRouteAbout,
  getRouteAdmin,
  getRouteArticleCreate,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteForbidden,
  getRouteMain,
  getRouteProfile,
} from '../../../../shared/const/router';
import { UserRole } from '../../../../shared/const/userConsts';
import { AppRoutesProps } from '../../../../shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <HomePage />,
    // element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <HomePage />,
    // element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: getRouteArticles(),
    element: <HomePage />,
    // element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: getRouteArticleDetails(':id'),
    element: <HomePage />,
    // element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: getRouteArticleCreate(),
    element: <HomePage />,
    // element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: <HomePage />,
    // element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getRouteAdmin(),
    element: <HomePage />,
    // element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <HomePage />,
    // element: <ForbiddenPage />,
  },
  [AppRoutes.SETTINGS]: {
    path: '/settings', // Replace with getRouteSettings() if you have a helper
    element: <HomePage />,
    // element: <SettingsPage />,
    // authOnly: true, // Uncomment if only authenticated users should access
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <HomePage />,
    // element: <NotFoundPage />,
  },
};
