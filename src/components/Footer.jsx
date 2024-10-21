import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f8f8",
        py: 3,
        mt: 4,
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="body1">
          &copy; 2024 Service Website. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
