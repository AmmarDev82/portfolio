import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Ammar Shahbaz Abdallah Kato',
	description: 'Get in touch with Ammar Shahbaz Abdallah Kato, a Software Developer specializing in full-stack development.',
};

export default function ContactPage() {
	return <Contact />;
}