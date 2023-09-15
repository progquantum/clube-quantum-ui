import { useCallback, useState } from 'react';

import { FilterTags } from 'components/FilterTags';
import { Modal } from 'components/Modal';

import { Map } from '../Map';

export function MapModal({ onClose }) {
  const [categoryId, setCategoryId] = useState('');

  const toggleSelectedCategory = useCallback(
    (id: string) => {
      if (categoryId === id) {
        setCategoryId('');
      } else {
        setCategoryId(id);
      }
    },
    [categoryId],
  );

  return (
    <Modal noDragBehavior onClose={onClose}>
      <FilterTags
        toggleSelectedCategory={toggleSelectedCategory}
        selectedCategory={categoryId}
      />
      <Map categoryId={categoryId} />
    </Modal>
  );
}
