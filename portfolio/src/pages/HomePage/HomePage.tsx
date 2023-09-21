import './style.scss';
import React from 'react';
import Navbar from '../../components/Navbar';
import About from '../../components/About';
const Techs = React.lazy(() => import('../../components/Techs'));
const Experiences = React.lazy(() => import('../../components/Experiences'));
const Projects = React.lazy(() => import('../../components/Projects'));
const Contact = React.lazy(() => import('../../components/Contact'));
const Footer = React.lazy(() => import('../../components/Footer'));

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <About/>
      <Techs/>
      <Experiences/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default HomePage