import './style.scss';
import Navbar from '../../components/Navbar';
import About from '../../components/About';
import Techs from '../../components/Techs';
import Experiences from '../../components/Experiences';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';


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