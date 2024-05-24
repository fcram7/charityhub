import { useEffect, useState } from 'react';
import PageSection from '../../components/PageSection';
import CharityDetailTemplate1 from "/charity-5-medium.jpg";
import { Api } from '../../network/api';
import { useNavigate, useParams } from 'react-router-dom';
import rupiah from '../../utils/priceConverter';
import CharityDetailMenu from './components/CharityDetailMenu';
import DetailContent from './components/DetailContent';

interface charityDetail {
  charity_name: string,
  charity_description: string,
  charity_location: string,
  created_by: string,
  createdAt?: Date,
  current_funding: number,
  target_funding: number,
  ongoing?: boolean,
  roadmap?: {
    initiation?: boolean,
    funding?: boolean,
    fundingTransfer?: boolean,
    finished?: boolean
  }
}

const MainDetail = () => {
  const [charityDetail, setCharityDetail] = useState<charityDetail[] | null>(null);
  const [storyActive, setStoryActive] = useState(true);
  const [updatesActive, setUpdatesActive] = useState(false);
  const { charityId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCharityDetailData = async () => {
      try {
        const charityDetailData = await Api.getCharityDetail(charityId!);
        if(charityDetailData) {
          setCharityDetail(charityDetailData.data);
        }
      } catch (err) {
        console.error(err);
      }
    }

    getCharityDetailData();
  }, [charityId]);

  const storyActiveChangeHandler = (menu: string) => {
    if (menu === "Story") {
      setStoryActive(prevStory => !prevStory);
      setUpdatesActive(prevUpdates => !prevUpdates);
    }
  }

  const updatesActiveChangeHandler = (menu: string) => {
    if (menu === "Updates") {
      setStoryActive(prevStory => !prevStory);
      setUpdatesActive(prevUpdates => !prevUpdates);
    }
  }

  const donateButtonHandler = () => {
    navigate(`/donate/${charityId}`)
  }

  console.log(charityDetail)
  return ( 
    <PageSection paddingY="py-20" bgColor="bg-slate-200">
      <div className="main-detail-content px-10">
        { charityDetail && charityDetail.map((charity, index) => (
          <div className="" key={index}>
            <div className="mx-6 pt-4 grid grid-cols-[63%_37%] gap-8">
              <div className="left h-[90%]">
                <img src={CharityDetailTemplate1} alt="Charity Detail" />
              </div>

              <div className="right flex flex-col gap-6">
                <h2 className="charity-name lg:text-4xl">{charity.charity_name}</h2>
                <div className="funding">
                  <p className="current-funding lg:text-2xl">{`${rupiah(charity.current_funding)} Raised`}</p>
                  <p className="target-funding text-slate-600 text-md">{`From ${rupiah(charity.target_funding)} goal`}</p>
                </div>
                <div className="location border border-gray-500 w-fit rounded-full px-2 py-1">
                  <p className="text-xs text-gray-500">{charity.charity_location}</p>
                </div>
                <button onClick={donateButtonHandler} className="mt-4 py-3 border hover:border-violet-700 bg-violet-700 hover:bg-neutral-50 text-neutral-50 hover:text-violet-700 transition-all ease-in-out duration-200 w-[80%] flex items-center gap-2" type="button">
                  <span className="text-center w-full text-lg">I want to donate!</span>
                </button>
              </div>
            </div>
            <div className="charity-story mt-4 border-t-2 border-slate-400 grid gap-8 py-4 mx-6">
              <CharityDetailMenu
                storyActive={storyActive}
                updatesActive={updatesActive}
                storyActiveChangeHandler={() => storyActiveChangeHandler("Story")}
                updatesActiveChangeHandler={() => updatesActiveChangeHandler("Updates")}
              />
              <DetailContent story={storyActive} updates={updatesActive} />
              {/* <h2 className="lg:text-3xl">Story</h2>
              <p className="charity-description">{charity.charity_description}</p>
              <p className="charity-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum fugit repudiandae ratione dolorem est minus in mollitia cumque eaque quo nihil obcaecati nesciunt inventore asperiores, optio facere officiis dignissimos rerum autem! Eligendi placeat cupiditate ratione modi minima consectetur aspernatur itaque, laborum repellat impedit reprehenderit at voluptatum laudantium, repudiandae nulla.</p> */}
            </div>
          </div>
        ))}
      </div>
    </PageSection>
   );
}
 
export default MainDetail;