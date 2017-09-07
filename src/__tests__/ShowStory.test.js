import React from 'react'
import { shallow } from 'enzyme'
import ShowStory from '../ShowStory'

describe('ShowStory', () => {
  const story = {
    title: "title",
    description: "description",
    characters: {},
  }
  const attributionText = "foo bar"

  it('renders with props', () => {
    shallow(<ShowStory story={story} attributionText={attributionText} />)
  })

  it('renders without props', () => {
    shallow(<ShowStory story={{}} attributionText={{}} />)
  })

})
