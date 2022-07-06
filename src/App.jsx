import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
