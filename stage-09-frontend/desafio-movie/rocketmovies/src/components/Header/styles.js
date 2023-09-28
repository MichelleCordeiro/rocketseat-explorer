import { styled } from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  grid-area: header;

  width: 100%;
  height: 11.6rem;
  padding-block: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(2rem, 0.5rem + 10vw, 6.4rem);

  background: ${({ theme }) => theme.COLORS.BG_900};
  border-bottom: 1px solid #3e3b47;
`

export const Brand = styled.div`
  > h1 {
    font-size: 2.4rem;
    font-weight: 700px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: end;
  text-align: end;

  > .infos {
    width: max-content;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.COLORS.WHITE_100_h1_input_active};

    margin-right: 1rem;
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 50%;
    border: 1px solid #948f99;
  }
`;

export const Logout = styled(Link)`
    color: ${({ theme }) => theme.COLORS.GRAY_200_input};
`