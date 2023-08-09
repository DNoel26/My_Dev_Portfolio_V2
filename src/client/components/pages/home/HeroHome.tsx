/** @format */

import { imgMeSitting } from '@@assets/images';
import Hero from '@@components/Hero';
import HeroImgContainer from '@@components/HeroImgContainer';

const HeroHome = () => {
    return <Hero ImgComponent={<HeroImgContainer imgSrc={imgMeSitting} />} />;
};

export default HeroHome;
