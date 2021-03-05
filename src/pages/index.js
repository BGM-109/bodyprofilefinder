import React from "react"
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Main from '../components/Main'

function Home() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  )
}


export default Home
