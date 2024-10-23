import React from "react";
import Grid from "@mui/material/Grid2"; // Make sure you're using the correct import for Grid
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import assets from "../assets/images";
import colors from "../assets/colors";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring"; // Import react-spring

const Brands = () => {
  const brandLogos = [
    assets.images.AlarmLogo,
    assets.images.AmericanDynamicsLogo,
    assets.images.AxisLogo,
    assets.images.BoschLogo,
    assets.images.Control4Logo,
    assets.images.DahuaLogo,
    assets.images.DSCLogo,
    assets.images.ElanLogo,
    assets.images.HikvisionLogo,
    assets.images.HoneywellLogo,
    assets.images.KantechLogo,
    assets.images.SamsungLogo,
    assets.images.SonosLogo,
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.1, // Adjust the threshold for triggering
  });
  // Define smoother animation using react-spring
  const smoothAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: inView
      ? { opacity: 1, transform: "translateY(0)" }
      : { opacity: 0, transform: "translateY(50px)" },
    config: {
      tension: 350,
      friction: 5,
      duration: 1200,
    },
  });

  return (
    <animated.div style={smoothAnimation} ref={ref}>
      <Box
        sx={{
          paddingBlock: { xs: 2, sm: 3, md: 4 },
          paddingInline: { xs: 2, sm: 4, md: 10, lg: 16 },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          align="left"
          gutterBottom
          sx={{
            fontWeight: 500,
            mb: { xs: 6, sm: 8, md: 10 },
            mt: { xs: 6, sm: 8, md: 10 },
            fontSize: {
              xs: "1.8em", // Reduced for mobile
              sm: "2.5em", // Small screens
              md: "3.2em", // Medium screens
              lg: "4em", // Large screens
            },
            color: colors.primaryFont,
            fontFamily: "'Gestura', serif",
            lineHeight: "1.1em",
          }}
        >
          Brands We Work With
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {brandLogos.map((logo, index) => (
            <Grid
              size={{ xs: 6, md: 3, lg: 3 }}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt={`Brand logo ${index + 1}`}
                sx={{
                  width: { xs: "120px", md: "180px" },
                  height: "auto",
                  maxHeight: "auto",
                  objectFit: "contain",
                  margin: "0 auto",
                  padding: "20px",
                  // filter: "brightness(0%)", // Change filter to black-and-white
                  // transition: "filter 0.3s ease",
                  // "&:hover": {
                  //   filter: "brightness(100%)", // Remove filter on hover
                  // },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </animated.div>
  );
};

export default Brands;
