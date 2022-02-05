import React, { useState } from "react";
import { Container } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandsWash,
    faBacteria,
    faUserNinja
} from "@fortawesome/free-solid-svg-icons";
import InputTextCollector from "../../Templates/InputTextCollector/InputTextCollector";
import SubHeadingSelection from "../../Templates/SubHeadingSelection/SubHeadingSelection";
import QuizHandler from "../../Templates/QuizHandler/QuizHandler";
import useData from "../../../../../hooks/useData";
import Fade from "react-reveal/Fade";

const handsWashIcon = <FontAwesomeIcon icon={faHandsWash} />;
const bacteriaIcon = <FontAwesomeIcon icon={faBacteria} />;
const dandruffIcon = <FontAwesomeIcon icon={faUserNinja} />;
const skinIcons = [handsWashIcon, bacteriaIcon, dandruffIcon];

const SkinContact1 = ({ skinContactData, quizButtonStyle }) => {
    const [skinContactUserData, setSkinContactUserData] = useState({});
    const [componentIndex, setComponentIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(-1);
    const [selectedSubHeadingIndex, setSelectedSubHeadingIndex] =
        useState(null);
    const [revealState, setRevealState] = useState(true);
    const { appIndex, setAppIndex, userAnswer } = useData();

    const handlingNext = (addedAnswer, answerIndex = null) => {
        setRevealState(false);
        // filtering whether it is inputField and Quiz value
        if (selectedSubHeadingIndex === null) {
            setSelectedSubHeadingIndex(answerIndex);
            const subHeadingData = {
                heading: skinContactData.heading,
                headingIndex: skinContactData.headingIndex,
                subHeading: skinContactData.subheadings[answerIndex].title,
                subHeadingIndex: answerIndex,
                answers: []
            };
            setSkinContactUserData(subHeadingData);
        }
        if (addedAnswer) {
            skinContactUserData.answers.push(addedAnswer);
        }

        setComponentIndex(componentIndex + 1);
        setQuestionIndex(questionIndex + 1);
        setTimeout(() => setRevealState(true), 500);
        clearTimeout();
        const componentIndexUpdate = componentIndex + 1;
        if (componentIndexUpdate === components.length) {
            setTimeout(() => {
                userAnswer.customerAnswers.push(skinContactUserData);
                console.log(userAnswer);
                setAppIndex(appIndex + 1);
            }, 500);
            clearTimeout();
        }
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
                skinContactData?.subheadings[selectedSubHeadingIndex]
                    ?.questions[questionIndex]
            }
            handlingNext={handlingNext}
        />,
        <QuizHandler
            questionData={
                skinContactData?.subheadings[selectedSubHeadingIndex]
                    ?.questions[questionIndex]
            }
            handlingNext={handlingNext}
            quizButtonStyle={quizButtonStyle}
        ></QuizHandler>,
        <InputTextCollector
            questionData={
                skinContactData?.subheadings[selectedSubHeadingIndex]
                    ?.questions[questionIndex]
            }
            handlingNext={handlingNext}
        />
    ];

    return (
        <Container>
            <Fade right opposite when={revealState}>
                {components[componentIndex]}
            </Fade>
        </Container>
    );
};

export default SkinContact1;
