import Button from '../../../components/Button';

interface modal {
  modal: boolean,
  onCancel: () => void,
  onDelete: () => void,
}

const Modal = ({ modal, onCancel, onDelete }: modal) => {
  return ( 
    <article className={`modal-container fixed top-[30%] left-[30%] z-20 w-[40%] bg-slate-200 border border-neutral-400 rounded-xl ${modal ? "" : "hidden"}`}>
      <div className="modal-content flex flex-col items-center gap-10 py-16">
        <p className="text-3xl">Delete charity?</p>
        <div className="buttons flex flex-col items-center gap-4">
          <Button type="button" text="Delete" onClick={onDelete}/>
          <div className="cursor-pointer underline underline-offset-4 text-violet-600" onClick={onCancel}>Cancel</div>
        </div>
      </div>
    </article>
   );
}
 
export default Modal;