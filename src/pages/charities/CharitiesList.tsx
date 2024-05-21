import PageSection from '../../components/PageSection';
import { Api } from '../../network/api';
// import CharityCard from './components/CharityCard';
import { Key, Suspense, lazy, useEffect, useState } from 'react';
const CharityCard = lazy(() => import('./components/CharityCard'));


interface charities {
  _id: Key,
  charity_name: string,
  charity_description: string,
  charity_location: string,
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

const CharitiesList = () => {
  const [charities, setCharities] = useState<charities[] | null>(null);

  useEffect(() => {
    const getAllCharitiesData = async () => {
      try {
        const allCharitiesData = await Api.getAllCharities();
        if(allCharitiesData) {
          setCharities(allCharitiesData.data);
        }
      } catch (err) {
        console.error(err);
      }
    }

    getAllCharitiesData();
  }, []);
  return ( 
    <PageSection paddingY="py-32" bgColor="bg-slate-200">
        <Suspense fallback={<div>Loading</div>} >
          <div className="charity-content px-20 grid gap-8 lg:grid-cols-3">
            { charities && charities.map((charity, index) => (
                <CharityCard
                  key={index}
                  id={charity._id}
                  charityName={charity.charity_name}
                  charityDescription={charity.charity_description}
                  charityLocation={charity.charity_location}
                  createdBy={charity.created_by}
                  currentFunding={charity.current_funding}
                  targetFunding={charity.target_funding}
                />
              ))}
          </div>
        </Suspense>
    </PageSection>
   );
}
 
export default CharitiesList;