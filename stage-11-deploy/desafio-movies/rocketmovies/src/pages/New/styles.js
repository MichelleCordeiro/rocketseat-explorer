import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 111.3rem;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'btnVoltar'
    'content';
  padding-inline: 3rem;

  > .btnVoltar {
    grid-area: btnVoltar;
    display: flex;
    align-items: center;
    justify-self: start;
    gap: 0.8rem;
    margin-block: 4rem 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    background: none;
    border: none;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > main {
    grid-area: content;
    padding-right: 1.6rem;
    margin-bottom: 4rem;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
      padding-left: 10.8rem;
    }
    &::-webkit-scrollbar-thumb {
      max-height: 9.6rem;
      background: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 0.8rem;
    }
  }

  @media (max-width: 750px) {
    grid-template-rows: 11.6rem auto;

    > .btnVoltar {
      margin-top: 9rem;
    }
  }

  @media (max-width: 470px) {
    > .btnVoltar {
      margin-top: 6rem;
    }

    > main > form {
      > .tags {
        justify-content: center;

        > div input {
          width: 100%;
        }
      }

      > .btns {
        gap: 1rem;
      }
    }
  }
`

export const Form = styled.form`
  > section {
    padding-block: 0 1rem;
  }

  > textarea {
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
      padding-left: 10.8rem;
    }
    &::-webkit-scrollbar-thumb {
      max-height: 9.6rem;
      background: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 0.8rem;
    }
  }

  > h3 {
    font-size: clamp(1.8rem, 1.8rem + 0.2vw, 2rem);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_300_home_p};
    padding-top: 4rem;
    padding-bottom: clamp(1rem, 0.7165rem + 1.4177vw, 2.4rem);
  }

  > .tags {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 2.4rem;
    row-gap: 1rem;
    border-radius: 0.8rem;

    background: ${({ theme }) => theme.COLORS.BLACK};

    margin: 0;
    padding-inline: 1.6rem;
    padding-top: clamp(1rem, 0.88rem + 0.6vw, 1.6rem);
    padding-bottom: clamp(0rem, 0.27rem + 1vw, 1.6rem);

    > div {
      width: fit-content;

      > input {
        font-size: clamp(1.4rem, 1.3rem + 0.2vw, 1.6rem);
      }
    }
  }

  > .btns {
    display: flex;
    flex-direction: row;
    gap: 4rem;

    &:last-child {
      padding: 0;
    }

    > button {
      color: ${({ theme }) => theme.COLORS.BG_600_header_line};
      margin-top: clamp(1rem, 0.4rem + 3vw, 4rem);
      font-size: clamp(1.4rem, 1.3rem + 0.2vw, 1.6rem);

      &:first-child {
        background: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }
`