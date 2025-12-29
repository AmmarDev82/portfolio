import Projects from '@/pages/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects - Ammar Shahbaz Abdallah Kato',
	description: 'View Ammar Shahbaz Abdallah Kato\'s portfolio of projects including web applications, mobile apps, and software solutions.',
};

export default function ProjectsPage() {
	return <Projects />;
}