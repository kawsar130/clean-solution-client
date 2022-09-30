import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    styled,
    TextField,
    Grid,
    Button,
    Alert
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
    calculatorHandlerButton,
    calculatorHandlerClickedButton
} from "../../../../../../Styles/Styles";

const roomRemoveIcon = <FontAwesomeIcon icon={faTimes} />;

const ValidationTextField = styled(TextField)({
    "& input:valid + fieldset": {
        borderColor: "darkGray",
        borderWidth: 1
    },
    "& input:invalid + fieldset": {
        borderColor: "red",
        borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
        borderColor: "#77D5CB",
        borderLeftWidth: 6,
        padding: "4px !important" // override inline-style
    }
});

const RoomCalculator = ({
    questionData,
    index,
    id,
    removeRoom,
    totalRoomData,
    setTotalRoomData,
    buildingData,
    setBuildingData,
    isRoomCalculatorSelected,
    setAlertText
}) => {
    const [isRoomDataAvailable, setIsRoomDataAvailable] = useState(null);
    const [strengthList, setStrengthList] = useState([]);
    const [userSelectedStrength, setUserSelectedStrength] = useState({});
    const [isStrengthSelected, setIsStrengthSelected] = useState(null);
    const [roomData, setRoomData] = useState({
        roomId: id,
        type: isRoomCalculatorSelected ? "room" : "building",
        height: 0,
        width: 0,
        length: 0,
        area: 0,
        volume: 0,
        strength: {}
    });

    useEffect(() => {
        // copying questionData.strength to the state initially
        const newStrengthList = [];
        for (const strength of questionData?.strength) {
            const element = { ...strength };
            newStrengthList.push(element);
        }
        setStrengthList(newStrengthList);
    }, [questionData]);

    const handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newRoomData = { ...roomData };
        newRoomData[field] = value ? parseInt(value) : 0;
        newRoomData["area"] = newRoomData["width"] * newRoomData["length"];
        newRoomData["volume"] = newRoomData["area"] * newRoomData["height"];
        setRoomData(newRoomData);

        // Adding or updating RoomData/Building Data based on the RoomCalculatorSelected Status
        if (isRoomCalculatorSelected) {
            // Adding or updating totalRoomData
            if (totalRoomData.length) {
                let idFound = false;
                for (const [i, room] of totalRoomData.entries()) {
                    if (room.roomId === id) {
                        // updating room
                        const updatedRoom = { ...newRoomData };
                        const getTotalRoom = [...totalRoomData];
                        getTotalRoom[i] = updatedRoom;
                        setTotalRoomData(getTotalRoom);
                        setAlertText("");
                        idFound = true;
                        console.log("updated room");
                    }
                }
                if (!idFound) {
                    // Adding room
                    const updatedRoom = { ...newRoomData };
                    const addedRoom = [...totalRoomData, updatedRoom];
                    setTotalRoomData(addedRoom);
                    setAlertText("");
                    console.log("Added room");
                }
            } else {
                // Adding roomData to empty totalRoomData array
                setTotalRoomData([{ ...newRoomData }]);
                setAlertText("");
                console.log("Added room to empty array");
            }
        } else {
            // Adding or updating buildingData
            if (buildingData.length) {
                let idFound = false;
                for (const [i, building] of buildingData.entries()) {
                    if (building.roomId === id) {
                        // updating buildingData
                        const updatedBuilding = { ...newRoomData };
                        const getBuildingData = [...buildingData];
                        getBuildingData[i] = updatedBuilding;
                        setBuildingData(getBuildingData);
                        setAlertText("");
                        idFound = true;
                        console.log("updated room");
                    }
                }
                if (!idFound) {
                    // Adding Building
                    const updatedBuilding = { ...newRoomData };
                    const addedBuilding = [...buildingData, updatedBuilding];
                    setBuildingData(addedBuilding);
                    setAlertText("");
                    console.log("Added room");
                }
            } else {
                // Adding buildingData to empty buildingData array
                setBuildingData([{ ...newRoomData }]);
                setAlertText("");
                console.log("Added room to empty array");
            }
        }
    };

    // Action on Clicking Strength
    const clicked = (selected) => {
        // copying strengthList to new variable and making every button selectedStatus false
        const newStrength = [];
        for (const strength of strengthList) {
            const element = { ...strength, selectedStatus: false };
            newStrength.push(element);
        }

        // If roomData become erased after Strength Selected.
        if (!roomData?.volume) {
            setIsRoomDataAvailable(false);
            return false;
        } else {
            setIsRoomDataAvailable(true);
        }

        // copying selected button data to a variable to keep immutability
        const selectedStrength = { ...selected };

        selectedStrength.selectedStatus = true;
        setUserSelectedStrength(selectedStrength);

        // making the selected button status true.
        for (const strength of newStrength) {
            if (strength.index === selectedStrength.index) {
                strength.selectedStatus = true;
            }
        }
        setStrengthList(newStrength);
        setIsStrengthSelected(true);
        const newRoomData = {
            ...roomData,
            strength: selectedStrength
        };
        setRoomData(newRoomData);

        // Adding or updating RoomData/Building Data based on the RoomCalculatorSelected Status
        if (isRoomCalculatorSelected) {
            // Adding or updating totalRoomData
            if (totalRoomData?.length) {
                let idFound = false;
                for (const [i, room] of totalRoomData.entries()) {
                    if (room.roomId === id) {
                        // updating RoomData
                        const updatedRoom = { ...newRoomData };
                        const getTotalRoom = [...totalRoomData];
                        getTotalRoom[i] = updatedRoom;
                        setTotalRoomData(getTotalRoom);
                        setAlertText("");
                        idFound = true;
                        console.log("updated room");
                    }
                }
                if (!idFound) {
                    // Adding RoomData
                    const updatedRoom = { ...newRoomData };
                    const addedRoom = [...totalRoomData, updatedRoom];
                    setTotalRoomData(addedRoom);
                    setAlertText("");
                    console.log("Added room");
                }
            } else {
                // Adding RoomData to empty totalRoomData array
                setTotalRoomData([{ ...newRoomData }]);
                setAlertText("");
                console.log("Added room to empty array");
            }
        } else {
            // Adding or updating buildingData
            if (buildingData?.length) {
                let idFound = false;
                for (const [i, building] of buildingData.entries()) {
                    if (building.roomId === id) {
                        // updating buildingData
                        const updatedBuilding = { ...newRoomData };
                        const getBuilding = [...buildingData];
                        getBuilding[i] = updatedBuilding;
                        setBuildingData(getBuilding);
                        setAlertText("");
                        idFound = true;
                        console.log("updated room");
                    }
                }
                if (!idFound) {
                    // Adding Building
                    const updatedBuilding = { ...newRoomData };
                    const addedBuilding = [...buildingData, updatedBuilding];
                    setBuildingData(addedBuilding);
                    setAlertText("");
                    console.log("Added room");
                }
            } else {
                // Adding buildingData to empty buildingData array
                setBuildingData([{ ...newRoomData }]);
                setAlertText("");
                console.log("Added room to empty array");
            }
        }
        console.log(totalRoomData);
        console.log(buildingData);
    };

    // Disable mouse scrolling that changes value in number type field
    const handleScrolling = (event) => {
        event.target.blur();
    };

    return (
        <Box
            sx={{
                my: 2,
                backgroundColor: "rgba(220, 220, 220, 0.6)",
                border: "1px solid rgba(150, 150, 150, 0.5)",
                boxShadow: "0px 0px 20px rgba(150, 150, 150, 0.3)",
                p: 2,
                borderRadius: 1,
                position: "relative"
            }}
        >
            <Typography variant="h5" sx={{ mb: 3 }}>
                {isRoomCalculatorSelected
                    ? `ROOM NUMBER: ${index + 1}`
                    : `Enter Whole Building Data`}
            </Typography>
            {isRoomCalculatorSelected && (
                <Button
                    onClick={() => removeRoom(id)}
                    sx={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        color: "gray",
                        "&:hover": {
                            transform: "scale(1.1)"
                        }
                    }}
                >
                    <Typography variant="h5">{roomRemoveIcon}</Typography>
                </Button>
            )}
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    sx={{ px: { xs: 0, sm: 2, md: 5 } }}
                >
                    <ValidationTextField
                        sx={{ my: 1 }}
                        label="Height (Approx.)"
                        fullWidth
                        variant="outlined"
                        name="height"
                        id="validation-outlined-input1"
                        type="number"
                        placeholder="Unit: Ft"
                        onBlur={handleChange}
                        onWheel={handleScrolling}
                    />
                    <ValidationTextField
                        sx={{ my: 1 }}
                        label="Width (Approx.)"
                        fullWidth
                        variant="outlined"
                        name="width"
                        id="validation-outlined-input"
                        type="number"
                        placeholder="Unit: Ft"
                        onBlur={handleChange}
                        onWheel={handleScrolling}
                    />
                    <ValidationTextField
                        sx={{ my: 1 }}
                        label="Length (Approx.)"
                        fullWidth
                        variant="outlined"
                        name="length"
                        id="validation-outlined-input2"
                        type="number"
                        placeholder="Unit: Ft"
                        onBlur={handleChange}
                        onWheel={handleScrolling}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            justifyContent: "space-around",
                            my: 2
                        }}
                    >
                        <Typography sx={{ fontWeight: "bold" }}>
                            Area: {roomData.area} ft
                            <sup>2</sup>
                        </Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Volume: {roomData.volume} ft
                            <sup>3</sup>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    {strengthList && (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                px: { xs: 0, sm: 2, md: 5 }
                            }}
                        >
                            <Typography variant="h6">Strength</Typography>
                            <Grid
                                container
                                sx={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                            >
                                {strengthList?.map((strength) => (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        key={strength.index}
                                    >
                                        <Button
                                            onClick={() => clicked(strength)}
                                            sx={
                                                strength.selectedStatus
                                                    ? calculatorHandlerClickedButton
                                                    : calculatorHandlerButton
                                            }
                                        >
                                            <Box>
                                                <Typography>
                                                    {strength?.name}
                                                </Typography>
                                            </Box>
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>
                            {userSelectedStrength?.name && (
                                <Alert
                                    sx={{
                                        mx: "auto"
                                    }}
                                    severity="success"
                                    color="info"
                                >
                                    {userSelectedStrength.name}
                                </Alert>
                            )}
                        </Box>
                    )}
                </Grid>
            </Grid>
            {isStrengthSelected === false && (
                <Alert
                    sx={{
                        maxWidth: "600px",
                        mx: "auto",
                        display: "flex",
                        justifyContent: "center"
                    }}
                    severity="warning"
                >
                    Please Select a Strength!
                </Alert>
            )}
            {isRoomDataAvailable === false && (
                <Alert
                    sx={{
                        maxWidth: "600px",
                        mx: "auto",
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: "bold"
                    }}
                    severity="warning"
                >
                    Please Provide Valid Data!
                </Alert>
            )}
        </Box>
    );
};

export default RoomCalculator;
