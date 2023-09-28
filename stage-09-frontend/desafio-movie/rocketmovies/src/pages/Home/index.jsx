import { FiPlus } from 'react-icons/fi'
import { Header }from '../../components/Header'
import { Section }  from '../../components/Section'
import { Movie } from '../../components/Movie'

import { Container, SectionTitle, NewMovie, Content } from './styles'

export function Home() {
  return (
    <Container>
      <Header />

      <SectionTitle>
        <Section title='Meus filmes' />

        <NewMovie to='new'>
          <FiPlus />
          Adicionar filme
        </NewMovie>
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
              { id: '2', name: 'Drama' }
            ]
          }}
        />

        <Movie
          data={{
            title: 'Raised by Wolves',
            rating: '2',
            description:
              'Do mestre contador de histórias e cineasta Ridley Scott, Raised by Wolves centra-se em dois andróides encarregados de criar crianças humanas em um misterioso planeta virgem. À medida que a crescente colónia de humanos ameaça ser dilacerada por diferenças religiosas, os andróides aprendem que controlar as crenças dos humanos é uma tarefa difícil e traiçoeira.',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Suspense' },
              { id: '3', name: 'Drama' },
              { id: '4', name: 'Fantasia' }
            ]
          }}
        />

        <Movie
          data={{
            title: 'Westworld',
            rating: '3',
            description:
              'Westworld é um parque de diversões futurista que permite a seus visitantes viverem suas fantasias utilizando uma consciência artificial. Independentemente de quão ilícita a fantasia possa ser, não há consequências para os visitantes do parque. Situado na interseção do futuro próximo e do passado reimaginado, explore um mundo em que todo apetite humano pode ser desfrutado sem conseqüências.',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Mistério' },
              { id: '3', name: 'Drama' }
            ]
          }}
        />
      </Content>
    </Container>
  );
}