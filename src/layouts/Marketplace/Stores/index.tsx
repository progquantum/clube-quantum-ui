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
  ResponseData,
} from 'hooks/establishment/useGetEstablishments/types';
import { Loading } from 'components/Loading';
import { useBannersFindAll } from 'hooks/banners/useBannersFindAll';
import { useGetEstablishments } from 'hooks/establishment/useGetEstablishments';
import { FilterTags } from 'components/FilterTags';

import { SectionTitle } from '../Components/SectionTitle';
import { FilterInput } from './FilterInput';
import * as S from './styles';
import { Carousel } from './Carousel';
import { InlineCard } from './InlineCard';
import { MapModal } from '../MapModal';

export function Stores({
  observerTargetRef,
}: {
  observerTargetRef: MutableRefObject<HTMLDivElement>;
}) {
  const filterInitialState = {
    itemsPerPage: 6,
    page: 1,
    id_cursor: '',
    category_id: '',
    corporate_name: '',
  };

  const formRef = useRef<FormHandles>(null);
  const [filterInput, setFilterInput] =
    useState<RequestBody>(filterInitialState);
  const [modalStatus, setModalStatus] = useState(false);
  const { data } = useBannersFindAll();
  const { colors } = useTheme();
  const { data: establishments, isLoading } = useGetEstablishments(filterInput);
  const [responseData, setResponseData] = useState<ResponseData>();

  const responseDataRef = useRef<ResponseData>();
  responseDataRef.current = responseData;

  useEffect(() => {
    if (
      establishments &&
      establishments.info &&
      establishments.info.totalEstablishment > 0
    ) {
      setResponseData(establishments);
    }
  }, [establishments]);

  const handleRefetch = useCallback(() => {
    const {
      info: { totalEstablishment },
    } = responseDataRef.current;

    setFilterInput(prevState => ({
      ...prevState,
      itemsPerPage: Math.min(prevState.itemsPerPage + 3, totalEstablishment),
    }));
  }, [
    responseDataRef,
    responseDataRef.current,
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
          id_cursor: '',
        }));
      }
    },
    [filterInput],
  );

  const handleModalStatus = () => setModalStatus(prevState => !prevState);

  const handleFilter: SubmitHandler = useCallback(
    data => {
      if (!data.filter) {
        setFilterInput(filterInitialState);
        return;
      }

      setFilterInput({ ...filterInitialState, corporate_name: data.filter });
    },
    [filterInput],
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
      {filterInput.corporate_name ? (
        <S.SearchResultsContainer>
          <p>Resultados da pesquisa feita</p>
          {establishments?.establishment.length > 0 &&
            establishments?.establishment.map(
              (establishment: Establishment) => (
                <InlineCard
                  establishment={establishment}
                  key={establishment.id}
                />
              ),
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
            {establishments?.establishment.length > 0 && (
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
            )}
          </S.CommerceContainer>
        </>
      )}
      {isLoading && (
        <S.LoadingContainer>
          <Loading
            icon={PulseLoader}
            color={colors.mediumslateBlue}
            size={10}
          />
          Carregando
        </S.LoadingContainer>
      )}
      {establishments?.establishment.length === 0 && (
        <S.FallbackEstablishmentText>
          Nenhum estabelecimento encontrado
        </S.FallbackEstablishmentText>
      )}
      {modalStatus && <MapModal onClose={handleModalStatus} />}
    </S.StoresContainer>
  );
}
