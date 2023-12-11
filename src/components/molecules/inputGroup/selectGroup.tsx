import React, { SelectHTMLAttributes } from "react";

interface SelectGroupProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string | number; label: string }[];
  placeholder: string;
}

const SelectGroup: React.FC<SelectGroupProps> = ({
  label,
  placeholder,
  options,
  ...rest
}) => {
  return (
    <div>
      <p className="text-base text-white mb-1">{label}</p>
      <div className="border w-full border-gray-300 text-customGray1  bg-gradient-to-b from-[#17191F] to-[#0F1115] rounded-lg px-3 py-[5px]  focus:border-customBlue">
        <select
          {...rest}
          className="w-full focus:border-none focus:outline-none bg-transparent"
        >
          <option value="" disabled selected>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectGroup;
