import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Typography, Alert } from "@mui/material";

const CheckboxHandler = ({ questionData, quizButtonStyle, handlingNext }) => {
    const [allAnswer, setAllAnswer] = useState([]);
    const [minimumSelectState, setMinimumSelectState] = useState(null);
    const [updateChange, setUpdateChange] = useState(false);

    useEffect(() => {
        setAllAnswer(questionData.answer);
    }, [questionData]);

    const clickedColor = {
        color: "white",
        backgroundColor: "rgba(125, 131, 235, 0.8)",
        "&:hover": {
            backgroundColor: "rgba(84, 90, 206, 0.8)",
            color: "white"
        },
        fontSize: "2em",
        m: "0.5em",
        borderRadius: "5px",
        p: "20px",
        boxShadow: "2px 2px 5px rgba(0, 191, 255, 0.4)",
        border: "1px solid skyBlue",
        textAlign: "left",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    };

    const clicked = (option, index) => {
        let selectedAnswer = option;
        if (selectedAnswer?.selectedStatus) {
            selectedAnswer.selectedStatus = false;
            setUpdateChange(!updateChange);
        } else {
            selectedAnswer.selectedStatus = true;
            setUpdateChange(!updateChange);
        }
    };

    const updateAndNext = () => {
        const selectedAnswer = allAnswer.filter(
            (answer) => answer.selectedStatus
        );
        const dataSet = {
            questionText: questionData.question,
            questionIndex: questionData.qIndex,
            options: questionData.answer.map((ans) => ans["name"]),
            answerText: selectedAnswer.map((ans) => ans["name"]),
            answerIndex: selectedAnswer.map((ans) => ans["ansIndex"]),
            ansType: questionData.ansType
        };
        if (selectedAnswer.length) {
            handlingNext(dataSet);
        } else {
            setMinimumSelectState(false);
        }
    };

    const NextButton = [
        <Button
            sx={{ display: "block", mx: "auto", mt: 3 }}
            onClick={() => updateAndNext()}
            variant="contained"
        >
            Next
        </Button>
    ];
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 2 }}>
                {questionData.qIndex + 1}
                {". "}
                {questionData.question}
            </Typography>
            <Box sx={{ mt: 4, display: "flex" }}>
                <Grid
                    container
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    {allAnswer.map((option, index) => (
                        <Button
                            key={index}
                            onClick={() => clicked(option, index)}
                            sx={
                                option.selectedStatus
                                    ? clickedColor
                                    : quizButtonStyle
                            }
                        >
                            <Box>
                                <Typography variant="h6">
                                    {option?.name}
                                </Typography>
                                <Typography variant="subtitle2">
                                    {option?.qty}
                                </Typography>
                            </Box>
                        </Button>
                    ))}
                </Grid>
            </Box>
            {minimumSelectState === false && (
                <Alert
                    sx={{
                        maxWidth: "600px",
                        mx: "auto",
                        display: "flex",
                        justifyContent: "center"
                    }}
                    severity="warning"
                >
                    Please Select at least One items!
                </Alert>
            )}
            {NextButton[0]}
        </Box>
    );
};

export default CheckboxHandler;
