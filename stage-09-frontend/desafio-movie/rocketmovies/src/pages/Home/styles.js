import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 95vh;

  display: grid;
  grid-template-areas:
    'header'
    'sectionTitle'
    'content';
  grid-template-rows: 11.6rem auto;
  padding-inline: clamp(3rem, 1rem + 6vw, 12.3rem);
`

export const SectionTitle = styled.div`
  grid-area: sectionTitle;

  display: flex;
  align-items: center;

  > Section h2 {
    margin-bottom: 0;
  }

  > button {
    width: 25.7rem;
    margin-top: 0;
    gap: 0.8rem;
  }
`

export const Content = styled.div`
  grid-area: content;
  padding-right: 1.2rem;

  overflow-y: auto;

  :last-child {
    margin-bottom: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    padding-left: 10.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`;