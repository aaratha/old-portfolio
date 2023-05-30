import { Routes, Route, MemoryRouter, Router, BrowserRouter, Navigate } from 'react-router-dom';
import { Home } from './components/home';
import { Sidebar } from './components/sidebar';
import { Videos } from './components/projects/videos';
import { ProjectsWeb } from './components/projects-web/projects-web';
import { Visuals } from './components/projects/visuals';
import { Contact } from './components/contact';
import { Projects } from './components/projects';

function App() {
    return (
        <MemoryRouter>
            <div className="text-primary flex flex-col md:flex-row font-nice-600">
                <Sidebar />
                <div className="inshad transition-shadow flex md:w-[85%] h-[88vh] md:h-screen bg-white body">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Navigate to="/projects/videos" />} />
                        <Route path="/projects/" element={<Projects />}>
                            <Route path="/projects/videos" element={<Videos />} />
                            <Route path="/projects/visuals" element={<Visuals />} />
                            <Route path="/projects/websites" element={<ProjectsWeb />} />
                        </Route>
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </MemoryRouter>
    );
}

export default App;
