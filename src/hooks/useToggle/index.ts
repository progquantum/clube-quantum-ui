import { useMemo, useState } from 'react';

export function useToggle(initialState = false) {
  const [on, toggle] = useState(initialState);

  const eventHandlers = useMemo(
    () => ({
      onFocus: () => toggle(true),
      onBlur: () => toggle(false),
    }),
    [],
  );

  return {
    on,
    eventHandlers,
  };
}
