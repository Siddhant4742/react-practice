import {useState, useEffect} from 'react';

function useCurrencyInfo(currency)
{   const[data, setData] = useState({});
    useEffect(() => {
        let url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`

        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        // console.log("data:- ",data)
    },[currency]);
console.log(data);
    return data;

}
export default useCurrencyInfo