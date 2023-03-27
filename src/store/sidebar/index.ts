import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { SidebarStore } from './types';

export const useSidebarStore = create(
  persist<SidebarStore>(
    set => ({
      isExpanded: false,
      setIsExpanded: () => set(state => ({ isExpanded: !state.isExpanded })),
    }),
    {
      name: 'sidebarStore',
    },
  ),
);
