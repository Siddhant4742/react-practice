import { useState, useCallback,useEffect , useRef} from 'react'


function App() {
  const[length, setLength]=useState(8);
  const[number,setNumber]=useState(false);
  const[character, setCharacter]=useState(false);
  const[password, setPassword]=useState('');
  const passwordRef=useRef(null);

  const generatePassword = useCallback(() => {
    let pass=""
    let str=""
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";
    if(number) {
      str += numbers;
    }
    if(character) {
      str += specialCharacters;
    }
    str += characters;
    for(let i=0;i<length;i++)
    {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
    console.log("generated password:- ",pass);
  }, [length, number, character,setPassword]);
  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  }, [password]);
  useEffect(() => {
    generatePassword()
  },[length,number,character,generatePassword]);

  return (
    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white'>Password Generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <input type="text"
           
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClipboard}
        
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={8}
        max={50}
        value={length}
        className='cursor-pointer'
        onChange={(e) => setLength(e.target.value)}
        />
        <label>Length: {length}</label>
        </div>
         <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Number</label>
      </div>
       <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={character}
          id="characterInput"
          onChange={() => {
              setCharacter((prev) => !prev);
          }}
      />
      <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
      </div>
    
  )
}

export default App
