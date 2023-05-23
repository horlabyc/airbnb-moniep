'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    price?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({ 
    id, label, type, disabled, price, register, required, errors
}) => {
  return (
    <div className="w-full relative">
      <label className="text-xs text-gray-400">{label}</label>
        {price && (
          <BiDollar size={16} className="text-neutral-500 absolute top-[2.2rem] left-2"/>
        )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
          peer 
          w-full 
          p-2 
          text-sm
          bg-white 
          border 
          rounded-md 
          outline-none 
          transition
          disabled:opacity-70 
          disabled:cursor-not-allowed
          ${price && 'pl-6'}
          ${errors[id] ? 'border-rose-500 focus:border-rose-500' : 'border-neutral-300 focus:border-black'}
        `}
      />
    </div>
  )
}

export default Input