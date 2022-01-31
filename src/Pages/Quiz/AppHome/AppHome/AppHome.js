import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    Typography
} from "@mui/material";
import FarmAndRanch6 from "../FarmAndRanch6/FarmAndRanch6";
import HomeAndGarden3 from "../HomeAndGarden3/HomeAndGarden3";
import ProfessionalEstablishments5 from "../ProfessionalEstablishments5/ProfessionalEstablishments5";
import SkinContact1 from "../SkinContact1/SkinContact1";
import TravelAndLeisure4 from "../TravelAndLeisure4/TravelAndLeisure4";
import WaterTreatment2 from "../WaterTreatment2/WaterTreatment2";
import SingleApp from "./SingleApp";

const AppHome = () => {
    const [questionData, setQuestionData] = useState([]);
    const [appIndex, setAppIndex] = useState(0);

    useEffect(() => {
        fetch("Quiz.json")
            .then((res) => res.json())
            .then((data) => setQuestionData(data));
    }, []);

    if (questionData.length === 0) {
        return <CircularProgress />;
    }

    const app = [
        <SkinContact1></SkinContact1>,
        <WaterTreatment2></WaterTreatment2>,
        <HomeAndGarden3></HomeAndGarden3>,
        <TravelAndLeisure4></TravelAndLeisure4>,
        <ProfessionalEstablishments5></ProfessionalEstablishments5>,
        <FarmAndRanch6></FarmAndRanch6>
    ];

    return (
        <Container>
            <Typography variant="h5" sx={{ mb: 5 }}>
                Discover all of the ways chlorine dioxide kills 99.99% of all
                bacteria, viruses, mold and more. Protect yourself and loved
                ones today with a custom Clean Solution tailored just for you.
            </Typography>
            <Box>
                <Grid
                    container
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    {questionData.map((app) => (
                        <SingleApp key={app.heading} app={app}></SingleApp>
                    ))}
                </Grid>
            </Box>
            <Button variant="contained">START</Button>
        </Container>
    );
};

export default AppHome;
