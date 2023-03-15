import React from "react";
import pic from "../assets/pic.jpg";
import pdf from "../assets/Jeevan-Jyoti-Choudhury-Resume.pdf";

export default function AboutMe() {
  return (
    <section id="about" className="about section">
      <div className="about__section__left">
        <div className="about__section__left__content">
          <img
            src={pic}
            alt="img"
            className="about__section__left__content__img"
          />
        </div>
      </div>
      <div className="about__section__right">
        <div className="home__section__sub__heading">
          Let me introduce myself
        </div>
        <div
          className="home__section__heading"
          style={{
            marginBottom: -20,
          }}
        >
          About me
        </div>
        {/* <div
          className="home__section__info"
          style={{
            marginBottom: 0,
          }}
        >
          Hello everyone, I'm a Web Developer based in India. I enjoy turning
          complex problems into simple, beautiful and intuitive solutions.
          Studying this time at "Masai School"
        </div> */}
        <div
          className="home__section__info"
          style={{
            marginBottom: 0,
            marginTop: 20,
          }}
        >
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects. I'm quietly
          confident, naturally curious, and perpetually working on improving my
        </div>
        <div
          className="home__section__info"
          style={{
            marginBottom: 0,
            marginTop: 20,
          }}
        >
          🦄 <span>Skills:</span> HTML, CSS, JavaScript, Bootstrap, MUI,
          ReactJS, NextJS, MongoDB, ExpressJS, NodeJS, Typescript, Rest API
        </div>
        <div
          className="home__section__info"
          style={{
            marginTop: 20,
          }}
        >
          💼 <span>Tools:</span> Visual Studio Code, GitHub Desktop, Windows
          Terminal, Netlify, and Git.
        </div>
        {/* <a
          href="https://drive.google.com/file/d/1X1PyLfbZPSSQeFPHDHQBbkMvyFweqgBa/view?usp=sharing"
          className="home__section__button"
          // title="Download CV"
          // target="_blank"
          rel="noreferrer"
          download
        >
          Download CV
        </a> */}
        <a
          href={pdf}
          className="home__section__button"
          title="Download CV"
          target="_blank"
          rel="noreferrer"
          download
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
