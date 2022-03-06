import { Box, Button, styled, TextField, Typography } from "@mui/material";
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

const CustomerInfo2 = ({ handlingNext }) => {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const NextButton = [
        <Button
            type="submit"
            sx={{ display: "block", mx: "auto", mt: 3 }}
            onClick={() => handlingNext(name)}
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
                What's your name?
            </Typography>
            <ValidationTextField
                label="Full Name"
                fullWidth
                variant="outlined"
                id="validation-outlined-input"
                type="text"
                onChange={handleChange}
            />
            {name.length > 1 ? NextButton[0] : NextButton[1]}
        </Box>
    );
};

export default CustomerInfo2;
