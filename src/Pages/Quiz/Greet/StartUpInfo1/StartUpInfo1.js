import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./StartUpInfo1.css";

const StartUpInfo1 = ({ handlingNext }) => {
    return (
        <Box
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
            <Typography sx={{ mb: 3 }}>
                Today’s world requires a stronger and safer response for
                everything from skin contact, to animals, food, water, and every
                other hard and soft surface,including fogging entire rooms and
                buildings.
            </Typography>
            <Typography sx={{ mb: 3 }}>
                Clean Solutions is a BioSecurity Company that specializes in
                quickly identifying economical solutions to micro-organic
                challenges. Our focus is on improving human health and
                commercial productivity with innovative products and services.
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
                This short questionnaire will take between 1 and 5 minutes and
                create your customized solution.
            </Typography>
            <Button onClick={() => handlingNext()} variant="contained">
                Next
            </Button>
        </Box>
    );
};

export default StartUpInfo1;
