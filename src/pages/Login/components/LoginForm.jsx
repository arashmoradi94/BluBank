import React, { useState } from "react";
import Modalforget from "./modalforget";
import { Link } from "react-router-dom";


function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = username.trim() === "" || password.trim() === "";

  return (
    <>
      <div
        className="
          select-none
          relative flex flex-col 
          w-full max-w-[420px]
          sm:w-[70%] sm:max-w-[420px]
          md:w-[50%]
          lg:w-[35%]
          xl:w-[30%]
          mx-auto mt-20
          rounded-[15px] group 
          focus-within:ring-3 focus-within:ring-blue-400 
          transition-all duration-300 font-Vazir
        "
      >
        <input
          type="text"
          autoComplete="off"
          className="h-14 sm:h-16 text-right p-4 rounded-tl-[15px] rounded-tr-[15px]
                     bg-gray-600 placeholder-gray-300 focus:outline-none"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div
          className="
            select-none
            absolute 
            left-6 right-6
            top-1/2 -translate-y-1/2
            border-t-4 border-blue-400
            pointer-events-none
          "
        />

        <input
          type="password"
          autoComplete="new-password"
          className="h-14 sm:h-16 text-right p-4 rounded-bl-[15px] rounded-br-[15px]
                     bg-gray-600 placeholder-gray-300 focus:outline-none"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex justify-center mb-10 mt-10">
        <button
          disabled={isDisabled}
          className={`
            w-[420px] p-3 rounded-[8px] transition select-none
            ${
              isDisabled
                ? "bg-blue-200 cursor-not-allowed"
                : "bg-blue-400 cursor-pointer"
            }
          `}
        >
          ورود
        </button>
      </div>
      <Link to="/Help" className="flex justify-center mb-10 text-blue-400">
        نمی توانید وارد شوید؟
      </Link>
    </>
  );
}

export default LoginForm;
