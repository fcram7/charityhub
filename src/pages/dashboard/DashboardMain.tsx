import { useParams } from 'react-router-dom';
import { Key, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Api } from '../../network/api';
import CharityCard from './components/CharityCard';
import CharityCardContainer from './components/CharityCardContainer';

interface charities {
  _id: Key,
  charity_name: string,
  charity_description: string,
  created_by: string,
  createdAt: string,
  current_funding: number,
  target_funding: number,
}

const DashboardMain = () => {
  //TEMPORARY LOGOUT
  const { email } = useParams();
  const [charities, setCharities ] = useState<charities[] | null>(null);
  const cookies = Cookies.get("session");

  useEffect(() => {
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

    getCharitiesData()
  }, [email, cookies]);

  console.log(charities);
  
  return ( 
    <section className="dashboard-section px-[5%] py-28 bg-slate-100">
      <h1 className="section-title text-4xl font-bold font-clashGrotesk mb-24">Dashboard</h1>

      <div className="dashboard-content">
        <h1 className="ps-6 font-redhatdisplay text-2xl mb-10">Ongoing Charities</h1>
        <CharityCardContainer>
          { charities && charities.map((charity, index) => (
            <CharityCard
              key={index}
              id={charity._id}
              charityName={charity.charity_name}
              charityDescription={charity.charity_description}
              createdBy={charity.created_by}
              createdAt={charity.createdAt}
              currentFunding={charity.current_funding}
              targetFunding={charity.target_funding}
            />
          )) }
        </CharityCardContainer>
      </div>
    </section>
   );
}
 
export default DashboardMain;