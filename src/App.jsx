import './App.css'
import AboutCourse from './components/aboutCourse/AboutCourse'
import FAQ from './components/faq/FAQ'
import Footer from './components/footer/Footer'
import LearnJS from './components/learnJs/LearnJS'
import LearnersWorkAt from './components/learnersWorkAt/learnersWorkAt'
import MeetYourMentor from './components/meetYourMentor/MeetYourMentor'
import PracticeProject from './components/practiceProject/PracticeProject'
import ProjectInThis from './components/projectInThisCourse/ProjectInThis'
import StartLearning from './components/startLearning/StartLearning'
import Testimonials from './components/testimonials/Testimonials'

function App() {
  const data =[ {heading:"What is JavaScript?",text:"JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."},  {heading:"What does JavaScript do?",text:"JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."},{heading:"What kind of Jobs can JavaScript get me?",text:"JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."},{heading:"Why is JavaScript so popular?",text:"JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."},{heading:"Are Java & JavaScript the same?",text:"JavaScript is mainly used to add animations and interactive elements to websites, but there are libraries and frameworks that extend its use into mobile development, game development, and more. You can even use it to build virtual reality applications and artificial intelligence."},]
  return (
    <>
    <div className='w-[90%] xl:w-[80%] bg-[#01332a] mx-auto' >
      <LearnJS/> 
      <PracticeProject/>
      <AboutCourse/>
      <ProjectInThis/>
      <MeetYourMentor/>
    </div>
    <div className='' >
      <Testimonials/>
    </div>
    <div className='w-[80%] bg-[#01332a] mx-auto'>
        <LearnersWorkAt/>
        <StartLearning/>
        <FAQ  />
        <Footer/>
    </div>
    </>
  )
}

export default App
