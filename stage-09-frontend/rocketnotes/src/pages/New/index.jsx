import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'

export function New() {
  const [links, setLinks] = useState([]) // guarda todos os links existente
  const [newLink, setNewLink] = useState('') // guarda novo link q vai se adicionado

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('') // após adicionar o novo link reseta o estado p o proximo novo link
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

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

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to='/'>voltar</Link>
          </header>

          <Input placeholder='Título' />

          <Textarea placeholder='Observações' />

          <Section title='Links úteis'>
            {/* exibe os links existentes na tela */}
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                // usa arrow function pq precisa passar um parametro, no handleAddLink chama a função direto
                onClick={() => handleRemoveLink(link)}
              />
            ))}

            {/* adiciona links novos */}
            <NoteItem
              isNew
              placeholder='Novo link'
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title='Marcadores'>
            <div className='tags'>
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={( ) => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem
                isNew
                placeholder='Nova tag'
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title='Salvar' />
        </Form>
      </main>
    </Container>
  )
}