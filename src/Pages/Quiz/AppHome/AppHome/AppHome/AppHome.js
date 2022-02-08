import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import AppHomeHeading from "../AppHomeHeading/AppHomeHeading";
import useData from "../../../../../hooks/useData";
import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAllergies,
    faWater,
    faHome,
    faRoute,
    faLaptopCode,
    faTractor,
    faHandsWash,
    faBacteria,
    faUserNinja,
    faHandHoldingWater,
    faCogs,
    faWarehouse,
    faEgg,
    faFish,
    faCheese,
    faHamburger,
    faDiceD6,
    faSmog
} from "@fortawesome/free-solid-svg-icons";
import SectionDataFixer from "../../Templates/SectionDataFixer/SectionDataFixer";

// AppHome Icons
const skinContactIcon = <FontAwesomeIcon icon={faAllergies} />;
const waterTreatmentIcon = <FontAwesomeIcon icon={faWater} />;
const homeAndGardenIcon = <FontAwesomeIcon icon={faHome} />;
const travelAndLeisureIcon = <FontAwesomeIcon icon={faRoute} />;
const professionalIcon = <FontAwesomeIcon icon={faLaptopCode} />;
const farmAndRanchIcon = <FontAwesomeIcon icon={faTractor} />;
const icons = [
    skinContactIcon,
    waterTreatmentIcon,
    homeAndGardenIcon,
    travelAndLeisureIcon,
    professionalIcon,
    farmAndRanchIcon
];

// SkinContact Icon
const handsWashIcon = <FontAwesomeIcon icon={faHandsWash} />;
const bacteriaIcon = <FontAwesomeIcon icon={faBacteria} />;
const dandruffIcon = <FontAwesomeIcon icon={faUserNinja} />;
const skinIcons = [handsWashIcon, bacteriaIcon, dandruffIcon];

// WaterTreatment Icons
const drinkingWaterIcon = <FontAwesomeIcon icon={faHandHoldingWater} />;
const systemDisinfectionIcon = <FontAwesomeIcon icon={faCogs} />;
const waterStorageIcon = <FontAwesomeIcon icon={faWarehouse} />;
const waterTreatmentIcons = [
    drinkingWaterIcon,
    systemDisinfectionIcon,
    waterStorageIcon
];

// Home and Garden Icon
const eggIcon = <FontAwesomeIcon icon={faEgg} />;
const fishIcon = <FontAwesomeIcon icon={faFish} />;
const packagedFoodIcon = <FontAwesomeIcon icon={faCheese} />;
const foodContactSurfaceIcon = <FontAwesomeIcon icon={faHamburger} />;
const hardAndSoftSurfaceIcon = <FontAwesomeIcon icon={faDiceD6} />;
const foggingIcon = <FontAwesomeIcon icon={faSmog} />;
const homeAndGardenIcons = [
    eggIcon,
    fishIcon,
    packagedFoodIcon,
    foodContactSurfaceIcon,
    hardAndSoftSurfaceIcon,
    foggingIcon
];

// All Section Icons
const allSectionIcons = [skinIcons, waterTreatmentIcons, homeAndGardenIcons];

const AppHome = () => {
    const [questionData, setQuestionData] = useState([]);
    const [showAppHome, setShowAppHome] = useState(true);
    // Section Data states starts here
    const [sectionUserData, setSectionUserData] = useState({});
    const [questionIndex, setQuestionIndex] = useState(null);
    const [totalQuestion, setTotalQuestion] = useState(null);
    const [selectedSubHeadingIndex, setSelectedSubHeadingIndex] =
        useState(null);
    const [revealState, setRevealState] = useState(true);

    const { appIndex, setAppIndex, userAnswer } = useData();

    useEffect(() => {
        fetch("Quiz.json")
            .then((res) => res.json())
            .then((data) => setQuestionData(data));
    }, []);

    if (questionData.length === 0) {
        return <CircularProgress />;
    }

    const handlingNext = (addedAnswer, answerIndex = null) => {
        setRevealState(false);
        // filtering whether it is SubHeadingSelection or AnsTypeFixer component
        if (selectedSubHeadingIndex === null) {
            setSelectedSubHeadingIndex(answerIndex);
            setQuestionIndex(0);
            setTotalQuestion(
                questionData[appIndex].subheadings[answerIndex].questions.length
            );
            const subHeadingData = {
                heading: questionData[appIndex].heading,
                headingIndex: questionData[appIndex].headingIndex,
                subHeading:
                    questionData[appIndex].subheadings[answerIndex].title,
                subHeadingIndex: answerIndex,
                answers: []
            };
            setSectionUserData(subHeadingData);
        }
        if (addedAnswer) {
            sectionUserData.answers.push(addedAnswer);
        }

        // Taking a variable for latest state update in the function
        let questionIndexUpdate;
        if (totalQuestion) {
            setQuestionIndex(questionIndex + 1);
            questionIndexUpdate = questionIndex + 1;
        }

        setTimeout(() => setRevealState(true), 500);
        clearTimeout();

        if (questionIndexUpdate === totalQuestion) {
            userAnswer.customerAnswers.push(sectionUserData);
            console.log(userAnswer);
            setTimeout(() => {
                setAppIndex(appIndex + 1);
                // resetting all states for new app.
                setSectionUserData({});
                setQuestionIndex(null);
                setTotalQuestion(null);
                setSelectedSubHeadingIndex(null);
            }, 500);
            clearTimeout();
        }
    };

    const quizButtonStyle = {
        color: "darkSlateGray",
        backgroundColor: "rgba(217, 228, 255, 0.8)",
        "&:hover": {
            backgroundColor: "rgba(31, 36, 132, 0.8)",
            color: "white"
        },
        fontSize: "2em",
        m: "0.5em",
        borderRadius: "5px",
        p: "20px",
        boxShadow: "2px 2px 5px rgba(0, 191, 255, 0.4)",
        border: "1px solid skyBlue",
        textAlign: "left",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    };

    const app = [
        <SectionDataFixer
            sectionData={questionData[appIndex]}
            quizButtonStyle={quizButtonStyle}
            handlingNext={handlingNext}
            allSectionIcons={allSectionIcons}
            totalQuestion={totalQuestion}
            questionIndex={questionIndex}
            selectedSubHeadingIndex={selectedSubHeadingIndex}
        ></SectionDataFixer>
    ];

    return (
        <Box>
            {showAppHome ? (
                <Fade right opposite when={revealState}>
                    <AppHomeHeading
                        questionData={questionData}
                        icons={icons}
                        setShowAppHome={setShowAppHome}
                    ></AppHomeHeading>
                </Fade>
            ) : (
                <Box>
                    <Fade right opposite when={revealState}>
                        {app[0]}
                    </Fade>
                </Box>
            )}
        </Box>
    );
};

export default AppHome;
