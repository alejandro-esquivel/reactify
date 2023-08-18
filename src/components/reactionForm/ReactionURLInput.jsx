

const onMediaSubmit = (e) => {
  e.preventDefault();
}

function ReactionUrlInput(){

  return (
    <div className="flex flex-row justify-center w-full min-h-full gap-0 shadow-lg focus:shadow-slate-600 shadow-slate-300">
      <input type="url"
        name="mediaURL"
        id="mediaURL"
        className="relative z-20 w-11/12 px-4 text-xl transition duration-150 border-none rounded-l-lg focus:outline-green-400 focus:outline-2 bg-slate-700 text-gray-50 peer" />
      <button id="mediaSubmit" title="Submit media" className="relative z-10 flex items-center justify-center w-1/12 rounded-r bg-slate-700 peer-focus:outline-green-400 peer-focus:outline-2 "
        onClick={onMediaSubmit}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 stroke-gray-50">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      </button>
    </div>
  )
}


export default ReactionUrlInput;