import React from 'react';
import Project from '../Project';

import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';

export default function Portfolio() {
  const projects = [
    {
      title: 'Will B Hangry - Burger shop',
      url: 'https://will-b-hangry.herokuapp.com',
      image: project3,
      Repo: 'https://github.com/hannahhue/will-b-hangry',
      Skills:
        'MERN, Stripe.js, GraphQL, Redux.js, Bootstrap, JWT, Github, Heroku',
    },
    {
      title: 'Your Store - Online clothes Store',
      url: 'https://your-store-01.herokuapp.com',
      image: project2,
      Repo: 'https://github.com/Iva416/yourStore',
      Skills:
        'Handlebars.js, Express.js-session, MySQL, Sequelize, Bootstrap, Github, Heroku',
    },
    {
      title: 'Flight Searching',
      url: 'https://benliu104.github.io/Project01-FlightPlanner/',
      image: project1,
      Repo: 'https://github.com/BenLiu104/Project01-FlightPlanner',
      Skills:
        'HTML, CSS, Javascript, Third-party API, JQuery, Foundation framework, Github',
    },
    {
      title: 'Code Quiz',
      url: 'https://benliu104.github.io/Code-Quiz/',
      image:
        'https://github.com/BenLiu104/Code-Quiz/blob/main/assets/images/Step1.png?raw=true',
      Repo: 'https://github.com/BenLiu104/Code-Quiz',
      Skills: 'HTML, CSS, Javascript, Github',
    },
    {
      title: 'Note Taker',
      url: 'https://as1-note-taker.herokuapp.com/',
      image:
        'https://github.com/BenLiu104/NoteTaker/blob/main/image/step1.png?raw=true',
      Repo: 'https://github.com/BenLiu104/NoteTaker',
      Skills: 'HTML, CSS, Javascript, Express.js, Github',
    },
    {
      title: 'Weather Dashboard',
      url: 'https://benliu104.github.io/Weather-Dashboard/',
      image:
        'https://github.com/BenLiu104/Weather-Dashboard/blob/main/assets/images/step1.png?raw=true',
      Repo: 'https://github.com/BenLiu104/Weather-Dashboard',
      Skills:
        'HTML, CSS, Javascript, JQuery, Bootstrap, Third Party API, Github',
    },
    {
      title: 'Workday Scheduler',
      url: 'https://benliu104.github.io/Work-Day-Scheduler/',
      image:
        'https://github.com/BenLiu104/Work-Day-Scheduler/blob/main/Assets/step1.png?raw=true',
      Repo: 'https://github.com/BenLiu104/Work-Day-Scheduler',
      Skills: 'HTML, CSS, Javascript, JQuery, Bootstrap, Github',
    },
  ];

  return (
    <div className="row row-cols-1 row-cols-lg-2 g-2">
      {projects.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            url={project.url}
            image={project.image}
            Repo={project.Repo}
            Skills={project.Skills}
          />
        );
      })}
    </div>
  );
}
