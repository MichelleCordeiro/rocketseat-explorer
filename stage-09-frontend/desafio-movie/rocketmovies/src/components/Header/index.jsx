import { Input } from '../Input'

import { Container, Brand, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input placeholder='Pesquisar pelo título' type='text' />

      <Profile>
        <div className="infos">
          <strong>
            Michelle Cordeiro
          </strong>

          <a href="/">sair</a>
        </div>

        <img src="http://github.com/michellecordeiro.png" alt="" />
      </Profile>
    </Container>
  )
}