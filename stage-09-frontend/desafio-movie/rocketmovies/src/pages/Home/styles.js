import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  'header'
  'sectionTitle'
  'content';
  grid-template-rows: 11.6rem auto;
`

export const SectionTitle = styled.div`
  grid-area: sectionTitle;

  display: flex;
  align-items: center;
  padding-inline: 12.3rem;

  > Section h2 {
    margin-bottom: 0;
  }

  > button {
    width: 25.7rem;
    margin-top: 0;
    gap: 0.8rem;
  }
`

export const Content = styled.div`
  grid-area: content;

  padding-inline: 12.3rem;

  overflow-y: autp;
`