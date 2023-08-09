/** @format */

import AboutOverview from '@@components/pages/AboutOverview';
import HeroHome from '@@components/pages/home/HeroHome';
import ProfessionalOverview from '@@components/pages/home/ProfessionalOverview';
import ServicesOverview from '@@components/pages/home/ServicesOverview';
import TechOverview from '@@components/pages/home/TechOverview';

export default function HomePage() {
    return (
        <>
            <HeroHome />
            <AboutOverview />
            <ProfessionalOverview />
            <ServicesOverview />
            <TechOverview />
        </>
    );
}
