import styles from './App.module.scss';
import { Navigation } from './components/navigation/navigation';
import Navigation_module from './components/navigation/navigation.module.scss';
import { Routes, Route, MemoryRouter, Router, BrowserRouter } from 'react-router-dom';
import { Projects } from './components/projects/projects';
import { Home } from './components/home';
import { Sidebar } from './components/sidebar';
import { ProjectsWeb } from './components/projects-web/projects-web';
import { ProjectsVis } from './components/projects-vis/projects-vis';
import { Contact } from './components/contact';
import svg from './Vector 1.svg'


function App() {
    return (
        <MemoryRouter>
            <div className='flex flex-row'>
                <Sidebar />
                <div className='inshad flex w-[85%] bg-white body'>
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
