import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useData from "../../../../hooks/useData";
import "./InitialQuiz4.css";

const InitialQuiz4 = ({ setRevealState }) => {
    const { userAnswer, setUserAnswer, quizSection, setQuizSection } =
        useData();
    const quiz = {
        quizText:
            "How many Sanitizers, disinfectants, deodorizers, or other common household chemical detergents do you currently use?",
        options: [
            { index: 0, option: "0-1" },
            { index: 1, option: "2-5" },
            { index: 2, option: "5-10" },
            { index: 3, option: "10+" }
        ]
    };

    const handlingClick = (addedAnswer) => {
        setRevealState(false);
        const currentlyUsingProductQty = addedAnswer;
        const newCustomerInfo = {
            ...userAnswer.customerInfo,
            currentlyUsingProductQty
        };

        const newUserAnswer = {
            customerInfo: newCustomerInfo,
            mainQuizAnswers: []
        };

        setUserAnswer(newUserAnswer);
        console.log(newUserAnswer);
        setTimeout(() => setQuizSection(quizSection + 1), 500);
        clearTimeout();
    };

    const buttonStyle = {
        border: "1px solid skyBlue",
        color: "darkSlateGray",
        backgroundColor: "rgba(217, 228, 255, 0.8)",
        "&:hover": {
            backgroundColor: "rgba(31, 36, 132, 0.8)",
            color: "white"
        },
        fontSize: "2em",
        p: "2em",
        m: "0.5em",
        width: "200px",
        height: "200px",
        borderRadius: "5px"
    };

    return (
        <Container>
            <Typography variant="h4">{quiz.quizText}</Typography>
            <Box sx={{ mt: 4 }}>
                {quiz.options.map((option) => (
                    <Button
                        onClick={() => handlingClick(option)}
                        sx={buttonStyle}
                        className="initial-quiz-btn"
                        key={option.index}
                    >
                        {option.option}
                    </Button>
                ))}
            </Box>
        </Container>
    );
};

export default InitialQuiz4;
