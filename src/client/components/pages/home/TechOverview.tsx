/** @format */

import BannerTools from '@@components/BannerTools';
import Heading from '@@components/ui/Heading';
import { ANCHOR_TAG } from '@@lib/constants';
import styles from './TechOverview.module.scss';

const TechOverview = () => {
    return (
        <section className={styles.overview}>
            <Heading
                id={ANCHOR_TAG.HOME_PAGE.SKILLS}
                subHeading='Developer Skills'
                heading='Tools and Technologies'
            />
            <BannerTools className={styles.overview__banner} />
        </section>
    );
};

export default TechOverview;
