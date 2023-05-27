import { Websites } from '../websites/websites';
import styles from './projects-web.module.scss';
import classNames from 'classnames';
import { Link, MemoryRouter, Routes, Route } from 'react-router-dom';

export interface ProjectsWebProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-projectss-and-templates
 */
export const ProjectsWeb = ({ className }: ProjectsWebProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={classNames('H1', styles.ProjectsLabel)}>Projects</h1>
            <div className={styles.button_array}>
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                    <button className={classNames(styles.linkButton, styles.projButtons)}>
                        Videos
                    </button>
                </Link>
                <Link to="/projects-vis" style={{ textDecoration: 'none' }}>
                    <button className={classNames(styles.projButtons, styles.linkButton)}>
                        Visuals
                    </button>
                </Link>
                <Link to="/projects-web" style={{ textDecoration: 'none' }}>
                    <button
                        className={classNames(styles.projButtons, styles.linkButton, styles.active)}
                    >
                        Websites
                    </button>
                </Link>
            </div>
            <span className={styles.projectPane}>
                <Routes>
                    <Route path="/" element={<Websites />} />
                </Routes>
            </span>
        </div>
    );
};
