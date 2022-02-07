import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import AppHomeHeading from "../AppHomeHeading/AppHomeHeading";
import FarmAndRanch6 from "../../FarmAndRanch6/FarmAndRanch6";
import HomeAndGarden3 from "../../HomeAndGarden3/HomeAndGarden3";
import ProfessionalEstablishments5 from "../../ProfessionalEstablishments5/ProfessionalEstablishments5";
import SkinContact1 from "../../SkinContact1/SkinContact/SkinContact1";
import TravelAndLeisure4 from "../../TravelAndLeisure4/TravelAndLeisure4";
import WaterTreatment2 from "../../WaterTreatment2/WaterTreatment2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAllergies,
    faWater,
    faHome,
    faRoute,
    faLaptopCode,
    faTractor
} from "@fortawesome/free-solid-svg-icons";
import useData from "../../../../../hooks/useData";

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

const AppHomeOld = () => {
    const [questionData, setQuestionData] = useState([]);
    const [showAppHome, setShowAppHome] = useState(true);

    const { appIndex } = useData();

    useEffect(() => {
        fetch("Quiz.json")
            .then((res) => res.json())
            .then((data) => setQuestionData(data));
    }, []);

    if (questionData.length === 0) {
        return <CircularProgress />;
    }

    const quizButtonStyle = {
        color: "darkSlateGray",
        backgroundColor: "rgba(217, 228, 255, 0.8)",
        "&:hover": {
            backgroundColor: "rgba(0, 191, 255, 0.8)",
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
        <SkinContact1
            skinContactData={questionData[0]}
            quizButtonStyle={quizButtonStyle}
        ></SkinContact1>,
        <WaterTreatment2
            waterTreatmentData={questionData[1]}
            quizButtonStyle={quizButtonStyle}
        ></WaterTreatment2>,
        <HomeAndGarden3></HomeAndGarden3>,
        <TravelAndLeisure4></TravelAndLeisure4>,
        <ProfessionalEstablishments5></ProfessionalEstablishments5>,
        <FarmAndRanch6></FarmAndRanch6>
    ];

    return (
        <Box>
            {showAppHome ? (
                <AppHomeHeading
                    questionData={questionData}
                    icons={icons}
                    setShowAppHome={setShowAppHome}
                ></AppHomeHeading>
            ) : (
                <Box>{app[appIndex]}</Box>
            )}
        </Box>
    );
};

export default AppHomeOld;
