import rupiah from '../../../utils/priceConverter';
import { useState } from 'react';
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const CharityCard = () => {
  const [showDetail, setShowDetail] = useState(false)

  const showDetailsHandler = () => {
    setShowDetail(prevDetail => !prevDetail);
  }

  return ( 
    <div className="charity-card py-4 flex gap-4 items-center justify-around border-b border-neutral-400 shadow-sm">
      <p className="charity-name">Charity 1</p>
      <p className="charity-starter">Fachri Achmad Maulana</p>
      <p className="created-at">03 May 2024</p>
      <p className="current-funding">{rupiah(0)}</p>
      <p className="target-funding">{rupiah(2000000)}</p>
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