import ReactionUrlInput from "./ReactionURLInput";

function ReactionForm() {
    return (
        <section id="newReaction" className='w-11/12 lg:w-6/12 min-h-[5rem] mx-auto mt-8 lg:mt-48 flex flex-row justify-center p-2'>
            <ReactionUrlInput />
        </section>
    )
}

export default ReactionForm;