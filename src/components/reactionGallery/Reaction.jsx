import PropTypes from "prop-types";
import useIsMobile from "../../utils/useIsMobile";
import { useEffect, useState } from "react";
import CopyOverlay from "./copyOverlay";


function Reaction(props) {
  const { reaction } = props;
  const isMobile = useIsMobile();
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (isMobile)
      console.log('Is Mobile');
    else
      console.log('Is not Mobile');
  },)

  const setHoverEnter = () => {
    setIsHover(true);
  }

  const setHoverLeave = () => {
    setIsHover(false);
  }

  return (
    <article className="relative w-full p-2 rounded lg:w-4/12" onMouseEnter={setHoverEnter} onMouseLeave={setHoverLeave} >
      <img src={reaction.url} alt="" className="object-cover w-full h-full rounded" />
      <div className="absolute bg-opacity-50 bottom-4 right-4 overlaywrapper text-gray-50 bg-slate-700 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
          <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z" />
        </svg>
      </div>
      {isHover ? <CopyOverlay url={reaction.url} /> : ''}
    </article>
  )
}

Reaction.propTypes = {
  className: PropTypes.string,
  reaction: PropTypes.object
}

export default Reaction;