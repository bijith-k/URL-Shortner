import { useState } from "react";

const Input = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const handleClick = () =>{
    setInputValue(value)
    setValue("")
  }
  return (
    <div className="w-3/5 md:w-2/5">
      <h1 className="font-bold text-3xl mb-5 text-white text-center">
        URL Shortner
      </h1>
      <div className="mt-4 flex justify-center">
        <input
          type="text"
          placeholder="Paste a link to shorten"
          className="p-3 text-xs md:text-base rounded-md placeholder:text-blue-600 w-full"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
        />
        <button className="bg-blue-900 ml-2 p-3 font-semibold rounded-md hover:shadow-lg text-slate-100" onClick={handleClick}>
          Shorten
        </button>
      </div>
    </div>
  );
};

export default Input;
