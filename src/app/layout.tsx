import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import SEO from '@/components/SEO';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const metadata: Metadata = {
	title: 'Ammar Shahbaz - Software Engineer & Full Stack Specialist',
	description: 'Software Engineer with 3+ years of experience specializing in Full Stack Development (MERN, Next.js), System Architecture, and Scalable Web Solutions.',
	keywords: 'Ammar Shahbaz, Software Engineer, Full Stack Developer, MERN Stack Expert, Next.js Developer, TypeScript Specialist, React Native Developer, Node.js Expert, Pakistan Developer, Software Architecture, German Master Candidate',
	authors: [{ name: 'Ammar Shahbaz' }],
	creator: 'Ammar Shahbaz',
	manifest: '/manifest.json',
	themeColor: '#000000',
	viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://ammardev.com/',
		title: 'Ammar Shahbaz - Software Engineer & Full Stack Specialist',
		description: 'Dedicated Software Engineer exploring the intersection of industrial application and advanced computational theory.',
		siteName: 'Ammar Shahbaz Portfolio',
		images: [
			{
				url: '/og-image.jpg', // Ensure you have a professional OG image
				width: 1200,
				height: 630,
				alt: 'Ammar Shahbaz - Software Engineering Portfolio',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ammar Shahbaz - Software Engineer',
		description: '3+ years of experience in building scalable web and mobile applications.',
		creator: '@AmmarDev82', // Updated to match your GitHub handle style
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	metadataBase: new URL('https://ammardev.com'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/',
		},
	},
	verification: {
		google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Replace with your actual code
	},
	category: 'technology',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<GoogleAnalytics />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href="/manifest.json" />
				<meta httpEquiv="Content-Security-Policy" content="default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https: http:; font-src 'self' data: https:; connect-src 'self' data: blob: https:; worker-src 'self' blob: data:;" />
			</head>
			<body>
				<div className="min-h-screen flex flex-col">
					<Background3D />
					<Navbar />
					<main className="flex-grow">{children}</main>
					<Footer />
				</div>
				<SEO />
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}