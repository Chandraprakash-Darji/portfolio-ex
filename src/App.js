import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="bg-dark min-h-screen text-main font-mono overflow-x-hidden">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
