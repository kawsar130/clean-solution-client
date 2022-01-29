import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./GreetEnd3.css";

import Fade from "react-reveal/Fade";
import useData from "../../../../hooks/useData";

const GreetEnd3 = ({ customerName, handlingNext }) => {
    const [revealName, setRevealName] = useState(true);
    const [revealQuestion, setRevealQuestion] = useState(false);
    const [revealList, setRevealList] = useState(false);
    const [revealSolution, setRevealSolution] = useState(false);
    const [state, setState] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setRevealName(false);
        }, 3000);
        setTimeout(() => {
            setState(false);
        }, 2500);
        setTimeout(() => {
            setRevealQuestion(true);
        }, 3000);
        setTimeout(() => {
            setState(true);
        }, 3000);
        setTimeout(() => {
            setState(false);
        }, 6500);
        setTimeout(() => {
            setRevealQuestion(false);
        }, 7000);
        setTimeout(() => {
            setRevealList(true);
        }, 7000);
        setTimeout(() => {
            setState(true);
        }, 7000);
        setTimeout(() => {
            setRevealList(false);
        }, 11000);
        setTimeout(() => {
            setState(false);
        }, 10500);
        setTimeout(() => {
            setRevealSolution(true);
        }, 11000);
        setTimeout(() => {
            setState(true);
        }, 11000);
        setTimeout(() => {
            handlingNext();
        }, 14000);

        return () => clearTimeout();
    }, []);

    // const handlingContinue = () => {
    //     setState(false);
    //     setTimeout(() => {
    //         setQuizSection(quizSection + 1);
    //     }, 1000);
    //     clearTimeout();
    // };

    // <Button
    //     type="submit"
    //     sx={{ display: "block", mx: "auto", mt: 3 }}
    //     onClick={() => handlingContinue()}
    //     variant="contained"
    // >
    //     Continue
    // </Button>;

    const cleaningProducts = [
        "Lysol",
        "Iodine ",
        "Clorox ",
        "Bleach",
        "FeBreze",
        "Ammonia",
        "Isopropyl alcohol",
        "Hydrogen peroxide ",
        "PureWell hand sanitizer ",
        "Laundry deodorizer and bacteria eliminator "
    ];

    return (
        <div>
            {revealName && (
                <Fade Top opposite when={state}>
                    <Typography variant="h3">Welcome {customerName}</Typography>
                </Fade>
            )}

            {revealQuestion && (
                <Fade Left opposite when={state}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        Tired of using so many different cleaning products for
                        every different job?{" "}
                    </Typography>
                </Fade>
            )}
            {revealList && (
                <Fade Top opposite cascade when={state}>
                    <Box>
                        {cleaningProducts.map((product) => (
                            <Typography variant="h4" key={product}>
                                {product}
                            </Typography>
                        ))}
                        <Typography variant="h3">
                            Too complicated! Right?
                        </Typography>
                    </Box>
                </Fade>
            )}
            {revealSolution && (
                <Fade Left opposite when={state}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        We are here for you to{" "}
                        <span className="highlight-text">
                            make your LIFE EASY
                        </span>{" "}
                        with a few simple Step ;-){" "}
                    </Typography>
                </Fade>
            )}
        </div>
    );
};

export default GreetEnd3;
