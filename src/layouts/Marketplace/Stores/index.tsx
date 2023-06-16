import { FormHandles, SubmitHandler } from '@unform/core';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { useRef, useState } from 'react';

import { Form } from '@unform/web';

import { PulseLoader } from 'react-spinners';

import { useTheme } from 'styled-components';

import { Loading } from 'components/Loading';

import { useInfiniteScroll } from 'hooks/useInfiniteScroll';

import { Modal } from 'components/Modal';

import { useBannersFindAll } from 'hooks/banners/useBannersFindAll';

import { SectionTitle } from '../Components/SectionTitle';
import { FilterInput } from './FilterInput';
import * as S from './styles';
import { Carousel } from './Carousel';
import { InlineCard } from './InlineCard';
import { FilterTags } from '../FilterTags';
import { Map } from '../Map';

export function Stores() {
  const formRef = useRef<FormHandles>(null);
  const [cardsToRender, setCardsToRender] = useState(3);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const [modalStatus, setModalStatus] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const { data } = useBannersFindAll();

  function fetchMoreListItems() {
    setTimeout(() => {
      setCardsToRender(state => state + 3);
      setIsFetching(false);
    }, 2000);
  }

  const handleModalStatus = () => setModalStatus(prevState => !prevState);

  const cards = [];

  for (let i = 0; i < cardsToRender; i += 1) {
    cards.push(<InlineCard key={i} />);
  }

  const { colors } = useTheme();

  const handleFilter: SubmitHandler = data => {
    if (data.filter === 'domino') {
      setIsFetched(prevState => !prevState);
    } else {
      setIsFetched(prevState => !prevState);
    }
  };

  return (
    <S.StoresContainer>
      <SectionTitle>Estabelecimentos</SectionTitle>
      <S.InlineContainer>
        <S.FilterForm
          as={Form}
          ref={formRef}
          onSubmit={handleFilter}
          className="form"
        >
          <FilterInput
            name="filter"
            placeholder="Pesquisar por estabelecimentos"
          />
        </S.FilterForm>
        <S.MapButton type="button" onClick={handleModalStatus}>
          <FaMapMarkerAlt size={24} /> Mapa
        </S.MapButton>
      </S.InlineContainer>
      {isFetched ? (
        <S.SearchResultsContainer>
          <p>Resultados da pesquisa feita</p>
          <InlineCard />
        </S.SearchResultsContainer>
      ) : (
        <>
          <Carousel slides={data} />
          <FilterTags />
          <S.CommerceContainer>{[...cards]}</S.CommerceContainer>
          {isFetching && (
            <S.LoadingContainer>
              <Loading
                icon={PulseLoader}
                color={colors.mediumslateBlue}
                size={10}
              />{' '}
              Carregando
            </S.LoadingContainer>
          )}
        </>
      )}

      {modalStatus && (
        <Modal onClose={handleModalStatus}>
          <FilterTags />
          <Map />
        </Modal>
      )}
    </S.StoresContainer>
  );
}
