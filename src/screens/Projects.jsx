import React from 'react';
import { Link } from 'react-router-dom';
export default function Projects() {
  return (
    <div className="projects">
      <div className="project1">
        <h2>SCP-APP</h2>
        <a href="https://lucid-wiles-f50192.netlify.app/" target="_blank">
          deployed site
        </a>
        <h3>FE Only</h3>
        <ul>
          Languages/Apps used creating this Project:
          <li>React</li>
          <li>/</li>
          <li>Netlify</li>
          <li>WireFrame</li>
          <li>Air Table</li>
        </ul>
        <img src="SCP.jpg" />
      </div>
      <div className="project2">
        <h2>Aqua Hunters</h2>
        <a href="https://61012b87a5da71b8ffa6a634--aqua-hunters.netlify.app/" target="_blank">
          deployed site
        </a>
        <h3>Full Stack</h3>
        <ul>
          Languages/Apps used creating this Project
          <li>React</li>
          <li>Ruby</li>
          <li>Rails</li>
          <li>/</li>
          <li>Heroku</li>
          <li>Netlify</li>
          <li>Figma</li>
        </ul>
        <img src="Fish.jpg" />
      </div>
      <div className="project3">
        <h2>PCParts</h2>
        <a href="https://siyas-pcparts.netlify.app/" target="_blank">
          deployed site
        </a>
        <h3>Full Stack</h3>
        <ul>
          Languages/Apps used creating this Project
          <li>React</li>
          <li>JS</li>
          <li>Express</li>
          <li>/</li>
          <li>Heroku</li>
          <li>Netlify</li>
          <li>Figma</li>
        </ul>
        <img src="pc.jpg" />
      </div>
      <div className="project4">
        <h2>lolinfo</h2>
        <a href="https://siyavashtorabi.github.io/lolinfo/" target="_blank">
          deployed site
        </a>
        <h3>FE Only</h3>
        <ul>
          Languages/Apps used creating this Project
          <li>HTML</li>
          <li>JS</li>
          <li>CSS</li>
          <li>/</li>
          <li>Netlify</li>
          <li>Figma</li>
        </ul>
        <img src="lol.jpg" />
      </div>
    </div>
  );
}
