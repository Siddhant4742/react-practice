import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Gihub() {
    // const[data,setData]=useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/Siddhant4742')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })

    // },[])

    const data=useLoaderData()
    return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers: {data.followers}

        <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    )
}

export default Gihub

export const githubInfoLoader =async () => {
    const response=await fetch('https://api.github.com/users/Siddhant4742')
    return response.json()
}