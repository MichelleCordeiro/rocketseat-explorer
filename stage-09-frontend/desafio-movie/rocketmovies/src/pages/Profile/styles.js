import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.BG_home_profile};
    
    > button {
      display: flex;
      align-items: center;
      gap: 1rem;
      
      padding: 6.4rem 14.6rem 6rem;
      color: ${({ theme }) => theme.COLORS.PINK};
      background: none;
      border: none;
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 0 auto 3rem;
  gap: 0.8rem;

  :nth-of-type(3) {
    margin-bottom: 2.4rem;
  }

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }
`

export const Avatar = styled.div`
  width: 18.6rem;
  height: 18.6rem;
  margin: -9rem auto 6.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    input {
      display: none;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    bottom: 7px;
    right: 7px;

    cursor: pointer;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.BG_800_input};
  }
`