import { Container } from './styles'

export function Tag({ title, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      {title}
      {Icon && <Icon size={24} />}
    </Container>
  )
}
