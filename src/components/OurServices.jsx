import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import colors from "../assets/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: colors.card,
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
  [theme.breakpoints.up("md")]: {
    height: "300px",
  },
}));

const services = [
  {
    title: "Fitting",
    description: "Professional installation of CCTV systems.",
  },
  {
    title: "Services",
    description: "Comprehensive maintenance and support for CCTV systems.",
  },
  {
    title: "Consultation",
    description: "Expert advice on CCTV system selection and setup.",
  },
];

const OurServices = () => {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{ mt: 16, padding: { xs: 2, md: 4 } }}
    >
      <Grid item size={12}>
        <Typography
          variant="h2"
          component="h2"
          align="left"
          gutterBottom
          sx={{
            fontWeight: 500,
            mb: 4,
            fontFamily: "'Gestura', serif",
            lineHeight: "0.9em",
            color: colors.darkBlue,
          }}
        >
          Our Services
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

export default OurServices;
