import React from 'react';
import githubIcon from '../images/github-sign.png';
import './pages/Portfolio.css';
export default function Project({ title, url, image, Repo, Skills }) {
  const style = {
    width: '100%',
    height: '20rem',
    objectFit: 'cover',
  };

  return (
    <div className="col p-4">
      <div className="card custom-project">
        <img
          src={image}
          className="card-img-top border"
          alt={title}
          style={style}
        />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">Skills: {Skills}</p>
          <div className="text-end">
            <a
              href={url}
              className="card-text"
              target="_blank"
              rel="noreferrer"
            >
              <span>Go to Application</span>
            </a>
            <a
              href={Repo}
              className="card-text mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="" width="20px"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
