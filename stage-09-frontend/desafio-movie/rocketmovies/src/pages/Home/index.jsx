import { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

import { Header }from '../../components/Header'
import { Section }  from '../../components/Section'
import { Movie } from '../../components/Movie'

import { api } from '../../services/api'

import { Container, SectionTitle, NewMovie, Content } from './styles'

export function Home() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }
    fetchNotes()
  }, [search])
  
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
        {
          notes.map(note => (
            <Movie
              key={String(note.id)}
              data={note}
            />
          ))
        }
      </Content>
    </Container>
  )
}