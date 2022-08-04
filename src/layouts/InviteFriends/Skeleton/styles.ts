import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

export const Container = styled.main`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.5rem;
  padding: 5rem 2rem;

  @media (min-width: 280px) and (max-width: 767px) {
    gap: 0rem;
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

export const HeadingSkeleton = styled(Skeleton)`
  width: 23rem;
  height: 5.563rem;
  margin-bottom: 2rem;

  @media (min-width: 280px) and (max-width: 767px) {
    align-self: center;
    width: 18rem;
    height: 5rem;
  }
`

export const ButtonSkeleton = styled(Skeleton)`
  width: 19rem;
  height: 5.563rem;
  padding: 1rem 1.875rem;
  margin-block: 2.2rem;
  border-radius: .625rem;

  @media (min-width: 280px) and (max-width: 767px) {
    align-self: center;
    width: 19rem;
    height: 5.25rem;
  }
`

export const ContentSkeleton = styled(Skeleton)`
  width: 24.8rem;
  height: 4.8rem;

  @media (min-width: 280px) and (max-width: 767px) {
    align-self: center;
    width: 19rem;
    height: 4.8rem;
  }
`

export const LinkSkeleton = styled(Skeleton)`
  display: flex;
  width: 17.4rem;
  height: 1.8rem;
  gap: 0.9rem;

  @media (min-width: 280px) and (max-width: 767px) {
    align-self: center;
    width: 17rem;
    height: 1.8rem;
  }
`

export const ImageSkeleton = styled(Skeleton)`
  width: 19.4rem; 
  height: 23.125rem;
  clip-path: polygon(70% 0, 4% 66%, 100% 95%);
  
  @media (min-width: 280px) and (max-width: 767px) {
    display: none;
  }
`
