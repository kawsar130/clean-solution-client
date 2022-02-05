import { useState } from "react";

const useDataStates = () => {
    const [quizSection, setQuizSection] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);
    const [appIndex, setAppIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState({});

    const updateUserAnswer = (newAnswer) => {
        const updatedAnswer = { ...userAnswer, ...newAnswer };
        setUserAnswer(updatedAnswer);
    };

    return {
        quizSection,
        setQuizSection,
        pageIndex,
        setPageIndex,
        appIndex,
        setAppIndex,
        userAnswer,
        setUserAnswer,
        updateUserAnswer
    };
};

export default useDataStates;
