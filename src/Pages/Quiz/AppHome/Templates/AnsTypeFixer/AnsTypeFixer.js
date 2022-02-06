import React from "react";
import { Box } from "@mui/material";
import InputTextCollector from "../InputTextCollector/InputTextCollector";
import QuizHandler from "../QuizHandler/QuizHandler";

const AnsTypeFixer = ({ questionData, handlingNext, quizButtonStyle }) => {
    return (
        <Box>
            {questionData?.ansType === "number" && (
                <InputTextCollector
                    questionData={questionData}
                    handlingNext={handlingNext}
                ></InputTextCollector>
            )}
            {questionData?.ansType === "quiz" && (
                <QuizHandler
                    questionData={questionData}
                    handlingNext={handlingNext}
                    quizButtonStyle={quizButtonStyle}
                ></QuizHandler>
            )}
        </Box>
    );
};

export default AnsTypeFixer;
