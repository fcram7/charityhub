import { Key } from 'react';
// import CharityCardTemplate1 from "/charity-card-template-1.svg";
import CharityCardTemplate1 from "/charity-5-medium.jpg";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { FaWhatsapp } from "react-icons/fa";
// import { BiDonateHeart } from "react-icons/bi";
import rupiah from '../../../utils/priceConverter';
import { Link } from 'react-router-dom';

interface charityCardInterface {
  id: Key,
  charityName: string,
  charityDescription: string,
  charityLocation?: string,
  createdBy: string,
  createdAt?: string,
  currentFunding: number,
  targetFunding: number,
  ongoing?: boolean
}

const CharityCard = ({ id, charityName, charityDescription, charityLocation, createdBy, currentFunding, targetFunding }: charityCardInterface) => {
  // const [showDetails, setShowDetails] = useState(false);

  // const showDetailsHandler = () => {
  //   setShowDetails(prevShowDetails => !prevShowDetails);
  // }

  return ( 
    <article className="charity-card border border-neutral-400 shadow-xl h-full" key={id}>
      <div className="charity-img flex justify-center">
        <img className="w-full" src={CharityCardTemplate1} alt="" />
      </div>
      <div className="charity-description px-4 py-4 flex flex-col gap-4 border-t-2 border-neutral-900">
        <Link to={`/charity/${id}`}>
          <h1 className="text-3xl transition-all ease-in-out duration-300 hover:text-slate-500">{charityName}</h1>
        </Link>
        <p>{charityDescription}</p>
        <div className="kickstarter flex flex-col justify-center gap-3">
          <p>by: {createdBy}</p>
          <div className="location border border-gray-500 w-fit rounded-full px-2 py-1">
            <p className="text-xs text-gray-500">{charityLocation}</p>
          </div>
          {/* <button className="px-2 py-1 text-neutral-50 hover:text-green-700 border hover:border-green-700 rounded-md bg-green-700 hover:bg-neutral-50 transition-all ease-in-out duration-200 flex items-center gap-1">
            <FaWhatsapp /><span> Get in touch</span>
          </button> */}
        </div>

        {/* <div className={`charity-progress overflow-hidden transition-all ease-in-out grid ${showDetails ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="content overflow-hidden">
            <p className="text-2xl mb-2">{rupiah(currentFunding)} Raised</p>
            <p className="text-xs opacity-70">{`Target ${rupiah(targetFunding)}`}</p>
            <button className="mt-4 px-3 py-2 border hover:border-violet-700 rounded-lg bg-violet-700 hover:bg-neutral-50 text-neutral-50 hover:text-violet-700 transition-all ease-in-out duration-200 w-fit flex items-center gap-2" type="button">
              <BiDonateHeart /> I want to donate!
            </button>
          </div>
        </div> */}

        <div className={`charity-progress overflow-hidden transition-all ease-in-out grid`}>
          <div className="content overflow-hidden">
            <p className="text-2xl mb-2">{rupiah(currentFunding)} Raised</p>
            <p className="text-xs opacity-70">{`Target ${rupiah(targetFunding)}`}</p>
            {/* <button className="mt-4 px-3 py-2 border hover:border-violet-700 rounded-lg bg-violet-700 hover:bg-neutral-50 text-neutral-50 hover:text-violet-700 transition-all ease-in-out duration-200 w-fit flex items-center gap-2" type="button">
              <BiDonateHeart /> I want to donate!
            </button> */}
          </div>
        </div>

      </div>
    </article>
   );
}
 
export default CharityCard;