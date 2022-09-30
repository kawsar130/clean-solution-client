import { Box } from "@mui/system";
import useData from "../../../hooks/useData";
import AppHome from "../AppHome/AppHome/AppHome/AppHome";

import Greet from "../Greet/Greet/Greet";
import Result from "../Result/Result/Result";
// import "./Quiz.css";

const Quiz = () => {
    const { quizSection } = useData();

    const components = [
        <Greet></Greet>,
        <AppHome></AppHome>,
        <Result></Result>
    ];

    return (
        <Box
            sx={{
                background: `url("https://i.ibb.co/qNrGqKr/v870-tang-36.jpg")`,
                backgroundSize: "cover",
                minHeight: "100vh",
                backgroundAttachment: "fixed"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    width: "100vw",
                    background: "rgba(255, 255, 255, 0.8)"
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    {components[quizSection]}
                </Box>
            </Box>
        </Box>
    );
};

export default Quiz;
