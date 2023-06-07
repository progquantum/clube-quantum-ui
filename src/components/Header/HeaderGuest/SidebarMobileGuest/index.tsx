import { WORK_WITH_US_PAGE } from 'constants/routesPath';

import { SideBarMobile } from 'components/Header/SidebarMobile';

const links = [
  {
    title: 'Saiba mais',
    href: '/',
  },
  {
    title: 'Seja um parceiro',
    href: '/',
  },
  {
    title: 'Trabalhe Conosco',
    href: WORK_WITH_US_PAGE,
  },
];
export function SideBarMobileGuest() {
  return <SideBarMobile links={links} />;
}
