import { FormHandles, SubmitHandler } from '@unform/core';

import { useRef } from 'react';

import { Form } from '@unform/web';

import { SectionTitle } from '../Components/SectionTitle';
import { FilterInput } from './FilterInput';
import * as S from './styles';
import { Carousel } from './Carousel';
import { InlineCard } from './InlineCard';

export function Stores() {
  const formRef = useRef<FormHandles>(null);

  const handleFilter: SubmitHandler = data => data;

  const slidesContent = [
    '/images/slide-content.jpeg',
    '/images/slide-content.jpeg',
    '/images/slide-content.jpeg',
    '/images/slide-content.jpeg',
  ];

  return (
    <S.StoresContainer>
      <SectionTitle>Estabelecimentos</SectionTitle>
      <S.FilterForm
        as={Form}
        ref={formRef}
        onSubmit={handleFilter}
        className="form"
      >
        <FilterInput
          name="filter"
          placeholder="Pesquisar por produto ou loja"
        />
      </S.FilterForm>
      <Carousel slides={slidesContent} />
      <S.CommerceContainer>
        <InlineCard />
        <InlineCard />
        <InlineCard />
        <InlineCard />
        <InlineCard />
        <InlineCard />
      </S.CommerceContainer>
    </S.StoresContainer>
  );
}
