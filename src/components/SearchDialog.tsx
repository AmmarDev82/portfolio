'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Command, ArrowRight } from 'lucide-react';

const searchData = [
	{
		title: 'Home',
		description: 'Welcome to Ammar\'s engineering portfolio',
		path: '/',
		keywords: ['home', 'cv', 'resume', 'start', 'welcome', 'portfolio', 'ammar', 'ammar shahbaz', 'software engineer', 'faisalabad', 'pakistan', 'germany aspirant']
	},
	{
		title: 'About',
		description: 'Industrial journey and academic transition to Germany',
		path: '/about',
		keywords: ['about', 'background', 'bio', 'profile', 'motivation', 'research interests', 'ammar shahbaz', 'software engineering', 'germany masters']
	},
	{
		title: 'Education',
		description: 'Academic background (GCUF & Pre-Engineering)',
		path: '/education',
		keywords: ['education', 'university', 'college', 'gcuf', 'gc university faisalabad', 'punjab college', 'fsc', 'matric', 'software engineering degree', '88.5%', 'mathematics']
	},
	{
		title: 'Experience',
		description: 'Industrial software engineering & mentorship roles',
		path: '/experience',
		keywords: ['experience', 'work', 'career', 'professional', 'working student', 'part-time', 'voltic', 'icodeguru', 'codevpk', 'mern stack instructor']
	},
	{
		title: 'Skills',
		description: 'Technical expertise in system design & full-stack',
		path: '/skills',
		keywords: ['skills', 'technologies', 'programming', 'architecture', 'system design', 'react', 'node', 'next.js', 'typescript', 'python', 'postgresql', 'mongodb']
	},
	{
		title: 'Projects',
		description: 'Portfolio of industrial systems and applications',
		path: '/projects',
		keywords: ['projects', 'portfolio', 'work', 'klickstock', 'seeraht', 'pumpv2', 'erp', 'pos', 'marketplaces', 'enterprise dashboard']
	},
	{
		title: 'Leadership',
		description: 'Mentorship at iCodeGuru and community involvement',
		path: '/leadership',
		keywords: ['leadership', 'mentorship', 'icodeguru', 'teaching', 'hackathon', 'lablab.ai', 'community', 'volunteering', 'instructor']
	},
	{
		title: 'Contact',
		description: 'Connect for academic or professional inquiries',
		path: '/contact',
		keywords: ['contact', 'email', 'faisalabad', 'pakistan', 'linkedin', 'whatsapp', 'connect', 'collaboration', 'research inquiry']
	}
];

const SearchDialog = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [results, setResults] = useState(searchData);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const router = useRouter();

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				setIsOpen(prev => !prev);
			}

			if (!isOpen) return;

			if (e.key === 'Escape') {
				setIsOpen(false);
			}

			if (e.key === 'ArrowDown') {
				e.preventDefault();
				setSelectedIndex(prev => (prev + 1) % results.length);
			}
			if (e.key === 'ArrowUp') {
				e.preventDefault();
				setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
			}

			if (e.key === 'Enter' && results.length > 0) {
				e.preventDefault();
				router.push(results[selectedIndex].path);
				setIsOpen(false);
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, results, selectedIndex, router]);

	useEffect(() => {
		if (searchQuery) {
			const filtered = searchData.filter(item => {
				const searchLower = searchQuery.toLowerCase();
				return (
					item.title.toLowerCase().includes(searchLower) ||
					item.description.toLowerCase().includes(searchLower) ||
					item.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
				);
			});
			setResults(filtered);
			setSelectedIndex(0);
		} else {
			setResults(searchData);
		}
	}, [searchQuery]);

	if (!isOpen) {
		return (
			<button
				onClick={() => setIsOpen(true)}
				className="flex items-center space-x-2 px-3 py-1.5 text-gray-400 hover:text-white transition-colors bg-white/15 rounded-lg hover:bg-white/10"
			>
				<Search className="w-4 h-4" />
				<span className="text-sm hidden sm:block">Search Ammar's Portfolio...</span>
				<span className="hidden md:flex items-center space-x-1 px-1.5 py-0.5 text-xs bg-white/10 rounded">
					<Command className="w-3 h-3" />
					<span>K</span>
				</span>
			</button>
		);
	}

	return (
		<div className="fixed inset-0 z-50 overflow-y-auto">
			<div className="min-h-screen px-4 text-center">
				<div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)} />

				<div className="inline-block w-full max-w-2xl mt-24 text-left align-middle transition-all transform">
					<div className="relative bg-gray-900 rounded-xl shadow-2xl border border-white/10">
						<div className="flex items-center px-4 border-b border-white/10">
							<Search className="w-5 h-5 text-gray-400" />
							<input
								type="text"
								placeholder="Search pages, tech, or education..."
								className="w-full px-4 py-4 text-white bg-transparent border-0 focus:outline-none focus:ring-0"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								autoFocus
							/>
							<div className="flex items-center space-x-1 px-1.5 py-0.5 text-xs text-gray-400 bg-white/10 rounded">
								<span>Esc</span>
							</div>
						</div>

						<div className="max-h-[60vh] overflow-y-auto">
							{results.length === 0 ? (
								<div className="p-4 text-sm text-gray-400">
									No matching results found.
								</div>
							) : (
								<div className="py-2">
									{results.map((result, index) => (
										<button
											key={result.path}
											className={`w-full px-4 py-3 text-left hover:bg-white/5 flex items-center justify-between ${index === selectedIndex ? 'bg-white/10' : ''
												}`}
											onClick={() => {
												router.push(result.path);
												setIsOpen(false);
											}}
										>
											<div>
												<div className="text-white font-medium">{result.title}</div>
												<div className="text-sm text-gray-400">{result.description}</div>
											</div>
											<ArrowRight className={`w-4 h-4 text-gray-400 ${index === selectedIndex ? 'opacity-100' : 'opacity-0'
												}`} />
										</button>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchDialog;