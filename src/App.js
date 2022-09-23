import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import petSpaceScreenshot from './assets/images/petSpace-screenshot.png';
import todaysTechScreenshot from './assets/images/tech-blog-home.png';
import weatherDashboardScreenshot from './assets/images/weather-dashboard.png';
import mookiesScreenshot from './assets/images/mookies-screenshot.png';
import orbitWathcesScreenshot from './assets/images/orbit-watches-home.png';
import socialInsomnia from './assets/images/insomnia.png';
import schedulerSceenshot from './assets/images/work-day-scheduler.png';

function App() {
  const [projects] = useState([
    {
      name: 'PETSPACE',
      githubLink: 'https://www.github.com/BDunham484/petSpace',
      projectLink: 'https://boiling-plateau-13571.herokuapp.com/login',
      img: petSpaceScreenshot,
      alt: 'petSpace feed',
      projectText: 'An MVC style social media site with a focus on pets.  This was a group project we did in class at U.T. I was the lead on Github, creating most routes, some JS logic, login technologies, CSS/Bootstrap, Handlebar development, and image uploading.'
    },
    {
      name: "TODAY'S TECH",
      githubLink: 'https://www.github.com/BDunham484/MVC-blogging-site',
      projectLink: 'https://powerful-journey-30948.herokuapp.com',
      img: todaysTechScreenshot,
      alt: 'A tech based blogs home-page',
      projectText: 'A tech blog applying the MVC paradigm.  Allows users to sign up, login and logout. Once logged in, Users can Post, Edit, and Delete through the user dashboard.'
    },
    {
      name: 'WEATHER DASHBOARD',
      githubLink: 'https://www.github.com/BDunham484/weather-request-permitting',
      projectLink: 'https://bdunham484.github.io/weather-request-permitting',
      img: weatherDashboardScreenshot,
      alt: 'A wether dashboard. Search by city to the left. Results to the right',
      projectText: 'A server-side API based weather dashboard that runs in the browser. Get the current weather plus the 5 day forecast after selecting a city.'
    },
    {
      name: 'MOOKIES',
      githubLink: 'https://www.github.com/BDunham484/project1',
      projectLink: 'https://bdunham484.github.io/project1',
      img: mookiesScreenshot,
      alt: 'An entertainment search engine that displays movie results to the lower left and book results to the lower right.',
      projectText: "An entertainment search engine using 3rd party API's. Enter your query into the search bar and recieve movie results on the left from one API and book results on the right from another."
    },
    {
      name: 'SOCIAL MEDIA API',
      githubLink: 'https://www.github.com/BDunmham484/social-media-api',
      projectLink: 'https://www.github.com/BDunham484/social-media-api',
      img: socialInsomnia,
      alt: 'Insomnia routes.',
      projectText: 'The API for a social media site using MongoDB. CRUD methods can be run on users, thoughts, and reactions via routes and controllers in Insomnia. There is a User and Thought model. Reactions are a subdocument of thoughts.'
    },
    {
      name: 'ALL IN A DAYS WORK',
      githubLink: 'https://www.github.com/BDunham484/all-in-a-days-work',
      projectLink: 'https://www.github.com/BDunham484/all-in-a-days-work',
      img: schedulerSceenshot,
      alt: 'A workday scheduler',
      projectText: 'A third-party API based work day scheduler. It uses local storage for data persistence.'
    },
    {
      name: 'ORBIT WATCHES',
      githubLink: 'https://www.github.com/BDunham484/Orbit-Watches',
      projectLink: 'https://www.orbit-watches.com',
      img: orbitWathcesScreenshot,
      alt: "A neon sign in front of a black brick wall that reads 'Orbit-Watches'.",
      projectText: 'I develop Fitbit clock faces and sell them in their app store. The clock faces are developed using SVG, CSS, JS and a decent helping of Photoshop. This is a simple website I built to showcase them all.'
    } 
  ])

  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  
  return (
    <div>
      <Header
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Header>
      <main>
        <Hero></Hero>
        {aboutSelected && <About></About>}
        {portfolioSelected && <Portfolio
                              projects={projects}
                              ></Portfolio>}
        {resumeSelected && <Resume></Resume>}
        {contactSelected && <Contact></Contact>}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
