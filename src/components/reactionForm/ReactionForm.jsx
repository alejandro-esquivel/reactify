import ReactionUrlInput from "./ReactionURLInput";
import PropTypes from 'prop-types'

function ReactionForm(props) {
    const { onMediaAdd } = props;

    return (
        <section id="newReaction" className='flex flex-row justify-center w-11/12 h-20 py-2 mx-auto mt-8 lg:w-8/12 xl:w-6/12 lg:mt-48'>
            <ReactionUrlInput reactionSubmit={onMediaAdd} />
        </section>
    )
}

export default ReactionForm;

ReactionForm.propTypes = {
    onMediaAdd: PropTypes.func,
}