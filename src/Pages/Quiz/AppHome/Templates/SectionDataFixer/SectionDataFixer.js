import { Container, Box } from "@mui/material";
import React from "react";
import useData from "../../../../../hooks/useData";
import AnsTypeFixer from "../AnsTypeFixer/AnsTypeFixer";
import SubHeadingSelection from "../SubHeadingSelection/SubHeadingSelection";

const SectionDataFixer = ({
    sectionData,
    quizButtonStyle,
    handlingNext,
    allSectionIcons,
    totalQuestion,
    questionIndex,
    selectedSubHeadingIndex
}) => {
    const { appIndex } = useData();

    const components = [
        <SubHeadingSelection
            sectionData={sectionData}
            icons={allSectionIcons[appIndex]}
            quizButtonStyle={quizButtonStyle}
            handlingNext={handlingNext}
        />,
        <AnsTypeFixer
            questionData={
                sectionData?.subheadings[selectedSubHeadingIndex]?.questions[
                    questionIndex
                ]
            }
            handlingNext={handlingNext}
            quizButtonStyle={quizButtonStyle}
        />
    ];

    return (
        <Container>
            {!totalQuestion && <Box>{components[0]}</Box>}
            {totalQuestion && questionIndex < totalQuestion && (
                <Box>{components[1]}</Box>
            )}
        </Container>
    );
};

export default SectionDataFixer;
