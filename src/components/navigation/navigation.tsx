import styles from './navigation.module.scss';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link, MemoryRouter, Routes, Route } from 'react-router-dom';
import { Projects } from '../projects/projects';
import { Home } from '../home/home';
import { ProjectsVis } from '../projects-vis/projects-vis';
import { ProjectsWeb } from '../projects-web/projects-web';
import { Contact } from '../contact/contact';

export interface NavigationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-navigations-and-templates
 */
export const Navigation = ({ className }: NavigationProps) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <MemoryRouter>
            <div className={classNames(styles.root, className)}>
                <h1 className={classNames('H1', styles.navheader)}>Aseem Ratha</h1>
                <nav className={styles.Navigation}>
                    <span className={styles.spans}>
                        <Link to="/">
                            <button className={styles.nav_buttons}>Home</button>
                        </Link>
                    </span>
                    <span className={classNames(styles.spans, styles.span2)}>
                        <Link to="/projects">
                            <button className={styles.nav_buttons}>Projects</button>
                        </Link>
                    </span>
                    <span className={classNames(styles.spans, styles.span3)}>
                        <Link to="/contact">
                            <button className={styles.nav_buttons}>Contact</button>
                        </Link>
                    </span>
                    {/* 
                    <span className={classNames(styles.spans, styles.span4)}>
                        <a href="/about">
                            <button className={styles.nav_buttons}>About</button>
                        </a>
                    </span>
                    */}
                </nav>
            </div>
            <div className={styles.nav_line} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects-vis" element={<ProjectsVis />} />
                <Route path="/projects-web" element={<ProjectsWeb />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </MemoryRouter>
    );
};
