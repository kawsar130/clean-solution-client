import React, { useState } from "react";
import {
    Box,
    Button,
    Typography,
    styled,
    TextField,
    Grid,
    Alert,
    Container
} from "@mui/material";

import RoomCalculator from "../RoomCalculator/RoomCalculator";

const CalculatorHandler = ({ questionData, handlingNext, quizButtonStyle }) => {
    const [isRoomCalculator, setIsRoomCalculator] = useState(true);
    const [roomNumber, setRoomNumber] = useState([1]);
    const [totalRoomData, setTotalRoomData] = useState([]);

    const addRoom = () => {
        setRoomNumber([...roomNumber, roomNumber.length + 1]);
    };
    console.log(roomNumber);

    const updateAndNext = () => {
        console.log("updateAndNext Clicked");
    };

    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 3 }}>
                {questionData.qIndex + 1}
                {". "}
                {isRoomCalculator
                    ? `${questionData.question}`
                    : `${questionData.question1}`}
            </Typography>
            {roomNumber.map((room, index) => (
                <RoomCalculator
                    key={index}
                    questionData={questionData}
                    quizButtonStyle={quizButtonStyle}
                    updateAndNext={updateAndNext}
                    setTotalRoomData={setTotalRoomData}
                    room={room}
                    setRoomNumber={setRoomNumber}
                    roomNumber={roomNumber}
                ></RoomCalculator>
            ))}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                    onClick={() => addRoom()}
                    sx={{ my: 1 }}
                    variant="contained"
                >
                    Add Room
                </Button>
                {isRoomCalculator ? (
                    <Button
                        onClick={() => setIsRoomCalculator(false)}
                        sx={{ mx: 1, my: 1 }}
                    >
                        Switch to Building Calculation Instead
                    </Button>
                ) : (
                    <Button
                        onClick={() => setIsRoomCalculator(true)}
                        sx={{ mx: 1, my: 1 }}
                    >
                        Switch to Room Calculator Instead
                    </Button>
                )}

                <Button
                    onClick={() => updateAndNext()}
                    sx={{ mx: "auto", my: 1 }}
                    variant="contained"
                >
                    Go Next
                </Button>
            </Box>
        </Container>
    );
};

export default CalculatorHandler;
