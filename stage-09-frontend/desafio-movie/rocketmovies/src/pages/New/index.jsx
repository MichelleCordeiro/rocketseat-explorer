import { FiArrowLeft } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { MovieItem } from '../../components/MovieItem'

import { Container, Form } from './styles'

export function New() {
  return (
    <Container>
      <Header />

      <a className='linkVoltar' href='/'>
        <FiArrowLeft />
        Voltar
      </a>

      <main>
        <Form>
          <Section title='Novo filme'></Section>

          <div>
            <Input placeholder='Título' type='text' />
            <Input placeholder='Sua nota (de 0 a 5)' type='text' />
          </div>
          <Textarea placeholder='Observações' type='text' />

          <h3>Marcadores</h3>
          <div className='tags'>
            <MovieItem value='Drama' />
            <MovieItem value='Ficção Científica' />
            <MovieItem isNew placeholder='Novo marcardor' />
          </div>

          <div className='btns'>
            <Button title='Excluir filme' />
            <Button title='Salvar alterações' />
          </div>
        </Form>
      </main>
    </Container>
  );
}