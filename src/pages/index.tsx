/** @format */

import AboutOverview from '@@components/pages/home/AboutOverview';
import HeroHome from '@@components/pages/home/HeroHome';
import ProfessionalOverview from '@@components/pages/home/ProfessionalOverview';
import dynamic from 'next/dynamic';

// TODO: add fallback component
const DynamicServicesOverview = dynamic(
    () => import('@@components/pages/home/ServicesOverview'),
    {
        loading: () => <p>Loading...</p>,
    },
);
const DynamicTechOverview = dynamic(
    () => import('@@components/pages/home/TechOverview'),
    {
        loading: () => <p>Loading...</p>,
    },
);
const DynamicProjectsOverview = dynamic(
    () => import('@@components/pages/home/ProjectsOverview'),
    {
        loading: () => <p>Loading...</p>,
    },
);

export default function HomePage() {
    return (
        <>
            <HeroHome />
            <AboutOverview />
            <ProfessionalOverview />
            <DynamicServicesOverview />
            <DynamicTechOverview />
            <DynamicProjectsOverview />
        </>
    );
}
