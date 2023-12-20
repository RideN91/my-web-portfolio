import React from 'react';
import Contact from './components/Contact';
import Navbar from './Navbar';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';


function App() {
    let component
    switch (window.location.pathname) {
        case "/":
            component = <Home />
            break
        case "/about-me":
            component = <About />
            break
        case "/portfolio":
            component = <Portfolio />
            break
        case "/contact":
            component = <Contact />
            break
            default:
            component = <NotFound />
    }

    return (
        
        <div className="bg-gradient-primary">
            <Navbar />
            {component}
        </div>
        
    );
}

export default App;
