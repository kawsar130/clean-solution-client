import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useData from "../../../../hooks/useData";
import "./InitialQuiz4.css";

const InitialQuiz4 = ({ setRevealState }) => {
    const { userAnswer, quizSection, setQuizSection } = useData();
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

    const handlingClick = (addedAnswer) => {
        setRevealState(false);
        userAnswer.customerInfo.productCurrentlyUsingQty = addedAnswer;
        setTimeout(() => setQuizSection(quizSection + 1), 500);
        clearTimeout();
    };
    console.log(userAnswer);

    return (
        <Container>
            <Typography variant="h4">{quiz.quizText}</Typography>
            <Box sx={{ mt: 4 }}>
                {quiz.options.map((option) => (
                    <Button
                        onClick={() => handlingClick(option.option)}
                        sx={{
                            border: "1px solid skyBlue",
                            color: "darkSlateGray",
                            backgroundColor: "rgba(217, 228, 255, 0.8)",
                            "&:hover": {
                                backgroundColor: "rgba(0, 191, 255, 0.8)",
                                color: "white"
                            },
                            fontSize: "2em",
                            p: "2em",
                            m: "0.5em",
                            width: "200px",
                            height: "200px",
                            borderRadius: "5px"
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
