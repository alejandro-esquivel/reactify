import Reaction from "./Reaction";
import PropTypes from "prop-types";

function ReactionList(props) {
  const { media } = props;
  return (
    <>
      {media.map(reaction => <Reaction key={reaction.id} reaction={reaction} ></Reaction>)}
    </>
  )
}

export default ReactionList;

ReactionList.propTypes = {
  media: PropTypes.array,
}