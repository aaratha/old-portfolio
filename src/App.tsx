import { Routes, Route, MemoryRouter, Router, BrowserRouter, Navigate } from 'react-router-dom';
import { Home } from './components/home';
import { Sidebar } from './components/sidebar';
import { Videos } from './components/projects/videos';
import { Websites } from './components/projects/websites';
import { Visuals } from './components/projects/visuals';
import { Contact } from './components/contact';
import { Projects } from './components/projects';

function App() {
    return (
        <MemoryRouter>
            <script src="https://www.youtube.com/iframe_api"></script>
            <div className="text-primary flex flex-col md:flex-row font-nice-600 z-[2]">
                <Sidebar />
                <div className="inshad transition-shadow flex md:w-[85%] h-[88vh] md:h-screen bg-white body">
                    <div className='z-[1] flex m-auto w-full h-full'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Navigate to="/projects/videos" />} />
                            <Route path="/projects/" element={<Projects />}>
                                <Route path="/projects/videos" element={<Videos />} />
                                <Route path="/projects/visuals" element={<Visuals />} />
                                <Route path="/projects/websites" element={<Websites />} />
                            </Route>
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                    <iframe
                            className="flex object-contain absolute translate-y-[-7vh] md:translate-y-0 top-[12vh] md:top-0 w-[220vw] md:w-[150vw] xl:w-[106vw] h-[100%] z-[0] overflow-hidden"
                            src="https://www.youtube.com/embed/TBMEBSfnJbQ?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=1&end=51&start=5&playlist=TBMEBSfnJbQ"
                            allow="autoplay; encrypted-media;"
                    ></iframe>
                </div>
            </div>
        </MemoryRouter>
    );
}

export default App;
