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
                px: { xs: 0, sm: 2 },
                py: 2
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
                        backgroundColor: "rgba(240, 240, 245, 0.9)",
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
                        display: { xs: "none", sm: "flex", md: "flex" },
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
                <Grid item sx={{ textAlign: "left" }} xs={12} md={9}>
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
                                        borderRadius: 2
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
                                    {ans.ansType !== "calculator" && (
                                        <Box>
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
                                                    ans.answerText.map(
                                                        (ans, index) => (
                                                            <span
                                                                key={index}
                                                                style={{
                                                                    display:
                                                                        "block"
                                                                }}
                                                            >
                                                                {index + 1}.{" "}
                                                                {ans}
                                                            </span>
                                                        )
                                                    )}
                                            </Typography>
                                        </Box>
                                    )}
                                    {ans.ansType === "calculator" && (
                                        <Grid container>
                                            {ans.answers.type === "RoomData" &&
                                                ans.answers.roomData.map(
                                                    (room, index) => (
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            sm={12}
                                                            md={6}
                                                            lg={4}
                                                            key={room.roomId}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    border: 2,
                                                                    borderColor:
                                                                        "gray",
                                                                    backgroundColor:
                                                                        "rgba(240, 240, 240, 0.8)",
                                                                    borderRadius: 2,
                                                                    m: 1,
                                                                    p: 1
                                                                }}
                                                            >
                                                                <Typography>
                                                                    <span
                                                                        style={{
                                                                            fontWeight:
                                                                                "bold",
                                                                            color: "gray"
                                                                        }}
                                                                    >
                                                                        Room
                                                                        Number:
                                                                    </span>{" "}
                                                                    {index + 1}
                                                                </Typography>
                                                                <Typography>
                                                                    <span
                                                                        style={{
                                                                            fontWeight:
                                                                                "bold",
                                                                            color: "gray"
                                                                        }}
                                                                    >
                                                                        Area:
                                                                    </span>{" "}
                                                                    {room.area}{" "}
                                                                    ft
                                                                    <sup>2</sup>
                                                                </Typography>
                                                                <Typography>
                                                                    <span
                                                                        style={{
                                                                            fontWeight:
                                                                                "bold",
                                                                            color: "gray"
                                                                        }}
                                                                    >
                                                                        Volume:
                                                                    </span>{" "}
                                                                    {
                                                                        room.volume
                                                                    }{" "}
                                                                    ft
                                                                    <sup>3</sup>
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    )
                                                )}

                                            {ans.answers.type ===
                                                "BuildingData" &&
                                                ans.answers.buildingData.map(
                                                    (building, index) => (
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            sm={12}
                                                            md={12}
                                                            lg={12}
                                                            key={
                                                                building.roomId
                                                            }
                                                        >
                                                            <Box
                                                                sx={{
                                                                    border: 2,
                                                                    borderColor:
                                                                        "gray",
                                                                    backgroundColor:
                                                                        "rgba(240, 240, 240, 0.8)",
                                                                    borderRadius: 2,
                                                                    m: 1,
                                                                    p: 1
                                                                }}
                                                            >
                                                                <Typography
                                                                    sx={{
                                                                        mb: 1
                                                                    }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontWeight:
                                                                                "bold",
                                                                            color: "darkSlateGray",
                                                                            fontSize:
                                                                                "1.1em"
                                                                        }}
                                                                    >
                                                                        Whole
                                                                        Building
                                                                        Data:
                                                                    </span>{" "}
                                                                </Typography>
                                                                <Typography>
                                                                    <span
                                                                        style={{
                                                                            fontWeight:
                                                                                "bold",
                                                                            color: "gray"
                                                                        }}
                                                                    >
                                                                        Height:
                                                                    </span>{" "}
                                                                    {
                                                                        building.height
                                                                    }{" "}
                                                                    ft
                                                                </Typography>
                                                                <Typography>
                                                                    <span
                                                                        style={{
                                                                            fontWeight:
                                                                                "bold",
                                                                            color: "gray"
                                                                        }}
                                                                    >
                                                                        Width:
                                                                    </span>{" "}
                                                                    {
                                                                        building.width
                                                                    }{" "}
                                                                    ft
                                                                </Typography>
                                                                <Typography>
                                                                    <span
                                                                        style={{
                                                                            fontWeight:
                                                                                "bold",
                                                                            color: "gray"
                                                                        }}
                                                                    >
                                                                        Length:
                                                                    </span>{" "}
                                                                    {
                                                                        building.length
                                                                    }{" "}
                                                                    ft
                                                                </Typography>
                                                                <Typography>
                                                                    <span
                                                                        style={{
                                                                            fontWeight:
                                                                                "bold",
                                                                            color: "gray"
                                                                        }}
                                                                    >
                                                                        Area:
                                                                    </span>{" "}
                                                                    {
                                                                        building.area
                                                                    }{" "}
                                                                    ft
                                                                    <sup>2</sup>
                                                                </Typography>
                                                                <Typography>
                                                                    <span
                                                                        style={{
                                                                            fontWeight:
                                                                                "bold",
                                                                            color: "gray"
                                                                        }}
                                                                    >
                                                                        Volume:
                                                                    </span>{" "}
                                                                    {
                                                                        building.volume
                                                                    }{" "}
                                                                    ft
                                                                    <sup>3</sup>
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    )
                                                )}
                                        </Grid>
                                    )}
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
