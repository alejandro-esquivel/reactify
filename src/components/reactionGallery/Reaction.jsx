import PropTypes from "prop-types";


function Reaction(props) {
  const reaction = props.reaction;

  return (
    <article className={props.className}>
      <img src={reaction.url} alt="" className="object-cover w-full h-full rounded"/>

    </article>
  )
  // return (
  //   <article style={{ '--image-url': `url(${reaction.url})` }} className={props.className + "w-2/6 h-44 rounded bg-[image:var(--image-url)] "}>

  //   </article>
  // )
}

Reaction.propTypes = {
  className: PropTypes.string,
  reaction: PropTypes.object
}

export default Reaction;