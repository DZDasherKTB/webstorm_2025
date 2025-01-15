'use client'
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    let r = 0;
    let b = 0;
    const g = Math.floor(Math.random() * 256);

    let rDirection = 1;
    let bDirection = 1;

    function updateBackground() {
      document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    // Set interval for red color change
    const rInterval = setInterval(() => {
      r += rDirection;
      if (r >= 255 || r <= 0) rDirection *= -1;
      updateBackground();
    }, 1000);

    // Set interval for blue color change
    const bInterval = setInterval(() => {
      b += bDirection;
      if (b >= 255 || b <= 0) bDirection *= -1;
      updateBackground();
    }, 1);

    // Clean up intervals when component is unmounted
    return () => {
      clearInterval(rInterval);
      clearInterval(bInterval);
    };
  }, []);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Page;
