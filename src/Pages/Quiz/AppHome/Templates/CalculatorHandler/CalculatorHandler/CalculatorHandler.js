import React, { useState } from "react";
import uniqid from "uniqid";
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
    const [roomList, setRoomList] = useState([{ id: "abcd1234" }]);
    const [totalRoomData, setTotalRoomData] = useState([]);

    const addRoom = () => {
        const id = uniqid();
        setRoomList((roomList) => [
            ...roomList,
            {
                id
            }
        ]);
    };

    const removeRoom = (id) => {
        setRoomList((roomList) => roomList.filter((room) => room.id !== id));
    };

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

            {roomList.map((room, index) => {
                return (
                    <RoomCalculator
                        key={room.id}
                        questionData={questionData}
                        index={index}
                        id={room.id}
                        removeRoom={removeRoom}
                        totalRoomData={totalRoomData}
                        setTotalRoomData={setTotalRoomData}
                    />
                );
            })}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Button onClick={addRoom} sx={{ my: 1 }} variant="contained">
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
