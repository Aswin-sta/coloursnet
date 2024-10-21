import * as React from "react";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Phone, Mail, Instagram } from "react-feather"; // Import icons from react-feather
import colors from "../assets/colors";

const StyledContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: "40px",
  paddingBlock: "100px",
  backgroundColor: "#009688", // Example background color
}));

const IconContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  marginTop: theme.spacing(2),
}));

const ConnectWithUs = () => {
  return (
    <StyledContainer container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.5em",
              sm: "2em",
              md: "3em",
              lg: "3em",
            },
            color: colors.background,
            fontWeight: 500,
            mb: 1,
            fontFamily: "'Gestura', serif",
            lineHeight: "0.9em",
            textAlign: "left", // Align text to the left
          }}
        >
          Connect with Us
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <IconContainer container spacing={2}>
          <Grid item>
            <a href="https://wa.me/your-number" aria-label="WhatsApp">
              <Phone size={24} color="#25D366" /> {/* WhatsApp icon */}
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.instagram.com/your-profile"
              aria-label="Instagram"
            >
              <Instagram size={24} color="#E1306C" /> {/* Instagram icon */}
            </a>
          </Grid>
          <Grid item>
            <a href="mailto:your-email@example.com" aria-label="Email">
              <Mail size={24} color="#000" /> {/* Email icon */}
            </a>
          </Grid>
        </IconContainer>
      </Grid>
    </StyledContainer>
  );
};

export default ConnectWithUs;
