import React from "react";
import { Grid, Typography } from "@mui/material";

const SingleApp = ({ app }) => {
    const { heading, description } = app;
    return (
        <Grid container xs={12} sm={12} md={6} lg={4} spacing={2} sx={{ p: 3 }}>
            <Grid
                item
                sx={{
                    p: 8,
                    border: "1px solid rgba(150, 150, 150, 0.5)",
                    backgroundColor: "rgba(210, 210, 210, 0.8)",
                    borderRadius: "5px",
                    textAlign: "left",
                    boxShadow: "0px 0px 20px rgba(150, 150, 150, 0.5)"
                }}
            >
                <Typography variant="h6" sx={{ mb: 1 }}>
                    {heading}
                </Typography>
                <Typography>{description}</Typography>
            </Grid>
        </Grid>
    );
};

export default SingleApp;
