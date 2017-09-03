import React, { Component } from 'react'
import axios from 'axios'
import CircularProgress from 'material-ui/CircularProgress';
import { getApiKeys } from './getApiKeys'

class CharacterImg extends Component {
  constructor(props) {
    super(props);

    this.state={
      name: props.character.name,
      resourceURI: props.character.resourceURI,
      thumbnailURL: "",
      loading: true,
    };
  }

  componentDidMount() {
    const ts = "2";
    const { apiKey, hash } = getApiKeys(ts)
    const url = this.state.resourceURI
    axios.get(url, {
      params: {
        "apikey": apiKey,
        "ts": ts,
        "hash": hash,
      }
    }).then((response) => {
        const thumbnail = response.data.data.results[0].thumbnail
        this.setState({
          thumbnailURL: `${thumbnail.path}.${thumbnail.extension}`,
          loading: false,
        })
      })
      .catch((error) => {
        this.setState({
          loading: false,
        })
      });
  }

  render() {
    return (
      <div>
        { this.state.loading ?
            <div style={{ textAlign: 'center'}}>
              <CircularProgress/>
            </div>
          :
            <img
              src={this.state.thumbnailURL}
              alt={this.state.name}
              style={{
                maxWidth: '100%',
                height: 'auto',
                backgroundSize: 'contain'
              }}
            />
        }
      </div>
    );
  }
}

export default CharacterImg
