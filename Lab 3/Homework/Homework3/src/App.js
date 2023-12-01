import React, { useRef } from 'react';
import './App.css';
import avatar from "./Image/kedi1.png";
import game from "./Image/game.png";
import pet from "./Image/pet.png";
import music from "./Image/music.png";
import book from "./Image/book.png";


function App() {
  const education= useRef(null);
  const programskills= useRef(null);
  const developementtools= useRef(null);
  const interests= useRef(null);
  
  const scrollToSection = (sectionId) => {

    window.scrollTo({
        top: sectionId.current.offsetTop,
        behavior: 'smooth'
    });
  }

  return (
    <div class="wrapper">
        <div class="intro">
          <div class="profile">
            <div class="photo">
              <img src={avatar}/>
            </div>
            <div class="bio">
              <h1 class="name">Nguyễn Văn Trường Khoa</h1>
              <p class="profession">Full-stack web Developer</p>
            </div>
          </div>
          <div class="intro-section about">
            <h1 class="title">about me</h1>
            <p class="paragraph">
              Hi everyone, I am a full-stack web developer, studying in UIT, Vietnam. I recently try my
              best to improve my skills on web development. My favorite thing is to observe others' portfolio.
            </p>
          </div>
          <div class="intro-section contact">
            <h1 class="title">Contact</h1>
            <div class="info-section">
              <i class="fas fa-phone"></i>
              <span>(+888)888-888-888</span>
            </div>
            <div class="info-section">
              <i class="fas fa-map-marker-alt"></i>
              <span>Ho Chi Minh, Vietnam</span>
            </div>
            <div class="info-section">
              <i class="fas fa-paper-plane"></i>
              <span>20521472@gm.uit.edu.vn</span>
            </div>
            <div class="info-section link">
              <i class="fab fa-facebook"></i>
              <a target="_blank" rel="author" href="https://www.facebook.com/khoanguyen090286/">
                <span>Khoa Nguyen</span>
              </a>
            </div>
          </div>
          <div class="intro-section follow">
            <h1 class="title">Follow</h1>
            <div class="info-section link">
              <i class="fab fa-github"></i>
              <a target="_blank" rel="author" href="https://github.com/Nguyen-Van-Truong-Khoa">
                <span>Nguyen-Van-Truong-Khoa@github</span>
              </a>
            </div>
          </div>
        </div>
        <div class="detail">
          <div class="detail-section edu" id="education" ref={education}>
            <div class="detail-title">
              <div class="title-icon">
                <i class="fas fa-user-graduate"></i>
              </div>
              <span>Eduation</span>
            </div>
            <div class="detail-content">
              <div class="timeline-block">
                <h1>Department of information system</h1>
                <p>National Ho Chi Minh City University, Vietnam</p>
                <time>2020 - present</time>
              </div>
            </div>
          </div>
          <div class="detail-section pg-skill" id="program-skills" ref={programskills}>
            <div class="detail-title">
              <div class="title-icon">
                <i class="fas fa-laptop-code"></i>
              </div>
              <span>Programming skills</span>
            </div>
            <div class="detail-content">
              <ul class="pg-list">
                <li>
                  <span>HTML5</span>
                  <div class="sb-skeleton">
                    <div class="skillbar" style={{'--pgbar-length': '90%' }}></div>
                  </div>
                </li>
                <li>
                  <span>CSS3</span>
                  <div class="sb-skeleton">
                    <div class="skillbar" style={{'--pgbar-length': '75%' }}></div>
                  </div>
                </li>
                <li>
                  <span>Javascript</span>
                  <div class="sb-skeleton">
                    <div class="skillbar" style={{'--pgbar-length': '70%' }}></div>
                  </div>
                </li>
                <li>
                  <span>JQuery</span>
                  <div class="sb-skeleton">
                    <div class="skillbar" style={{'--pgbar-length': '50%' }}></div>
                  </div>
                </li>
                <li>
                  <span>NodeJS</span>
                  <div class="sb-skeleton">
                    <div class="skillbar" style={{'--pgbar-length': '70%' }}></div>
                  </div>
                </li>
                <li>
                  <span>ReactJS</span>
                  <div class="sb-skeleton">
                    <div class="skillbar" style={{'--pgbar-length': '75%' }}></div>
                  </div>
                </li>
                <li>
                  <span>VueJS</span>
                  <div class="sb-skeleton">
                    <div class="skillbar" style={{'--pgbar-length': '40%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="detail-section tool-skill" id="developement-tools" ref={developementtools}>
            <div class="detail-title">
              <div class="title-icon">
                <i class="fas fa-tools"></i>
              </div>
              <span>Developement Tools</span>
            </div>
            <div class="detail-content">
              <ul class="tool-list">
                <li>
                  <svg viewbox="0 0 100 100">
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle class="cbar" cx="50" cy="50" r="45" style={{"--percent": '0.6'}}></circle>
                  </svg>
                  <span class="tl-name">Photoshop</span>
                  <span class="tl-exp">60%</span>
                </li>
                <li>
                  <svg viewbox="0 0 100 100">
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle class="cbar" cx="50" cy="50" r="45" style={{"--percent": '0.8'}}></circle>
                  </svg>
                  <span class="tl-name">VScode</span>
                  <span class="tl-exp">80%</span>
                </li>
                <li>
                  <svg viewbox="0 0 100 100">
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle class="cbar" cx="50" cy="50" r="45" style={{"--percent": '0.7'}}></circle>
                  </svg>
                  <span class="tl-name">Git</span>
                  <span class="tl-exp">70%</span>
                </li>
                <li>
                  <svg viewbox="0 0 100 100">
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle class="cbar" cx="50" cy="50" r="45" style={{"--percent": '0.7'}}></circle>
                  </svg>
                  <span class="tl-name">NPM</span>
                  <span class="tl-exp">74%</span>
                </li>
              </ul>
            </div>
      
          </div>
          <div class="detail-section interests" id="interests" ref={interests}>
            <div class="detail-title">
              <div class="title-icon">
                <i class="fas fa-heart"></i>
              </div>
              <span>Interests</span>
            </div>
            <div class="detail-content">
              <div class="outer-frame">
                <ul class="favor-list">
                  <li>
                    <img class= "interest" src={game}/>
                    <span>Game</span>
                  </li>
                  <li>
                    <img class= "interest" src={pet}/>
                    <span>Pet</span>
                  </li>
                  <li>
                    <img class= "interest" src={music}/>
                    <span>Music</span>
                  </li>
                  <li>
                    <img class= "interest" src={book}/>
                    <span>Self-learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="sidebar">
          <div id="navbar">
            <a href="#" onClick={() => scrollToSection(education) } >
              Education
            </a>
            <a href="#" onClick={() => scrollToSection(programskills)}>
              Programming Skills
            </a>
            <a href="#" onClick={() => scrollToSection(developementtools)}>
              Developement Tools
            </a>
            <a href="#" onClick= {() => scrollToSection(interests)}>
              Interests
            </a>
          </div>
        </div>
      </div>

  );
}

export default App;
