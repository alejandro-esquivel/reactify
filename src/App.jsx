import { useEffect, useState } from 'react';
import ReactionForm from "./components/reactionForm/ReactionForm"
import ReactionGallery from "./components/reactionGallery/ReactionGallery";
import useLocalStorage from './utils/useLocalStorage';

const exampleMedia = [
  {
    id: 1,
    url: 'https://media.tenor.com/XYoSW_Rk8bIAAAAC/sus-bird-meme.gif'
  },
  {
    id: 2,
    url: 'https://i.gifer.com/2GU.gif'
  },
  {
    id: 3,
    url: 'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif'
  },
  {
    id: 4,
    url: 'https://i.chzbgr.com/full/9204612608/h339C1D32/cat'
  },
  {
    id: 5,
    url: 'https://media.tenor.com/sCsJ0l1gxHUAAAAd/cat-meme.gif'
  },
  {
    id: 6,
    url: 'https://media.tenor.com/FuYhS1n_c0IAAAAC/cat-piano.gif'
  },
]

function App() {
  const [mediaList, setMediaList] = useLocalStorage('mediaList', exampleMedia);

  useEffect(() => {
    localStorage.setItem('mediaList', JSON.stringify(mediaList));
  }, [mediaList])


  const addNewMedia = function (newMedia) {
    setMediaList(prevMedia => {
      return [...prevMedia, { id: newMedia, url: newMedia }]
    });
  }

  return (
    <>
      <ReactionForm onMediaAdd={addNewMedia}></ReactionForm>
      <ReactionGallery media={mediaList}></ReactionGallery>
    </>
  )
}

export default App
