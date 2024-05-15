import Button from '../../components/Button';
import CharityFormContainer from '../../components/CharityFormContainer';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import { useParams } from 'react-router-dom';
import rupiah from '../../utils/priceConverter';
import { Api } from '../../network/api';

import { ChangeEvent, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { charitiesAuthStore } from '../../zustand/charities';

interface charity {
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

const EditCharityForm = () => {
  const { email, charityId } = useParams();
  const [charity, setCharity] = useState<charity | null>(null)
  const token = Cookies.get("session");
  const { 
    createdBy,
    charityName,
    charityDescription,
    currentFunding,
    targetFunding,
    setCharityName,
    setCreatedBy,
    setCharityDescription,
    setCurrentFunding,
    setTargetFunding
  } = charitiesAuthStore();

  const charityNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCharityName(e.currentTarget.value);
  }

  const createdByChangeHandler = () => {
    setCreatedBy(email!);
  }

  const currentFundingChangeHandler = () => {
    null
  }

  const charityDescriptionChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCharityDescription(e.currentTarget.value);
  }

  const targetFundingChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTargetFunding(e.currentTarget.valueAsNumber);
  }


  useEffect(() => {
    const getOneCharityData = async () => {
      try {
        const charityData = await Api.getOneCharity(email!, charityId!, token!);
        if(charityData) {
          setCharity(charityData.data);
        }

        setCreatedBy(email!);
        setCharityName(charity!.charity_name);
        setCharityDescription(charity!.charity_description);
        setCurrentFunding(charity!.current_funding);
        setTargetFunding(charity!.target_funding);

        return charityData
      } catch (err) {
        console.error(err);
      }
    }

    getOneCharityData();
  }, [charity, charityId, email, token, setCreatedBy, setCharityName, setCharityDescription, setCurrentFunding, setTargetFunding]);

  const handleSubmit = () => {

  }

  return ( 
    <CharityFormContainer title="Edit Charity" handleSubmit={handleSubmit}>
      <div className="inputs px-[2%] grid grid-cols-2 gap-6">
        <Input type="text" placeholder="Charity Name" name="charityName" value={charityName} onChange={charityNameChangeHandler} />
        <Input type="email" placeholder="Created By" name="createdBy" value={createdBy} onChange={createdByChangeHandler} disabled={true}/>
        <TextArea placeholder="Charity Description" name="charityDescription" value={charityDescription} onChange={charityDescriptionChangeHandler}/> <br></br>
        <Input type="number" placeholder={`Current Funding: ${rupiah(currentFunding)}`} name="currentFunding" value={currentFunding} onChange={currentFundingChangeHandler} disabled={true}/>
        <Input type="number" placeholder="Target Funding" name="targetFunding" value={targetFunding} onChange={targetFundingChangeHandler} disabled={false}/>
      </div>

      <div className="button px-[2%] mt-6">
        <Button type="submit" text="Edit Charity"/>
      </div>
    </CharityFormContainer>
   );
}
 
export default EditCharityForm;