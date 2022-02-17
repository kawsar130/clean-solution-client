import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useData from "../../../../../hooks/useData";
import { appHomeIcons } from "../../../../../Icons/Icons";
import SingleResult from "../SingleResult/SingleResult";

const ShowResult = () => {
    const { userAnswer } = useData();

    const handleStart = () => {
        console.log("Handle Start Clicked");
    };
    return (
        <Container>
            <Box sx={{ my: 10 }}>
                <Box>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
                        Thank You, {userAnswer.customerInfo.name}
                    </Typography>
                    <Typography variant="h6">
                        You have successfully completed the quiz. Here are the
                        summary below
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mt: 2 }}>
                        Click on CONTINUE at the bottom to get your suggested
                        products
                    </Typography>
                    <Grid
                        container
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 3
                        }}
                    >
                        {userAnswer.mainQuizAnswers.map((app, index) => (
                            <SingleResult
                                key={index}
                                app={app}
                                appHomeIcons={appHomeIcons[index]}
                            ></SingleResult>
                        ))}
                    </Grid>
                </Box>
                <Button
                    onClick={() => handleStart()}
                    sx={{ mt: 3 }}
                    variant="contained"
                >
                    CONTINUE
                </Button>
            </Box>
        </Container>
    );
};

export default ShowResult;
