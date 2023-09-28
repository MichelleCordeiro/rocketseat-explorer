import { Input } from '../Input'

import { Container, Brand, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input placeholder='Pesquisar pelo título' type='text' />

      <Profile to='/profile'>
        <div className="infos">
          <strong>
            Michelle Cordeiro
          </strong>

          <Logout>
            Sair
          </Logout>
        </div>

        <img src="http://github.com/michellecordeiro.png" alt="" />
      </Profile>
    </Container>
  )
}