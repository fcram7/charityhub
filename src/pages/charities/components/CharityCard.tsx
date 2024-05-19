import { Key, useState } from 'react';
import CharityCardTemplate1 from "/charity-card-template-1.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import rupiah from '../../../utils/priceConverter';

interface charityCardInterface {
  id: Key,
  charityName: string,
  charityDescription: string,
  createdBy: string,
  createdAt?: string,
  currentFunding: number,
  targetFunding: number,
  ongoing?: boolean
}

const CharityCard = ({ id, charityName, charityDescription, createdBy, currentFunding, targetFunding }: charityCardInterface) => {
  const [showDetails, setShowDetails] = useState(false);

  const showDetailsHandler = () => {
    setShowDetails(prevShowDetails => !prevShowDetails);
  }

  return ( 
    <article className="charity-card border border-neutral-400 shadow-xl rounded-2xl h-full" key={id}>
      <div className="charity-img flex justify-center">
        <img className="w-full" src={CharityCardTemplate1} alt="" />
      </div>
      <div className="charity-description px-4 py-4 flex flex-col gap-4 border-t-2 border-neutral-900">
        <h1 className="text-3xl">{charityName}</h1>
        <p>{charityDescription}</p>
        <div className="kickstarter flex items-center gap-3">
          <p>by: {createdBy}</p>
          <button className="px-2 py-1 text-neutral-50 hover:text-green-700 border hover:border-green-700 rounded-md bg-green-700 hover:bg-neutral-50 transition-all ease-in-out duration-200 flex items-center gap-1">
            <FaWhatsapp /><span> Get in touch</span>
          </button>
        </div>

        <div className={`charity-progress overflow-hidden transition-all ease-in-out grid ${showDetails ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="content overflow-hidden">
            <p>Donated:</p>
            <p className="text-3xl">{`${rupiah(currentFunding)} / ${rupiah(targetFunding)}`}</p>
            <button className="mt-4 px-3 py-2 border hover:border-violet-700 rounded-lg bg-violet-700 hover:bg-neutral-50 text-neutral-50 hover:text-violet-700 transition-all ease-in-out duration-200 w-fit flex items-center gap-2" type="button">
              <BiDonateHeart /> I want to donate!
            </button>
          </div>
        </div>

        <div onClick={showDetailsHandler} className="details cursor-pointer font-instrument text-xl flex items-center gap-1 justify-center">
          {showDetails ? <IoIosArrowUp /> : <IoIosArrowDown />}
          <span>{showDetails ? "Hide" : "Show"} Details</span>
        </div>
      </div>
    </article>
   );
}
 
export default CharityCard;