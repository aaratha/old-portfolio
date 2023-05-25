import { createBoard } from '@wixc3/react-board';
import { Navigation } from '../../../components/navigation/navigation';

export default createBoard({
    name: 'Navigation',
    Board: () => <Navigation />,
    environmentProps: {
        canvasHeight: 251,
        canvasWidth: 748,
        windowWidth: 884,
        canvasBackgroundColor: '#000000',
        windowBackgroundColor: '#000000',
    },
});
