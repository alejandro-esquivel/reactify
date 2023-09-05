import ReactionUrlInput from "./ReactionURLInput";

function ReactionForm() {
    return (
        <section id="newReaction" className='flex flex-row justify-center w-11/12 h-20 p-2 mx-auto mt-8 lg:w-6/12 lg:mt-48'>
            <ReactionUrlInput />
        </section>
    )
}

export default ReactionForm;