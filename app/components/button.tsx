'use client'
import { IconType } from 'react-icons';

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean
}
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed rounded-lg hover:opacity-80
          transition w-full
          bg-rose-500 border-rose-500 text-white
          py-2 text-sm border-[1px]
        `}
        >
          {label}
      </button>
  )
}

export default Button