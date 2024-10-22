import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, TextField, Button, useMediaQuery } from "@mui/material";
import colors from "../assets/colors";
import tinycolor from "tinycolor2";

const ConnectWithUs = () => {
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");

  // Check if the screen width is less than 960px (small screen)
  const isMobile = useMediaQuery("(max-width:960px)");

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(message);

    if (isMobile) {
      // For mobile, send message via WhatsApp
      window.open(`https://wa.me/your-number?text=${encodedMessage}`, "_blank");
    } else {
      // For larger screens, send message via email
      const encodedEmail = encodeURIComponent(email);
      window.location.href = `mailto:your-email@example.com?subject=Message from Connect With Us&body=${encodedMessage}&email=${encodedEmail}`;
    }
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: { xs: 4, md: 8 },
        marginTop: "40px",
        backgroundColor: "rgb(4, 114, 77)",
      }}
    >
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          paddingInline: { xs: 5, md: 8, lg: 18 },
        }}
      >
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
            textAlign: "left",
          }}
        >
          {`Connect with Us on ${isMobile ? "WhatsApp" : "Email"}`}
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ paddingInline: { xs: 5, md: 8, lg: 18 } }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            marginTop: 2,
          }}
        >
          {!isMobile && (
            <Grid size={12}>
              <TextField
                fullWidth
                label="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="filled"
                sx={{
                  backgroundColor: "#ffffff", // White background
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      border: "2px solid #ffffff", // White border
                    },
                    "&:hover fieldset": {
                      border: "2px solid #ffffff", // Keep border white on hover
                    },
                    "&.Mui-focused fieldset": {
                      border: "2px solid #ffffff", // Keep border white on focus
                    },
                  },
                  "& input": {
                    color: colors.darkBlue,
                  },
                  "& .MuiInputLabel-root": {
                    color: colors.darkBlue,
                    opacity: 0.7,
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: colors.darkBlue,
                  },
                }}
              />
            </Grid>
          )}
          <Grid size={12}>
            <TextField
              fullWidth
              label="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              variant="filled"
              multiline
              minRows={3}
              sx={{
                backgroundColor: "#ffffff", // White background
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  "& fieldset": {
                    border: "2px solid #ffffff", // White border
                  },
                  "&:hover fieldset": {
                    border: "2px solid #ffffff", // Keep border white on hover
                  },
                  "&.Mui-focused fieldset": {
                    border: "2px solid #ffffff", // Keep border white on focus
                  },
                },
                "& input": {
                  padding: "10px",
                  color: colors.darkBlue,
                },
                "& .MuiInputLabel-root": {
                  color: colors.darkBlue,
                  opacity: 0.7,
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: colors.darkBlue,
                },
              }}
            />
          </Grid>
          <Grid size={12} display="flex" justifyContent="start">
            <Button
              variant="contained"
              onClick={handleSendMessage}
              sx={{
                backgroundColor: "rgb(122, 229, 130)",
                color: "rgb(4, 114, 77)",
                padding: { xs: "4px 15px", md: "8px 20px", lg: "8px 30px" },
                borderRadius: "var(--button-border-radius)",
                textTransform: "none",
                fontWeight: "bold",
                boxShadow: 0,
                fontSize: "0.9em",
                fontFamily: "'Quattrocento Sans', sans-serif",
                "&:hover": {
                  backgroundColor: tinycolor("rgb(122, 229, 130)")
                    .lighten(10)
                    .toString(),
                  boxShadow: 0,
                },
              }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ConnectWithUs;
