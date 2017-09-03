import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

// Declares matchMedia function so tests don't throw a Type Error
window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    }
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
