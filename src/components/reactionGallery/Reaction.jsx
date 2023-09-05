import PropTypes from "prop-types";
//import { useState } from "react";
import useIsMobile from "../../utils/useIsMobile";
import { useEffect } from "react";


function Reaction(props) {
  const reaction = props.reaction;
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile)
      console.log('Is Mobile');
    else
      console.log('Is not Mobile');
  })

  return (
    <article className="relative p-2 rounded w:11/12 lg:w-4/12" >
      <img src={reaction.url} alt="" className="object-cover w-full h-full rounded" />
      <div className="absolute bg-opacity-50 bottom-4 right-4 overlaywrapper text-gray-50 bg-slate-700 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
          <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z" />
        </svg>
      </div>
      <div className="absolute top-0 left-0 hidden w-11/12 bg-opacity-50 h-[95%] lg:block bg-slate-700"></div>

    </article>
  )
}

Reaction.propTypes = {
  className: PropTypes.string,
  reaction: PropTypes.object
}

export default Reaction;