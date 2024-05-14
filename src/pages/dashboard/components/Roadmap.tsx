const Roadmap = () => {
  const roadmapPlaceholders = ["Initialization", "Funding", "Funding Transfer", "Finished"];
  return ( 
    <div className="charity-roadmap flex justify-between items-center w-full">
      { roadmapPlaceholders?.map((placeholder, index) => (
        <div className="roadmap-item flex flex-col justify-center items-center relative w-full" key={index}>
          <div className="bg-slate-400 w-10 h-10 px-4 py-2 rounded-full z-10 font-semibold">{index + 1}</div>
          <p className="text-slate-900">
            {placeholder}
          </p>
        </div>
      ))}
    </div>
   );
}
 
export default Roadmap;