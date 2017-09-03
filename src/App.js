import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import PageLimiter from './PageLimiter'
import Story from './Story'

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <PageLimiter>
          <AppBar
            title="Marvel Stories - Iron Man"
            showMenuIconButton={false}
            style={{
              backgroundColor: 'black',
            }}
          />
          <Story props={this.props} />
        </PageLimiter>
      </MuiThemeProvider>
    );
  }
}

export default App;
