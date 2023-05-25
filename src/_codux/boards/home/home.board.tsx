import { createBoard } from '@wixc3/react-board';
import { Home } from '../../../components/home/home';

export default createBoard({
    name: 'Home',
    Board: () => <Home />,
    environmentProps: {
        windowBackgroundColor: '#000000',
        canvasWidth: 700,
        windowWidth: 566,
        canvasHeight: 920,
    },
});
