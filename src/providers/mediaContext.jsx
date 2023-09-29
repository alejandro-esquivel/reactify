import { createContext, useEffect } from 'react';
import useLocalStorage from '../utils/useLocalStorage';
import PropTypes from 'prop-types'

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
    url: 'https://i.imgur.com/Qi7JQVe.mp4'
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

const MediaContext = createContext({
  mediaList: [],
  onMediaAdd: () => { },
  onMediaDelete: () => { }
});

export const MediaContextProvider = function (props) {
  const [mediaList, setMediaList] = useLocalStorage('mediaList', exampleMedia);

  const newMediaHandler = function (newMedia) {
    setMediaList(prevMedia => {
      // Get current timestamp to prevent images from having the same ID when someone inputs the same URL twice.
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const newId = newMedia + currentTimestamp;

      return [...prevMedia, { id: newId, url: newMedia }]
    });
  }

  const deleteMediaHandler = function (mediaId) {
    setMediaList(prevMedia => {
      return prevMedia.filter(mediaObject => {
        return mediaObject.id !== mediaId
      })
    });
  }

  return <MediaContext.Provider value={
    {
      mediaList: mediaList,
      onMediaAdd: newMediaHandler,
      onMediaDelete: deleteMediaHandler
    }
  }>{props.children}</MediaContext.Provider>
}

export default MediaContext;

MediaContextProvider.propTypes = {
  children: PropTypes.node,
}