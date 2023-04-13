import { ValidateUserPermissions } from './types';

export function validateUserPermissions({
  user,
  roles = [],
}: ValidateUserPermissions) {
  if (roles.length > 0) {
    const hasAllRoles = roles.some(role => user?.includes(role));

    if (!hasAllRoles) {
      return false;
    }

    return true;
  }
}
