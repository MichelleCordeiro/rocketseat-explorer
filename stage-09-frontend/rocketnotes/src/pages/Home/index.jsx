import { useState, useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

export function Home() {
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

  function handleTagsSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName)
      
    setTagsSelected(prevState => [...prevState, tagName])
    // console.log(alreadySetected)   // retorna true se a tag já estiver selecionada

    if (alreadySelected) {
      // das tags selecionadas manterá as tags diferentes da clicada, isso vai desmarcar a clicada
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }
    fetchTags()
  }, [])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title='Todos'
            onClick={() => handleTagsSelected('Todos')}
            $isactive={tagsSelected.length === 0}
          />
        </li>

        {tags &&
          tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagsSelected(tag.name)}
                $isactive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input placeholder='Pesquisar pelo título' />
      </Search>

      <Content>
        <Section title='Minhas notas'>
          <Note
            data={{
              title: 'React',
              tags: [
                { id: '1', name: 'react' },
                { id: '2', name: 'react native' }
              ]
            }}
          />
        </Section>
      </Content>

      <NewNote to='/new'>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}