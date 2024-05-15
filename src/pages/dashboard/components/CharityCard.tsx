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
      <tr key={id}>
        <td><p className="charity-name">{charityName}</p></td>
        <td><p className="charity-description">{charityDescription}</p></td>
        <td><p className="charity-starter">{createdBy}</p></td>
        <td><p className="created-at">{createdAt}</p></td>
        <td><p className="current-funding">{rupiah(currentFunding)}</p></td>
        <td><p className="target-funding">{rupiah(targetFunding)}</p></td>
        <td>
          <p className="charity-status flex gap-1 items-center">
            <span className={`${ongoing? "text-green-500" : "text-red-500"}`}><GoDotFill /></span> {ongoing ? "Ongoing" : "Inactive"}
          </p>
        </td>
        <td>
          <div className="text-xl cursor-pointer" onClick={showDetailsHandler}>
            { showDetail ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </td>
      </tr>

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