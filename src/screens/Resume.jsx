import React from "react";
import "./Resume.css";
export default function Resume() {
  return (
    <div className="flex">
      <div className="w=">
        <img className="shadow-lg w-full p-3" src="resume.jpg" alt="resume img" />
      </div>
      <div>
        <img
          className="shadow-lg w-full p-3"
          src="resume2.jpg"
          alt="resume img"
        />
      </div>
    </div>
  );
}
