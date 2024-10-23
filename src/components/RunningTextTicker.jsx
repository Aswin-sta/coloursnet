import React from "react";
import { Box, Typography } from "@mui/material";

const RunningTextTicker = () => {
  return (
    <Box sx={styles.tickerContainer}>
      <Box sx={styles.innerTicker}>
        <Typography sx={styles.tickerText}>Get a Free Estimation</Typography>
        <Typography sx={styles.tickerText}>
          Maintenance Services Available
        </Typography>
        <Typography sx={styles.tickerText}>Contact Us Today!</Typography>
      </Box>
    </Box>
  );
};

const styles = {
  tickerContainer: {
    overflow: "hidden", // Hide overflow to prevent scrolling text from showing outside the box
    backgroundColor: "#f0f0f0", // Background color of the ticker
    padding: "10px 20px",
    whiteSpace: "nowrap", // Prevent text wrapping
  },
  innerTicker: {
    display: "inline-block", // Make it inline-block to align properly
    animation: "scroll 12s linear infinite", // Adjust duration to slow down
    whiteSpace: "nowrap", // Prevent text wrapping
  },
  tickerText: {
    display: "inline-block",
    paddingRight: "50px", // Space between repeated texts
  },
  "@keyframes scroll": {
    "0%": {
      transform: "translateX(100%)", // Start off-screen right
    },
    "10%": {
      transform: "translateX(0%)", // Fully visible at 10%
    },
    "90%": {
      transform: "translateX(0%)", // Still visible at 90%
    },
    "100%": {
      transform: "translateX(-100%)", // End off-screen left
    },
  },
};

export default RunningTextTicker;
