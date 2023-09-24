import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    'header'
    'linkVoltar'
    'content';
  grid-template-rows: 11.6rem min-content auto;
  padding-inline: clamp(3rem, 1rem + 6vw, 12.3rem);
  padding-bottom: 6rem;

  > .linkVoltar {
    grid-area: linkVoltar;
    display: flex;
    align-items: center;
    justify-self: start;
    gap: 0.8rem;
    padding-block: 4rem 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  > .tags {
    margin-block: 4rem;
  }

  > p {
    text-align: justify;
    padding-right: 1.6rem;
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

export const SectionTitle = styled.div`
  display: flex;
  gap: 1rem;

  > section {
    width: fit-content;
    margin: 0;
    margin-bottom: 2.4rem;

    > h2 {
      margin: 0;
      padding: 0 2rem 0 0;
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};

    align-self: center;
    margin-bottom: 2.4rem;
  }

  > div {
    display: flex;
    align-items: center;
    margin-right: 8px;

    :first-child {
      margin-right: 8px;
    }

    > img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
