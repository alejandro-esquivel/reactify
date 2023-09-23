import ReactionList from "./ReactionList";

function ReactionGallery() {

  return (
    <section className="flex flex-row flex-wrap justify-between w-11/12 p-2 mx-auto mt-8 mb-16 shadow-lg bg-slate-700 lg:w-9/12 xl:w-7/12 xxl:w-6/12 shadow-slate-600/50">
      <ReactionList/>
    </section>
  )
}



export default ReactionGallery;