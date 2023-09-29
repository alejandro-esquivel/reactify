import { useContext  } from 'react';
import Reaction from "./Reaction";
import MediaContext from '../../providers/mediaContext';

function ReactionList() {
  const mediaCTX = useContext(MediaContext);

  return (
    <>
      {mediaCTX.mediaList.map(reaction => <Reaction key={reaction.id} reaction={reaction} id={reaction.id} ></Reaction>)}
    </>
  )
}

export default ReactionList;

