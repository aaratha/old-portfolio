import { createBoard } from '@wixc3/react-board';
import { Visuals } from '../../../components/visuals/visuals';

export default createBoard({
    name: 'Visuals',
    Board: () => <Visuals />,
    environmentProps: {
        canvasHeight: 25,
        canvasWidth: 2202,
        windowWidth: 580,
    },
});
