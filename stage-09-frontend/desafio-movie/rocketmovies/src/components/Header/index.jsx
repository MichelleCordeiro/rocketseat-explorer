import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

import { Input } from '../Input'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Container, Brand, Profile, Logout } from './styles'

export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input placeholder='Pesquisar pelo título' type='text' />

      <Profile to='/profile'>
        <strong>{user.name}</strong>

        <img src={avatarUrl} alt={user.name} />
      </Profile>

      <Logout onClick={signOut}>
        Sair
      </Logout>

    </Container>
  )
}
