import PropTypes from "prop-types";

function CopyOverlay(props) {
  const { url } = props;

  const urlCopy = () => {
    navigator.clipboard.writeText(url);
  }

  return (
    <div className="absolute top-0 left-0 items-center justify-center hidden object-cover w-full h-full p-2 m-0 transition duration-75 bg-opacity-50 rounded bg-slate-700 lg:flex bg-clip-content ">
        <button className="block px-12 py-8 text-xl bg-green-500 rounded-lg shadow-lg text-gray-50 hover:ring-green-300 hover:ring-2 focus:ring-green-300 focus:ring-2" onClick={urlCopy}>Copy URL</button>
      </div>
  )
}

export default CopyOverlay;

CopyOverlay.propTypes = {
  url: PropTypes.string,
}