import { useContext } from 'react';
import ReactionForm from "./components/reactionForm/ReactionForm"
import ReactionGallery from "./components/reactionGallery/ReactionGallery";
import MediaContext from './providers/mediaContext';

function App() {
  const mediaCTX = useContext(MediaContext);

  return (
    <>
      <h1 className="mt-16 font-semibold text-center text-7xl text-slate-50 ">Reactify</h1>
      <ReactionForm />
      {mediaCTX.mediaList.length > 0 ? <ReactionGallery /> : ""}
    </>
  )
}

export default App
