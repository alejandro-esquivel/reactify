import {useContext} from "react";
import PropTypes from "prop-types";
import MediaContext from "../../providers/mediaContext";

function CopyOverlay(props) {
  const { url, mediaId } = props;
  const mediaCTX = useContext(MediaContext);

  const urlCopy = () => {
    navigator.share({
      title: "Reactify",
      text: "Look at this interesting image",
      url: url
    })

  }
  const mediaDelete = () => {
    mediaCTX.onMediaDelete(mediaId);
  }

  return (
    <div
      className='bg-opacity-50 bg-slate-700 transition duration-75 absolute top-0 left-0 flex flex-col xl:flex-row object-cover w-full h-full p-2 m-0 rounded items-center justify-center bg-clip-content'>
      <button
        className="rounded-lg bg-blue-500 text-gray-50 px-4 py-2 hover:ring-blue-300 hover:ring-2 focus:ring-blue-300 focus:ring-2 shadow-lg w-7/12 xl:w-auto"
        onClick={urlCopy} onTouchEnd={urlCopy} tabIndex="0">Copy URL
      </button>
      <button
        className="xl:ml-4 rounded-lg bg-red-500 text-gray-50 px-4 mt-4 xl:mt-0 py-2 hover:ring-red-300 hover:ring-2 focus:ring-blue-300 focus:ring-2 shadow-lg w-7/12 xl:w-auto"
        onClick={mediaDelete} onTouchEnd={mediaDelete} tabIndex="0">Delete Media
      </button>
    </div>
  )
}

export default CopyOverlay;

CopyOverlay.propTypes = {
  url: PropTypes.string,
  mediaId: PropTypes.any
}