import { styled } from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  grid-area: header;
  position: relative;

  width: 100%;
  height: 11.6rem;
  padding-block: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(2rem, 0.5rem + 10vw, 6.4rem);

  background: ${({ theme }) => theme.COLORS.BG_900};
  border-bottom: 1px solid #3e3b47;
`;

export const Brand = styled.div`
  > h1 {
    font-size: 2.4rem;
    font-weight: 700px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Search = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: end;
  text-align: end;
  
  > strong {
    width: max-content;
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
  bottom: 3.5rem;
  right: 7.5rem;

  color: ${({ theme }) => theme.COLORS.GRAY_200_input};
  background: none;
  border: none;
  text-align: end;
`