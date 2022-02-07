import { Box, Button, Typography } from "@mui/material";
import React from "react";

const updateAndNext = () => {};

const CheckboxHandler = ({ questionData, quizButtonStyle, handlingNext }) => {
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 2 }}>
                {questionData.qIndex + 1}
                {". "}
                {questionData.question}
            </Typography>
            <Box sx={{ mt: 4, display: "flex" }}>
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
            </Box>
        </Box>
    );
};

export default CheckboxHandler;
