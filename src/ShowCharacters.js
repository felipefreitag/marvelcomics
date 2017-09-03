import React from 'react'
import Media from 'react-media'
import { GridList, GridTile } from 'material-ui/GridList'
import CharacterImg from './CharacterImg'

const ShowCharacters = ({ characters }) => (
  <div>
    <h2 style={{ marginLeft: '1rem' }}>Characters:</h2>

    { characters ?
      <Media query="(max-width: 576px)">
        { matches => matches ? (
          <GridList cellHeight="auto" cols={2}>
            {characters.items.map(character => (
              <GridTile
                key={character.name}
                title={character.name}
                titleStyle={{
                  fontSize: '1rem',
                }}
              >
                <CharacterImg character={character}/>
              </GridTile>
            ))}
          </GridList>
        ) : (
          <GridList cellHeight="auto" cols={3}>
            {characters.items.map(character => (
              <GridTile
                key={character.name}
                title={character.name}
                titleStyle={{
                  fontSize: '2rem',
                }}
              >
                <CharacterImg character={character}/>
              </GridTile>
            ))}
          </GridList>
        )}
      </Media>
      :
      "No characters found"
    }
  </div>
)

export default ShowCharacters
