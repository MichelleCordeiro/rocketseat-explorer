import { FiPlus } from 'react-icons/fi'
import { Header }from '../../components/Header'
import { Section }  from '../../components/Section'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'

import { Container, SectionTitle, Content } from './styles'

export function Home() {
  return (
    <Container>
      <Header />

      <SectionTitle>
        <Section title='Meus filmes' />

        <Button icon={FiPlus} title='Adicionar filme' />
      </SectionTitle>

      <Content>
        <Movie
          data={{
            title: 'Interestellar',
            rating: '4',
            description:
              'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência ...',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' }
            ]
          }}
        />

        <Movie
          data={{
            title: 'Interestellar',
            rating: '2',
            description:
              'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência ...',
            tags: [
              { id: '1', name: 'Comédia' },
              { id: '3', name: 'Ação' }
            ]
          }}
        />

        <Movie
          data={{
            title: 'Interestellar',
            rating: '3',
            description:
              'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência ...',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Animaçao' },
              { id: '3', name: 'Família' }
            ]
          }}
        />
      </Content>
    </Container>
  );
}