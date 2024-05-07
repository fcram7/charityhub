import { ChangeEvent, FormEvent } from 'react';
import CharityFormContainer from '../../components/CharityFormContainer';
import Input from '../../components/Input';
import { charitiesAuthStore } from '../../zustand/charities';
import { useParams } from 'react-router-dom';
import TextArea from '../../components/TextArea';
import rupiah from '../../utils/priceConverter';
import Button from '../../components/Button';

const CreateCharityForm = () => {
  const { 
    charityName,
    charityDescription,
    currentFunding,
    targetFunding,
    setCharityName,
    setCharityDescription,
    setTargetFunding,
    setCreatedBy,
  } = charitiesAuthStore();
  const { email } = useParams();

  const charityNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCharityName(e.currentTarget.value);
  }

  const createdByChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCreatedBy(e.currentTarget.value);
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();


  }

  console.log(targetFunding);

  return ( 
    <CharityFormContainer title="Create Charity" handleSubmit={handleSubmit}>
      <div className="inputs px-[2%] grid grid-cols-2 gap-6">
        <Input type="text" placeholder="Charity Name" name="charityName" value={charityName} onChange={charityNameChangeHandler} />
        <Input type="email" placeholder="Created By" name="createdBy" value={email} onChange={createdByChangeHandler} disabled={true}/>
        <TextArea placeholder="Charity Description" name="charityDescription" value={charityDescription} onChange={charityDescriptionChangeHandler}/> <br></br>
        <Input type="number" placeholder={`Current Funding: ${rupiah(currentFunding)}`} name="currentFunding" value={undefined} onChange={currentFundingChangeHandler} disabled={true}/>
        <Input type="number" placeholder="Target Funding" name="targetFunding" value={undefined} onChange={targetFundingChangeHandler} disabled={false}/>
      </div>

      <div className="button px-[2%] mt-6">
        <Button type="submit" text="Create New Charity"/>
      </div>
    </CharityFormContainer>
  );
}
 
export default CreateCharityForm;