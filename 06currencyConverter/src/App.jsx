import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox} from './components'
import useCurrencyInfo  from './hooks/useCurrencyInfo'
function App() {
  const[amount, setAmount]=useState(0)
  const[From, setFrom]=useState("usd")
  const[To, setTo]=useState("inr")
  const[convertedAmount,setConvertedAmount]=useState(0)


  const currencyInfo=useCurrencyInfo(From)
  const options=Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(To)
    setTo(From)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert=()=>{setConvertedAmount(amount*currencyInfo[To])
  }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('data:image/jpeg;base64,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')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1 text-black">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>
                                  setAmount(amount)
                                }
                                selectCurrency={From}
                                onAmountChange={(amount)=> setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5 ">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4 text-black">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={To}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert{From.toUpperCase()} to 
                            {To.toUpperCase()};
                            
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
