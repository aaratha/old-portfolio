import styles from './home.module.scss';
import classNames from 'classnames';
import { Link, MemoryRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Projects } from '../projects/projects';

export interface HomeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-homes-and-templates
 
                <Link to="/projects">
                    <button className={styles.nav_buttons}>Explore Projects</button>
                </Link>
*/
export const Home = ({ className }: HomeProps) => {
    return (
        <div className={classNames(styles.root, className, styles.homeAll)}>
            <header className={classNames(styles['App-header'], 'H1', styles.homeBox)}>
                <h1 className={styles.H1}>Aseem Ratha</h1>
                <p className={styles.root}>Washington D.C. / Toronto</p>
                <Link to="/projects">
                    <button className={styles.nav_buttons}>Explore Projects</button>
                </Link>
            </header>
        </div>
    );
};
