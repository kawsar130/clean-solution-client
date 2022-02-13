import React, { useState } from "react";
import uniqid from "uniqid";
import _ from "lodash";
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
    const [isLastRoomOk, setIsLastRoomOk] = useState(null);
    const [lastRoomId, setLastRoomId] = useState("");

    const addRoom = () => {
        if (totalRoomData?.length > 0) {
            const lastRoomData = totalRoomData[totalRoomData.length - 1];

            if (lastRoomId !== lastRoomData.roomId) {
                if (
                    lastRoomData.volume !== 0 &&
                    Object.keys(lastRoomData.strength).length !== 0
                ) {
                    setIsLastRoomOk(true);
                    const id = uniqid();
                    setRoomList((roomList) => [
                        ...roomList,
                        {
                            id
                        }
                    ]);
                    setLastRoomId(lastRoomData.roomId);
                } else {
                    setIsLastRoomOk(false);
                    return false;
                }
            } else {
                setIsLastRoomOk(false);
            }
        } else {
            setIsLastRoomOk(false);
        }
    };

    const removeRoom = (id) => {
        if (roomList.length === 1) {
            return false;
        }
        const newTotalRoom = _.cloneDeep(totalRoomData);

        for (const newRoom of newTotalRoom) {
            if (newRoom.roomId === id) {
                const updatedRoom = newTotalRoom.filter(
                    (room) => room.roomId !== id
                );
                setTotalRoomData(updatedRoom);
                setLastRoomId(id);
            } else {
                setLastRoomId(id);
            }
        }

        // setTotalRoomData(updatedTotalRoom);
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
                {isLastRoomOk === false ? (
                    <Alert severity="warning">
                        Last Room Data is incomplete! Fill up all text field and
                        Select a strength!
                    </Alert>
                ) : (
                    <Alert severity="info">
                        Remember to fill up all the required field.
                    </Alert>
                )}
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
