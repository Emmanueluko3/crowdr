import React from "react";

interface progressBarProps {
  progress: number;
  addClassName: string;
}

const ProgressBar: React.FC<progressBarProps> = ({
  progress,
  addClassName,
}) => {
  return (
    <div
      className={`w-full bg-[#CDE6F4] ${
        addClassName ? addClassName : null
      } overflow-hidden rounded-full`}
    >
      <div
        className="h-full bg-customBlue rounded-full transition-width duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
