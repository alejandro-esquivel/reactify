import { useState } from 'react';
import ReactionForm from "./components/reactionForm/ReactionForm"
import ReactionGallery from "./components/reactionGallery/ReactionGallery";


function App() {
  //const [count, setCount] = useState(0);
  const [mediaList, setMediaList] = useState([
    {
      id: 1,
      url: 'https://media.tenor.com/fTTVgygGDh8AAAAC/kitty-cat-sandwich.gif'
    },
    {
      id: 2,
      url: 'https://media.tenor.com/sCsJ0l1gxHUAAAAd/cat-meme.gif'
    },
    {
      id: 3,
      url: 'https://media.tenor.com/fTTVgygGDh8AAAAC/kitty-cat-sandwich.gif'
    },
    {
      id: 4,
      url: 'https://media.tenor.com/sCsJ0l1gxHUAAAAd/cat-meme.gif'
    },
    {
      id: 5,
      url: 'https://media.tenor.com/fTTVgygGDh8AAAAC/kitty-cat-sandwich.gif'
    },
    {
      id: 6,
      url: 'https://media.tenor.com/sCsJ0l1gxHUAAAAd/cat-meme.gif'
    },
  ]);

  const addNewMedia = function (newMedia) {
    setMediaList(prevMedia => {
      return { ...prevMedia, newMedia }
    })
  }

  return (
    <>
      <ReactionForm onMediaAdd={addNewMedia}></ReactionForm>
      <ReactionGallery media={mediaList}></ReactionGallery>
    </>
  )
}

export default App
