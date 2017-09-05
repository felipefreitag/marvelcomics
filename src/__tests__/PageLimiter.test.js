import React from 'react'
import { shallow } from 'enzyme'
import PageLimiter from '../PageLimiter'

describe('PageLimiter', () => {
  it('renders without crashing', () => {
    shallow(<PageLimiter />)
  })
})
