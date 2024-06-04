import React from "react";
import { Box, Typography, Paper, Divider, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";

const AddressCard = ({ heading, address }) => {
  const {
    phoneNumber,
    streetLine1,
    streetLine2,
    city,
    state,
    postalCode,
    country,
  } = address || {};

  return (
    <Paper elevation={5} sx={{ padding: 3, borderRadius: 2 }}>
      <Typography
        variant="h6"
        component="h1"
        sx={{ fontWeight: "bold", pb: 2 }}
      >
        {heading || "Delivery Address"}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontWeight: "bold", textTransform: "capitalize" }}
          >
            {address?.fullName ||
              `${address?.firstName} ${address?.lastName}` ||
              "N/A"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <HomeIcon sx={{ mr: 1, color: "gray" }} />
            <Box>
              <Typography
                variant="body1"
                component="p"
                sx={{ fontWeight: "bold", textTransform: "capitalize" }}
              >
                Address
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ textTransform: "capitalize" }}
              >
                {streetLine1 || "N/A"}
              </Typography>
              {streetLine2 && (
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ textTransform: "capitalize" }}
                >
                  {streetLine2}
                </Typography>
              )}
              <Typography
                variant="body2"
                component="p"
                sx={{ textTransform: "capitalize" }}
              >
                {`${city || "N/A"}, ${state || "N/A"} ${postalCode || "N/A"}`}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ textTransform: "capitalize" }}
              >
                {country || "N/A"}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PhoneIcon sx={{ mr: 1, color: "gray" }} />
            <Box>
              <Typography
                variant="body1"
                component="p"
                sx={{ fontWeight: "bold", textTransform: "capitalize" }}
              >
                Phone Number
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ textTransform: "capitalize" }}
              >
                {phoneNumber || "N/A"}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddressCard;
