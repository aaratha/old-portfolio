import { Routes, Route, MemoryRouter, Router, BrowserRouter } from 'react-router-dom';
import { Home } from './components/home';
import { Sidebar } from './components/sidebar';
import { ProjectsWeb } from './components/projects-web/projects-web';
import { ProjectsVis } from './components/projects-vis/projects-vis';
import { Contact } from './components/contact';
import { Projects } from './components/projects';


function App() {
    return (
        <MemoryRouter>
            <div className='flex flex-col md:flex-row'>
                <Sidebar />
                <div className='inshad flex md:w-[85%] h-[88vh] md:h-screen bg-white body'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects/*" element={<Projects />} />
                        <Route path="/projects-vis" element={<ProjectsVis />} />
                        <Route path="/projects-web" element={<ProjectsWeb />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </MemoryRouter>
    );
}

export default App;
