import React from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'
import CircularProgress from 'material-ui/CircularProgress'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IconNext from 'material-ui/svg-icons/image/navigate-next'
import ShowStory from '../ShowStory'
import { getApiKeys, randomize } from '../functions'

import Story from '../Story'

describe('Story', () => {
  it('renders without crashing', () => {
    shallow(<Story />)
  })
})
