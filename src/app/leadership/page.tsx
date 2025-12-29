import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Experience - Ammar Shahbaz Abdallah Kato',
	description: 'Ammar Shahbaz Abdallah Kato\'s professional experience as a Software Developer, including projects and technical expertise.',
};

export default function ExperiencePage() {
	return <Experience />;
}