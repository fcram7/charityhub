interface roadmapStatus {
  initiationStatus: boolean,
  fundingStatus: boolean,
  fundingTransferStatus: boolean,
  finishedStatus: boolean
}

const Roadmap = ({ initiationStatus, fundingStatus, fundingTransferStatus, finishedStatus }: roadmapStatus) => {
  
  const roadmapPlaceholders = [
    {
      roadmap: "Initiation",
      roadmapStatus: initiationStatus,
    }, 
    {
      roadmap: "Funding",
      roadmapStatus: fundingStatus,
    }, 
    {
      roadmap: "Funding Transfer",
      roadmapStatus: fundingTransferStatus,
    }, 
    {
      roadmap: "Finished",
      roadmapStatus: finishedStatus
    }, 
  ];
  return ( 
    <div className="charity-roadmap flex justify-between items-center w-full">
      { roadmapPlaceholders && roadmapPlaceholders.map((placeholder, index) => (
        <div className="roadmap-item flex flex-col justify-center items-center relative w-full" key={index}>
          <div className={`${placeholder.roadmapStatus ? "bg-green-500" : "bg-slate-400"} w-10 h-10 px-4 py-2 rounded-full z-10 font-semibold text-slate-100`}>{index + 1}</div>
          <p className="text-slate-900">
            {placeholder.roadmap}
          </p>
        </div>
      ))}
    </div>
   );
}
 
export default Roadmap;