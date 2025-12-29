import About from '@/pages/About'; // Ensure you update the content of this component as well
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Ammar Shahbaz - Software Engineer & Master\'s Aspirant',
	description: 'Explore the academic and professional journey of Ammar Shahbaz, a Software Engineer with 3+ years of experience in system architecture, now seeking to advance his research through a Master’s degree in Germany.',
	keywords: 'Ammar Shahbaz, Software Engineer, Software Engineering Germany, Master’s Candidate, GC University Faisalabad, System Design, Academic Research, Full Stack Engineering',
};

export default function AboutPage() {
	return <About />;
}