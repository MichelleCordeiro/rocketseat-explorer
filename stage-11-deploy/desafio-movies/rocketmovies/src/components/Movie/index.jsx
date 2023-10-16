import { Tag } from '../Tag'
import { Stars } from '../Stars'

import { Container } from './styles'

export function Movie({ data, ...rest }) {  
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <Stars rating={data.rating} />
      {/* {data.rating && (
        <div className='stars'>
          {[...Array(data.rating)].map((star, index) => (
            <FiStar key={index} fill='#FF859B' stroke='#FF859B' />
            ))}
          {[...Array(starOff - rating)].map((star, index) => (
            <FiStar key={index} stroke='#FF859B' />
            ))}
        </div>
      )} */}

      <p>{data.description}</p>

      {data.tags && (
        <div>
          {data.tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </div>
      )}
    </Container>
  )
}