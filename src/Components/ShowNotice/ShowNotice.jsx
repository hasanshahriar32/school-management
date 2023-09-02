import React from "react";
import { BiNews } from "react-icons/bi";
const ShowNotice = () => {
  return (
    <div className=" bg-gray-50 h-[350px]">
      <h2 className="text-xl mb-5 font-bold bg-[#FFB400] p-3 text-white">
        {" "}
        Notice Board
      </h2>
      <div className="p-3">
        <div className="flex items-center gap-3 mb-2">
          <BiNews></BiNews> <span>Notice One</span>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <BiNews></BiNews> <span>Notice Two</span>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <BiNews></BiNews> <span>Notice Three</span>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <BiNews></BiNews> <span>Notice Four</span>
        </div>
      </div>
    </div>
  );
};

export default ShowNotice;
