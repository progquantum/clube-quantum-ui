import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

export const Container = styled.div`
  width: 100%;
  max-width: 59.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`

export const Wrapper = styled(Skeleton)`
  width: 22.5rem;
  height: 50px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;

`
export const DivSelectPlan = styled(Skeleton)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem 1.5rem;
  gap: 1.5rem;
  width: 21.875rem;
  height: 11.5625rem;
  border-radius: .9375rem;
  margin: 48px 0;

  @media(max-width: 910px) {
    margin: 48px 0 0 0;
  }

  @media(max-width: 460px ){
    margin: 48px 0 0 0;
    width: 330px;
  }
`

export const PlansContents = styled.div`
  width: 100%;
  gap: 25px;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 910px) {
    flex-direction: column;
    margin-top: 1.7rem;
  }

`

export const PlanContentsWrapper = styled(Skeleton)`
  width: 287.33px;
  height: 792px;
  padding: 3.75rem 1.875rem 5rem;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 1024px) {
    width: 218px;
  }

  @media(max-width: 910px) {
    width: 350px;
  }

  @media(max-width: 460px ){
    width: 20.625rem;
  }
`

export const PlanContentsWrapperMidle = styled(PlanContentsWrapper)`
  transform: scale(1.1);
  margin: 0 1.25rem;

`
