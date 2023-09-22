import React from 'react'
import Header from './components/common/header'
import Footer from "./components/common/footer"
import Books from  "./components/views/views"



const Home = () => {
  return (
  <>
  <Header/>
       
     <Books></Books>
     
     <Footer/>
  </>
  )
}

export default Home
