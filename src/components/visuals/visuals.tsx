import styles from './visuals.module.scss';
import classNames from 'classnames';
import img1 from './PURPLE RED AND WHITE DC DELEGATE.png';
import img2 from './FFDC LOGO 2 - FONT 2 (1).png';
import img3 from './IMG_0026.jpg';
import img4 from './img4.png';
import img5 from './IMG_3971.jpg';

export interface VisualsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-visualss-and-templates
 */
export const Visuals = ({ className }: VisualsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles.Gallery}>
                <img src={img1} className={styles.images} />
                <img src={img2} className={styles.images} />
                <img src={img5} className={styles.images} />
                <img src={img4} className={styles.images} />
                <img src={img3} className={styles.images} />
            </span>
        </div>
    );
};
