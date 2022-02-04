import { Container } from "@mui/material";

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandsWash,
    faBacteria,
    faUserNinja
} from "@fortawesome/free-solid-svg-icons";
import InputTextCollector from "../../Templates/InputTextCollector/InputTextCollector";
import SubHeadingSelection from "../../Templates/SubHeadingSelection/SubHeadingSelection";
import QuizHandler from "../../Templates/QuizHandler/QuizHandler";

const handsWashIcon = <FontAwesomeIcon icon={faHandsWash} />;
const bacteriaIcon = <FontAwesomeIcon icon={faBacteria} />;
const dandruffIcon = <FontAwesomeIcon icon={faUserNinja} />;
const skinIcons = [handsWashIcon, bacteriaIcon, dandruffIcon];

const SkinContact1 = ({ skinContactData, quizButtonStyle }) => {
    const [skinContact, setSkinContact] = useState({});
    const [componentIndex, setComponentIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(-1);
    const [selectedSubHeadingIndex, setSelectedSubHeadingIndex] =
        useState(null);
    const [userData, setUserData] = useState({});

    const handlingNext = (addedAnswer, answerIndex = null) => {
        // filtering whether it is inputField and Quiz value
        if (selectedSubHeadingIndex === null) {
            setSelectedSubHeadingIndex(answerIndex);
            const subHeadingData = {
                heading: skinContactData.heading,
                headingIndex: skinContactData.headingIndex,
                subHeading: skinContactData.details[answerIndex].title,
                subHeadingIndex: answerIndex,
                answers: []
            };
            setUserData(subHeadingData);
        }
        if (addedAnswer) {
            userData.answers.push(addedAnswer);
        }
        console.log(userData);

        setComponentIndex(componentIndex + 1);
        setQuestionIndex(questionIndex + 1);
    };

    const components = [
        <SubHeadingSelection
            sectionData={skinContactData}
            icons={skinIcons}
            quizButtonStyle={quizButtonStyle}
            handlingNext={handlingNext}
        />,
        <InputTextCollector
            questionData={
                skinContactData?.details[selectedSubHeadingIndex]?.questions[
                    questionIndex
                ]
            }
            handlingNext={handlingNext}
        />,
        <QuizHandler
            questionData={
                skinContactData?.details[selectedSubHeadingIndex]?.questions[
                    questionIndex
                ]
            }
            handlingNext={handlingNext}
            quizButtonStyle={quizButtonStyle}
        ></QuizHandler>,
        <InputTextCollector
            questionData={
                skinContactData?.details[selectedSubHeadingIndex]?.questions[
                    questionIndex
                ]
            }
            handlingNext={handlingNext}
        />
    ];

    return <Container>{components[componentIndex]}</Container>;
};

export default SkinContact1;
