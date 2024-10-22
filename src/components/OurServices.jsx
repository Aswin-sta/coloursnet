import * as React from "react";
import { useSpring, animated } from "react-spring"; // Import react-spring
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import colors from "../assets/colors";
import { Typography, useMediaQuery } from "@mui/material";

export default function OurServices() {
  const services = [
    {
      id: "1",
      name: "Installation",
      description:
        "Professional installation of CCTV cameras for your security needs.",
      image: "https://images.unsplash.com/photo-1646935235864-b8f42a0b8bc7",
    },
    {
      id: "2",
      name: "Servicing and Maintenance",
      description:
        "Regular servicing and maintenance to keep your CCTV systems operational.",
      image: "https://images.unsplash.com/photo-1565591452825-67d6b7df1d47",
    },
    {
      id: "3",
      name: "Home Automation",
      description:
        "Integrate smart devices for a seamless home automation experience.",
      image: "https://images.unsplash.com/photo-1575315081344-baa44c7bc70a",
    },
    {
      id: "4",
      name: "Networking and Ethernet",
      description: "Setup and maintenance of reliable networking solutions.",
      image: "https://images.unsplash.com/photo-1571136808655-6f1e49c53b73",
    },
    {
      id: "5",
      name: "Software Solutions",
      description:
        "Custom software solutions tailored to meet your business needs.",
      image: "https://images.unsplash.com/photo-1505420488437-4852f29b83b2",
    },
  ];

  const isSmallScreen = useMediaQuery("(max-width: 959px)");
  const [selectedService, setSelectedService] = React.useState(services[0]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  // Define the fly-up animation using react-spring
  const flyUp = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 }, // Start from below and invisible
    to: { transform: "translateY(0)", opacity: 1 }, // Move to final position and become visible
    config: { duration: 1000 }, // Increase duration for a slower effect
  });

  return (
    <animated.div style={flyUp}>
      {" "}
      {/* Wrap with animated.div */}
      <Box
        sx={{
          paddingBlock: { xs: 2, md: 4 },
          paddingInline: { xs: 2, md: 16 },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          align="left"
          gutterBottom
          sx={{
            fontWeight: 500,
            mb: 10,
            mt: { xs: 8, md: 16 },
            fontSize: {
              xs: "2.5em",
              sm: "4em",
              md: "5em",
              lg: "6em",
            },
            color: colors.darkBlue,
            fontFamily: "'Gestura', serif",
            lineHeight: "0.9em",
          }}
        >
          Our Services
        </Typography>
        <Grid
          container
          sx={{
            border: `1px solid ${colors.borderColor}`,
            borderRadius: { xs: "25px", md: "70px" },
            overflow: "hidden",
          }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ flex: 1, boxSizing: "border-box" }}>
              {services.map((service) => (
                <Box
                  key={service.id}
                  onClick={() => handleServiceClick(service)}
                  sx={{
                    cursor: "pointer",
                    borderBottom: `1px solid ${colors.borderColor}`,
                    "&:last-child": {
                      borderBottom: "none",
                    },
                    backgroundColor:
                      selectedService.id === service.id
                        ? colors.beige
                        : "transparent",
                    "&:hover": {
                      backgroundColor: colors.beige,
                      transform: "scale(1.02)", // Scale effect on hover
                      boxShadow: `0 4px 20px rgba(0, 0, 0, 0.1)`, // Add shadow on hover
                    },
                    paddingInline: { xs: 2, md: 6 },
                    paddingBlock: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    boxSizing: "border-box",
                    transition:
                      "background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transition
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      mb: { xs: 2, md: 4 },
                      fontSize: {
                        xs: "1.8em",
                        md: "2em",
                        lg: "2.5em",
                      },
                      color: colors.darkBlue,
                      fontFamily: "'Gestura', serif",
                      lineHeight: "0.9em",
                      textAlign: "left",
                    }}
                  >
                    {service.name}
                  </Typography>
                  <Box
                    sx={{
                      maxHeight:
                        selectedService.id === service.id ? "100px" : 0,
                      overflow: "hidden",
                      transition: "max-height 0.5s ease, padding 0.5s ease",
                      paddingTop: selectedService.id === service.id ? 2 : 0,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: colors.darkBlue,
                        fontFamily: "'RoobertPRO', sans-serif",
                        fontSize: { xs: "0.9em", sm: "1em", md: "1.1em" },
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                    >
                      {service.description}
                    </Typography>
                    {selectedService.id === service.id && isSmallScreen ? (
                      <Box
                        sx={{
                          borderRadius: { xs: "25px", md: "70px" },
                          overflow: "hidden",
                          width: "100%",
                          display: "flex",
                          mb: 2,
                          height: "auto",
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.05)", // Slight scaling effect on hover
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={selectedService.image}
                          alt={selectedService.name}
                          key={selectedService.id}
                          sx={{
                            aspectRatio: "1/1",
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            borderRadius: "inherit",
                            opacity: 1,
                            transition: "opacity 0.5s ease, filter 0.5s ease",
                            filter: "blur(0px)",
                            "&:hover": {
                              filter: "blur(0px)",
                            },
                          }}
                        />
                      </Box>
                    ) : null}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              borderLeft: `1px solid ${colors.borderColor}`,
              background: colors.beige,
            }}
          >
            <Box
              sx={{
                borderRadius: { xs: "25px", md: "70px" },
                overflow: "hidden",
                width: "80%",
                height: "auto",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src={selectedService.image}
                alt={selectedService.name}
                key={selectedService.id}
                sx={{
                  aspectRatio: "1/1",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "inherit",
                  opacity: 1,
                  transition: "opacity 0.5s ease, filter 0.5s ease",
                  filter: "blur(0px)",
                  "&:hover": {
                    filter: "blur(0px)",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </animated.div>
  );
}
