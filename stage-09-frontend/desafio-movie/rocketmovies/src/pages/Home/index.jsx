import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'

import { Header }from '../../components/Header'
import { Section }  from '../../components/Section'
import { Input } from '../../components/Input'
import { Movie } from '../../components/Movie'

import { api } from '../../services/api'

import { Container, SectionTitle, NewMovie, Content } from './styles'

export function Home({ children }) {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')
  const numberMovies = notes.length

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  // function noMovies() {
  //   const emptyMovies = document.querySelector('.empty')
  //   const hasMovies = document.querySelector('.divContent')

  //   if (notes.length > 0) {
  //     emptyMovies.style.display = 'none'
  //     hasMovies.style.display = 'grid'
  //   } else {
  //     emptyMovies.style.display = 'grid'
  //     hasMovies.style.display = 'none'
  //   }
  // }

  // useEffect(() => {
  //   noMovies()
  // })

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }
    fetchMovieNotes()
  }, [search])
  
  return (
    <Container>
      <Header>
        <Input placeholder='Pesquisar pelo título' onChange={e => setSearch(e.target.value)} />
      </Header>

      <SectionTitle>
        <Section title='Meus filmes' />

        <NewMovie to='new'>
          <FiPlus />
          Adicionar filme
        </NewMovie>
      </SectionTitle>

      {
        (numberMovies > 0) 
        ? 
          <Content className='divContent'>
            {notes.map(note => (
              <Movie key={String(note.id)} data={note} onClick={() => handleDetails(note.id)} />
              ))}
          </Content>
        :
          <div className='empty'>
            <h3>Nenhum filme adicionado</h3>
          </div>
      }

    </Container>
  )
}