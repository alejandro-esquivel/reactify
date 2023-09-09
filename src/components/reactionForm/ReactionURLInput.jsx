import PropTypes from 'prop-types'
import { useRef } from 'react';


function ReactionUrlInput(props) {
  const { reactionSubmit } = props;
  const url = useRef(null);

  const onMediaSubmit = (e) => {
    e.preventDefault();
    if (url.current.value.length > 0) {
      reactionSubmit(url.current.value)
      url.current.value = '';
    }
  }

  return (
    <div className="relative flex flex-row justify-center w-full min-h-full gap-0 shadow-lg 0shadow-slate-600 shadow-slate-300">
      <input type="url"
        name="mediaURL"
        id="mediaURL"
        ref={url}
        className="relative w-full px-4 text-xl transition duration-150 border-none rounded-lg focus:ring-slate-400 focus:ring-4 focus:outline-none bg-slate-700 text-gray-50 " />
      <button id="mediaSubmit" title="Submit media" className="absolute right-2.5 bottom-2.5 flex items-center justify-center  rounded-lg bg-blue-500 text-gray-50 px-4 py-1.5 hover:ring-blue-300 hover:ring-2 hover:outline-none focus:outline-none focus:ring-blue-300 focus:ring-2 "
        onClick={onMediaSubmit}>
        Add media
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ml-2 stroke-gray-50">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  )
}


export default ReactionUrlInput;

ReactionUrlInput.propTypes = {
  reactionSubmit: PropTypes.func,
}