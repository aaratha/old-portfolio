import { createBoard } from '@wixc3/react-board';
import { Websites } from '../../../components/websites/websites';

export default createBoard({
    name: 'Websites',
    Board: () => <Websites />,
    environmentProps: {
        canvasWidth: 836,
        canvasHeight: 582,
    },
});
