import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";


const ResultLink = ({inputValue}) => {
  const [shortenLink, setShortenLink] = useState("")
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
   

  const fetchData = async () =>{
    try {
      setLoading(true)
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
      setShortenLink(res.data.result.full_short_link)
    } catch (error) {
       toast.error("Something gone wrong")
    } finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    if(inputValue.length){
      fetchData()
    }
  },[inputValue])

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setCopied(false)
    },1000)
    return () => clearTimeout(timer)
  },[copied])

  if(loading){
    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    );
  }




  
  return (
    <>
      {shortenLink && (
        <div className="bg-green-200 flex flex-col items-center md:flex-row p-2 rounded-lg w-3/5 md:w-2/5 mt-5">
          <p className="border border-black p-3 w-full mr-2  rounded-lg font-semibold">
            {shortenLink}
          </p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button
              className={`${
                copied
                  ? "border border-blue-600 bg-blue-500 text-white p-3 rounded-lg w-20 font-medium hover:shadow-2xl mt-3 md:mt-0"
                  : "border border-black p-3 rounded-lg w-20 font-medium hover:shadow-2xl mt-3 md:mt-0"
              }`}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default ResultLink