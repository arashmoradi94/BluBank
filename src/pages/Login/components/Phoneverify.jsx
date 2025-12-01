import React from "react";
import {} from "react-router-dom";
import { Link } from "react-router-dom";
import ModalForget from "./modalforget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSimCard } from "@fortawesome/free-solid-svg-icons";
function Phoneverify() {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="flex flex-col justify-between min-w-[550px]">
        <div className="flex justify-between select-none">
          <Link to="../help">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="oklch(0.7 0.0913 243.53)"
              className="size-7 mt-10 mr-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
          <h3 className="text-white text  mt-10 mr-6">
            تغییر شماره تلفن همراه{" "}
          </h3>
          <ModalForget />
        </div>
        <div className="text-center flex justify-center items-center mt-10 select-none">
          <div className="min-w-[74%]">
            <h3 className=" text-white m-0 text-start">
              شماره تلفن همراه جدید خود را وارد کنید :
            </h3>
            <div className="relative w-full">
              <FontAwesomeIcon
                icon={faSimCard}
                size="xl"
                className="absolute right-3 top-[60%] -translate-y-1/2 text-gray-400 pointer-events-none"
              />{" "}
              <input
                type="number"
                placeholder="شماره تلفن همراه"
                className="w-full h-12 rounded-lg mt-4 p-4 text-black outline-none p-5 bg-gray-700
              focus-within:ring-3 focus-within:ring-blue-400 transition-all duration-300 text-white appearance-none
            pr-12"
              />
            </div>
            <div className="flex mt-[50vh]">
                <p className="min-w-2/3 content-center text-gray-400 text-[17px]">در ادامه کد تایید برای شما ارسال می شود</p>
            <div className="flex justify-end w-full">
                <button className="bg-blue-300 py-3 px-3 rounded-[50%] transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="oklch(33.752% 0.02826 256.856)"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
            </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phoneverify;
