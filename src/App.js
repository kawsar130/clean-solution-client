import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Quiz from "./Pages/Quiz/Quiz/Quiz";
import DataProvider from "./Context/DataProvider";

function App() {
    return (
        <div className="App">
            <DataProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="quiz" element={<Quiz />} />
                </Routes>
            </DataProvider>
        </div>
    );
}

export default App;
