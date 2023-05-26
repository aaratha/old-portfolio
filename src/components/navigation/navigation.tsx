import styles from './navigation.module.scss';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link, MemoryRouter, Routes, Route } from 'react-router-dom';
import { Projects } from '../projects/projects';
import { Home } from '../home';
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
    return (
        <div className='flex'>
            <h1 className='flex text-white'>Aseem Ratha</h1>
            <nav className='flex'>
                <Link to="/">
                    <button className={styles.nav_buttons}>Home</button>
                </Link>
                <Link to="/projects">
                    <button className={styles.nav_buttons}>Projects</button>
                </Link>
                <Link to="/contact">
                    <button className={styles.nav_buttons}>Contact</button>
                </Link>
            </nav>
        </div>
    );
};
