'use client';

import Link from 'next/link';
import { Code2, Github, Linkedin, Mail, Phone, Users, Send, MessageSquare, Globe } from 'lucide-react';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const email = 'ammarshahbaz82@gmail.com';
	const whatsappNumber = '923068430259';

	const pageLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Education', path: '/education' },
		{ name: 'Experience', path: '/experience' },
		{ name: 'Skills', path: '/skills' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Leadership', path: '/leadership' },
		{ name: 'Contact', path: '/contact' },
	];

	// Split links into columns
	const column1 = pageLinks.slice(0, 3);
	const column2 = pageLinks.slice(3, 6);
	const column3 = pageLinks.slice(6, 8);

	return (
		<footer className="relative mt-24">
			<div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
					{/* Branding */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center space-x-3">
							<Code2 className="w-8 h-8 text-white" />
							<span className="text-xl font-bold text-white">Ammar Shahbaz</span>
						</Link>
						<p className="text-sm text-gray-400">
							Software Engineer based in Faisalabad, Pakistan. Focused on building scalable systems and pursuing advanced engineering research in Germany.
						</p>
					</div>

					{/* Contact */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Contact</h3>
						<ul className="space-y-3">
							<li>
								<a href={`mailto:${email}`} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
									<Mail className="w-4 h-4" />
									{email}
								</a>
							</li>
							<li>
								<a
									href="tel:+923068430259"
									className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
								>
									<Phone className="w-4 h-4" />
									+92 306 8430259
								</a>
							</li>
						</ul>
					</div>

					{/* Links */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Navigation</h3>
						<div className="grid grid-cols-3 gap-x-6 gap-y-3">
							<div>
								{column1.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>
							<div>
								{column2.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>
							<div>
								{column3.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>
						</div>
					</div>

					{/* Social */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Social Presence</h3>
						<div className="flex space-x-4">
							<a
								href="https://github.com/AmmarDev82"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
								title="GitHub"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href="https://www.linkedin.com/in/ammar-shahbaz-dev/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
								title="LinkedIn"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href={`https://wa.me/${whatsappNumber}`}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
								title="WhatsApp"
							>
								<Send className="w-5 h-5" />
							</a>
							<a
								href="https://ammardev.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
								title="Portfolio"
							>
								<Globe className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-white/10 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-gray-400">
							© {currentYear} Ammar Shahbaz. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
								<Code2 className="w-3 h-3" />
								Ammar's Engineering Portfolio
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;