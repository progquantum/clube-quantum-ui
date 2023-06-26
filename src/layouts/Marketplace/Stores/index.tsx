import { FormHandles, SubmitHandler } from '@unform/core';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { PulseLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import { Loading } from 'components/Loading';
import { Modal } from 'components/Modal';
import { useBannersFindAll } from 'hooks/banners/useBannersFindAll';
import { useGetEstablishments } from 'hooks/establishment/useGetEstablishments';
import {
  Establishment,
  RequestBody,
} from 'hooks/establishment/useGetEstablishments/types';

import { SectionTitle } from '../Components/SectionTitle';
import { FilterInput } from './FilterInput';
import * as S from './styles';
import { Carousel } from './Carousel';
import { InlineCard } from './InlineCard';
import { FilterTags } from '../FilterTags';
import { Map } from '../Map';

export function Stores() {
  const filterInitialState = {
    itemsPerPage: 6,
    page: 1,
  };
  const [filterInput, setFilterInput] =
    useState<RequestBody>(filterInitialState);
  const { data: establishments, isLoading } = useGetEstablishments(filterInput);
  const currentCursor =
    establishments?.info.cursor && establishments.info.cursor;
  const observerTarget = useRef(null);
  const formRef = useRef<FormHandles>(null);
  const [modalStatus, setModalStatus] = useState(false);
  const { data } = useBannersFindAll();
  const { colors } = useTheme();

  const handleRefetch = useCallback(() => {
    setFilterInput(prevState => ({
      ...prevState,
      id_cursor: currentCursor,
      itemsPerPage: prevState.itemsPerPage + 3,
    }));
  }, [establishments]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isLoading) {
          handleRefetch();
        }
      },
      { threshold: 1 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  const toggleSelectedCategory = useCallback(
    (categoryId: string) => {
      if (filterInput.category_id === categoryId) {
        setFilterInput(prevState => ({ ...prevState, category_id: '' }));
      } else {
        setFilterInput(prevState => ({
          ...prevState,
          category_id: categoryId,
        }));
      }
    },
    [filterInput],
  );

  const handleModalStatus = () => setModalStatus(prevState => !prevState);

  const handleFilter: SubmitHandler = useCallback(data => {
    if (!data.filter) {
      setFilterInput(filterInitialState);
      return;
    }

    setFilterInput(prevState => ({
      ...prevState,
      corporate_name: data.filter,
    }));
  }, []);

  const fallBackComponent = isLoading ? (
    <S.LoadingContainer>
      <Loading icon={PulseLoader} color={colors.mediumslateBlue} size={10} />
      Carregando
    </S.LoadingContainer>
  ) : (
    <S.FallbackEstablishmentText>
      Nenhum estabelecimento encontrado
    </S.FallbackEstablishmentText>
  );

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
      {Object.hasOwn(filterInput, 'corporate_name') ? (
        <S.SearchResultsContainer>
          <p>Resultados da pesquisa feita</p>
          {establishments?.info.totalEstablishment > 0 ? (
            establishments.establishment.map((establishment: Establishment) => (
              <InlineCard
                establishment={establishment}
                key={establishment.id}
              />
            ))
          ) : (
            <S.FallbackEstablishmentText>
              Nenhum estabelecimento encontrado
            </S.FallbackEstablishmentText>
          )}
        </S.SearchResultsContainer>
      ) : (
        <>
          <Carousel slides={data} />
          <FilterTags
            toggleSelectedCategory={toggleSelectedCategory}
            selectedCategory={filterInput.category_id}
          />
          <S.CommerceContainer>
            {establishments?.info.totalEstablishment > 0 ? (
              <>
                {establishments.establishment.map(
                  (establishment: Establishment) => (
                    <InlineCard
                      establishment={establishment}
                      key={establishment.id}
                    />
                  ),
                )}
              </>
            ) : (
              fallBackComponent
            )}
          </S.CommerceContainer>
        </>
      )}
      <div ref={observerTarget} />

      {modalStatus && (
        <Modal onClose={handleModalStatus}>
          <FilterTags
            toggleSelectedCategory={toggleSelectedCategory}
            selectedCategory={filterInput.category_id}
          />
          <Map isEstablishmentProfile={false} />
        </Modal>
      )}
    </S.StoresContainer>
  );
}
