import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import "./SingleAppHeading.css";

const SingleAppHeading = ({ app, icon }) => {
    const { heading, description } = app;
    return (
        <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
                p: 3
            }}
        >
            <Grid
                sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid rgba(150, 150, 150, 0.5)",
                    backgroundColor: "rgba(220, 220, 220, 0.8)",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 20px rgba(150, 150, 150, 0.3)",
                    color: "rgb(80, 80, 80)"
                }}
                className="single-app-container"
            >
                <Grid
                    item
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    xs={3}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            mb: 3,
                            color: "navy",
                            opacity: "40%",
                            m: 0
                        }}
                    >
                        {icon}
                    </Typography>
                </Grid>
                <Grid item sx={{ textAlign: "left" }} xs={9}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            {heading}
                        </Typography>
                        <Typography>{description}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SingleAppHeading;
