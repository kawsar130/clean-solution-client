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
    updateAndNext,
    room,
    roomNumber,
    setRoomNumber
}) => {
    const [roomData, setRoomData] = useState({
        roomIndex: null,
        height: 0,
        width: 0,
        length: 0,
        area: 0,
        volume: 0
    });
    const [isRoomDataAvailable, setIsRoomDataAvailable] = useState(null);
    const [strengthList, setStrengthList] = useState([]);
    const [userSelectedStrength, setUserSelectedStrength] = useState({});
    const [isStrengthSelected, setIsStrengthSelected] = useState(null);

    useEffect(() => {
        setStrengthList(questionData?.strength);
    }, [questionData]);

    const handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newRoomData = { ...roomData };
        newRoomData[field] = parseInt(value);
        newRoomData["area"] = newRoomData["width"] * newRoomData["length"];
        newRoomData["volume"] = newRoomData["area"] * newRoomData["height"];
        setRoomData(newRoomData);
        if (newRoomData["volume"]) {
            setIsRoomDataAvailable(true);
        } else {
            setIsRoomDataAvailable(false);
        }
    };

    // Action on Clicking Strength
    const clicked = (selected) => {
        const strengths = [...strengthList];
        strengths.map((strength) => (strength.selectedStatus = false));

        // If roomData become erased after Strength Selected.
        if (!isRoomDataAvailable) {
            setIsRoomDataAvailable(false);
            return;
        }
        let selectedStrength = selected;
        selectedStrength.selectedStatus = true;
        setUserSelectedStrength(selectedStrength);
        setIsStrengthSelected(true);
    };

    const buttonStyle = {
        color: "darkSlateGray",
        backgroundColor: "rgba(217, 228, 255, 0.8)",
        "&:hover": {
            backgroundColor: "rgba(31, 36, 132, 0.8)",
            color: "white"
        },
        width: "100%",
        m: "0.5em",
        borderRadius: "5px",
        p: "5px",
        boxShadow: "2px 2px 5px rgba(0, 191, 255, 0.4)",
        border: "1px solid skyBlue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    };

    const clickedColor = {
        color: "white",
        backgroundColor: "rgba(125, 131, 235, 0.8)",
        "&:hover": {
            backgroundColor: "rgba(84, 90, 206, 0.8)",
            color: "white"
        },
        width: "100%",
        m: "0.5em",
        borderRadius: "5px",
        p: "5px",
        boxShadow: "2px 2px 5px rgba(0, 191, 255, 0.4)",
        border: "1px solid skyBlue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    };

    // Disable mouse scrolling that changes value in number type field
    const handleScrolling = (event) => {
        event.target.blur();
    };

    const removeRoom = () => {
        const totalRoom = [...roomNumber];
        totalRoom.pop();
        setRoomNumber(totalRoom);
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
                ROOM NUMBER: {room}
            </Typography>
            <Button
                onClick={() => removeRoom()}
                sx={{
                    position: "absolute",
                    top: "10px",
                    right: "20px",
                    color: "gray",
                    "&:hover": {
                        transform: "scale(1.1)"
                    }
                }}
            >
                <Typography variant="h4">{roomRemoveIcon}</Typography>
            </Button>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ px: 5 }}>
                    <ValidationTextField
                        sx={{ my: 1 }}
                        label="Height (Approx.)"
                        fullWidth
                        variant="outlined"
                        name="height"
                        id="validation-outlined-input1"
                        type="number"
                        placeholder="Unit: Ft"
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                        onWheel={handleScrolling}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            justifyContent: "space-around"
                        }}
                    >
                        <Typography variant="h6">
                            Area: {!roomData.area ? "0" : roomData.area} ft
                            <sup>2</sup>
                        </Typography>
                        <Typography variant="h6">
                            Volume: {!roomData.volume ? "0" : roomData.volume}{" "}
                            ft
                            <sup>3</sup>
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    {questionData?.strength && (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                px: 5
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
                                {strengthList?.map((strength, index) => (
                                    <Grid item xs={12} sm={12}>
                                        <Button
                                            key={index}
                                            onClick={() => clicked(strength)}
                                            sx={
                                                strength.selectedStatus
                                                    ? clickedColor
                                                    : buttonStyle
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
                        </Box>
                    )}
                </Box>
            </Box>
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
                    Provide Valid Room Data First!
                </Alert>
            )}
        </Box>
    );
};

export default RoomCalculator;
