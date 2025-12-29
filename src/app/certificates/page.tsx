import Certificates from '@/pages/Certificates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Certificates - Ammar Shahbaz Abdallah Kato',
	description: 'View Ammar Shahbaz Abdallah Kato\'s certifications and achievements in web development, programming, and other technical skills.',
};

export default function CertificatesPage() {
	return <Certificates />;
}