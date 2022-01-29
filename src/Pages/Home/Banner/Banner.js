import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    return (
        <Grid
            container
            className="banner-container"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} sm={12} md={6}>
                <Box className="banner-img-container">
                    <img
                        className="banner-img-1"
                        src="https://i.ibb.co/dDDz0TV/banner-main.jpg"
                        alt=""
                        width="100%"
                    />
                    <img
                        className="banner-img-2"
                        src="https://i.ibb.co/Qbdnjhk/banner-2.jpg"
                        alt=""
                    />
                    <img
                        className="banner-img-3"
                        src="https://i.ibb.co/5WnqTmx/banner-3.jpg"
                        alt=""
                    />
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                className="banner-text-container"
                sx={{ pl: 20 }}
            >
                <Typography variant="h4" sx={{ mb: 3, fw: "bold" }}>
                    We are helping you quickly identifying economical solutions
                    to micro-organic challenges.
                </Typography>
                <Typography variant="h6" sx={{ my: 1 }}>
                    Take a Quiz for your Custom Packages
                </Typography>
                <Link to="quiz" style={{ textDecoration: "none" }}>
                    <Button variant="contained">Take Quiz</Button>
                </Link>
            </Grid>
        </Grid>
    );
};

export default Banner;
