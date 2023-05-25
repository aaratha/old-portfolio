import { createBoard } from '@wixc3/react-board';
import { Navigation } from '../../components/navigation/navigation';
import Navigation_module from '../../components/navigation/navigation.module.scss';

export default createBoard({
    name: 'Projects',
    Board: () => (
        <div>
            <Navigation />
            <h1 className="H1">Projects</h1>
            <span>
                <iframe
                    width="742"
                    height="315"
                    src="https://www.youtube.com/embed/TBMEBSfnJbQ"
                    title="knox om pax"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="742"
                    height="557"
                    src="https://www.youtube.com/embed/TybreaCetEA"
                    title="dreary times (remastered)"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                text
                <br />
            </span>
        </div>
    ),
    environmentProps: {
        windowBackgroundColor: '#000000',
        canvasWidth: 510,
        windowWidth: 516,
    },
});
