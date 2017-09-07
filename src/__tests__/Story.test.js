import React from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import CircularProgress from 'material-ui/CircularProgress'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IconNext from 'material-ui/svg-icons/image/navigate-next'
import ShowStory from '../ShowStory'
import { getApiKeys, randomize } from '../functions'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Story from '../Story'

describe('Story', () => {
  const character = {
    name: "character",
    resourceURI: "http://example.com"
  }

  it('renders without crashing', () => {
    shallow(<Story />)
  })

  it('shows a circular progress icon when loading', () => {
    const muiTheme = getMuiTheme()
    const _wrapper = shallow(<Story/>, {context: {muiTheme}});
    _wrapper.setState({ loading: true })
    expect(_wrapper.find(CircularProgress).length).toBe(1)
  })

  it('mounts ShowStory and a button after loading', () => {
    const muiTheme = getMuiTheme()
    const _wrapper = shallow(<Story/>, {context: {muiTheme}});
    _wrapper.setState({ loading: false })
    expect(_wrapper.find(ShowStory).length).toBe(1)
    expect(_wrapper.find(FloatingActionButton).length).toBe(1)
  })

  it('calls loadStory after mounting', () => {
    const muiTheme = getMuiTheme()
    const _wrapper = shallow(<Story/>, {context: {muiTheme}});
    const spy = jest.spyOn(Story.prototype, 'loadStory')
    const story = _wrapper.instance()
    story.componentDidMount()
    expect(spy).toHaveBeenCalled()
  })

  it('gets', () => {
    const response = {
      data: {
        data: {
          results: ["foobar"],
        },
        attributionText: "foo",
      }
    }
    let mock = new MockAdapter(axios)
    const characterId = "1009368" // Iron Man
    const total = 2915 // Total number of stories for Iron Man
    const storyNum = randomize(total)
    const ts = "1";
    const { apiKey, hash } = getApiKeys(ts)
    const url = `https://gateway.marvel.com/v1/public/characters/${characterId}/stories`
    mock.onGet(url).reply(200, {response})
    const muiTheme = getMuiTheme()
    const _wrapper = shallow(<Story/>, {context: {muiTheme}});
    let story = _wrapper.instance()
    expect(_wrapper.state()).toEqual({
      story: {},
      attributionText: "",
      loading: true,
    })
    _wrapper.simulate('componentDidMount')
    expect(_wrapper.state()).toEqual({
      story: "foobar",
      attributionText: "foo",
      loading: false,
    })
  })
})
