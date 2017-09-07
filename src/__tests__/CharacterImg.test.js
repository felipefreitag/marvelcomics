import React from 'react'
import axios from 'axios'
import { shallow, mount } from 'enzyme'
import CircularProgress from 'material-ui/CircularProgress';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { getApiKeys, convertToHTTPS } from '../functions'
import CharacterImg from '../CharacterImg'

describe('CharacterImg', () => {
  let _wrapper;
  const character = {
    name: "character",
    resourceURI: "http://example.com"
  }

  beforeEach(() => {
    const muiTheme = getMuiTheme()
    _wrapper = shallow(<CharacterImg character={character} />, {context: {muiTheme}})
  });

  it('shows a circular progress icon when loading', () => {
    _wrapper.setState({ loading: true })
    expect(_wrapper.find(CircularProgress).length).toBe(1)
  })

  it('shows an image after loading', () => {
    _wrapper.setState({ loading: false })
    expect(_wrapper.find('img').length).toBe(1)
  })

  it('calls loadImg after mounting', () => {
    const spy = jest.spyOn(CharacterImg.prototype, 'loadImg')
    const image = _wrapper.instance()
    image.componentDidMount()
    expect(spy).toHaveBeenCalled()
  })
})
