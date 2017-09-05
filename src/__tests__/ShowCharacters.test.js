import React from 'react'
import { shallow } from 'enzyme'
import ShowCharacters from '../ShowCharacters'

describe('ShowCharacters', () => {
  it('renders without crashing', () => {
    shallow(<ShowCharacters />)
  })
})
