import { Routes } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <nav>This is dummy nav</nav>
            <Routes>
                {/* <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} /> */}
            </Routes>
            <footer>This is dummy footer</footer>
        </div>
    );
}

export default App;
