import { useEffect } from "react";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

const overscrollOptions = {
    enable: true,
    effect: 'bounce',
    damping: 0.15,
    maxOverscroll: 150
}

const options = {
    damping: 0.5,
    alwaysShowTracks: true,
    thumbMinSize: 2,
    Plugins: {
        overscroll: {...overscrollOptions}
    }
}

const Scroll = () => {

    Scrollbar.use(OverscrollPlugin)
    useEffect(() => {
        Scrollbar.init(document.body, options);
    }, []);

    return null;
}

export default Scroll;