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

const handsWashIcon = <FontAwesomeIcon icon={faHandsWash} />;
const bacteriaIcon = <FontAwesomeIcon icon={faBacteria} />;
const dandruffIcon = <FontAwesomeIcon icon={faUserNinja} />;
const skinIcons = [handsWashIcon, bacteriaIcon, dandruffIcon];

const SkinContact1 = ({ skinContactData, quizButtonStyle }) => {
    const [skinContact, setSkinContact] = useState({});
    const [componentIndex, setComponentIndex] = useState(0);
    const [selectedSubHeadingIndex, setSelectedSubHeadingIndex] =
        useState(null);

    const handlingNext = (addedAnswer, answerIndex = null) => {
        // filtering whether it is inputField and Quiz value
        if (selectedSubHeadingIndex === null) {
            setSelectedSubHeadingIndex(answerIndex);
        }

        setComponentIndex(componentIndex + 1);
        console.log(addedAnswer, answerIndex);
    };

    const components = [
        <SubHeadingSelection
            sectionData={skinContactData}
            icons={skinIcons}
            quizButtonStyle={quizButtonStyle}
            handlingNext={handlingNext}
        />,
        <InputTextCollector
            questionText={
                skinContactData?.details[selectedSubHeadingIndex]?.questions[0]
                    .q1
            }
            handlingNext={handlingNext}
        />
    ];

    return <Container>{components[componentIndex]}</Container>;
};

export default SkinContact1;
