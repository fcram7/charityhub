import { useNavigate, useParams } from 'react-router-dom';
import { Key, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Api } from '../../network/api';
import CharityCard from './components/CharityCard';
import CharityCardContainer from './components/CharityCardContainer';
import Button from '../../components/Button';
import { showFormattedDate } from '../../utils/dateFormatter';

interface charities {
  _id: Key,
  charity_name: string,
  charity_description: string,
  created_by: string,
  createdAt: Date,
  current_funding: number,
  target_funding: number,
  ongoing: boolean,
}

const DashboardMain = () => {
  //TEMPORARY LOGOUT
  const { email } = useParams();
  const [charities, setCharities ] = useState<charities[] | null>(null);
  const cookies = Cookies.get("session");
  const navigate = useNavigate();

  useEffect(() => {
    if(!cookies) {
      return navigate("/not-authorized")
    }
    const getCharitiesData = async () => {
      try {
        const charitiesData = await Api.getCharities(email!, cookies!);
        if(charitiesData) {
          setCharities(charitiesData.data);
        }
      } catch (err) {
        console.error(err);
      }
    }

    getCharitiesData();
  }, [email, cookies, navigate]);

  const addCharityButtonHandler = () => {
    navigate(`/${encodeURIComponent(email!)}/create-charity`);
  }

  console.log(charities);
  
  return ( 
    <section className="dashboard-section px-[5%] py-28 bg-slate-200">
      <h1 className="section-title text-4xl font-bold font-clashGrotesk mb-24">Dashboard</h1>

      <div className="dashboard-content">
        <h1 className="md:ps-6 font-redhatdisplay text-2xl mb-8">Ongoing Charities</h1>
        <div className="start-new-charity-button mb-4">
          <Button type="button" text="Start New Charity" onClick={addCharityButtonHandler}/>
        </div>
        <CharityCardContainer>
          { charities && charities.map((charity, index) => (
            <CharityCard
              key={index}
              id={charity._id}
              charityName={charity.charity_name}
              charityDescription={charity.charity_description}
              createdBy={charity.created_by}
              createdAt={showFormattedDate(charity.createdAt)}
              currentFunding={charity.current_funding}
              targetFunding={charity.target_funding}
              ongoing={charity.ongoing}
            />
          )) }
        </CharityCardContainer>
      </div>
    </section>
   );
}
 
export default DashboardMain;