import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SingleAppHeading from "../SingleAppHeading/SingleAppHeading";
import Fade from "react-reveal/Fade";

const AppHomeHeading = ({ questionData, icons, setShowAppHome }) => {
    const [revealState, setRevealState] = useState(false);

    useEffect(() => {
        setRevealState(true);
    }, []);

    const handleStart = () => {
        setRevealState(false);
        setTimeout(() => {
            setShowAppHome(false);
        }, 500);
        clearTimeout();
    };

    return (
        <Container>
            <Fade right opposite when={revealState}>
                <Box>
                    <Typography variant="h5" sx={{ mb: 5 }}>
                        Discover all of the ways chlorine dioxide kills 99.99%
                        of all bacteria, viruses, mold and more. Protect
                        yourself and loved ones today with a custom Clean
                        Solution tailored just for you.
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
                    <Button onClick={() => handleStart()} variant="contained">
                        START
                    </Button>
                </Box>
            </Fade>
        </Container>
    );
};

export default AppHomeHeading;
