import { createBoard } from '@wixc3/react-board';
import { Projects } from '../../../components/projects/projects';

export default createBoard({
    name: 'Projects',
    Board: () => <Projects className="H1" />,
    environmentProps: {
        canvasWidth: 760,
        windowWidth: 812,
        windowHeight: 667,
    },
});
