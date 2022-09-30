import { useEffect, useState } from "react";

const useDataStates = () => {
    const [quizSection, setQuizSection] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);
    const [appIndex, setAppIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState({});
    const [questionData, setQuestionData] = useState([]);
    const [totalAppLength, setTotalAppLength] = useState(null);

    // Fetching data
    useEffect(() => {
        fetch("Quiz.json")
            .then((res) => res.json())
            .then((data) => setQuestionData(data));
        fetch("Quiz.json")
            .then((res) => res.json())
            .then((data) => setTotalAppLength(data.length));
    }, [totalAppLength]);

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
        updateUserAnswer,
        questionData,
        totalAppLength
    };
};

export default useDataStates;
