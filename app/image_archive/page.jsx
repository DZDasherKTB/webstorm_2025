"use client";
import React from "react";
import "./images.css";
const page = () => {
  return (
    <div className="container">
      <h1 className="text-bold">
        <b>babel image archives</b>
      </h1>
      <ul>
        <li>
          <a href="#">Universal Slide Show</a>
        </li>
        <li>
          <a href="#">Image Search</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="/image_archive/colouroscopy">Coloroscopy</a>
        </li>
        <li>
          <a href="#">Library of Babel</a>
        </li>
      </ul>
    </div>
  );
};

export default page;
