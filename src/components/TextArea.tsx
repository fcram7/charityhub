import { ChangeEvent } from 'react';

interface textArea {
  placeholder: string,
  value: string | undefined,
  name: string,
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
}

const TextArea = ({ placeholder, name, value, disabled, onChange }: textArea) => {
  return ( 
    <>
      <textarea 
        placeholder={placeholder} 
        value={value}
        name={name}
        onChange={onChange}
        className="form-textarea h-44 px-3 py-4 rounded-xl border border-neutral-500 focus:outline-sky-600"
        disabled={disabled}
      ></textarea>
    </>
   );
}
 
export default TextArea;