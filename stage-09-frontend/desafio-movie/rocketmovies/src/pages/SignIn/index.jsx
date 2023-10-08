import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form, Background } from './styles'

export function SignIn() {
  const data = useAuth()
  console.log(data)

  return (
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para sacompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input placeholder='E-mail' type='text' icon={FiMail} />
        <Input placeholder='Senha' type='password' icon={FiLock} />
        <Button title='Entrar' />

        <Link to='/register'>Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}
