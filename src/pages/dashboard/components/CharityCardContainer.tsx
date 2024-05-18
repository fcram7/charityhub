import { Key, useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import rupiah from '../../../utils/priceConverter';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Button from '../../../components/Button';
import Roadmap from './Roadmap';
// import Modal from './Modal';

interface charityCardContainer {
  id: Key,
  charityName: string,
  charityDescription: string,
  createdBy: string,
  createdAt: string,
  currentFunding: number,
  targetFunding: number,
  ongoing: boolean,
  roadmapStatus: {
    initiationStatus: boolean,
    fundingStatus: boolean,
    fundingTransferStatus: boolean,
    finishedStatus: boolean
  },
  editCharityButtonHandler: () => void | null | undefined,
  deleteCharityButtonHandler: () => void | null | undefined
}

const CharityCardContainer = ({ id, charityName, charityDescription, createdBy, createdAt, currentFunding, targetFunding, ongoing, roadmapStatus, editCharityButtonHandler, deleteCharityButtonHandler }: charityCardContainer) => {
  const [showDetail, setShowDetail] = useState(false)

  const showDetailsHandler = () => {
    setShowDetail(prevDetail => !prevDetail);
  }
  return ( 
    <>
      <article className="charity-card-container py-8 px-4 grid gap-4 border border-neutral-400 rounded-md">
        <table>
          <thead>
            <tr className="text-left">
              <th>Charity Name</th>
              <th>Charity Description</th>
              <th>Created By</th>
              <th>Created At</th>
              <th>Current Funding</th>
              <th>Target Funding</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>

        <div className={`charity-detail overflow-hidden transition-all ease-in-out grid ${showDetail ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="charity-detail-content overflow-hidden">
            <p className="text-2xl mb-4">Charity Roadmap:</p>

            <div className="roadmap px-4 mb-4">
              <Roadmap
                initiationStatus={roadmapStatus.initiationStatus}
                fundingStatus={roadmapStatus.fundingStatus}
                fundingTransferStatus={roadmapStatus.fundingTransferStatus}
                finishedStatus={roadmapStatus.finishedStatus}
              />
            </div>

            <div className="edit-delete-button-container w-full mt-8 flex gap-2 justify-end">
              {
                ongoing ? (
                  <Button onClick={editCharityButtonHandler} type="button" text="Edit"/>
                ) : (
                  null
                )
              }
              <Button onClick={deleteCharityButtonHandler} type="button" text="Delete"/>
            </div>
          </div>
        </div>
      </article>
      {/* <Modal modal={toggleModal} onCancel={deleteCharityButtonHandler} onDelete={undefined}/> */}
    </>
  );
}

export default CharityCardContainer;