import React from 'react';
import Contact from './components/Contact';
import Navbar from './Navbar';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import About from './components/About';


function App() {
    let component
    switch (window.location.pathname) {
        case "/":
            component = <Home />
            break
        case "/aboutme":
            component = <About />
            break
        case "/portfolio":
            component = <Portfolio />
            break
        case "/contact":
            component = <Contact />
            break
    }

    return (
        
        <div className="bg-gradient-primary">
            <Navbar />
            {component}
        </div>
        
    );
}

export default App;
