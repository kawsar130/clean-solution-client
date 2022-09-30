import React, { useEffect, useState } from "react";
import _ from "lodash";
import { clickedColor } from "../../../../../Styles/Styles";
import {
    Box,
    Button,
    Typography,
    styled,
    TextField,
    Grid,
    Alert
} from "@mui/material";

const ValidationTextField = styled(TextField)({
    "& input:valid + fieldset": {
        borderColor: "gray",
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

const InputTextCollector = ({
    questionData,
    handlingNext,
    quizButtonStyle
}) => {
    const [text, setText] = useState("");
    const [strengthList, setStrengthList] = useState([]);
    const [isStrengthSelected, setIsStrengthSelected] = useState(null);

    useEffect(() => {
        if (questionData.strength) {
            const newStrengthList = _.cloneDeep(questionData?.strength);
            setStrengthList(newStrengthList);
        }
    }, [questionData]);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const clicked = (selected) => {
        const newStrengthList = _.cloneDeep(strengthList);
        newStrengthList.map((strength) => (strength.selectedStatus = false));
        const selectedAnswer = { ...selected };
        selectedAnswer.selectedStatus = true;

        for (const [i, strength] of newStrengthList.entries()) {
            if (strength.index === selectedAnswer.index) {
                newStrengthList[i] = selectedAnswer;
            }
        }
        setStrengthList(newStrengthList);
        setIsStrengthSelected(true);
    };

    const updateAndNext = (text) => {
        let dataSet;

        if (questionData?.strength) {
            const selectedStrength = strengthList.filter(
                (strength) => strength.selectedStatus
            );
            dataSet = {
                questionText: questionData.question,
                questionIndex: questionData.qIndex,
                options: [],
                strengthList: questionData.strength.map(
                    (option) => option["name"]
                ),
                selectedStrengthText: selectedStrength[0].name,
                selectedStrengthIndex: selectedStrength[0].index,
                answerText: text,
                answerIndex: null,
                ansType: questionData.ansType
            };
            if (isStrengthSelected === null) {
                setIsStrengthSelected(false);
            }
            if (isStrengthSelected) {
                setText("");
                handlingNext(dataSet);
            }
        } else {
            dataSet = {
                questionText: questionData.question,
                questionIndex: questionData.qIndex,
                options: [],
                answerText: text,
                answerIndex: null,
                ansType: questionData.ansType
            };
            setText("");
            handlingNext(dataSet);
        }
    };

    const NextButton = [
        <Button
            type="submit"
            sx={{ display: "block", mx: "auto", mt: 3 }}
            onClick={() => updateAndNext(text)}
            variant="contained"
        >
            Next
        </Button>,
        <Button
            type="submit"
            sx={{ display: "block", mx: "auto", mt: 3 }}
            variant="contained"
            disabled
        >
            Next
        </Button>
    ];

    return (
        <Box
            noValidate
            sx={{
                maxWidth: {
                    xs: "95%",
                    sm: "80%",
                    md: "75%",
                    lg: "70%",
                    xl: "70%"
                },
                my: 5,
                mx: "auto"
            }}
        >
            <Typography variant="h4" sx={{ mb: 3 }}>
                {questionData.qIndex + 1}
                {". "}
                {questionData.question}
            </Typography>
            <ValidationTextField
                label="Your Answer"
                fullWidth
                variant="outlined"
                id="validation-outlined-input"
                type="number"
                value={text}
                onChange={handleChange}
            />
            {questionData?.strength && (
                <Box sx={{ mt: 5, display: "flex", flexDirection: "column" }}>
                    <Typography variant="h5">Strength</Typography>
                    <Grid
                        container
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        {strengthList.map((option, index) => (
                            <Button
                                key={index}
                                onClick={() => clicked(option)}
                                sx={
                                    option.selectedStatus
                                        ? clickedColor
                                        : quizButtonStyle
                                }
                            >
                                <Box>
                                    <Typography variant="h6">
                                        {option?.name}
                                    </Typography>
                                </Box>
                            </Button>
                        ))}
                    </Grid>
                </Box>
            )}
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
            {text.length > 0 ? NextButton[0] : NextButton[1]}
        </Box>
    );
};

export default InputTextCollector;
