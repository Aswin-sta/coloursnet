import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import colors from "../assets/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: colors.beige,
  padding: theme.spacing(4),
  textAlign: "left",
  color: colors.darkBlue,
  display: "flex",
  borderRadius: "10px",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "80%",
  border: "none",
  boxShadow: "none",
  height: "200px",
  transition: "transform 0.3s, box-shadow 0.3s", // Add transition for smooth effect
  "&:hover": {
    transform: "scale(1.05)", // Scale up on hover
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Add shadow on hover
  },
  [theme.breakpoints.up("md")]: {
    height: "300px",
  },
}));

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

const WhyUS = () => {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{
        mt: 16,
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
            mb: 8,
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
          Why Us
        </Typography>
      </Grid>
      {services.map((service, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <Item>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: 400,
                mb: 2,
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
                color: colors.darkBlue,
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
                  color: colors.darkBlue,
                  border: `1px solid ${colors.darkBlue}`,
                  borderRadius: "4px",
                  "&:hover": {
                    color: colors.darkBlue,
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
  );
};

export default WhyUS;
