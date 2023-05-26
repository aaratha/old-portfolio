import styles from './videos.module.scss';
import classNames from 'classnames';

export interface VideosProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-videoss-and-templates
 */
export const Videos = ({ className }: VideosProps) => {
    return <div className={classNames(styles.root, className)}>
        <span className={styles.Gallery}>
                <iframe
                    width="90%"
                    src="https://www.youtube.com/embed/TBMEBSfnJbQ"
                    title="knox om pax"
                    frameBorder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={styles.iframe}
                ></iframe>
                <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/TybreaCetEA"
                    title="dreary times (remastered)"
                    frameBorder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={classNames(styles.iframe, styles.iframe2)}
                ></iframe>
                <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/OcpRc_LU-e0"
                    title="2814"
                    frameBorder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={styles.iframe}
                ></iframe>
                <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/buUa9jiD9os"
                    title="my superstition"
                    frameBorder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={classNames(styles.iframe, styles.iframe2)}
                ></iframe>
                <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/GSU93sFdRls"
                    title="3 months in"
                    frameBorder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={classNames(styles.iframe, styles.iframe2)}
                ></iframe>
            </span>
    </div>;
};
