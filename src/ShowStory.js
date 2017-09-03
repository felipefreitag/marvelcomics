import React from 'react'
import ShowCharacters from './ShowCharacters'

const ShowStory = ({ story, attributionText }) => {
  const { characters } = story

  return (
    <div>
      <div style={{ marginLeft: '1rem' }}>
        <h1>{ story.title }</h1>
        <h2>Description:</h2>
          { story.description ?
              <p>{story.description}</p>
            :
              <p>No description provided</p>
          }
      </div>

      <ShowCharacters characters={characters} />
    </div>
  );
}

export default ShowStory
