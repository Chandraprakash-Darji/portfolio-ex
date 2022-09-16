import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-dark font-mono text-main">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
