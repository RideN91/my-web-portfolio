import React from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header';
import Menu from './components/Menu';
import Projects from './components/Projects';

function App() {
    return (
        <div className="App">
            <Header />
            <AboutMe />
            <Projects />
            <Contact />
            <Menu />
        </div>
    );
}

export default App;
