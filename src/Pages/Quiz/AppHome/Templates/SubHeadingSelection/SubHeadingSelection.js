import React, { useEffect, useState } from "react";
import { styled, Box, Typography, Tooltip, Button, Grid } from "@mui/material";
import { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "react-reveal/Fade";

// Popover code
const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#f5f5f9",
        color: "rgba(0, 0, 0, 0.87)",
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(16),
        border: "1px solid #dadde9"
    }
}));

const SubHeadingSelection = ({
    sectionData,
    icons,
    quizButtonStyle,
    handlingNext
}) => {
    const [revealState, setRevealState] = useState(false);
    const { heading, intro, subheadings } = sectionData;

    useEffect(() => {
        setRevealState(true);
    }, []);

    const handlingClick = (index) => {
        setRevealState(false);
        setTimeout(() => {
            handlingNext(null, index);
        }, 500);
        clearTimeout();
    };

    return (
        <Box>
            <Fade right opposite when={revealState}>
                <Box>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        {heading}
                    </Typography>
                    <Typography>{intro}</Typography>
                    <Box sx={{ mt: 4 }}>
                        <Grid
                            container
                            sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            {subheadings?.map((subHeading, index) => (
                                <HtmlTooltip
                                    title={subHeading?.info}
                                    arrow
                                    key={index}
                                >
                                    <Button
                                        onClick={() => handlingClick(index)}
                                        sx={quizButtonStyle}
                                    >
                                        <Typography sx={{ mr: 2 }} variant="h3">
                                            {icons[index]}
                                        </Typography>
                                        <Box>
                                            <Typography variant="h6">
                                                {subHeading?.title}
                                            </Typography>
                                            <Typography variant="subtitle2">
                                                {subHeading?.qty}
                                            </Typography>
                                        </Box>
                                    </Button>
                                </HtmlTooltip>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Fade>
        </Box>
    );
};

export default SubHeadingSelection;
