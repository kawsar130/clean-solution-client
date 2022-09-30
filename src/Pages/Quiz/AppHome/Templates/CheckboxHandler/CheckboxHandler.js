import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Typography, Alert } from "@mui/material";
import { clickedColor } from "../../../../../Styles/Styles";
import _ from "lodash";

const CheckboxHandler = ({ questionData, quizButtonStyle, handlingNext }) => {
    const [allAnswer, setAllAnswer] = useState([]);
    const [minimumSelectState, setMinimumSelectState] = useState(null);

    useEffect(() => {
        if (questionData?.answer) {
            const newAllAnswer = _.cloneDeep(questionData.answer);
            setAllAnswer(newAllAnswer);
        }
    }, [questionData]);

    const clicked = (selected, index) => {
        const newAllAnswer = _.cloneDeep(allAnswer);

        let selectedAnswer = { ...selected };

        // Button toggling with changed status
        for (const [i, ans] of newAllAnswer.entries()) {
            if (ans.ansIndex === selectedAnswer.ansIndex) {
                if (selectedAnswer?.selectedStatus) {
                    selectedAnswer.selectedStatus = false;
                    newAllAnswer[i] = selectedAnswer;
                } else {
                    selectedAnswer.selectedStatus = true;
                    newAllAnswer[i] = selectedAnswer;
                }
            }
        }

        setAllAnswer(newAllAnswer);
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

    return (
        <Box sx={{ my: 5 }}>
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
            <Button
                sx={{ display: "block", mx: "auto", mt: 3 }}
                onClick={() => updateAndNext()}
                variant="contained"
            >
                Next
            </Button>
        </Box>
    );
};

export default CheckboxHandler;
