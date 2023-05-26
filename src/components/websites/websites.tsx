import styles from './websites.module.scss';
import classNames from 'classnames';
import img1 from './image.png';
import img2 from './image2.png';

export interface WebsitesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-websitess-and-templates
 */
export const Websites = ({ className }: WebsitesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.root, className)}>
                <span className={styles.Gallery}>
                    <a href="https://www.wec.education/home-copy">
                        <div className={styles.card}>
                            <img src={img1} className={styles.images} />
                            <p className={styles.p}>Weinstein Educational Consulting</p>
                        </div>
                    </a>
                    <a href="https://aaratha.github.io">
                        <div className={styles.card}>
                            <img src={img2} className={styles.images} />
                            <p className={styles.p}>Personal Portfolio Website</p>
                        </div>
                    </a>
                </span>
            </div>
        </div>
    );
};
