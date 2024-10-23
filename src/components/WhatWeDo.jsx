import React from "react";
import { Button, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import colors from "../assets/colors";
import tinycolor from "tinycolor2";

const styles = {
  container: {
    display: "grid",
    gap: "0px",
    justifyContent: "center",
    alignItems: "center",
  },
  shape: {
    width: "100%",
    aspectRatio: "1 / 1",
    position: "relative",
    overflow: "hidden",
  },
  shapeAfter: (color) => ({
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: color,
  }),
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
};

const CircleQuadrants = ({ imageSrc, imageIndex }) => {
  const colors = [
    "#272884",
    "#c73095",
    "#90278a",
    "#4c207f",
    "#009688",
    "#ff5722",
    "#ffc107",
    "#3f51b5",
    "#e91e63",
    "#673ab7",
    "#2196f3",
    "#ff9800",
    "#9c27b0",
    "#ffeb3b",
    "#795548",
    "#607d8b",
  ];

  const isExtraSmall = useMediaQuery("(max-width: 600px)");
  const isSmall = useMediaQuery("(min-width: 600px) and (max-width: 900px)");

  const columns = isExtraSmall ? 4 : isSmall ? 6 : 8;
  const shapesCount = 3 * columns;

  const containerStyle = {
    ...styles.container,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: "repeat(3, 1fr)",
  };

  return (
    <div style={containerStyle}>
      {Array.from({ length: shapesCount }).map((_, index) => {
        const isImagePosition =
          index === imageIndex ||
          index === imageIndex + 1 ||
          index === imageIndex + columns ||
          index === imageIndex + columns + 1;

        return (
          <div
            key={index}
            style={{
              ...styles.shape,
              gridColumn: isImagePosition ? "2 / 4" : undefined,
              gridRow: isImagePosition ? "1 / 3" : undefined,
            }}
          >
            {isImagePosition ? (
              <img
                src={imageSrc}
                alt="Description of the image"
                style={styles.image}
              />
            ) : (
              <div
                style={{
                  ...styles.shapeAfter(colors[index % colors.length]),
                  borderRadius: [
                    "0 0 0 0",
                    "0 0 100% 0",
                    "100% 0 0 100%",
                    "0 100% 100% 0",
                    "50% 50% 50% 50%",
                    "0 0 50% 50%",
                    "50% 0 0 50%",
                    "50% 50% 0 0",
                    "0 50% 50% 0",
                    "50% 0 0 50%",
                    "0 0 100% 0",
                    "0 100% 0 100%",
                    "0 0 0 100%",
                  ][index % 12],
                }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        size={12}
        sx={{
          paddingTop: { xs: "16%", md: "7%" },
          paddingInline: { xs: "10%", sm: "15%", md: "20%", lg: "30%" },
          position: "relative",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: {
              xs: "2.5em",
              sm: "4em",
              md: "5em",
              lg: "6em",
            },
            color: colors.primaryFont,
            fontWeight: 500,
            mb: 1,
            fontFamily: "'Gestura', serif",
            lineHeight: "0.9em",
          }}
        >
          Protect What Matters Most
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={{ paddingInline: { xs: "10%", sm: "15%", md: "20%", lg: "30%" } }}
      >
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: colors.primaryFont,
            fontFamily: "'RoobertPRO', sans-serif",
            fontSize: { xs: "0.9em", sm: "1em", md: "1.1em" },
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          We provide top-notch CCTV fitting and servicing to ensure your home
          and business are secure. Experience peace of mind with our
          professional services in Canada.
        </Typography>
      </Grid>
      <Grid
        item
        container
        spacing={2}
        justifyContent="center"
        sx={{ mb: { xs: 4, md: 8 } }}
      >
        <Grid
          size={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.primaryColor,
              color: "white",
              padding: { xs: "6px 12px", md: "10px 20px", lg: "15px 30px" },
              borderRadius: "var(--button-border-radius)",
              textTransform: "none",
              fontWeight: "bold",
              boxShadow: 0,
              fontSize: "0.9em",
              fontFamily: "'Quattrocento Sans', sans-serif",
              "&:hover": {
                backgroundColor: tinycolor(colors.primaryColor)
                  .lighten(10)
                  .toString(),
                boxShadow: 0,
              },
            }}
          >
            About Us
          </Button>
        </Grid>
      </Grid>
      {/* <Grid size={12} sx={{ width: "100%" }}>
        <CircleQuadrants
          imageSrc="https://plus.unsplash.com/premium_photo-1727443796323-4446e56b9cd5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageIndex={2}
        />
      </Grid> */}
    </Grid>
  );
};

export default WhatWeDo;
