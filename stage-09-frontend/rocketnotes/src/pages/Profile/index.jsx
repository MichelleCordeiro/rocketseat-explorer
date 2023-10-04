import { useState } from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from './styles'

export function Profile() {
  const { user } = useAuth()
  
  const [name, setName ] = useState(user.name)
  const [email, setEmail ] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()
  
  return (
    <Container>
      <header>
        <Link to='/'>
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src='https://github.com/michellecordeiro.png' alt='Foto do usuário' />
          <label htmlFor='avatar'>
            <FiCamera />

            <input id='avatar' type='file' />
          </label>
        </Avatar>

        <Input
          placeholder='Nome'
          type='text'
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder='E-mail'
          type='text'
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder='Senha atual'
          type='password'
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder='Nova atual'
          type='password'
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title='Salvar' />
      </Form>
    </Container>
  )
}