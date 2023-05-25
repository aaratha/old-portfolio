import styles from './contact.module.scss';
import classNames from 'classnames';
import icon1 from './icons8-instagram.svg';
import icon2 from './mail-2-svgrepo-com.svg';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-contacts-and-templates
 */
export const Contact = ({ className }: ContactProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.Heading}>Contact</h1>
            <li className={styles.socials}>
                <a href="https://www.instagram.com/aa.ratha/" style={{ textDecoration: 'none' , color: 'white'}}>
                    <div className={styles.social}>
                        <img src={icon1} className={styles.icons} />
                        @aa.ratha
                    </div>
                </a>
                <a href= "mailto:aseemratha@gmail.com" style={{ textDecoration: 'none',  color: 'white'}}>
                    <div className={styles.social}>
                        <img src={icon2} className={classNames(styles.icons, styles.icon2)} />
                        aseemratha@gmail.com
                    </div>
                </a>
            </li>
            <span className={styles.socials}></span>
        </div>
    );
};
