'use client'
import { useState, useEffect, useRef } from "react";

const AnimatedText = ({ text }) => {
  const [animatedText, setAnimatedText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    if (isHovering) {
      // Extract the last four characters
      const lastFourChars = text.slice(-4); // Get last four characters
      const charArray = lastFourChars.split(""); // Split them into an array

      // Function to animate one character at a time
      function cycleChar(index) {
        if (!isHovering) return; // Exit early if hovering stops

        let charCode = charArray[index].charCodeAt(0);
        if (charCode < 122) {
          // ASCII code for 'z'
          charArray[index] = String.fromCharCode(charCode + 1);
        } else {
          charArray[index] = "a"; // Reset to 'a' after 'z'
        }

        setAnimatedText(text.slice(0, text.length - 4) + charArray.join("")); // Combine the untouched part with the animated part

        // Move to the next character when the current one reaches 'a' or 'z'
        if (charArray[index] === "a" || charArray[index] === "z") {
          const timeoutId = setTimeout(() => {
            if (index - 1 >= 0) {
              cycleChar(index - 1); // Start the next character (leftward)
            }
          }, 200); // Delay before starting the next character

          timeoutsRef.current.push(timeoutId);
        }

        const timeoutId = setTimeout(() => {
          cycleChar(index); // Continue cycling the same character
        }, 100); // Delay between each letter

        timeoutsRef.current.push(timeoutId);
      }

      // Start the animation from the rightmost character of the last four
      cycleChar(3);
    }

    return () => {
      // Clear all timeouts when the component unmounts or hovering stops
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
      setAnimatedText(text); // Reset the text immediately when hovering stops
    };
  }, [isHovering, text]);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {animatedText}
    </div>
  );
};

export default AnimatedText;
