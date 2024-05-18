import { Api } from '../../network/api';
import Button from '../../components/Button';
import { showFormattedDate } from '../../utils/dateFormatter';

import { useNavigate, useParams } from 'react-router-dom';
import { Key, Suspense, lazy, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Modal from './components/Modal';
import toast from 'react-hot-toast';

const CharityCardContainer = lazy(() => import("./components/CharityCardContainer"))

interface charities {
  _id: Key,
  charity_name: string,
  charity_description: string,
  created_by: string,
  createdAt: Date,
  current_funding: number,
  target_funding: number,
  ongoing: boolean,
  roadmap: {
    initiation: boolean,
    funding: boolean,
    fundingTransfer: boolean,
    finished: boolean
  }
}

const DashboardMain = () => {
  const { email } = useParams();
  const [charities, setCharities ] = useState<charities[] | null>(null);
  const [inactiveCharities, setInactiveCharities] = useState<charities[] | null>(null);
  const [toggleModal, setToggleModal] = useState(false);
  const [charityToDelete, setCharityToDelete] = useState<Key | null>(null)
  const cookies = Cookies.get("session");
  const navigate = useNavigate();

  useEffect(() => {
    if(!cookies) {
      return navigate("/not-authorized");
    }

    const getOngoingCharitiesData = async () => {
      try {
        const ongoingCharitiesData = await Api.getOngoingCharities(email!, cookies!);
        if(ongoingCharitiesData) {
          setCharities(ongoingCharitiesData.data);
        }
      } catch (err) {
        console.error(err);
      }
    }

    const getInactiveCharitiesData = async () => {
      try {
        const inactiveCharitiesData = await Api.getInactiveCharities(email!, cookies!);
        if(inactiveCharitiesData) {
          setInactiveCharities(inactiveCharitiesData.data);
        } 
      } catch (err) {
        console.error(err);
      }
    }

    getOngoingCharitiesData();
    getInactiveCharitiesData();
  }, [email, cookies, navigate]);

  const addCharityButtonHandler = () => {
    navigate(`/${encodeURIComponent(email!)}/create-charity`);
  }

  const editCharityButtonHandler = (_id: Key) => {
    navigate(`/${encodeURIComponent(email!)}/${_id}/edit-charity`);
  }

  const deleteCharityButtonHandler = (id: Key) => {
    setCharityToDelete(id);
    setToggleModal(prevModal => !prevModal);
  }

  const cancelDeleteCharityButtonHandler = () => {
    setCharityToDelete(null);
    setToggleModal(prevModal => !prevModal);
  }

  const deleteModalButtonHandler = async (id: Key) => {
    try {
      await Api.deleteCharity(email!, id, cookies!);
      toast.success("Successfully deleted charity data!");
      location.reload();
      setCharityToDelete(null);
      setToggleModal(prevModal => ! prevModal);
    } catch (err) {
      console.error(err);
      return toast.error("ERROR!");
    }
  }

  console.log(toggleModal, charityToDelete);

  console.log(charities);
  
  return ( 
    <>
      <section className={`dashboard-section px-[5%] py-28 bg-slate-200 relative ${toggleModal ? "opacity-50" : ""}`}>
        <h1 className="section-title text-4xl font-bold font-clashGrotesk mb-24">Dashboard</h1>

        <div className="dashboard-content">
          <h1 className="md:ps-6 font-redhatdisplay text-2xl mb-8">Ongoing Charities</h1>
          <div className="start-new-charity-button mb-4">
            <Button type="button" text="Start New Charity" onClick={addCharityButtonHandler}/>
          </div>
          <div className="p-6 border border-slate-400 rounded-xl">
            <Suspense fallback={<div>Loading</div>}>
              {
                charities && charities.map((charity, index) => (
                  <CharityCardContainer
                    key={index}
                    id={charity._id}
                    charityName={charity.charity_name}
                    charityDescription={charity.charity_description}
                    createdBy={charity.created_by}
                    createdAt={showFormattedDate(charity.createdAt)}
                    currentFunding={charity.current_funding}
                    targetFunding={charity.target_funding}
                    ongoing={charity.ongoing}
                    roadmapStatus={{
                      initiationStatus: charity.roadmap?.initiation,
                      fundingStatus: charity.roadmap?.funding,
                      fundingTransferStatus: charity.roadmap?.fundingTransfer,
                      finishedStatus: charity.roadmap?.finished
                    }}
                    editCharityButtonHandler={() => editCharityButtonHandler(charity._id)}
                    deleteCharityButtonHandler={() => deleteCharityButtonHandler(charity._id)}
                  />
                )) 
              }
            </Suspense>
          </div>

          <h1 className="md:ps-6 font-redhatdisplay text-2xl my-8">Inactive Charities</h1>
          <div className="p-6 border border-slate-400 rounded-xl">
            <Suspense fallback={<div>Loading</div>}>
              {
                inactiveCharities ? inactiveCharities.map((charity, index) => (
                  <CharityCardContainer
                    key={index}
                    id={charity._id}
                    charityName={charity.charity_name}
                    charityDescription={charity.charity_description}
                    createdBy={charity.created_by}
                    createdAt={showFormattedDate(charity.createdAt)}
                    currentFunding={charity.current_funding}
                    targetFunding={charity.target_funding}
                    ongoing={charity.ongoing}
                    roadmapStatus={{
                      initiationStatus: charity.roadmap.initiation,
                      fundingStatus: charity.roadmap.funding,
                      fundingTransferStatus: charity.roadmap.fundingTransfer,
                      finishedStatus: charity.roadmap.finished
                    }}
                    editCharityButtonHandler={() => editCharityButtonHandler(charity._id)}
                    deleteCharityButtonHandler={() => deleteCharityButtonHandler(charity._id)}
                  />
                )) : (<p>No data!</p>) 
              }
            </Suspense>
          </div>
        </div>
      </section>
      <Modal modal={toggleModal} onCancel={cancelDeleteCharityButtonHandler} onDelete={() => deleteModalButtonHandler(charityToDelete!)}/>
    </>
   );
}
 
export default DashboardMain;