import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import colors from "../assets/colors";
import { useSpring, animated } from "react-spring"; // Import react-spring
import { useInView } from "react-intersection-observer"; // Import useInView

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: colors.secondaryColor,
  padding: theme.spacing(4),
  textAlign: "left",
  color: colors.primaryFont,
  display: "flex",
  borderRadius: "20px", // Default borderRadius for extra small screens
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  border: "none",
  boxShadow: "none",
  height: "200px",
  transition: "transform 0.3s, box-shadow 0.3s",

  // Hover effect only on small screens and above
  "&:hover": {
    [theme.breakpoints.up("sm")]: {
      transform: "scale(1.02)", // Apply hover only for screens >= 'sm'
    },
  },

  // Adjust height and borderRadius for small screens and above
  [theme.breakpoints.up("sm")]: {
    height: "250px",
    borderRadius: "30px",
  },
  [theme.breakpoints.up("md")]: {
    height: "300px",
    borderRadius: "50px",
  },
}));

// Services array
const services = [
  {
    title: "Trusted by Customers",
    description:
      "Reliable and proven security systems using top equipment from the market.",
  },
  {
    title: "Expert Team",
    description:
      "Our technicians and installation teams have years of experience in security camera installation.",
  },
  {
    title: "Latest Technology and Affordable Rates",
    description: "Utilizing the latest technology at reasonable rates.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Quick support from professionals here to get the job done right the first time.",
  },
  {
    title: "CCTV Installation Services",
    description:
      "Professional installation of CCTV systems tailored to your security needs.",
  },
  {
    title: "CCTV Upgrade and Maintenance",
    description:
      "Upgrade your existing CCTV systems and ensure optimal performance with our maintenance services.",
  },
];

// WhyUS Component
const WhyUS = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.1, // Adjust the threshold for triggering
  });

  const smoothAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: inView
      ? { opacity: 1, transform: "translateY(0)" }
      : { opacity: 0, transform: "translateY(50px)" },
    config: {
      tension: 350,
      friction: 20,
      duration: 1200,
    },
  });

  return (
    <animated.div style={smoothAnimation} ref={ref}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          paddingBlock: { xs: 2, md: 4 },
          paddingInline: { xs: 2, md: 16 },
        }}
      >
        <Grid size={12}>
          <Typography
            variant="h2"
            component="h2"
            align="left"
            gutterBottom
            sx={{
              fontWeight: 500,
              mb: { xs: 2, sm: 8, md: 10 },
              mt: { xs: 2, sm: 8, md: 10 },
              fontSize: {
                xs: "1.8em",
                sm: "2.5em",
                md: "3.2em",
                lg: "4em",
              },
              color: colors.primaryFont,
              fontFamily: "'Gestura', serif",
              lineHeight: "1.1em",
            }}
          >
            Why Us
          </Typography>
        </Grid>
        {services.map((service, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }} // Center the cards
          >
            <Item>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: 400,
                  mb: 2,
                  fontSize: {
                    xs: "1.4em",
                    sm: "1.6em",
                    md: "1.8em",
                  },
                  fontFamily: "'Gestura', serif",
                  lineHeight: "0.9em",
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontFamily: "'RoobertPRO', sans-serif",
                  fontSize: { xs: "0.8em", md: "1em" },
                  fontWeight: 400,
                  color: colors.primaryFont,
                  mb: 2,
                }}
              >
                {service.description}
              </Typography>
              <Box sx={{ marginTop: "auto" }}>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  aria-label={`Learn more about ${service.title}`}
                  sx={{
                    textTransform: "none",
                    fontSize: { xs: "0.8em", md: "0.9em" },
                    color: colors.primaryFont,
                    border: `1px solid ${colors.primaryFont}`,
                    borderRadius: "4px",
                    "&:hover": {
                      color: colors.primaryFont,
                      backgroundColor: colors.lightBlue,
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </animated.div>
  );
};

export default WhyUS;
