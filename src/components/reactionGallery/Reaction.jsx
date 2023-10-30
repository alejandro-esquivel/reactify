import { useState, useEffect } from "react";
import PropTypes from "prop-types";
//import useIsMobile from "../../utils/useIsMobile";
import CopyOverlay from "./CopyOverlay";
import { LazyLoadImage } from "react-lazy-load-image-component";
//import MobileShare from "./MobileShare";

function Reaction(props) {
  const { reaction, id } = props;
  const [isHover, setIsHover] = useState(false);
  const [isGif, setIsGif] = useState(false);
  //const isMobile = useIsMobile();

  useEffect(() => {
    if ((/.gif|.png|.jpg|.webp/.test(reaction.url))) {
      setIsGif(true);
    }
  }, [])

  const VideoComponent = () => {
    return (
      <video autoPlay muted loop playsInline className="object-cover w-full h-full rounded">
        <source src={reaction.url} />
      </video>
    )
  }

  const setHoverEnter = () => {
    setIsHover(true);
  }

  const setHoverLeave = () => {
    setIsHover(false);
  }


  return (
    <article className="relative w-full p-2 rounded lg:w-4/12" onMouseEnter={setHoverEnter} onMouseLeave={setHoverLeave} >
      {isGif ? <LazyLoadImage src={reaction.url} alt="" className="object-cover w-full h-full rounded" /> : <VideoComponent />}
      {isHover ? <CopyOverlay url={reaction.url} mediaId={id} /> : ''}

      {/*isMobile ? <MobileShare url={reaction.url} /> : <CopyOverlay url={reaction.url} hoverState={isHover} />*/}
    </article>
  )
}

export default Reaction;

Reaction.propTypes = {
  reaction: PropTypes.object,
  id: PropTypes.any
}