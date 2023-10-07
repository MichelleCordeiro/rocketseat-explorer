import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { api } from '../../services/api'

import { Container, Form } from './styles'

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  
  const [links, setLinks] = useState([]) // guarda todos os links existente
  const [newLink, setNewLink] = useState('') // guarda novo link q vai se adicionado

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }
  
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

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o título da nota.')
    }

    if (newLink) {
      return alert('Você digitou um link, mas não clicou para adicioná-lo. Clique para adicionar ou deixe o campo vazio.')
    }

    if (newTag) {
      return alert(
        'Você digitou uma tag, mas não clicou para adicioná-la. Clique para adicionar ou deixe o campo vazio.'
      )
    }

    await api.post('/notes', {
      title,
      description,
      links,
      tags
    })

    alert('Nota criada com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title='Voltar' onClick={handleBack} />
          </header>

          <Input placeholder='Título' onChange={e => setTitle(e.target.value)} />

          <Textarea placeholder='Observações' onChange={e => setDescription(e.target.value)} />

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
              {tags.map((tag, index) => (
                <NoteItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
              ))}

              <NoteItem
                isNew
                placeholder='Nova tag'
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title='Salvar' onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}