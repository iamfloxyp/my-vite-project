import React from 'react'
import Header from './components/Header'
import MainSection from './components/MainSection'
import SecondSection from './components/SecondSection'
import FoundersFriday from './components/FoundersFriday'
import Sponsor from './components/Sponsor'
import AnimatedStateSection from './components/AnimatedStateSection'
import CommunityRegister from './components/CommunityRegister'
import Friday from './components/Friday'

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
    </div>
  )
}
export default App;

