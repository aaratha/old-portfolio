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
            <div className="flex flex-col md:flex-row font-nice-600">
                <Sidebar />
                <div className="inshad transition-shadow flex md:w-[85%] h-[88vh] md:h-screen bg-white body">
                    <div className='z-[1] flex m-auto'>
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
                    <iframe
                            className="absolute w-[85%] h-screen z-[0]"
                            src="https://www.youtube.com/embed/TBMEBSfnJbQ?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=2&controls=0&end=51&start=5"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
            </div>
        </MemoryRouter>
    );
}

export default App;
