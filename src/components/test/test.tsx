import styles from './test.module.scss';
import classNames from 'classnames';

export interface TestProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-tests-and-templates
 */
export const Test = ({ className }: TestProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
            Test
        </div>
    );
};
