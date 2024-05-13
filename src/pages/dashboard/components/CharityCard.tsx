import rupiah from '../../../utils/priceConverter';
import { Key, useState } from 'react';
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from '../../../components/Button';

interface charityCardInterface {
  id: Key,
  charityName: string,
  charityDescription: string,
  createdBy: string,
  createdAt: string,
  currentFunding: number,
  targetFunding: number,
  ongoing: boolean
}


const CharityCard = ({ id, charityName, charityDescription, createdBy, createdAt, currentFunding, targetFunding, ongoing }: charityCardInterface) => {
  const [showDetail, setShowDetail] = useState(false)

  const showDetailsHandler = () => {
    setShowDetail(prevDetail => !prevDetail);
  }

  return ( 
    <>
      <div className="charity-card p-4 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between border-b border-neutral-400 shadow-sm" key={id}>
        <p className="charity-name">{charityName}</p>
        <p className="charity-description">{charityDescription}</p>
        <p className="charity-starter">{createdBy}</p>
        <p className="created-at">{createdAt}</p>
        <p className="current-funding">{rupiah(currentFunding)}</p>
        <p className="target-funding">{rupiah(targetFunding)}</p>
        <p className="charity-status flex gap-1 items-center">
          <span className={`${ongoing? "text-green-500" : "text-red-500"}`}><GoDotFill /></span> {ongoing ? "Ongoing" : "Inactive"}
        </p>

        <div className="text-xl cursor-pointer" onClick={showDetailsHandler}>
          { showDetail ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      <div className={`charity-detail overflow-hidden transition-all ease-in-out grid ${showDetail ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="charity-detail-content overflow-hidden">
          <p className="text-2xl mb-4">Charity Roadmap:</p>

          <div className="roadmap px-4">
            RESERVED FOR ROADMAP
          </div>

          <div className="edit-delete-button-container w-full mt-8 flex gap-2 justify-end">
            <Button onClick={undefined} type="button" text="Edit"/>
            <Button onClick={undefined} type="button" text="Delete"/>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default CharityCard;