import { createBoard } from '@wixc3/react-board';
import { Videos } from '../../../components/videos/videosOLD';

export default createBoard({
    name: 'Videos',
    Board: () => <Videos />,
    environmentProps: {
        canvasWidth: 1126,
    },
});
