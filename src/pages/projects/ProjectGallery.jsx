import React from "react";
import "./projectgallery.css";

const images = [
  "projectone.jpeg",
  "projecttwo.jpeg",
  "projectthree.jpeg",
  "projectfour.jpeg",
  "projectfive.jpeg",
  "projectsix.jpeg",
  "projectseven.jpeg",
  "eight.jpeg",
  "nine.jpeg",
  "ten.jpeg",
  "eleven.jpeg",
  "twelve.jpeg",
  "thirteen.jpeg",
  "fourteen.jpeg",
  "fifteen.jpeg",
  "sixteen.jpeg",
  "seventeen.jpeg",
  "eighteen.jpeg",
  "nineteen.jpeg",
  "twenty.jpeg",
  "twentyone.jpeg",
  "twentytwo.jpeg",
  "twentythree.jpeg",
  "twentyfour.jpeg",
  "twentyfive.jpeg",
  "twentysix.jpeg",
  "twentyseven.jpeg",
  "twentyeight.jpeg",
  "twentynine.jpeg",
  "thirty.jpeg",
  "thirtyone.jpeg",
  "thirtytwo.jpeg",
  "thirtythree.jpeg",
  "thirtyfour.jpeg",
  "thirtyfive.jpeg",
  "thirtysix.jpeg",
  "fourty.jpeg",
  "fourtyone.jpeg",
  "fourtytwo.jpeg",
  "fourtythree.jpeg",
  "fourtyfour.jpeg",
  "fourtyfive.jpeg",
  "fourtysix.jpeg",
  "fourtyseven.jpeg",
  "fourtyeight.jpeg"
 
];

const ProjectGallery = () => {
  return (
    <div className="project-gallery">
      <h1>Project Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={`/${src}`} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
