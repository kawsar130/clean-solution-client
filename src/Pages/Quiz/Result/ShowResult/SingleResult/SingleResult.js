import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SingleResult = ({ app, appHomeIcons }) => {
    const { heading, subHeading, answers } = app;
    return (
        <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
                p: 2
            }}
        >
            <Grid
                sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid rgba(150, 150, 150, 0.5)",
                    backgroundColor: "rgba(240, 240, 250, 0.8)",
                    "&:hover": {
                        backgroundColor: "rgba(235, 235, 240, 0.9)",
                        boxShadow: "3px 3px 10px rgba(220, 220, 220, 0.8)"
                    },
                    borderRadius: "5px",
                    boxShadow: "0px 0px 20px rgba(150, 150, 150, 0.3)",
                    color: "rgb(80, 80, 80)",
                    transition: "all 0.2s"
                }}
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
                        {appHomeIcons}
                    </Typography>
                </Grid>
                <Grid item sx={{ textAlign: "left" }} xs={9}>
                    <Box>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                            {heading}
                        </Typography>
                        <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                            Selected Category: {subHeading}
                        </Typography>
                        <Box>
                            {answers.map((ans, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        backgroundColor:
                                            "rgba(220, 220, 220, 0.8)",
                                        p: 3,
                                        my: 2,
                                        borderRadius: 1
                                    }}
                                >
                                    <Typography>
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                color: "gray"
                                            }}
                                        >
                                            Questions:
                                        </span>{" "}
                                        {ans.questionText}
                                    </Typography>
                                    <Typography>
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                color: "gray"
                                            }}
                                        >
                                            Answer:
                                        </span>{" "}
                                        {(ans.ansType === "number" ||
                                            ans.ansType === "quiz") &&
                                            ans.answerText}{" "}
                                        {ans.strengthList &&
                                            ans.ansType === "number" &&
                                            `( Strength: ${ans.selectedStrengthText} )`}
                                        {ans.ansType === "checkbox" &&
                                            ans.answerText.map((ans, index) => (
                                                <span
                                                    key={index}
                                                    style={{ display: "block" }}
                                                >
                                                    {index + 1}. {ans}
                                                </span>
                                            ))}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SingleResult;
