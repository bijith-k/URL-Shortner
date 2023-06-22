import React, { useState } from 'react';
import Input from './components/Input'
import ResultLink from "./components/ResultLink";

const App = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className='bg-gradient-to-bl from-amber-800 to-blue-800 h-screen flex flex-col justify-center items-center'>
      <Input setInputValue={setInputValue} />
      <ResultLink inputValue={inputValue} />
    </div>
  )
}

export default App