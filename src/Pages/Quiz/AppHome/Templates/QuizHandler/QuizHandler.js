import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const QuizHandler = ({ questionData, quizButtonStyle, handlingNext }) => {
    const updateAndNext = (option, index) => {
        const dataSet = {
            questionText: questionData.question,
            questionIndex: questionData.qIndex,
            options: questionData.answer,
            answerText: option,
            answerIndex: index,
            ansType: questionData.ansType
        };
        handlingNext(dataSet);
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
                    {questionData.answer.map((option, index) => (
                        <Button
                            key={index}
                            onClick={() => updateAndNext(option, index)}
                            sx={quizButtonStyle}
                        >
                            <Box>
                                <Typography variant="h6">{option}</Typography>
                            </Box>
                        </Button>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default QuizHandler;
