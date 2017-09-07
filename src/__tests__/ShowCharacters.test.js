import React from 'react'
import { shallow } from 'enzyme'
import Media from 'react-media'
import { GridList, GridTile } from 'material-ui/GridList'
import ShowCharacters from '../ShowCharacters'
import CharacterImg from '../CharacterImg'

describe('ShowCharacters', () => {
  let _wrapper;
  const createMockMediaMatcher = (matches) => () => ({
    matches,
    addListener: () => {},
    removeListener: () => {}
  })
  const character = {
    name: "foo",
  }
  const characters = {
    items: [character],
  }

  it('renders without crashing', () => {
    shallow(<ShowCharacters />)
  })

  describe('with characters props', () => {
    window.testMediaQueryValues = {width:1000}
    it('renders media component', () => {
      _wrapper = shallow(<ShowCharacters characters={characters}/>)
      expect(_wrapper.find(Media).length).toBe(1)
    })
  })
})
