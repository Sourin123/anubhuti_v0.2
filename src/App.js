import React from 'react'
// import Books from './components/views/views'
import Header from './components/common/header'
import Footer from './components/common/footer'

const App = () => {
  return (
    <>
    < Header/>
      hallo world
      <MyName />
      
      <Footer/>
    </>
  )
}
const MyName = () =>{
  return <h2>MY name is sourin 😒</h2> ;
  
}

export default App
