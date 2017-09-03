import React, { Component } from 'react'
import axios from 'axios'
import CircularProgress from 'material-ui/CircularProgress';

import ShowStory from './ShowStory'
import { getApiKeys } from './getApiKeys'

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: {},
      attributionText: "",
      loading: true,
    };
  }

  componentDidMount() {
    const characterId = "1009368" // Iron Man
    const ts = "1";
    const { apiKey, hash } = getApiKeys(ts)
    const url = `http://gateway.marvel.com/v1/public/characters/${characterId}/stories`
    axios.get(url, {
      params: {
        "apikey": apiKey,
        "ts": ts,
        "hash": hash,
      }
    }).then((response) => {
        this.setState({
          story: response.data.data.results[1],
          attributionText: response.data.attributionText,
          loading: false
        });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
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
