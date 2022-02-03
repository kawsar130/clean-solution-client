import { Box } from "@mui/system";
import React, { useState } from "react";
import useData from "../../../hooks/useData";
import AppHome from "../AppHome/AppHome/AppHome/AppHome";
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

    const components = [<Greet></Greet>, <AppHome></AppHome>];

    return (
        <Box className="quiz-container">
            <Box className="quiz-container-layer">
                <Box className="quiz-content">{components[quizSection]}</Box>
            </Box>
        </Box>
    );
};

export default Quiz;
