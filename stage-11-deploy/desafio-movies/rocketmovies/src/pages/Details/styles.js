import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 111.3rem;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-areas:
    'header'
    'btns'
    'content';
  grid-template-rows: 11.6rem min-content auto;
  padding: 0 3rem 6rem 3rem;

  > .btns {
    grid-area: btns;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 4rem 2rem;

    > .btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${({ theme }) => theme.COLORS.PINK};
      background: none;
      border: none;
    }
  }

  @media (max-width: 750px) {
    grid-template-rows: 11.6rem fit-content auto;

    > .btns {
      margin-top: 9rem;
    }
  }

  @media (max-width: 470px) {
    > .btns {
      margin-top: 6rem;
    }

    > .divContent {
      > .divSectionTitle {
        display: flex;
        flex-direction: column;
        align-items: start;

        > h1 {
          padding-bottom: 0rem;
        }

        > div {
          > .stars {
            padding-bottom: 3rem;
          }

          > svg {
            margin-left: 0;
          }
        }
      }

      > .tags {
        padding-block: 2rem 4rem;
      }
    }
  }
`

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  > .tags {
    display: inline-flex;
    padding-block: 4rem;
    flex-wrap: wrap;
    gap: 1rem;
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
    margin: 11rem 10.8rem 0 0;
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
    font-size: clamp(1.8rem, 3vw + 1rem, 3.6rem);

    padding: 1.4rem 1rem 3.4rem 0;
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