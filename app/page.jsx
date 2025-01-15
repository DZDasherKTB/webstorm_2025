"use client"; // Marking this component as a client component

import React from "react";
import AnimatedText from "./components/AnimatedText";
import "./main.css";

const page = () => {
  const reloadPage = (e) => {
    e.preventDefault(); // Prevent the default behavior
    window.location.reload(); // Reload the page
  };

  return (
    <>
      <img id="first" src="https://libraryofbabel.info/img/hex802.png" />
      <ul>
        <li>
          <a href="#" >
            <AnimatedText text="Browse" />
          </a>
        </li>
        <li>
          <a href="#" >
            <AnimatedText text="Search" />
          </a>
        </li>
        <li>
          <a href="#" >
            <AnimatedText text="Random" />
          </a>
        </li>
        <li>
          <a href="/about" >
            <AnimatedText text="About" />
          </a>
        </li>
        <li>
          <a href="#" >
            <AnimatedText text="Reference Hex" />
          </a>
        </li>
        <li>
          <a href="/image_archive" >
            <AnimatedText text="Image Archives" />
          </a>
        </li>
        <li>
          <a
            href="https://www.reddit.com/r/BabelForum/?rdt=56214"
            
          >
            <AnimatedText text="Forum" />
          </a>
        </li>
        <li>
          <a href="/theory" >
            <AnimatedText text="Theory" />
          </a>
        </li>
      </ul>
      <img src="https://libraryofbabel.info/img/hex802.png" />
      <div id="last">
        <b>
          <i>By this art you may contemplate the variation of the 23 letters</i>
        </b>
      </div>
    </>
  );
};

export default page;
