import clsx from "clsx";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean,
	register: UseFormRegister<FieldValues>;
}


const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
	register,
	required,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
					{...register(id, { required })}
          className={clsx(
            `
            form-input
            block 
            w-full 
            rounded-md 
            border-0 
            py-1.5 
            text-gray-900 
            shadow-sm 
            ring-1 
            ring-inset 
            ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-2 
            focus:ring-inset 
            focus:ring-sky-600 
            sm:text-sm 
            sm:leading-6
            dark:bg-lightgray
            dark:ring-gray-500
            dark:text-white`,
          )}
        />
      </div>
    </div>
  );
};

export default Input
