import { Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                {/* <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
