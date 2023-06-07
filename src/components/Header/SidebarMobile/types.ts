import { ReactNode } from 'react';

export type GuestLink = {
  title: string;
  href: string;
};
export type AuthLink = {
  title: string;
  icon: ReactNode;
  href: string;
};

export type SidebarMobileProps = {
  isAuthed?: boolean;
  links: GuestLink[] | AuthLink[];
};
