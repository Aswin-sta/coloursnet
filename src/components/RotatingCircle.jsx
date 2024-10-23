/** @jsxImportSource @emotion/react */
import React from "react";
import { useMediaQuery } from "@mui/material"; // Importing useMediaQuery
import colors from "../assets/colors";
import { keyframes } from "@emotion/react";

// Define the keyframes for the rotation
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const RotatingCircle = ({ onClick }) => {
  // Media query to check for mobile screens
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isExtraSmall = useMediaQuery("(max-width: 480px)");

  // Define sizes based on the screen size
  const size = isExtraSmall ? 100 : isMobile ? 150 : 200; // Width and height in pixels

  // Define the text to display
  const text = "Get Your Free Estimate Now - Get Your Free Estimate Now -";

  // For mobile views, we can shorten the text or modify it if needed
  const displayedText = isMobile ? "Get Your Free Estimate Now" : text;

  return (
    <div style={styles.container}>
      <a
        href="#" // Change this to your desired link or remove for button functionality
        onClick={onClick} // Handle click event
        style={{ ...styles.circleContainer, width: size, height: size }}
      >
        {/* Rotating SVG Circle */}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 200 200" // Keep the viewBox constant for scaling
          css={styles.svgCircle(size)} // Apply the keyframes using css from @emotion/react
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" // Updated circlePath for new size
            />
          </defs>
          <circle cx="100" cy="100" r="70" fill="none" stroke="none" />
          <g>
            <use xlinkHref="#circlePath" fill="none" />
            <text fill="#000">
              <textPath xlinkHref="#circlePath">{displayedText}</textPath>
            </text>
          </g>
        </svg>
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0, // Remove margin
    padding: 0, // Remove padding
  },
  circleContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer", // Change cursor to pointer for better UX
  },
  svgCircle: (size) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    animation: `${rotate} 10s linear infinite`, // Apply rotating animation
  }),
};

export default RotatingCircle;
