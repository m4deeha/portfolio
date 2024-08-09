import React, { useState } from 'react';
import './App.css';
import ProjectItem from './ProjectItem';
import SkillItem from './SkillItem';
import MyImage from './images/imgg.jpg'; 
import resume from './resume.pdf'; 
import MyImage2 from './images/music.png';
import MyImage3 from './images/instaproject.png';
import MyImage4 from './images/download.png';
import MyImage5 from './images/download.jpg';
import MyImage6 from './images/js.png';
import MyImage7 from './images/cpp.png';
import MyImage8 from './images/weatherweb.png'
import vid from './/images/Recording1.mp4'


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const videoSrc = 'Recording.mp4';
    const heading = 'My Continuous Video';

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          }
      });
  });

  const animatedParagraphs = document.querySelectorAll(".about-section");
  animatedParagraphs.forEach(paragraph => {
      observer.observe(paragraph);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.1
  });

});


  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    {
      title: "Weather React App",
      imageUrl: MyImage8
    },
    {
      title: "Music Web Application",
      imageUrl: MyImage2
    },
    {
      title: "Instagram Clone",
      description: "",
      imageUrl: MyImage3
    }
  ];

  const skills = [
    {  logo: MyImage4 },
    {  logo: MyImage5 },
    {  logo: MyImage6 },
    {  logo: MyImage7 },
  ];

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <nav class="navbar">
        <div class="navbar-container">
            <a href="#" class="logo">My Portfolio</a>
            <ul class="nav-items">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    <nav class="navbar2">
    <div class="navbar-container2">
      <ul class="nav-items2">
            <li className='i1'><a href="https://github.com/m4deeha"><i className="fab fa-github"></i></a></li>
            <li className='i2'><a href="https://www.linkedin.com/in/madeeha-n-72502b262/"><i className="fab fa-linkedin"></i></a></li>
            <li className='i3'><a href="#email"><i className="fa fa-envelope"></i></a></li>
      </ul>
    </div>
    </nav>
      <main>
        <div className="center-image">
          <div className="text-container">
            <h1 className="animated-text">Hi, I'm Madeeha Naz</h1>
            <p className="animated">I have a passion for web development and machine learning. I enjoy creating innovative solutions and continuously expanding my skills in the tech industry.</p>
            <a href={resume} download="Resume_Madeeha_Naz.pdf" className="resume-button">Download Resume</a>
          </div>
          <div className="image-container">
            <img src={MyImage} alt="My Image" className="center-image" />
          </div>
        </div>
        </main>
        <div id="about" className="about-section">
          <h2>About Me</h2>
          <p> I am eager to continue exploring the inspiring, innovative field of programming. Looking for a role where i can grow and learn from experienced team members while drawing on project experience i have already executed.</p>
          <p>I possess a diverse set of skills that encompass both front-end web development and machine learning. My expertise in HTML and CSS allows me to create visually appealing and responsive web pages that provide an optimal user experience across different devices. I have a strong command of JavaScript, which enables me to develop dynamic and interactive web applications. Additionally, I am proficient in React.js, a powerful JavaScript library for building user interfaces. With React, I can efficiently manage the state of complex applications, create reusable components, and enhance the overall performance of web projects. My experience with React.js has allowed me to work on sophisticated single-page applications that are both scalable and maintainable.</p>
        </div>
        <div id="skills" className="skills-section">
          <h2>My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillItem key={index} logo={skill.logo} />
            ))}
          </div>
        </div>
        <div id="portfolio" className="portfolio-section">
    <h2 className="section-title">Welcome to my Portfolio</h2>
    <div>
            <h1 id="projects">Latest Projects</h1>
            <div className="video"> 
            <h3>Air Quality Index Prediction</h3>
            <video className="video-player" controls autoPlay loop muted>
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
            
        </div>
    <div className="projects animated-projects">
        {projects.map((project, index) => (
            <ProjectItem
                key={index}
                title={project.title}
                imageUrl={project.imageUrl}
            />
        ))}
    </div>
</div>

        <div id="contact" className="contact-section">
          <h4>Reach Out :</h4>
          <div className='email' id="email"><i className="fa fa-envelope"></i> Email: madeeha2011@gmail.com</div>
          <div className='linkedin'>LinkedIn : <a href="https://www.linkedin.com/in/madeeha-n-72502b262/">Madeeha Naz <i className="fab fa-linkedin"></i></a></div>
        </div>

      <footer className="footer">
        <p>&copy; 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
