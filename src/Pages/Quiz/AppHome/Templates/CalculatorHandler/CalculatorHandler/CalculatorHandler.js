import React, { useState } from "react";
import uniqid from "uniqid";
import _ from "lodash";
import { Box, Button, Typography, Alert } from "@mui/material";

import RoomCalculator from "../RoomCalculator/RoomCalculator";

const CalculatorHandler = ({ questionData, handlingNext }) => {
    const [isRoomCalculatorSelected, setIsRoomCalculatorSelected] =
        useState(true);
    const [roomList, setRoomList] = useState([{ id: "abcd1234" }]);
    const [totalRoomData, setTotalRoomData] = useState([]);
    const [isLastRoomOk, setIsLastRoomOk] = useState(null);
    const [lastRoomId, setLastRoomId] = useState("");
    const [buildingList, setBuildingList] = useState([{ id: "xyz123" }]);
    const [buildingData, setBuildingData] = useState([]);
    const [alertText, setAlertText] = useState("");

    const addRoom = () => {
        // If room data is available in totalRoomData
        if (totalRoomData?.length > 0) {
            const lastRoomData = totalRoomData[totalRoomData.length - 1];

            // verifying whether the last room data is empty or not before adding new room
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

    // Removing Room with data
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
        let dataSet;

        // check whether roomCalculator Selected or not
        if (isRoomCalculatorSelected) {
            if (totalRoomData.length) {
                const incompleteData = totalRoomData.filter(
                    (room) =>
                        room.volume === 0 ||
                        Object.keys(room.strength).length === 0
                );

                if (incompleteData.length) {
                    // getting index of incomplete room
                    const incompleteDataIndex = incompleteData.map((data) =>
                        totalRoomData.indexOf(data)
                    );

                    // Making room number from index
                    const incompleteRoomNumber = incompleteDataIndex.map(
                        (data) => data + 1
                    );

                    setAlertText(
                        `Incomplete Data at Room Number: ${incompleteRoomNumber} ! You may either complete it or remove it.`
                    );
                    return false;
                } else {
                    setAlertText("");
                }
                dataSet = {
                    questionText: questionData.question,
                    questionIndex: questionData.qIndex,
                    options: [],
                    strengthList: questionData.strength.map(
                        (option) => option["name"]
                    ),
                    answers: {
                        type: "RoomData",
                        roomQty: totalRoomData.length,
                        roomData: totalRoomData
                    },
                    ansType: questionData.ansType
                };
            } else {
                setAlertText("Please provide room data to continue.");
                return false;
            }
        } else {
            if (buildingData.length) {
                console.log(buildingList);
                if (
                    buildingData[0].volume === 0 ||
                    Object.keys(buildingData[0].strength).length === 0
                ) {
                    setAlertText(
                        `Incomplete Building Data! Please provide valid data to continue.`
                    );
                    return false;
                } else {
                    setAlertText("");
                }

                dataSet = {
                    questionText: questionData.question1,
                    questionIndex: questionData.qIndex,
                    options: [],
                    strengthList: questionData.strength.map(
                        (option) => option["name"]
                    ),
                    answers: {
                        type: "BuildingData",
                        buildingQty: buildingData.length,
                        buildingData: buildingData
                    },
                    ansType: questionData.ansType
                };
            } else {
                setAlertText("Please provide building data to continue.");
                return false;
            }
        }
        console.log(dataSet);
        handlingNext(dataSet);
    };

    return (
        <Box sx={{ my: 5 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                {questionData.qIndex + 1}
                {". "}
                {isRoomCalculatorSelected
                    ? `${questionData.question}`
                    : `${questionData.question1}`}
            </Typography>

            {isRoomCalculatorSelected ? (
                <Box>
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
                                isRoomCalculatorSelected={
                                    isRoomCalculatorSelected
                                }
                                setAlertText={setAlertText}
                            />
                        );
                    })}
                </Box>
            ) : (
                <Box>
                    {buildingList.map((building, index) => {
                        return (
                            <RoomCalculator
                                key={building.id}
                                questionData={questionData}
                                index={index}
                                id={building.id}
                                buildingData={buildingData}
                                setBuildingData={setBuildingData}
                                isRoomCalculatorSelected={
                                    isRoomCalculatorSelected
                                }
                                setAlertText={setAlertText}
                            />
                        );
                    })}
                </Box>
            )}

            <Box sx={{ display: "flex", flexDirection: "column" }}>
                {alertText ? (
                    <Alert
                        sx={{ mx: "auto" }}
                        variant="filled"
                        severity="error"
                    >
                        {alertText}
                    </Alert>
                ) : (
                    <Box>
                        {isLastRoomOk === false ? (
                            <Alert severity="warning">
                                Last Room Data is incomplete! Fill up all text
                                field and Select a strength!
                            </Alert>
                        ) : (
                            <Alert severity="info">
                                Remember to fill up all the required field.
                            </Alert>
                        )}
                    </Box>
                )}
                {isRoomCalculatorSelected && (
                    <Button
                        onClick={addRoom}
                        sx={{ my: 1 }}
                        variant="contained"
                    >
                        Add Room
                    </Button>
                )}
                {isRoomCalculatorSelected ? (
                    <Button
                        onClick={() => {
                            setIsRoomCalculatorSelected(false);
                            setTotalRoomData([]);
                            setRoomList([{ id: "abcd1234" }]);
                        }}
                        sx={{ mx: 1, my: 1 }}
                    >
                        Switch to Building Calculation Instead
                    </Button>
                ) : (
                    <Button
                        onClick={() => {
                            setIsRoomCalculatorSelected(true);
                            setBuildingData([]);
                            setBuildingList([{ id: "xyz123" }]);
                            setLastRoomId("");
                        }}
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
        </Box>
    );
};

export default CalculatorHandler;
