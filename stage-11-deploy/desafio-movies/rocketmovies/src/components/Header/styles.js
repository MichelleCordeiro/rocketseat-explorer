import { styled } from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  grid-area: header;
  max-width: 111.3rem;
  height: 11.6rem;
  padding-block: 2.4rem;

  position: relative;
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-template-areas:
    ' brand search profile '
    ' brand search logout ';
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BG_900};
  border-bottom: 1px solid #3e3b47;

  @media (max-width: 750px) {
    height: min-content;
    grid-template-areas:
      ' brand profile '
      ' search search ';
    grid-row-gap: 2rem;
    padding-bottom: 1rem;

    > .divSearch {
      padding: 0;

      > div input {
        padding-block: 1rem;
      }
    }

    > .divLogout {
      bottom: 8.6rem;
    }
  }

  @media (max-width: 470px) {
    > div {
      align-self: flex-end;
    }

    > a {
      > strong {
        width: min-content;
        padding: 0 4.5rem 0 0;
      }
      > img {
        display: none;
      }
    }

    > .divLogout {
      right: 0;
      bottom: 8rem;
    }
  }
`

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-self: center;

  > h1 {
    font-size: clamp(1.6rem, 3vw + 0.05rem, 2.4rem);
    font-weight: 700px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Search = styled.div`
  grid-area: search;

  display: flex;
  flex-grow: 1;
  align-items: center;
  padding-inline: 6rem;
`

export const Profile = styled(Link)`
  grid-area: profile;

  display: flex;
  align-items: center;
  justify-content: end;
  text-align: end;

  > strong {
    width: max-content;
    font-size: clamp(1.2rem, 3vw + 0.05rem, 1.6rem);
    align-self: start;
    padding-top: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100_h1_input_active};
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    margin-left: 1rem;

    border-radius: 50%;
    border: 1px solid #948f99;
  }
`

export const Logout = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 7.5rem;

  grid-area: logout;
  justify-self: start;

  font-size: clamp(1.4rem, 3vw + 0.05rem, 1.6rem);
  color: ${({ theme }) => theme.COLORS.GRAY_200_input};
  background: none;
  border: none;
`