import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SingleAppHeading from "../SingleAppHeading/SingleAppHeading";

const AppHomeHeading = ({ questionData, icons, setShowAppHome }) => {
    return (
        <Container>
            <Typography variant="h5" sx={{ mb: 5 }}>
                Discover all of the ways chlorine dioxide kills 99.99% of all
                bacteria, viruses, mold and more. Protect yourself and loved
                ones today with a custom Clean Solution tailored just for you.
            </Typography>
            <Box>
                <Grid
                    container
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    {questionData.map((app, index) => (
                        <SingleAppHeading
                            key={index}
                            app={app}
                            icon={icons[index]}
                        ></SingleAppHeading>
                    ))}
                </Grid>
            </Box>
            <Button onClick={() => setShowAppHome(false)} variant="contained">
                START
            </Button>
        </Container>
    );
};

export default AppHomeHeading;
