import React from "react";
import banner from "../../../assets/images/social_banner.png";
import Modalforget from "./modalforget";
function LoginHeader() {
  return (
    <div className="flex-col select-none overflow-hidden">
      <div className="flex justify-end ml-[-20px] ">
        <Modalforget />
      </div>
      <img
        src={banner}
        className="w-30 , h-18 , xl:w-30 xl:h-18 , mt-20 xl:mr-[47.5vw] md:mr-[45%] sm:mr-[41%] mr-[39%] transition-all duration-500 ease-in-out"
      />
    </div>
  );
}

export default LoginHeader;
