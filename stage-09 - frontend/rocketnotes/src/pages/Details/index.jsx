import { Container, Links, Content } from './styles';
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title='Excluir nota' />
          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ab dolore vero quae obcaecati eius doloremque, iure error eveniet voluptatum quos officia cupiditate aliquid voluptates natus praesentium amet culpa corrupti.</p>

          <Section title='Links úteis'>
            <Links>
              <li>
                <a href='#'>https://rocketseat.com.br</a>
              </li>
              <li>
                <a href='#'>https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title='Marcadores'>
            <Tag title='express' />
            <Tag title='node' />
          </Section>

          <Button title='Voltar' />
        </Content>
      </main>
    </Container>
  );
}