import React from "react";
import Link from "next/link";
import "./main.css";
import AnimatedText from "./components/AnimatedText";
const page = () => {
  return (
    <>
      <img id="first" src="https://libraryofbabel.info/img/hex802.png" />
      <ul>
        <li>
          <Link href="#"><AnimatedText text="Browse" /></Link>
        </li>
        <li>
          <Link href="#">Search</Link>
        </li>
        <li>
          <Link href="#">Random</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="#">Reference Hex</Link>
        </li>
        <li>
          <Link href="image_archives.html">Image Archives</Link>
        </li>
        <li>
          <Link href="https://www.reddit.com/r/BabelForum/?rdt=56214">Forum</Link>
        </li>
        <li>
          <Link href="#">Theory</Link>
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
