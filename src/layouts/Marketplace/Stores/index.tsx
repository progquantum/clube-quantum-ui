import { FormHandles, SubmitHandler } from '@unform/core';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Form } from '@unform/web';
import { PulseLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import {
  Establishment,
  RequestBody,
} from 'hooks/establishment/useGetEstablishments/types';

import { Loading } from 'components/Loading';
import { Modal } from 'components/Modal';
import { useBannersFindAll } from 'hooks/banners/useBannersFindAll';
import { useGetEstablishments } from 'hooks/establishment/useGetEstablishments';

import { SectionTitle } from '../Components/SectionTitle';
import { FilterInput } from './FilterInput';
import * as S from './styles';
import { Carousel } from './Carousel';
import { InlineCard } from './InlineCard';
import { FilterTags } from '../FilterTags';
import { Map } from '../Map';

export function Stores({
  observerTargetRef,
}: {
  observerTargetRef: MutableRefObject<HTMLDivElement>;
}) {
  const filterInitialState = {
    itemsPerPage: 6,
    page: 1,
  };
  const formRef = useRef<FormHandles>(null);
  const [filterInput, setFilterInput] =
    useState<RequestBody>(filterInitialState);

  const { data: establishments, isLoading } = useGetEstablishments(filterInput);
  const [totalEstablishment, setTotalEstablishment] = useState<number>();

  const totalEstablishmentRef = useRef<number>(totalEstablishment);
  totalEstablishmentRef.current = totalEstablishment;

  useEffect(() => {
    if (
      establishments &&
      establishments.info &&
      establishments.info.totalEstablishment > 0
    ) {
      setTotalEstablishment(establishments.info.totalEstablishment);
    }
  }, [establishments]);

  const [modalStatus, setModalStatus] = useState(false);
  const { data } = useBannersFindAll();
  const { colors } = useTheme();

  const handleRefetch = useCallback(() => {
    setFilterInput(prevState => ({
      ...prevState,
      itemsPerPage: Math.min(
        prevState.itemsPerPage + 3,
        totalEstablishmentRef.current,
      ),
    }));
  }, [
    totalEstablishmentRef,
    totalEstablishmentRef.current,
    filterInput.itemsPerPage,
    setFilterInput,
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          handleRefetch();
        }
      },
      { threshold: 0.9 },
    );

    if (observerTargetRef.current) {
      observer.observe(observerTargetRef.current);
    }

    return () => {
      if (observerTargetRef.current) {
        observer.unobserve(observerTargetRef.current);
      }
    };
  }, [observerTargetRef]);

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

  const FallBackComponent = isLoading ? (
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
              FallBackComponent
            )}
          </S.CommerceContainer>
        </>
      )}
      {modalStatus && (
        <Modal noDragBehavior onClose={handleModalStatus}>
          <FilterTags
            toggleSelectedCategory={toggleSelectedCategory}
            selectedCategory={filterInput.category_id}
          />
          <Map />
        </Modal>
      )}
    </S.StoresContainer>
  );
}
