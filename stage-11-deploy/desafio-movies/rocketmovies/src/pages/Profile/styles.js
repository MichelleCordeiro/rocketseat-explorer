import styled from 'styled-components'

export const Container = styled.div`
  > header {
    width: 100%;
    height: clamp(11rem, 21vw + 8rem, 14.4rem);

    background-color: ${({ theme }) => theme.COLORS.BG_home_profile};

    > button {
      display: flex;
      align-items: center;
      gap: 1rem;

      padding-top: clamp(3.5rem, 2.5rem + 2.0253vw, 6rem);
      padding-bottom: 6rem;
      padding-left: clamp(1rem, -1.7544rem + 13.7722vw, 14.6rem);

      color: ${({ theme }) => theme.COLORS.PINK};
      background: none;
      border: none;
    }
  }

  @media (max-width: 380px) {
    > form {
      margin-inline: 3rem;
    }
  }
`

export const Avatar = styled.div`
  width: clamp(12rem, 10vw + 8rem, 18.6rem);
  height: clamp(12rem, 10vw + 8rem, 18.6rem);

  margin: auto;
  bottom: clamp(6rem, 0.429rem + 9.524vw, 9rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  > img {
    width: clamp(12rem, 10vw + 8rem, 18.6rem);
    height: clamp(12rem, 10vw + 8rem, 18.6rem);

    border-radius: 50%;
  }

  > label {
    width: clamp(4rem, 4vw + 1rem, 4.8rem);
    height: clamp(4rem, 4vw + 1rem, 4.8rem);
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    bottom: clamp(0rem, 0.1vw + 0.1rem, 1rem);
    right: clamp(0rem, 1vw + 0.1rem, 1rem);
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    cursor: pointer;

    > input {
      display: none;
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS.BG_800_input};
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: auto;
  margin-bottom: 3rem;

  :nth-of-type(3) {
    margin-bottom: 2.4rem;
  }

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }
`