import rupiah from '../../../utils/priceConverter';
import { Key, useState } from 'react';
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface charityCardInterface {
  id: Key,
  charityName: string,
  charityDescription: string,
  createdBy: string,
  createdAt: string,
  currentFunding: number,
  targetFunding: number,
}


const CharityCard = ({ id, charityName, charityDescription, createdBy, createdAt, currentFunding, targetFunding }: charityCardInterface) => {
  const [showDetail, setShowDetail] = useState(false)

  const showDetailsHandler = () => {
    setShowDetail(prevDetail => !prevDetail);
  }

  return ( 
    <div className="charity-card py-4 flex gap-4 items-center justify-around border-b border-neutral-400 shadow-sm" key={id}>
      <p className="charity-name">{charityName}</p>
      <p className="charity-description">{charityDescription}</p>
      <p className="charity-starter">{createdBy}</p>
      <p className="created-at">{createdAt}</p>
      <p className="current-funding">{rupiah(currentFunding)}</p>
      <p className="target-funding">{rupiah(targetFunding)}</p>
      <p className="charity-status flex gap-1 items-center">
        <span className="text-green-500"><GoDotFill /></span> Ongoing
      </p>
      <div className="text-xl cursor-pointer" onClick={showDetailsHandler}>
        { showDetail ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
    </div>
   );
}
 
export default CharityCard;