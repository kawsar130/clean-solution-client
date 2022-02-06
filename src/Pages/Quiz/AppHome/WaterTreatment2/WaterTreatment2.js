import React, { useState } from "react";
import { Container } from "@mui/material";
import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingWater } from "@fortawesome/free-solid-svg-icons";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import WaterIcon from "@mui/icons-material/Water";
import useData from "../../../../hooks/useData";

import AnsTypeFixer from "../Templates/AnsTypeFixer/AnsTypeFixer";
import SubHeadingSelection from "../Templates/SubHeadingSelection/SubHeadingSelection";

const drinkingWaterIcon = <FontAwesomeIcon icon={faHandHoldingWater} />;
const waterTreatmentIcons = [
    drinkingWaterIcon,
    drinkingWaterIcon,
    drinkingWaterIcon
];

const WaterTreatment2 = ({ waterTreatmentData, quizButtonStyle }) => {
    const [waterTreatmentUserData, setWaterTreatmentUserData] = useState({});
    const [questionIndex, setQuestionIndex] = useState(null);
    const [totalQuestion, setTotalQuestion] = useState(null);
    const [selectedSubHeadingIndex, setSelectedSubHeadingIndex] =
        useState(null);
    const [revealState, setRevealState] = useState(true);
    const { appIndex, setAppIndex, userAnswer } = useData();
    const handlingNext = (addedAnswer, answerIndex = null) => {
        setRevealState(false);
        // setting subheading section
        if (selectedSubHeadingIndex === null) {
            setSelectedSubHeadingIndex(answerIndex);
            setQuestionIndex(0);
            setTotalQuestion(
                waterTreatmentData.subheadings[answerIndex].questions.length
            );
            const subHeadingData = {
                heading: waterTreatmentData.heading,
                headingIndex: waterTreatmentData.headingIndex,
                subHeading: waterTreatmentData.subheadings[answerIndex].title,
                subHeadingIndex: answerIndex,
                answers: []
            };
            setWaterTreatmentUserData(subHeadingData);
        }
        if (addedAnswer) {
            waterTreatmentUserData.answers.push(addedAnswer);
        }

        // Get the latest questionIndex
        let questionIndexUpdate;
        if (totalQuestion) {
            setQuestionIndex(questionIndex + 1);
            questionIndexUpdate = questionIndex + 1;
        }
        setTimeout(() => setRevealState(true), 500);
        clearTimeout();

        if (questionIndexUpdate === totalQuestion) {
            userAnswer.customerAnswers.push(waterTreatmentUserData);
            console.log(userAnswer);
            setTimeout(() => {
                setAppIndex(appIndex + 1);
            }, 500);
            clearTimeout();
        }
    };

    const components = [
        <SubHeadingSelection
            sectionData={waterTreatmentData}
            icons={waterTreatmentIcons}
            quizButtonStyle={quizButtonStyle}
            handlingNext={handlingNext}
        />,
        <AnsTypeFixer
            questionData={
                waterTreatmentData?.subheadings[selectedSubHeadingIndex]
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

export default WaterTreatment2;
