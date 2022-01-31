import { Box } from "@mui/system";
import React, { useState } from "react";
import useData from "../../../hooks/useData";
import AppHome from "../AppHome/AppHome/AppHome";
import Greet from "../Greet/Greet/Greet";
import Test from "../Greet/GreetEnd3/Test";
import "./Quiz.css";

const Quiz = () => {
    const {
        quizIndex,
        quizSection,
        setQuizSection,
        pageIndex,
        setPageIndex,
        userAnswer,
        setUserAnswer
    } = useData();

    const Components = [<Greet></Greet>, <AppHome></AppHome>];

    return (
        <Box className="quiz-container">
            <Box>
                <Box className="quiz-content">{Components[quizSection]}</Box>
            </Box>
        </Box>
    );
};

export default Quiz;
