import { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { MovieItem } from '../../components/MovieItem'

import { Container, Form } from './styles'

export function New() {
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }
  return (
    <Container>
      <Header />

      <Link to='/' className='linkVoltar'>
        <FiArrowLeft />
        Voltar
      </Link>

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
            {
              tags.map((tag, index) => (
                <MovieItem 
                    key={String(index)}
                    value={tag}
                    onClick={( ) => handleRemoveTag(tag)}
                  />
              ))
            }
            <MovieItem
              isNew
              placeholder='Nova tag'
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
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
