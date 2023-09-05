import Reaction from "./Reaction";
import PropTypes from "prop-types";

function ReactionGallery(props) {
  const { media } = props;
  const reactionList = media.map((reaction) => {
    return <Reaction key={reaction.id} className="w-4/12 px-2 py-2 rounded" reaction={reaction} ></Reaction>
  });

  return (
    <section className="w-11/12 mx-auto bg-slate-700 lg:w-6/12 min-h-[5rem] flex flex-row mt-8 justify-between flex-wrap p-2">
      {reactionList}
    </section>
  )
}

ReactionGallery.propTypes = {
  media: PropTypes.array,
}

export default ReactionGallery;