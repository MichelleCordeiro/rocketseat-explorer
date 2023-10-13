import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Container, Brand, Search, Profile, Logout } from './styles'

export function Header({ children }) {
  const { signOut, user } = useAuth()

    const navigate = useNavigate()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

    function handleSignOut() {
      navigate('/')
      signOut()
    }

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      {/* <Input 
        placeholder='Pesquisar pelo título' 
        type='text' 
        onChange={e => setSearch(e.target.value)}
      /> */}
      <Search className='divSearch'>{children}</Search>

      <Profile to='/profile'>
        <strong>{user.name}</strong>

        <img src={avatarUrl} alt={user.name} />
      </Profile>

      <Logout className='divLogout' onClick={handleSignOut}>Sair</Logout>
    </Container>
  )
}
