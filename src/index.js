import React from 'react'
import ReactDOM from 'react-dom'
import '../style/vendor/animate/animate.min.scss'
import '../style/style.scss'

import Navbar from './components/navbar'
import Cover from './components/cover'
import DetailWIcon from './components/detail-w-icon'
import SkillDetail from './components/skills'
import Experience from './components/experience'
import Profile from './components/profile'
import Stats from './components/stats'
import Contact from './components/contact'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Cover />
      <div className="d-flex flex-row flex-wrap justify-content-between w-100">
        <DetailWIcon icon={'envelope'} caption={'cmseaton42@gmail.com'} animation={'slideInLeft'} />
        <DetailWIcon icon={'phone'} caption={'1 (931) 446-6573'} animation={'slideInUp'} />
        <DetailWIcon icon={'map-marker'} caption={'5220 Stonehedge Dr, Evansville, IN 47715'} animation={'slideInRight'} />
      </div>
      <hr />
      <Profile />
      <hr />
      <SkillDetail className="something" />
      <hr />
      <Stats />
      <hr />
      <Experience />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));