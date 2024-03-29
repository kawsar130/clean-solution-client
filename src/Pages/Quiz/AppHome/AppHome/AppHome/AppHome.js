import React, { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import AppHomeHeading from "../AppHomeHeading/AppHomeHeading";
import useData from "../../../../../hooks/useData";
import { quizButtonStyle } from "../../../../../Styles/Styles";
import _ from "lodash";
import Fade from "react-reveal/Fade";

import { appHomeIcons, allSectionIcons } from "../../../../../Icons/Icons";
import SectionDataFixer from "../../Templates/SectionDataFixer/SectionDataFixer";

const AppHome = () => {
    const [showAppHome, setShowAppHome] = useState(true);
    // Section Data states starts here
    const [sectionUserData, setSectionUserData] = useState({});
    const [questionIndex, setQuestionIndex] = useState(null);
    const [totalQuestion, setTotalQuestion] = useState(null);
    const [selectedSubHeadingIndex, setSelectedSubHeadingIndex] =
        useState(null);
    const [revealState, setRevealState] = useState(true);

    const {
        appIndex,
        setAppIndex,
        userAnswer,
        setUserAnswer,
        setQuizSection,
        questionData,
        totalAppLength
    } = useData();

    // Show circular progress till questionData updated
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
                subHeadingIndex:
                    questionData[appIndex].subheadings[answerIndex]
                        .subHeadingIndex,
                answers: []
            };
            setSectionUserData(subHeadingData);
        }

        // getting latest sectionUserData
        let updatedSectionUserData;
        if (addedAnswer) {
            const newSectionUserData = _.cloneDeep(sectionUserData);
            newSectionUserData.answers.push(addedAnswer);
            setSectionUserData(newSectionUserData);
            updatedSectionUserData = newSectionUserData;
        }

        // Taking a variable for latest state update in the function
        let questionIndexUpdate;
        if (totalQuestion) {
            setQuestionIndex(questionIndex + 1);
            questionIndexUpdate = questionIndex + 1;
        }

        setTimeout(() => setRevealState(true), 500);
        clearTimeout();

        // If an app ends
        if (questionIndexUpdate === totalQuestion) {
            const newUserAnswer = _.cloneDeep(userAnswer);
            if (updatedSectionUserData) {
                newUserAnswer.mainQuizAnswers.push(updatedSectionUserData); // latest sectionUser Data
            } else {
                newUserAnswer.mainQuizAnswers.push(sectionUserData);
            }
            setUserAnswer(newUserAnswer);
            console.log(newUserAnswer);

            // setTimeout used for giving time to update data to state before unmount the component
            setTimeout(() => {
                if (appIndex === totalAppLength - 1) {
                    // if appHome components ends
                    setQuizSection((quizSection) => quizSection + 1);
                    console.log("Quiz end");
                    return false;
                } else {
                    // Increase appIndex por next App menu
                    setAppIndex(appIndex + 1);
                    // resetting all states for new app.
                    setSectionUserData({});
                    setQuestionIndex(null);
                    setTotalQuestion(null);
                    setSelectedSubHeadingIndex(null);
                }
            }, 500);
            clearTimeout();
        }
    };

    return (
        <Box style={{ overflow: "hidden", width: "100vw" }}>
            {showAppHome ? (
                <Fade right opposite when={revealState}>
                    <AppHomeHeading
                        questionData={questionData}
                        icons={appHomeIcons}
                        setShowAppHome={setShowAppHome}
                    ></AppHomeHeading>
                </Fade>
            ) : (
                <Fade right opposite when={revealState}>
                    <SectionDataFixer
                        sectionData={questionData[appIndex]}
                        quizButtonStyle={quizButtonStyle}
                        handlingNext={handlingNext}
                        allSectionIcons={allSectionIcons}
                        totalQuestion={totalQuestion}
                        questionIndex={questionIndex}
                        selectedSubHeadingIndex={selectedSubHeadingIndex}
                    ></SectionDataFixer>
                </Fade>
            )}
        </Box>
    );
};

export default AppHome;
