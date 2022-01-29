import { useState } from "react";

const useDataStates = () => {
    const [quizIndex, setQuizIndex] = useState(0);
    const [quizSection, setQuizSection] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState({});

    const updateUserAnswer = (newAnswer) => {
        const updatedAnswer = { ...userAnswer, ...newAnswer };
        setUserAnswer(updatedAnswer);
    };
    console.log(quizSection);

    return {
        quizIndex,
        setQuizIndex,
        quizSection,
        setQuizSection,
        pageIndex,
        setPageIndex,
        userAnswer,
        setUserAnswer,
        updateUserAnswer
    };
};

export default useDataStates;
