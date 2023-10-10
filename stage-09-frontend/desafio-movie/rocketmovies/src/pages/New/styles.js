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
`

export const Form = styled.form`
  > section {
    padding-block: 0 4rem;
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
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_300_home_p};
    padding-block: 4rem 2.4rem;
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
    padding: 1.6rem;

    > div {
      width: fit-content;
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
      margin-top: 4rem;

      &:first-child {
        background: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }
`