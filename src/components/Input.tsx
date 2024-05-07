import { ChangeEvent } from 'react';

interface input {
  placeholder: string,
  type: string,
  value: string | number | undefined,
  name: string,
  disabled?: boolean,
  checked?: boolean,
  hidden?: boolean,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const Input = ({ placeholder, type, name, value, disabled, checked, hidden, onChange }: input) => {
  return ( 
    <>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        name={name}
        onChange={onChange}
        className="form-input px-3 py-4 rounded-xl border border-neutral-500 focus:outline-sky-600"
        disabled={disabled}
        checked={checked}
        hidden={hidden}
      />
    </>
   );
}
 
export default Input;