import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 111.3rem;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-areas:
    'header'
    'linkVoltar'
    'content';
  grid-template-rows: 11.6rem min-content auto;
  padding: 0 3rem 6rem 3rem;

  > .linkVoltar {
    grid-area: linkVoltar;
    display: flex;
    align-items: center;
    justify-self: start;
    gap: 0.8rem;
    margin-top: 5rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    background: none;
    border: none;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  > .tags {
    padding-block: 4rem;
  }

  > p {
    line-height: 2.5rem;
    text-align: justify;
    padding-right: 1rem;
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
`

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  > h1 {
    width: fit-content;
    font-size: 3.6rem;

    padding: 3.4rem 1rem 3.4rem 0;

    margin: 0;
  }

  > svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > div {
    display: flex;
    align-items: center;

    > img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      margin-right: 0.8rem;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-inline: 0.8rem;
    }
  }
`