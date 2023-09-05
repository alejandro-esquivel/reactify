import PropTypes from "prop-types";

function CopyOverlay(props) {
  const { url } = props;
  const { hoverState : isHover } = props;

  const urlCopy = () => {
    navigator.clipboard.writeText(url);
  }

  return (
    <div className={`${isHover ? "bg-opacity-50" : "bg-opacity-0"} bg-slate-700 transition duration-75 absolute top-0 left-0 hidden object-cover w-full h-full p-2 m-0 rounded lg:flex items-center justify-center  bg-clip-content }`}>
      <button className={`${isHover ? "block" : "hidden"} rounded-lg bg-blue-500 peer-focus:outline-green-400 peer-focus:outline-2 text-gray-50 px-4 py-2 hover:ring-blue-300 hover:ring-2 focus:ring-blue-300 focus:ring-2 shadow-lg`} onClick={urlCopy}>Copy URL</button>
    </div>
  )
}

export default CopyOverlay;

CopyOverlay.propTypes = {
  url: PropTypes.string,
  hoverState: PropTypes.bool
}