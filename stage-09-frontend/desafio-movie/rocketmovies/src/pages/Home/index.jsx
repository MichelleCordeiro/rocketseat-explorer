import { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

import { Header }from '../../components/Header'
import { Section }  from '../../components/Section'
import { Input } from '../../components/Input'
import { Movie } from '../../components/Movie'

import { api } from '../../services/api'

import { Container, SectionTitle, NewMovie, Content } from './styles'

export function Home() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetcMoviehNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }
    fetcMoviehNotes()
  }, [search])
  
  return (
    <Container>
      <Header>
        <Input
          placeholder='Pesquisar pelo título'
          onChange={e => setSearch(e.target.value)}
        />
      </Header>

      <SectionTitle>
        <Section title='Meus filmes' />

        <NewMovie to='new'>
          <FiPlus />
          Adicionar filme
        </NewMovie>
      </SectionTitle>

      <Content>
        {notes.map(note => (
          <Movie key={String(note.id)} data={note} />
        ))}
      </Content>
    </Container>
  )
}