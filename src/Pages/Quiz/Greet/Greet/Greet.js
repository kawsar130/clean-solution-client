import React, { useState } from "react";
import useData from "../../../../hooks/useData";
import CustomerInfo2 from "../CustomerInfo2/CustomerInfo2";
import GreetEnd3 from "../GreetEnd3/GreetEnd3";
import StartUpInfo1 from "../StartUpInfo1/StartUpInfo1";
import "./Greet.css";

import Fade from "react-reveal/Fade";
import InitialQuiz4 from "../InitialQuiz4/InitialQuiz4";

const Greet = () => {
    const [componentIndex, setComponentIndex] = useState(0);
    const [revealState, setRevealState] = useState(true);
    const { updateUserAnswer, userAnswer } = useData();

    const handlingNext = (addedAnswer) => {
        setRevealState(false);
        if (addedAnswer) {
            const answer = { customerInfo: { name: addedAnswer } };
            updateUserAnswer(answer);
        }
        setComponentIndex(componentIndex + 1);
        setTimeout(() => setRevealState(true), 500);
        clearTimeout();
    };

    const component = [
        <StartUpInfo1 handlingNext={handlingNext}></StartUpInfo1>,
        <CustomerInfo2 handlingNext={handlingNext}></CustomerInfo2>,
        <GreetEnd3
            customerName={userAnswer?.customerInfo?.name}
            handlingNext={handlingNext}
        ></GreetEnd3>,
        <InitialQuiz4 setRevealState={setRevealState}></InitialQuiz4>
    ];

    return (
        <div className="greet-container">
            <Fade right opposite when={revealState}>
                {component[componentIndex]}
            </Fade>
        </div>
    );
};

export default Greet;
