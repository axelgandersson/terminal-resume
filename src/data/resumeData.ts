export const resumeData = {
	name: "Axel Santana",
	title: "Jr Software Engineer",
	location: "Malmö, Sweden",
	email: "axel@santana.se",

	about: [
		"I've always been drawn to understanding how things work — especially",
		"digital tools and technology. That curiosity eventually led me to",
		"web development, where I enjoy combining logic, creativity, and",
		"problem-solving.",
		"",
		"Before moving into tech, I spent ten years working in professional",
		"kitchens. That experience shaped how I approach challenges: staying",
		"calm under pressure, paying attention to details, and working closely",
		"with others. Over time, I also had the opportunity to build and",
		"support teams, which taught me a lot about collaboration,",
		"responsibility, and communication.",
		"",
		"I prefer learning by doing, which is why I spend much of my time",
		"building projects, experimenting with ideas, and continuously",
		"improving what I create. I enjoy the process of refining things —",
		"whether it's code, workflows, or systems.",
		"",
		"Outside of work, I enjoy cooking, rock climbing, traveling to new",
		"places, and seeking out small adventures. I spend a lot of my free",
		"time exploring with my dog and my wife, which keeps me curious,",
		"active, and inspired.",
		"",
		"I'm motivated by learning, progress, and the satisfaction of making",
		"things work better than they did before.",
	],

	experience: [
		{
			company: "Tetra Pak",
			role: "Intern",
			period: "Autum/Winter 2025",
			location: "Lund, Sweden",
			bullets: [
				"Implemented new changes to internal systems used by technicians",
				"Solved front end bugs and improved code for faster front end response times",
				"Worked with a mixed local and remote team in Scrum methodology",
			],
		},
		{
			company: "TechCorp",
			role: "Software Engineer",
			period: "",
			location: "",
			bullets: ["Placeholder for my next internship / job"],
		},
	],

	education: [
		{
			institution: "YH Borås",
			degree: "FrontEndDev-React",
			period: "2024-2026",
			details: [""],
		},
		{
			institution: "Hack The Box & TryHackMe",
			degree: "Self-directed Cybersecurity Training",
			period: "2025 — Ongoing",
			details: [
				"Top 1% global ranking on Hack The Box",
				"CEH (Certified Ethical Hacker) — 2022",
			],
		},
	],

	skills: {
		languages: ["TypeScript", "React", "Python", "C", "Bash", "SQL"],
		frontend: ["React", "Next.js", "Tailwind CSS", "WebAssembly"],
		backend: ["Node.js", "Go Fiber", "FastAPI", "PostgreSQL", "Redis", "Kafka"],
		devops: [
			"Docker",
			"Kubernetes",
			"Terraform",
			"AWS",
			"GCP",
			"GitHub Actions",
		],
		tools: ["Neovim", "tmux", "Git", "Wireshark", "Nmap", "Burp Suite"],
	},

	links: [
		{ label: "GitHub", url: "https://github.com/alexmercer", icon: "gh" },
		{
			label: "LinkedIn",
			url: "https://linkedin.com/in/alexmercer",
			icon: "li",
		},
		{ label: "Blog", url: "https://alexmercer.dev/blog", icon: "bl" },
		{ label: "Email", url: "mailto:alex.mercer@dev.io", icon: "em" },
		{ label: "Twitter / X", url: "https://x.com/alexmercer_dev", icon: "tw" },
	],
};

export type ResumeData = typeof resumeData;
