import Button from '../../../components/Button';
import rupiah from '../../../utils/priceConverter';

interface donateModal {
  charityName: string,
  donator: string,
  donationAmount: number,
  modal: boolean,
  onDonate: () => void,
  onCancel: () => void,
}

const DonateModal = ({ modal, charityName, donator, donationAmount, onDonate, onCancel }: donateModal) => {
  return ( 
    <article className={`donate-modal-container w-[40%] fixed top-[20%] left-[30%] z-20 ${modal ? "" : "hidden"}`}>
      <div className="donate-modal-content border border-slate-500 py-16 px-12 bg-slate-200">
        <h1 className="lg:text-3xl font-clashGrotesk font-bold mb-8 text-center">Donation Detail</h1>
        <div className="donation-detail mb-8 flex flex-col gap-8 justify-center border border-slate-500 bg-slate-50 px-6 py-4">
          <div className="charity-name flex justify-between items-center">
            <p>Charity Name:</p>
            <p className="text-xl">{charityName}</p>
          </div>
          <div className="donator flex justify-between items-center">
            <p>Donator:</p>
            <p className="text-xl">{donator}</p>
          </div>
          <div className="donation-amount flex justify-between items-center">
            <p>Donation amount:</p>
            <p className="text-xl">{rupiah(donationAmount)}</p>
          </div>
        </div>
        <div className="buttons flex flex-col items-center gap-4">
          <Button type="button" text="Donate" onClick={onDonate}/>
          <div className="cursor-pointer underline underline-offset-4 text-violet-600" onClick={onCancel}>Cancel</div>
        </div>
      </div>
    </article>
   );
}
 
export default DonateModal;