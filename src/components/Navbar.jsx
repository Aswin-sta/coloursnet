import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import colors from "../assets/colors";
import tinycolor from "tinycolor2";

const Navbar = () => {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: colors.background,
          height: "var(--siteheader-height)",
          display: "flex",
          borderBottom: `1px solid ${colors.borderColor}`,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
            paddingInline: { xs: "10px", sm: "25px", md: "100px" },
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{
                color: colors.primaryFont,
                fontFamily: "'Bruno Ace SC', sans-serif",
              }}
            >
              COLOURSNET
            </Typography>
          </div>
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
              display: { xs: "none", sm: "flex" },
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
            Get in touch
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
