import React, { useState } from "react";
import { Container } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandsWash,
    faBacteria,
    faUserNinja
} from "@fortawesome/free-solid-svg-icons";

import SubHeadingSelection from "../../Templates/SubHeadingSelection/SubHeadingSelection";

import useData from "../../../../../hooks/useData";
import Fade from "react-reveal/Fade";
import AnsTypeFixer from "../../Templates/AnsTypeFixer/AnsTypeFixer";

const handsWashIcon = <FontAwesomeIcon icon={faHandsWash} />;
const bacteriaIcon = <FontAwesomeIcon icon={faBacteria} />;
const dandruffIcon = <FontAwesomeIcon icon={faUserNinja} />;
const skinIcons = [handsWashIcon, bacteriaIcon, dandruffIcon];

const SkinContact1 = ({ skinContactData, quizButtonStyle }) => {
    const [skinContactUserData, setSkinContactUserData] = useState({});
    const [questionIndex, setQuestionIndex] = useState(null);
    const [totalQuestion, setTotalQuestion] = useState(null);
    const [selectedSubHeadingIndex, setSelectedSubHeadingIndex] =
        useState(null);
    const [revealState, setRevealState] = useState(true);
    const { appIndex, setAppIndex, userAnswer } = useData();

    const handlingNext = (addedAnswer, answerIndex = null) => {
        setRevealState(false);
        // filtering whether it is inputField and Quiz value
        if (selectedSubHeadingIndex === null) {
            setSelectedSubHeadingIndex(answerIndex);
            setQuestionIndex(0);
            setTotalQuestion(
                skinContactData.subheadings[answerIndex].questions.length
            );
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

        let questionIndexUpdate;
        if (totalQuestion) {
            setQuestionIndex(questionIndex + 1);
            questionIndexUpdate = questionIndex + 1;
            console.log("check");
        }

        if (questionIndexUpdate !== totalQuestion) {
            setTimeout(() => setRevealState(true), 500);
            clearTimeout();
        }

        if (questionIndexUpdate === totalQuestion) {
            userAnswer.customerAnswers.push(skinContactUserData);
            console.log(userAnswer);
            setTimeout(() => {
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
        <AnsTypeFixer
            questionData={
                skinContactData?.subheadings[selectedSubHeadingIndex]
                    ?.questions[questionIndex]
            }
            handlingNext={handlingNext}
            quizButtonStyle={quizButtonStyle}
        />
    ];

    return (
        <Container>
            {!totalQuestion && (
                <Fade right opposite when={revealState}>
                    {components[0]}
                </Fade>
            )}
            {totalQuestion && questionIndex < totalQuestion && (
                <Fade right opposite when={revealState}>
                    {components[1]}
                </Fade>
            )}
        </Container>
    );
};

export default SkinContact1;
