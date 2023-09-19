import { useContext } from 'react';
import PropTypes from "prop-types";
import ReactionList from "./ReactionList";
import MediaContext from "../../providers/mediaContext";

function ReactionGallery(props) {
  const { media } = props;
  const mediaCTX = useContext(MediaContext);

  return (
    <section className="flex flex-row flex-wrap justify-between w-11/12 p-2 mx-auto mt-8 mb-16 shadow-lg bg-slate-700 lg:w-9/12 xl:w-7/12 xxl:w-6/12 shadow-slate-600/50">
      <ReactionList media={mediaCTX.mediaList} />
    </section>
  )
}

ReactionGallery.propTypes = {
  media: PropTypes.array,
}

export default ReactionGallery;