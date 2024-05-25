import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import PageSection from '../../components/PageSection';
import { Api } from '../../network/api';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { donationStore } from '../../zustand/donations';
import toast from 'react-hot-toast';
import DonateModal from './components/DonateModal';

interface donateForm {
  charity_name: string,
  charity_description: string,
  charity_location: string,
}

const DonateForm = () => {
  const { charityId } = useParams();
  const [charityDetail, setCharityDetail] = useState<donateForm[] | null>(null);
  const [donateModal, setDonateModal] = useState(false);
  const navigate = useNavigate();

  const { donator, donationAmount, setDonator, setDonationAmount } = donationStore();

  useEffect(() => {
    const getCharityData = async () => {
      if(charityId) {
        const charityDetailData = await Api.getCharityDetail(charityId);

        if(charityDetailData) {
          setCharityDetail(charityDetailData.data);
        }
      }
    }

    getCharityData();
  }, [charityId]);

  const handleDonatorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDonator(e.currentTarget.value);
  }

  const handleDonationAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(e.currentTarget.valueAsNumber);
  }

  const donateButtonHandler = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setDonateModal(prevDonateModal => !prevDonateModal);
  }

  const cancelDonateHandler = () => {
    setDonateModal(prevDonateModal => !prevDonateModal);
  }

  const handleDonateSubmit = async () => {
    try{
      if(charityId) {
        await Api.createDonation({ donator, donationAmount }, charityId);
        toast.success("Successfully donated!");
        navigate(`/charity/${charityId}`);

        setDonator("");
        setDonationAmount(0);

      }
    } catch (err) {
      console.error(err);
      toast.error(`Oops! There's an error ${err}`);
    }
  }

  console.log(charityDetail);
  return ( 
    <PageSection bgColor="bg-slate-200" paddingY="py-24">
      {charityDetail && charityDetail.map((charity, index) => (
        <>
          <div className={`donate-form-content relative ${donateModal ? "opacity-50" : ""}`} key={index}>
            <h1 className="font-clashGrotesk font-bold text-center lg:text-4xl">Donate to {charity.charity_name}</h1>

            <div className="donate-form-payment-container mt-12 lg:px-[10%]">
              <div className="donate-form-payment-content bg-slate-100 py-6 px-[3%] border border-slate-500 flex justify-between items-center">
                <div className="charity-detail flex flex-col gap-6">
                  <p className="lg:text-2xl">{charity.charity_name}</p>
                  <span className="lg:text-md px-3 py-1 w-fit border border-slate-500 rounded-full text-slate-500">{charity.charity_location}</span>
                  <p className="lg:text-lg">{charity.charity_description}</p>
                </div>

                <div className="donate-payment p-4 w-[50%] grid gap-4">
                  <form className="donation-form" onSubmit={donateButtonHandler}>
                    <div className="inputs w-[80%] grid gap-4">
                      <Input 
                        type="number"
                        placeholder="Donation amount"
                        name="donationAmount"
                        value={undefined}
                        onChange={handleDonationAmountChange}
                        disabled={false}
                        />
                      <Input 
                        type="text"
                        placeholder="Donator's name"
                        name="donatorName"
                        value={donator}
                        onChange={handleDonatorChange}
                        disabled={false}
                      />
                      <Button text="Donate" type="submit"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
          <DonateModal
            charityName={charity.charity_name}
            donator={donator}
            donationAmount={donationAmount}
            onCancel={cancelDonateHandler}
            modal={donateModal}
            onDonate={handleDonateSubmit}
          />
        </>
      ))}


    </PageSection>
   );
}
 
export default DonateForm;