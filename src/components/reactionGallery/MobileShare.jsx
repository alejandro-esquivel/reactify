import PropTypes from "prop-types";

function MobileShare(props) {

  function shareImage() {
    navigator.share({
      title: "Reactify",
      text: "Look at this interesting image",
      url: props.url
    }).then(() => {
      // Success
    }).error((err) => {
      console.log(err);
    });
  }

  return (
    <button className="absolute bg-opacity-50 bottom-4 right-4 overlaywrapper text-gray-50 bg-slate-700 lg:hidden" onTouchEnd={shareImage()}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
        <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z" />
      </svg>
    </button>
  );
}

export default MobileShare;

MobileShare.propTypes = {
  url: PropTypes.string,
}