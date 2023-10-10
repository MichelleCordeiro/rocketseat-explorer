import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { FiArrowLeft, FiClock } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Tag } from '../../components/Tag'
import { Stars } from '../../components/Stars'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Container, Content, SectionTitle } from './styles'

export function Details() {
  const [data, setData] = useState(null)

  const { user } = useAuth()
  const params = useParams()
  const navigate = useNavigate()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  function handleBack() {
    navigate('/')
  }

  useEffect(() => {
    async function fetchMovieNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchMovieNote()
  }, [])

  return (
    <Container>
      <Header>
        {/* <Input placeholder='Pesquisar pelo título' onChange={e => setSearch(e.target.value)} /> */}
      </Header>

      <button className='linkVoltar' onClick={handleBack}>
        <FiArrowLeft />
        Voltar
      </button>

      {data && (
        <Content>
          <SectionTitle>
            <h1 className='movieTitle'>{data.title}</h1>

            <Stars rating={data.rating} />
          </SectionTitle>

          <SectionTitle>
            <div>
              <img src={avatarUrl} alt={user.name} />
              Por {user.name}
            </div>

            <div>
              <FiClock />
              {data.updated_at}
            </div>
          </SectionTitle>

          {data.tags && (
            <div className='tags'>
              {data.tags.map(tag => (
                <Tag 
                  key={String(tag.id)} 
                  className='tag' 
                  title={tag.name} 
                />
              ))}
            </div>
          )}

          <p>{data.description}</p>
        </Content>
      )}
    </Container>
  )
}
