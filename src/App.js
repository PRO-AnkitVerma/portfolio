import { Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                {/* <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} /> */}
            </Routes>
            <footer>This is dummy footer</footer>
        </div>
    );
}

export default App;
