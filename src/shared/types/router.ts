import { RouteProps } from 'react-router-dom';
import { UserRole } from '../const/userConsts';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
