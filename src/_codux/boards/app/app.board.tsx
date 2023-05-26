import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowHeight: 567,
        windowWidth: 698,
        canvasBackgroundColor: '#000000',
        windowBackgroundColor: '#ffffff',
    },
});
