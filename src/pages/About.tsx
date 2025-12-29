'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Award, Users, Globe, BookOpen, Terminal } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import SEO from '@/components/SEO';

const About = () => {
	const achievements = [
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "3+ Years Exp.",
			description: "Industrial experience in Full-Stack & System Design"
		},
		{
			icon: <Users className="w-6 h-6" />,
			title: "15+ Mentored",
			description: "Guided students through SDLC & MERN architecture"
		},
		{
			icon: <Award className="w-6 h-6" />,
			title: "88.5% in FSc",
			description: "Strong foundation in Mathematics & Physics"
		}
	];

	const interests = [
		"System Architecture",
		"Distributed Systems",
		"Software Engineering Research",
		"Scalable Web Solutions",
		"Cloud Infrastructure",
		"Algorithm Optimization"
	];

	return (
		<>
			<SEO
				title="About Ammar Shahbaz - Software Engineer & Master's Aspirant"
				description="Explore the journey of Ammar Shahbaz, a Software Engineer with 3+ years of experience. Currently pursuing a Master's in Germany to specialize in advanced system architecture."
				canonicalUrl="https://ammardev.com/about"
			/>
			<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
				<ScrollAnimation>
					<motion.h2 className="text-4xl font-bold mb-8 gradient-text">
						The Engineering Journey
					</motion.h2>
				</ScrollAnimation>

				<div className="grid md:grid-cols-2 gap-8">
					<ScrollAnimation>
						<div className="aspect-square overflow-hidden rounded-2xl border border-white/10">
							<img
								src="/profile/ammar.png"
								alt="Ammar Shahbaz - Software Engineer"
								className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
							/>
						</div>
					</ScrollAnimation>

					<ScrollAnimation className="space-y-6">
						<div className="space-y-4">
							<p className="text-gray-300 leading-relaxed">
								I am a Software Engineer based in Pakistan, currently at the intersection of professional industry application and advanced academic exploration. My journey in technology began with a fascination for how scalable systems are architected to handle real-world complexity.
							</p>
							<p className="text-gray-300 leading-relaxed">
								Over the past 3 years, I have not only built end-to-end digital solutions for international clients but also served as a Lead Instructor, mentoring over 15 students in modern engineering practices. This dual role has sharpened my ability to translate complex theoretical concepts into high-performance code.
							</p>
							<p className="text-gray-300 leading-relaxed font-medium text-white">
								Currently completing my Bachelor’s at GC University Faisalabad, my objective is to pursue a Master’s degree in Germany. I am eager to bridge the gap between my practical full-stack expertise and advanced computational theories within Germany’s world-class research ecosystem.
							</p>
						</div>

						<ScrollAnimation>
							<div className="pt-4">
								<h3 className="text-2xl font-semibold mb-4 gradient-text">Academic & Professional Base</h3>
								<ul className="list-none space-y-3">
									{[
										"Based in Faisalabad, Pakistan (Seeking Master's in Germany)",
										"BSE @ GC University Faisalabad (Specializing in Software Development)",
										"88.5% Pre-Engineering - Strong quantitative background",
										"Active Lead Instructor at iCodeGuru & Voltic Inc."
									].map((fact) => (
										<motion.li
											key={fact}
											className="flex items-center space-x-2 text-gray-300"
										>
											<span className="w-2 h-2 bg-white rounded-full" />
											<span className="text-sm sm:text-base">{fact}</span>
										</motion.li>
									))}
								</ul>
							</div>
						</ScrollAnimation>

						<ScrollAnimation>
							<div className="flex justify-start space-x-4">
								<a
									href="/files/cv_pdf/Ammar Shahbaz.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
								>
									<Terminal className="w-4 h-4" />
									Academic CV
								</a>
								<a
									href="/projects"
									className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
								>
									Technical Projects
								</a>
							</div>
						</ScrollAnimation>
					</ScrollAnimation>
				</div>

				<ScrollAnimation>
					<div className="mt-16">
						<h3 className="text-2xl font-semibold mb-8 gradient-text">Core Competencies</h3>
						<div className="grid md:grid-cols-3 gap-6">
							{achievements.map((achievement) => (
								<ScrollAnimation key={achievement.title}>
									<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/20 transition-colors">
										<div className="text-white mb-4">{achievement.icon}</div>
										<h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
										<p className="text-gray-400 text-sm">{achievement.description}</p>
									</div>
								</ScrollAnimation>
							))}
						</div>
					</div>
				</ScrollAnimation>

				<ScrollAnimation>
					<div className="mt-16">
						<h3 className="text-2xl font-semibold mb-8 gradient-text">Research & Technical Interests</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							{interests.map((interest) => (
								<ScrollAnimation key={interest}>
									<div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3 border border-white/5">
										<BookOpen className="w-5 h-5 text-gray-400" />
										<span className="text-gray-300 text-sm">{interest}</span>
									</div>
								</ScrollAnimation>
							))}
						</div>
					</div>
				</ScrollAnimation>
			</div>
		</>
	);
};

export default About;