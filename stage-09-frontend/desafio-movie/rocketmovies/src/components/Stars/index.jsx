import { FiStar } from 'react-icons/fi'

import { Container } from './styles'

export function Stars({ rating }) {
  return (
    <Container>
      {
        <div className='stars'>
          {[...Array(rating)].map((star, index) => (
            <FiStar key={index} fill='#FF859B' />
            ))}
          {[...Array(5 - rating)].map((star, index) => (
            <FiStar key={index} />
          ))}
        </div>  
      }
    </Container>
  )
}