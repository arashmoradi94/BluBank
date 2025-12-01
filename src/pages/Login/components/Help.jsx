import React from "react";
import ModalForget from "./modalforget";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSimCard } from "@fortawesome/free-solid-svg-icons";

function Help() {
  const option = [
    {
      text: "فراموشی نام کاربری ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
    },
    {
      text: "فراموشی رمز عبور",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
          />
        </svg>
      ),
    },
    {
      text: "تغییر شماره تلفن همراه",
      icon: <FontAwesomeIcon icon={faSimCard} size="xl" />
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="flex flex-col justify-between min-w-[550px]">
        <div className="flex justify-between select-none">
          <Link to="../">
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
          <h3 className="text-white text  mt-10 mr-6">نمیتوانید وارد شوید ؟</h3>
          <ModalForget />
        </div>
        <div className="text-center flex justify-center items-center mt-10 select-none">
          <div className="min-w-[74%]">
            <h3 className=" text-white m-0 text-start">
              یکی از گزینه های زیر را انتخاب کنید :
            </h3>
            <ul>
              {option.map((option, index) => (
                <li
                  key={index}
                  className="text-blue-400 m-4 p-4 mr-0 text-start border-2 w-full cursor-pointer rounded-xl active:bg-gray-600 flex justify-between items-center"
                  onClick={() => {
                    navigate("/phoneverify");
                    setIsOpen(false);
                  }}
                >
                  <div className="flex gap-2">
                    <span>{option.icon}</span>
                    <span>{option.text}</span>
                  </div>
                  <span className="text-blue-400">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="oklch(0.7 0.0913 243.53)"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                      />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
