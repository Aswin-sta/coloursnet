import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Carousel = ({ interval = 3000 }) => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Beautiful Landscape 1",
    },
    {
      src: "https://images.unsplash.com/photo-1509715761508-dc1acb1cb944?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Beautiful Landscape 2",
    },
    {
      src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Beautiful Landscape 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        boxShadow: 3,
        boxSizing: "border-box",
        width: "90%", // Set a reduced width (80% of the parent)
        margin: "0 auto", // Center the carousel
        paddingBottom: "4px", // Adding padding line of 4px
      }}
    >
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              minWidth: "100%",
              height: 0,
              paddingBottom: "42.86%", // Aspect ratio of 21:9
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
              position: "relative",
              "&:hover": {
                filter: "brightness(80%)", // Darken on hover
              },
            }}
          ></Box>
        ))}
      </Box>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          zIndex: 10,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
        onClick={prevImage}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          zIndex: 10,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
        onClick={nextImage}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default Carousel;
