// "use client"
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// //Dynamic Routing

// const page = ({params}) => {
//     let {id} = params
    
    
//     const[userData, setUserData] = useState([])
//     const getUser = async ()=>{
//         const{ data } = await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
//         setUserData(data.username);
//   }
//   useEffect(()=>{
//     getUser();
//   },[]) 
//   return (
//     <>
//     {JSON.stringify(userData)}
//     </>
//   )
// }   

// export default page