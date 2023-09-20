import React from 'react'
// import "../stylesheet/style.css"
import { Container } from 'react-bootstrap'
import Cards from './Cards'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NevButton from './NevButton'

// import { useEffect } from "react";
// import axios from "axios"





const Books = () => {

  
//   useEffect(() => {
//     (async () => {
//         try {
//             const result = await axios.get(
//                 "http://localhost:4000/api")
//             console.log(result.data);
//         } catch (error) {
//             console.error(error);
//         }
//     })()
// })
  return (
    <>
      <Container  >
        <NevButton></NevButton>
      <div className=" card-group">
        <Cards/> 
      
        </div>
      </Container>
    </>
  )
}

export default Books;

