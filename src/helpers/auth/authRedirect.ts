import Router from 'next/router';

import { roles } from 'constants/roles';
import { DASHBOARD_ADM_PAGE, DASHBOARD_PAGE } from 'constants/routesPath';

export const authRedirect = (role: string) => {
  switch (role) {
    case roles.admin.id:
      Router.push(DASHBOARD_ADM_PAGE);
      break;
    case roles.user.id:
      Router.push(DASHBOARD_PAGE);
      break;

    default:
      break;
  }
};
