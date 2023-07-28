/** @format */

import HeroHome from '@@components/pages/home/HeroHome';
import ProfessionalOverview from '@@components/pages/home/ProfessionalOverview';
import ServicesOverview from '@@components/pages/home/ServicesOverview';
import TechOverview from '@@components/pages/home/TechOverview';

export default function HomePage() {
    return (
        <>
            <HeroHome />
            <ProfessionalOverview />
            <ServicesOverview />
            <TechOverview />
        </>
    );
}
