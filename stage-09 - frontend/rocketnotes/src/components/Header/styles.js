import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  
  height: 10.5rem;
  width: 100%;
  
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-bottom-width: 1px;
  border-bottom-style: solid;

  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.4rem;
    
    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  `

  export const Logout = styled.button`
  border: none;
  background: none;
  
  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
`