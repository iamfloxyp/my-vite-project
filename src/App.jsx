import React from 'react'
import Header from './components/Header'
import MainSection from './components/MainSection'
import SecondSection from './components/SecondSection'
import FoundersFriday from './components/FoundersFriday'
import Sponsor from './components/Sponsor'
import AnimatedStateSection from './components/AnimatedStateSection'
import CommunityRegister from './components/CommunityRegister'
import Friday from './components/Friday'
import Testimonial from './components/Testimonial'
import FAQSection from './components/FaqSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <MainSection/>
      <SecondSection/>
      <FoundersFriday/>
      <Sponsor/>
      <AnimatedStateSection/>
      <CommunityRegister/>
      <Friday/>
      <Testimonial/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}
export default App;

