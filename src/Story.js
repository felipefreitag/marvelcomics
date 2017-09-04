import React, { Component } from 'react'
import axios from 'axios'
import CircularProgress from 'material-ui/CircularProgress'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IconNext from 'material-ui/svg-icons/image/navigate-next'

import ShowStory from './ShowStory'
import { getApiKeys, randomize } from './functions'

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: {},
      attributionText: "",
      loading: true,
    };
  }

  loadStory() {
    this.setState({ loading: true })
    const characterId = "1009368" // Iron Man
    const total = 2915 // Total number of stories for Iron Man
    const storyNum = randomize(total)
    const ts = "1";
    const { apiKey, hash } = getApiKeys(ts)
    const url = `https://gateway.marvel.com/v1/public/characters/${characterId}/stories`
    axios.get(url, {
      params: {
        "apikey": apiKey,
        "ts": ts,
        "hash": hash,
        "limit": 1,
        "offset": storyNum
      }
    }).then((response) => {
        this.setState({
          story: response.data.data.results[0],
          attributionText: response.data.attributionText,
          loading: false
        });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    this.loadStory();
  }

  render() {
    return (
      <div>
        { this.state.loading ?
            <div style={{ textAlign: 'center', marginTop: '3rem'}}>
              <CircularProgress size={80} thickness={5}/>
            </div>
          :
            <div>
              <ShowStory story={ this.state.story }/>
              <FloatingActionButton
                backgroundColor='red'
                onClick={() => this.loadStory() }
                style={{
                  float: 'right',
                }}
              >
                <IconNext />
              </FloatingActionButton>
              <div style={{
                textAlign: 'center',
                width: '100%',
                backgroundColor: 'black',
                color: 'white',
                padding: '5px 0',
                marginTop: '3rem',
              }}>
                <p>{ this.state.attributionText }</p>
              </div>

            </div>
        }
      </div>
    );
  }
}

export default Story
