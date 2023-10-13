import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media (max-width: 430px) {
    > form {
      > h1, h2, p {
        text-align: center;
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-block: 0;
  padding-inline: clamp(4rem, 9vw + 1rem, 13.6rem);

  > h1 {
    font-size: clamp(3rem, 1.9rem + 2.4vw, 4.8rem);
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem auto;
    margin-bottom: clamp(3rem, 2.6354rem + 1.8228vw, 4.8rem);
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100_span};
  }

  > a {
    margin-top: 4.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`