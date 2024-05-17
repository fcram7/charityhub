import Button from '../../components/Button';
import CharityFormContainer from '../../components/CharityFormContainer';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import { useNavigate, useParams } from 'react-router-dom';
import rupiah from '../../utils/priceConverter';
import { Api } from '../../network/api';
import { charitiesAuthStore } from '../../zustand/charities';
import BackToDashboard from '../../components/BackToDashboard';

import { ChangeEvent, FormEvent, useEffect } from 'react';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const EditCharityForm = () => {
  const { email, charityId } = useParams();
  const navigate = useNavigate();
  const token = Cookies.get("session");
  const { 
    createdBy,
    charityName,
    charityDescription,
    currentFunding,
    targetFunding,
    roadmap,
    setCharityName,
    setCreatedBy,
    setCharityDescription,
    setCurrentFunding,
    setTargetFunding,
    setRoadmapFunding,
    setRoadmapFundingTransfer,
    setRoadmapFinished
  } = charitiesAuthStore();
  
  const { initiation, funding, fundingTransfer, finished } = roadmap || {};

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
          setCreatedBy(email!);
          setCharityName(charityData.data.charity_name);
          setCharityDescription(charityData.data.charity_description);
          setCurrentFunding(charityData.data.current_funding);
          setTargetFunding(charityData.data.target_funding);
        }

        return charityData;
      } catch (err) {
        console.error(err);
      }
    }

    getOneCharityData();
  }, [charityId, email, token, setCreatedBy, setCharityName, setCharityDescription, setCurrentFunding, setTargetFunding]);

  const fundingButtonHandler = () => {
    setRoadmapFunding(true);
  }

  const fundingTransferButtonHandler = () => {
    setRoadmapFundingTransfer(true);
  }

  const finishCharityButtonHandler = () => {
    setRoadmapFinished(true);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await Api.editCharity({ charityName, charityDescription, targetFunding, roadmap: {initiation, funding, fundingTransfer, finished } }, email!, charityId!, token!);

      toast.success(`Charity ${charityName} edited successfully!`);
      navigate(`/${encodeURIComponent(email!)}/dashboard`);

      setCreatedBy("");
      setCharityName("");
      setCharityDescription("");
      setCurrentFunding(0);
      setTargetFunding(0);
    } catch (err) {
      console.error(err);
      return toast.error(`Oops! There's an error ${err}`)
    }
  }

  return ( 
    <CharityFormContainer title="Edit Charity" handleSubmit={handleSubmit}>
      <BackToDashboard email={email!}/>

      <div className="inputs px-[2%] grid grid-cols-2 gap-6">
        <Input type="text" placeholder="Charity Name" name="charityName" value={charityName} onChange={charityNameChangeHandler} />
        <Input type="email" placeholder="Created By" name="createdBy" value={createdBy} onChange={createdByChangeHandler} disabled={true}/>
        <TextArea placeholder="Charity Description" name="charityDescription" value={charityDescription} onChange={charityDescriptionChangeHandler}/> <br></br>
        <Input type="number" placeholder={`Current Funding: ${rupiah(currentFunding!)}`} name="currentFunding" value={currentFunding} onChange={currentFundingChangeHandler} disabled={true}/>
        <Input type="number" placeholder="Target Funding" name="targetFunding" value={targetFunding} onChange={targetFundingChangeHandler} disabled={false}/>

      </div>
      <div className="px-[2%] mt-4 flex flex-col items-end gap-4">
        <div className="w-full flex items-center justify-between">
          <p>Funding status: {currentFunding! < targetFunding! ? "ongoing" : "finished"}</p>
          <Button type="button" text="Finish Funding" onClick={fundingButtonHandler} />
        </div>
        <div className="w-full flex items-center justify-between">
          <p>Funding transfer status: {!roadmap?.fundingTransfer ? "ongoing" : "finished"}</p>
          <Button type="button" text="Finish Funding Transfer" onClick={fundingTransferButtonHandler} />
        </div>
        <div className="w-full flex items-center justify-between">
          <p>Charity status: {!roadmap?.finished ? "ongoing" : "finished"}</p>
          <Button type="button" text="Finish Charity" onClick={finishCharityButtonHandler} />
        </div>
      </div>

      <div className="button px-[2%] mt-6">
        <Button type="submit" text="Edit Charity"/>
      </div>
    </CharityFormContainer>
   );
}
 
export default EditCharityForm;