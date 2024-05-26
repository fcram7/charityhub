import { ChangeEvent, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from "js-cookie";

import CharityFormContainer from '../../components/CharityFormContainer';
import Input from '../../components/Input';
import { charitiesAuthStore } from '../../zustand/charities';
import TextArea from '../../components/TextArea';
import rupiah from '../../utils/priceConverter';
import Button from '../../components/Button';
import { Api } from '../../network/api';
import toast from 'react-hot-toast';
import BackToDashboard from '../../components/BackToDashboard';

const CreateCharityForm = () => {
  const { 
    createdBy,
    charityName,
    charityDescription,
    charityLocation,
    currentFunding,
    targetFunding,
    ongoing,
    setCharityName,
    setCharityDescription,
    setCharityLocation,
    setTargetFunding,
    setCreatedBy,
  } = charitiesAuthStore();
  const { email } = useParams();
  const cookies = Cookies.get("session");
  const navigate = useNavigate();

  const charityNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCharityName(e.currentTarget.value);
  }

  const createdByChangeHandler = () => {
    if(email) {
      setCreatedBy(email);
    }
  }

  const currentFundingChangeHandler = () => {
    null
  }

  const charityDescriptionChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCharityDescription(e.currentTarget.value);
  }

  const charityLocationChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCharityLocation(e.currentTarget.value);
  }

  const targetFundingChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTargetFunding(e.currentTarget.valueAsNumber);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if(!cookies) {
      return navigate("/not-authorized");
    }

    if(email) {
      try {
        await Api.createCharitiy({ createdBy, charityName, charityDescription, charityLocation, currentFunding, targetFunding, ongoing, roadmap: { initiation: true, funding: false, fundingTransfer: false, finished: false } }, email, cookies);
  
        toast.success("Successfully created new charity!");
        navigate(`/${encodeURIComponent(email)}/dashboard`);
        setCreatedBy("");
        setCharityName("");
        setCharityDescription("");
        setTargetFunding(0);
      } catch (err) {
        console.error(err)
        return toast.error(`Oops! There's an error ${err}`);
      }
    }
  }

  return ( 
    <CharityFormContainer title="Create Charity" handleSubmit={handleSubmit}>
      <BackToDashboard email={email!}/>
      
      <div className="inputs px-[2%] grid grid-cols-2 gap-6">
        <Input type="text" placeholder="Charity Name" name="charityName" value={charityName} onChange={charityNameChangeHandler} />
        <Input type="email" placeholder="Created By" name="createdBy" value={email} onChange={createdByChangeHandler} disabled={true}/>
        <TextArea placeholder="Charity Description" name="charityDescription" value={charityDescription} onChange={charityDescriptionChangeHandler}/> <br></br>
        <Input type="text" placeholder="Charity Location" name="charityLocation" value={charityLocation} onChange={charityLocationChangeHandler} disabled={false}/>
        <Input type="number" placeholder={`Current Funding: ${rupiah(currentFunding!)}`} name="currentFunding" value={undefined} onChange={currentFundingChangeHandler} disabled={true}/>
        <Input type="number" placeholder="Target Funding" name="targetFunding" value={undefined} onChange={targetFundingChangeHandler} disabled={false}/>
      </div>

      <div className="button px-[2%] mt-6">
        <Button type="submit" text="Create New Charity"/>
      </div>
    </CharityFormContainer>
  );
}
 
export default CreateCharityForm;