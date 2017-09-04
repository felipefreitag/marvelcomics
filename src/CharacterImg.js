import React, { Component } from 'react'
import axios from 'axios'
import CircularProgress from 'material-ui/CircularProgress';
import { getApiKeys, convertToHTTPS } from './functions'

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

  loadImg() {
    const ts = "2";
    const { apiKey, hash } = getApiKeys(ts)
    const url = convertToHTTPS(this.state.resourceURI)
    axios.get(url, {
      params: {
        "apikey": apiKey,
        "ts": ts,
        "hash": hash,
      }
    }).then((response) => {
        const thumbnail = response.data.data.results[0].thumbnail
        const path = convertToHTTPS(thumbnail.path)
        this.setState({
          thumbnailURL: `${path}.${thumbnail.extension}`,
          loading: false,
        })
      })
      .catch((error) => {
        this.setState({ loading: false })
      });
  }

  componentDidMount() {
    this.loadImg()
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
