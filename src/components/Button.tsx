interface button {
  type?: "button" | "submit" | undefined,
  text: string,
  onClick?: () => void;
}

const Button = ({ type, text, onClick }: button) => {
  return ( 
    <>
      <button onClick={onClick} type={type} className="bg-violet-500 font-redhatdisplay font-semibold border transition ease-in-out duration-300 hover:border-violet-600 hover:text-violet-600 hover:bg-slate-100 w-fit py-2 px-4 text-neutral-50 rounded-lg">{text}</button>
    </>
   );
}
 
export default Button;