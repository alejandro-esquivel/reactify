import Reaction from "./Reaction";
import PropTypes from "prop-types";

function ReactionGallery(props) {
  const { media } = props;

  const reactionList = media.map((reaction) => {
    return <Reaction key={reaction.id} reaction={reaction} ></Reaction>
  });

  return (
    <section className="flex flex-row flex-wrap justify-between w-10/12 p-2 mx-auto mt-8 mb-16 bg-slate-700 lg:w-9/12 xl:w-7/12 xxl:w-6/12">
      {reactionList}
    </section>
  )
}

ReactionGallery.propTypes = {
  media: PropTypes.array,
}

export default ReactionGallery;