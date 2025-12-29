'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Cpu, Database, Layout, Code2Icon } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import SEO from '@/components/SEO';

const projects = [
	{
		title: 'KlickStock – Photo Gallery Marketplace',
		description: 'A full-scale digital asset marketplace architected for creators. Implemented advanced search algorithms and optimized content delivery networks (CDN) for high-performance image licensing and accessibility.',
		live: 'https://www.klickstock.com/',
		icon: <Layout className="w-6 h-6 text-blue-400" />,
		tags: ["Next.js", "MongoDB", "Tailwind CSS", "System Design"]
	},
	{
		title: 'Seeraht – Educational ERP System',
		description: 'Developed a comprehensive School Management System featuring complex Role-Based Access Control (RBAC). Integrated automated financial billing modules and real-time administrative dashboards.',
		live: 'https://seeraht.school/',
		icon: <Database className="w-6 h-6 text-green-400" />,
		tags: ["React.js", "Firebase", "NoSQL", "ERP Architecture"]
	},
	{
		title: 'PumpV2 – Industrial Management POS',
		description: 'An end-to-end industrial solution for petrol stations. Designed the backend logic to handle concurrent sales transactions, real-time inventory tracking, and automated stock reporting.',
		live: 'https://pumpv2.vercel.app/',
		icon: <Cpu className="w-6 h-6 text-purple-400" />,
		tags: ["MERN Stack", "Express.js", "Inventory Logic", "Node.js"]
	},
	{
		title: 'Pivott – Enterprise Analytics Dashboard',
		description: 'Built a data-driven business dashboard focused on service analytics. Optimized frontend rendering for large enterprise datasets and implemented clean KPI visualization components.',
		live: 'http://pivott.com/',
		icon: <Terminal className="w-6 h-6 text-yellow-400" />,
		tags: ["React.js", "Data Visualization", "RESTful APIs", "Chart.js"]
	},
	{
		title: 'Codevpk – Dynamic Corporate Portfolio',
		description: 'Architected a modern software house portfolio with dynamic CMS integration. Focused on scalable frontend architecture and seamless user experience for high-traffic corporate blogs.',
		live: 'https://codevpk.com/',
		icon: <Code2Icon className="w-6 h-6 text-red-400" />,
		tags: ["React.js", "CMS Integration", "Frontend Engineering"]
	}
];

const Projects = () => {
	return (
		<>
			<SEO
				title="Engineering Projects - Ammar Shahbaz"
				description="Technical portfolio of Ammar Shahbaz, featuring industrial ERP systems, marketplaces, and enterprise analytics solutions built with modern engineering principles."
				canonicalUrl="https://ammardev.com/projects"
			/>
			<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
				<ScrollAnimation>
					<div className="mb-12">
						<h2 className="text-4xl font-bold gradient-text mb-4">Technical Portfolio</h2>
						<p className="text-gray-400 max-w-2xl italic">
							A selection of industrial applications and software systems focusing on scalability,
							modular architecture, and solving complex business logic challenges.
						</p>
					</div>
				</ScrollAnimation>

				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<ScrollAnimation key={project.title}>
							<div className="group bg-gray-800/40 border border-white/5 p-8 rounded-2xl backdrop-blur-sm hover:border-white/20 transition-all duration-300 flex flex-col h-full">
								<div className="flex items-center justify-between mb-6">
									<div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
										{project.icon}
									</div>
									<a
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 text-gray-400 hover:text-white transition-colors"
										title="View Project"
									>
										<ExternalLink className="w-5 h-5" />
									</a>
								</div>

								<h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
									{project.title}
								</h3>

								<p className="text-gray-400 mb-6 leading-relaxed flex-grow text-sm sm:text-base">
									{project.description}
								</p>

								<div className="mt-auto pt-6 border-t border-white/5">
									<div className="flex flex-wrap gap-2">
										{project.tags.map(tag => (
											<span
												key={tag}
												className="px-3 py-1 text-xs font-mono bg-white/5 text-gray-300 rounded-full border border-white/10"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</ScrollAnimation>
					))}
				</div>

				<ScrollAnimation>
					<div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/5 text-center">
						<h3 className="text-xl font-semibold mb-2 text-white">Academic Projects & Research</h3>
						<p className="text-gray-400 text-sm max-w-xl mx-auto">
							For more detailed documentation regarding my Bachelor’s Thesis or deep-dive system architecture diagrams, please refer to my official Academic CV.
						</p>
					</div>
				</ScrollAnimation>
			</div>
		</>
	);
};

// Simple icon fallback if Code2 isn't imported
const Code2 = ({ className }: { className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
);

export default Projects;