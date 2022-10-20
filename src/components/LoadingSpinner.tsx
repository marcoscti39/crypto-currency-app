import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center lg:ml-sideBarWidth min-h-screen">
      <div className="animate-spin rounded-[50%] border-t-[10px] mt-20 border-t-lightGreen border-[10px] border-gray-200 w-[100px] h-[100px]"></div>
    </div>
  );
};

export default LoadingSpinner;
