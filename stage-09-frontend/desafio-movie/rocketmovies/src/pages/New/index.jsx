import { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { MovieItem } from '../../components/MovieItem'

import { api } from '../../services/api'

import { Container, Form } from './styles'

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  let [rating, setRating] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    const isRatingValid = rating >= 0 && rating <= 5

    try {
      if (!title) {
        return alert('Digite o título do filme')
      }

      if (!rating) {
        rating = 0
      } else if (!isRatingValid) {
        return alert('A nota do filme deve ser de 0 a 5')
      }

      if (newTag) {
        return alert(
          'Você digitou uma tag, mas não clicou para adicioná-la. Clique para adicionar ou deixe o campo vazio.'
        )
      }

      if (tags.length < 1) {
        return alert('Adicione pelo menos uma tag')
      }

      await api.post('/notes', {
        title,
        rating,
        description,
        tags
      })

      alert('Filme adicionado com sucesso!')
      handleBack()
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível adicionar o filme.')
        console.log('Erro ao adicionar o filme:', error)
      }
    }
  }

  async function handleClearMovie() {
    const clearConfirm = confirm(
      'Deseja mesmo descartar as informações? Todas as informações serão perdidas.'
    )

    if(clearConfirm) {
      handleBack()
    }
  }

  return (
    <Container>
      <Header>
        <Input placeholder='Pesquisar pelo título' onChange={e => setSearch(e.target.value)} />
      </Header>

      <button className='btnVoltar' onClick={handleBack}>
        <FiArrowLeft />
        Voltar
      </button>

      <main>
        <Form>
          <Section title='Novo filme'></Section>

          <div>
            <Input placeholder='Título' onChange={e => setTitle(e.target.value)} />

            <Input placeholder='Sua nota (de 0 a 5)' onChange={e => setRating(e.target.value)} />
          </div>

          <Textarea placeholder='Observações' onChange={e => setDescription(e.target.value)} />

          <h3>Marcadores</h3>
          <div className='tags'>
            {tags.map((tag, index) => (
              <MovieItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
            ))}
            <MovieItem
              isNew
              placeholder='Nova tag'
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>

          <div className='btns'>
            <Button title='Excluir filme' onClick={handleClearMovie} />
            <Button title='Salvar alterações' onClick={handleNewNote} />
          </div>
        </Form>
      </main>
    </Container>
  )
}
