import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: 59rem;
  margin: 15rem auto;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    'Title Image'
    'Subtitle Image'
    'Text Image'
    'Button Image';

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'Image'
      'Title'
      'Subtitle'
      'Text'
      'Button';
    margin: 6rem 1rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  grid-area: Image;
  width: 100%;
  height: 270px;
`;

export const Title = styled.h1`
  grid-area: Title;
  font-weight: 900;
  font-size: 4rem;
  text-align: center;
  align-self: center;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const Subtitle = styled.p`
  grid-area: Subtitle;
  font-size: 1.2rem;
  margin: 1.2rem 0;
  text-align: center;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const Text = styled.p`
  grid-area: Text;
  text-align: center;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
`;
