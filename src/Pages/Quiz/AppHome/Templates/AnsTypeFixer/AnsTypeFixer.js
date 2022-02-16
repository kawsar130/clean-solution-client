import React from "react";
import { Box } from "@mui/material";
import InputTextCollector from "../InputTextCollector/InputTextCollector";
import QuizHandler from "../QuizHandler/QuizHandler";
import CheckboxHandler from "../CheckboxHandler/CheckboxHandler";
import CalculatorHandler from "../CalculatorHandler/CalculatorHandler/CalculatorHandler";
import InfoHandler from "../InfoHandler/InfoHandler";

const AnsTypeFixer = ({ questionData, handlingNext, quizButtonStyle }) => {
    return (
        <Box>
            {questionData?.ansType === "number" && (
                <InputTextCollector
                    questionData={questionData}
                    handlingNext={handlingNext}
                    quizButtonStyle={quizButtonStyle}
                ></InputTextCollector>
            )}
            {questionData?.ansType === "quiz" && (
                <QuizHandler
                    questionData={questionData}
                    handlingNext={handlingNext}
                    quizButtonStyle={quizButtonStyle}
                ></QuizHandler>
            )}
            {questionData?.ansType === "checkbox" && (
                <CheckboxHandler
                    questionData={questionData}
                    handlingNext={handlingNext}
                    quizButtonStyle={quizButtonStyle}
                ></CheckboxHandler>
            )}
            {questionData?.ansType === "calculator" && (
                <CalculatorHandler
                    questionData={questionData}
                    handlingNext={handlingNext}
                ></CalculatorHandler>
            )}
            {questionData?.ansType === "info" && (
                <InfoHandler
                    questionData={questionData}
                    handlingNext={handlingNext}
                    quizButtonStyle={quizButtonStyle}
                ></InfoHandler>
            )}
        </Box>
    );
};

export default AnsTypeFixer;
