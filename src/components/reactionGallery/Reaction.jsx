import PropTypes from "prop-types";
import useIsMobile from "../../utils/useIsMobile";
import { useEffect, useState } from "react";
import CopyOverlay from "./copyOverlay";
import MobileShare from "./MobileShare";

function Reaction(props) {
  const { reaction } = props;
  const [isHover, setIsHover] = useState(false);
  const isMobile = useIsMobile();

  const setHoverEnter = () => {
    setIsHover(true);
  }

  const setHoverLeave = () => {
    setIsHover(false);
  }

  return (
    <article className="relative w-full p-2 rounded lg:w-4/12" onMouseEnter={setHoverEnter} onMouseLeave={setHoverLeave} >
      <img src={reaction.url} alt="" className="object-cover w-full h-full rounded" />
      {isMobile ? <MobileShare /> : <CopyOverlay url={reaction.url} hoverState={isHover} />}
    </article>
  )
}

Reaction.propTypes = {
  className: PropTypes.string,
  reaction: PropTypes.object
}

export default Reaction;