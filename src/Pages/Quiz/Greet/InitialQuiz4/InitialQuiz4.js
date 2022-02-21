import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import useData from "../../../../hooks/useData";
import { quizButtonStyle } from "../../../../Styles/Styles";

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

    return (
        <Container>
            <Typography variant="h4">{quiz.quizText}</Typography>
            <Grid
                container
                sx={{ display: "flex", justifyContent: "center", mt: 3 }}
            >
                {quiz.options.map((option) => (
                    <Button
                        onClick={() => handlingClick(option)}
                        sx={quizButtonStyle}
                        className="initial-quiz-btn"
                        key={option.index}
                    >
                        {option.option}
                    </Button>
                ))}
            </Grid>
        </Container>
    );
};

export default InitialQuiz4;
