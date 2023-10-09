import { FiStar } from 'react-icons/fi'
import { Tag } from '../Tag'

import { Container } from './styles'

export function Movie({ data, ...rest }) {
  const rating = data.rating
  const starOff = [...Array(rating.length).fill(5)]
  
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.rating && (
        <div className='stars'>
          {[...Array(data.rating)].map((star, index) => (
            <FiStar key={index} fill='#FF859B' stroke='#FF859B' />
            ))}
          {[...Array(starOff - rating)].map((star, index) => (
            <FiStar key={index} stroke='#FF859B' />
            ))}
        </div>
      )}

      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}