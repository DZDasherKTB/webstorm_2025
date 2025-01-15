import React from 'react'
import './images.css'
const page = () => {
  return (
    <div className="container">
      <h1 className="text-bold">
        <b>babel image archives</b>
      </h1>
      <ul>
        <li>
          <a href="#" id='first'>Universal Slide Show</a>
        </li>
        <li>
          <a href="#" id='second'>Image Search</a>
        </li>
        <li>
          <a href="#" id='third'>About</a>
        </li>
        <li>
          <a href="/image_archive/colouroscopy" id='fourth'>Coloroscopy</a>
        </li>
        <li>
          <a href="#" id='fifth'>Library of Babel</a>
        </li>
      </ul>
    </div>
  );
}

export default page