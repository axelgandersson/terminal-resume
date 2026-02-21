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
			details: [
				"A two-year distance program focused on modern web development. ",
				"The education emphasized React, JavaScript, HTML, and CSS, along with UX,",
				"version control, security, Node.js, and databases. The program combined ",
				"theoretical knowledge with practical application through real-world projects ",
				"and workplace learning (LIA). This training prepared me to design and ",
				"build responsive, user-centered web applications using contemporary development ",
				"practices.",
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
		{ label: "GitHub", url: "https://github.com/axelgandersson", icon: "gh" },
		{
			label: "LinkedIn",
			url: "https://www.linkedin.com/in/axel-andersson-b72406312/",
			icon: "li",
		},
		{ label: "Email", url: "axelgandersson@gmail.com", icon: "em" },
	],
};

export type ResumeData = typeof resumeData;
