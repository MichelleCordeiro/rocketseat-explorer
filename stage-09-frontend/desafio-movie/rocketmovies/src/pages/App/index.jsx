import { Button } from '../../components/Button'

import { Container } from './styles'

export function App() {
  return (
    <Container>
        <h1>Rocket Movies</h1>
        <p>Aplicação para sacompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Button title='Entrar' />
    </Container>
  )
}