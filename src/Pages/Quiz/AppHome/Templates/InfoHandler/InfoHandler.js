import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
const angleIcon = <FontAwesomeIcon icon={faAngleRight} />;

const InfoHandler = ({ questionData, handlingNext }) => {
    return (
        <Box>
            <Typography sx={{ mb: 4 }} variant="h4">
                Recommendation
            </Typography>
            <Box
                sx={{
                    p: 5,
                    border: "5px solid skyBlue",
                    borderRadius: 3,
                    backgroundColor: "rgba(217, 228, 255, 0.8)",
                    boxShadow: "2px 2px 10px rgba(0, 191, 255, 0.5)"
                }}
            >
                {questionData.question.map((info, index) => (
                    <Typography
                        variant="h6"
                        sx={{ textAlign: "left", my: 2 }}
                        key={index}
                    >
                        {angleIcon} {info}
                    </Typography>
                ))}
            </Box>
            <Button
                sx={{ display: "block", mx: "auto", mt: 3 }}
                onClick={() => handlingNext()}
                variant="contained"
            >
                Next
            </Button>
        </Box>
    );
};

export default InfoHandler;
