interface updatesContent {
  updateNumber: number,
  updateName: string
}

const UpdatesContent = ({ updateName, updateNumber }: updatesContent) => {
  return ( 
    <article className="charity-updates-card border border-slate-500 shadow-lg py-20 px-12 relative z-1">
      <div className="p-8 bg-green-600 absolute rounded-full -left-8 top-6"></div>
      <h2 className="text-slate-600 lg:text-xl">Update #{updateNumber}</h2>

      <h4 className="text-neutral-950 lg:text-3xl mt-6">{updateName}</h4>
    </article>
  );
}
 
export default UpdatesContent;