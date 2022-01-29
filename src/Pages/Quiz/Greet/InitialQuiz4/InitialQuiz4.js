import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./InitialQuiz4.css";

const InitialQuiz4 = () => {
    const quiz = {
        quizText:
            "How many Sanitizers, disinfectants, deodorizers, or other common household chemical detergents do you currently use?",
        options: [
            { id: 1, option: "0-1" },
            { id: 2, option: "2-5" },
            { id: 3, option: "5-10" },
            { id: 4, option: "10+" }
        ]
    };

    return (
        <Container>
            <Typography variant="h4">{quiz.quizText}</Typography>
            <Box sx={{ mt: 4 }}>
                {quiz.options.map((option) => (
                    <Button
                        sx={{
                            border: 1,
                            color: "darkSlateGray",
                            backgroundColor: "rgba(205, 205, 205, 0.8)",
                            "&:hover": {
                                backgroundColor: "rgba(55, 55, 55, 0.8)",
                                color: "white"
                            },
                            fontSize: "2em",
                            p: "2em",
                            m: "0.5em",
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%"
                        }}
                        className="initial-quiz-btn"
                        key={option.id}
                    >
                        {option.option}
                    </Button>
                ))}
            </Box>
        </Container>
    );
};

export default InitialQuiz4;
