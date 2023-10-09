import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Container, Brand, Search, Profile, Logout } from './styles'

export function Header({ children }) {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

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
      <Search>{children}</Search>

      <Profile to='/profile'>
        <strong>{user.name}</strong>

        <img src={avatarUrl} alt={user.name} />
      </Profile>

      <Logout onClick={signOut}>Sair</Logout>
    </Container>
  );
}
