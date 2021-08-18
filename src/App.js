//ESCRIBIR RFCE
import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import About from './components/About'
import FeaturedProps from './components/FeaturedProps'
import Blog from './components/Blog'
import SupFooter from './components/Sup-footer'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route} from
'react-router-dom';
import "../src/styles/style.css"


function App() {
  return (
      <>
      <Router>
        <NavBar/>
        <Banner/>
        <Switch>
          <Route path='/Julian-Alvarez' exact/>
        </Switch>
      </Router>
      <About/>
      <FeaturedProps/>
      <Blog/>
      <SupFooter/>
      <Footer/>
      </>
  )
}

export default App

