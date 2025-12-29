'use client';

import { motion } from 'framer-motion';
import { Users, Award, Mic, Code, Brain, Globe, HeartHandshake } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import SEO from '@/components/SEO';

const leadershipData = [
	{
		role: "Lead Technical Instructor (MERN)",
		organization: "iCodeGuru",
		date: "Jan 2025 - Present",
		icon: <Users className="w-6 h-6 text-blue-400" />,
		description: "Orchestrated and delivered a comprehensive MERN Stack curriculum. Facilitated knowledge transfer to a diverse cohort of students, overseeing the transition from theoretical programming fundamentals to full-scale project deployment.",
		impact: ["Mentored 15+ Students", "Curriculum Development", "Code Review Sessions"]
	},
	{
		role: "Hackathon Team Lead (International)",
		organization: "Lablab.ai",
		date: "2024",
		icon: <Globe className="w-6 h-6 text-purple-400" />,
		description: "Led cross-functional, remote teams in global AI hackathons. Managed the end-to-end development of full-stack applications integrating React Native with OpenAI APIs, ensuring timely delivery under rigorous competitive constraints.",
		impact: ["Team Management", "Agile Workflow", "AI Integration"]
	},
	{
		role: "Peer Mentor & Community Builder",
		organization: "Local Tech Community",
		date: "2023 - Present",
		icon: <HeartHandshake className="w-6 h-6 text-green-400" />,
		description: "Provided 1-on-1 technical guidance to junior developers on Software Architecture, Clean Code principles, and efficient project structuring. Contributed to local tech communities by organizing meetups focused on modern JavaScript ecosystems.",
		impact: ["1-on-1 Coaching", "Clean Code Advocacy", "Career Guidance"]
	},
	{
		role: "Academic Representative",
		organization: "GC University Faisalabad",
		date: "2021 - Present",
		icon: <Mic className="w-6 h-6 text-yellow-400" />,
		description: "Actively participated in university seminars, promoting the adoption of modern web standards (Next.js, TypeScript) and industry best practices among the student body. Bridged the gap between academic curriculum and market requirements.",
		impact: ["Public Speaking", "Curriculum Feedback", "Student Advocacy"]
	},
	{
		role: "Technical Researcher (Automation)",
		organization: "Independent",
		date: "Ongoing",
		icon: <Brain className="w-6 h-6 text-red-400" />,
		description: "Conducting independent research on backend automation tools like n8n and developing custom Python scripts to optimize development workflows. Exploring the intersection of Distributed Systems and automated DevOps pipelines.",
		impact: ["Workflow Optimization", "Python Scripting", "R&D"]
	}
];

const Leadership = () => {
	return (
		<>
			<SEO
				title="Leadership & Community - Ammar Shahbaz"
				description="Ammar Shahbaz's leadership roles: Lead Instructor at iCodeGuru, Lablab.ai Hackathon Team Lead, and Academic Mentor. Demonstrating social competence for German university admission."
				canonicalUrl="https://ammardev.com/leadership"
			/>
			<div className="min-h-screen pt-20 px-4 max-w-5xl mx-auto pb-20">
				<ScrollAnimation>
					<div className="mb-12">
						<motion.div
							className="flex items-center gap-3 mb-4"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<Award className="w-8 h-8 text-white" />
							<h2 className="text-4xl font-bold gradient-text">Leadership & Impact</h2>
						</motion.div>
						<p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
							Beyond technical engineering, I am committed to knowledge sharing and community leadership.
							These experiences demonstrate my ability to communicate complex concepts and manage teams—skills I aim to bring to the German academic environment.
						</p>
					</div>
				</ScrollAnimation>

				<div className="grid gap-6">
					{leadershipData.map((item, index) => (
						<ScrollAnimation key={item.role}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="bg-gray-800/40 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all group"
							>
								<div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
									{/* Icon Box */}
									<div className="p-3 bg-white/5 rounded-lg w-fit h-fit mt-1 group-hover:bg-white/10 transition-colors">
										{item.icon}
									</div>

									{/* Content */}
									<div className="flex-1">
										<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
											<h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
												{item.role}
											</h3>
											<span className="text-sm font-mono text-gray-500 mt-1 sm:mt-0 bg-white/5 px-2 py-1 rounded">
												{item.date}
											</span>
										</div>

										<div className="text-sm text-blue-300 font-medium mb-3">
											{item.organization}
										</div>

										<p className="text-gray-300 leading-relaxed mb-5 text-sm sm:text-base">
											{item.description}
										</p>

										{/* Impact Tags */}
										<div className="flex flex-wrap gap-2">
											{item.impact.map((tag) => (
												<span
													key={tag}
													className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-full border border-white/5 group-hover:border-white/20 transition-colors"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>
							</motion.div>
						</ScrollAnimation>
					))}
				</div>
			</div>
		</>
	);
};

export default Leadership;