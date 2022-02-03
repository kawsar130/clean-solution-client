import { Box, Button, Typography, styled, TextField } from "@mui/material";
import React, { useState } from "react";

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

const InputTextCollector = ({ questionText, handlingNext }) => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const NextButton = [
        <Button
            type="submit"
            sx={{ display: "block", mx: "auto", mt: 3 }}
            onClick={() => handlingNext(text)}
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
        <Box noValidate sx={{ maxWidth: 700 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
                {questionText}
            </Typography>
            <ValidationTextField
                label="Your Answer"
                fullWidth
                variant="outlined"
                id="validation-outlined-input"
                type="text"
                onChange={handleChange}
            />
            {text.length > 0 ? NextButton[0] : NextButton[1]}
        </Box>
    );
};

export default InputTextCollector;
