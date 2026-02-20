import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import {
	OutputLine,
	processCommand,
	getBanner,
	AVAILABLE_COMMANDS,
	processAdminCommand,
} from "./TerminalEngine";
import TerminalOutput from "./TerminalOutput";
import { resumeData } from "@/data/resumeData";

const ADMIN_PASSWORD = "axel2026";

const PROMPT_HOST = "Santana.com";

// Styled Components
const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background: hsl(var(--terminal-bg));
	display: flex;
	padding: 1rem;
	overflow: hidden;
`;

const TerminalWindow = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	border: 2px solid hsl(var(--border));
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: 0 0 30px hsl(var(--primary) / 0.15);
`;

const TitleBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.75rem 1rem;
	background: hsl(var(--card));
	border-bottom: 2px solid hsl(var(--primary));
	flex-shrink: 0;
`;

const TitleText = styled.span`
	font-size: 0.875rem;
	color: hsl(var(--primary));
	font-weight: 600;
	letter-spacing: 0.1em;
	font-family: "JetBrains Mono";
`;

const TerminalBody = styled.div`
	flex: 1;
	padding: 1rem;
	overflow-y: auto;
	font-family: "JetBrains Mono", "Courier New", monospace;
	font-size: 0.875rem;
	background: hsl(var(--terminal-bg));
	font-variant-ligatures: none;
	font-feature-settings: normal;
	letter-spacing: 0;

	@media (min-width: 768px) {
		padding: 1.5rem;
	}
`;

const BootContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.125rem;
`;

const BootLine = styled.div<{ isOk?: boolean; isEmpty?: boolean }>`
	font-size: 0.875rem;
	line-height: 1.625;

	${(props) =>
		props.isOk &&
		`
		color: hsl(var(--primary));
	`}

	${(props) =>
		props.isEmpty &&
		`
		opacity: 0;
		user-select: none;
	`}
	
	${(props) =>
		!props.isOk &&
		!props.isEmpty &&
		`
		color: hsl(var(--muted-foreground));
	`}
`;

const BootCursorLine = styled.div`
	color: hsl(var(--muted-foreground));
	font-size: 0.875rem;
`;

const InputForm = styled.form`
	display: flex;
	align-items: center;
	margin-top: 0.25rem;
	position: relative;
`;

const PromptSpan = styled.span<{ color: string; glow?: string }>`
	color: ${(props) => props.color};
	flex-shrink: 0;
	user-select: none;

	${(props) =>
		props.glow &&
		`
		text-shadow: 0 0 8px ${props.glow};
	`}
`;

const InputContainer = styled.div`
	position: relative;
	flex: 1;
	display: flex;
	align-items: center;
`;

const SuggestionText = styled.span`
	position: absolute;
	left: 0;
	top: 0;
	color: hsl(var(--muted-foreground));
	opacity: 0.3;
	pointer-events: none;
	user-select: none;
`;

const TerminalInput = styled.input`
	background: transparent;
	color: hsl(var(--foreground));
	caret-color: transparent;
	outline: none;
	border: none;
	width: 100%;
	font-family: "JetBrains Mono", monospace;
	font-size: 0.875rem;
`;

const Cursor = styled.span<{ offset: number }>`
	position: absolute;
	left: ${(props) => props.offset}ch;
	color: hsl(var(--prompt-user));
	user-select: none;
	pointer-events: none;
`;

const StatusBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	background: hsl(var(--card));
	border-top: 2px solid hsl(var(--primary));
	font-size: 0.75rem;
	flex-shrink: 0;
`;

const StatusLeft = styled.span`
	color: hsl(var(--prompt-user));
	font-weight: bold;
	letter-spacing: 0.05em;
`;

const StatusCenter = styled.span`
	color: hsl(var(--muted-foreground));
`;

const StatusRight = styled.span`
	color: hsl(var(--muted-foreground));
`;

const bootLines = [
	{ text: "BIOS v2.0.26 — Press DEL to enter setup", delay: 0 },
	{ text: "Detecting hardware...", delay: 400 },
	{ text: `CPU: ResumeCore™ i9 — 6.0 GHz — 6 cores / 12 threads`, delay: 700 },
	{ text: "RAM: 32 GB DDR5 — OK", delay: 900 },
	{ text: "Storage: /dev/sda — 1 TB NVMe SSD — OK", delay: 1100 },
	{ text: "", delay: 1300 },
	{ text: "Booting ResumeOS 2.0.26 (GNU/Linux x86_64)...", delay: 1400 },
	{ text: "[ OK ] Started System Logger", delay: 1700 },
	{ text: "[ OK ] Mounted /home/resume", delay: 1900 },
	{ text: "[ OK ] Loaded professional.profile", delay: 2100 },
	{ text: "[ OK ] Started terminal.service", delay: 2300 },
	{ text: "", delay: 2500 },
];

const Terminal: React.FC = () => {
	const [output, setOutput] = useState<OutputLine[]>([]);
	const [input, setInput] = useState("");
	const [history, setHistory] = useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = useState(-1);
	const [booting, setBooting] = useState(true);
	const [bootText, setBootText] = useState<string[]>([]);
	const [suggestion, setSuggestion] = useState("");
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [passwordMode, setPasswordMode] = useState(false);
	const [sessionStartTime] = useState(Date.now());
	const [commandCount, setCommandCount] = useState(0);
	const inputRef = useRef<HTMLInputElement>(null);
	const bottomRef = useRef<HTMLDivElement>(null);

	// Dynamic prompt user based on auth state
	const PROMPT_USER = isAuthenticated ? "Admin" : "Recruiter";

	// Boot sequence
	useEffect(() => {
		bootLines.forEach(({ text, delay }) => {
			setTimeout(() => {
				setBootText((prev) => [...prev, text]);
			}, delay);
		});

		setTimeout(() => {
			setBooting(false);
			setOutput(getBanner());
		}, 2800);
	}, []);

	// Auto-scroll
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [output, bootText, booting]);

	// Focus input on click anywhere
	const focusInput = useCallback(() => {
		inputRef.current?.focus();
	}, []);

	// Tab completion
	const handleTabComplete = useCallback(() => {
		if (!input.trim()) return;
		const match = AVAILABLE_COMMANDS.find((c) =>
			c.startsWith(input.toLowerCase()),
		);
		if (match) setInput(match);
	}, [input]);

	// Input change with suggestion
	const handleInputChange = (val: string) => {
		setInput(val);
		if (val.trim()) {
			const match = AVAILABLE_COMMANDS.find((c) =>
				c.startsWith(val.toLowerCase()),
			);
			setSuggestion(match && match !== val ? match : "");
		} else {
			setSuggestion("");
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Handle password mode
		if (passwordMode) {
			setPasswordMode(false);
			const maskedOutput = "*".repeat(input.length);
			setOutput((prev) => [
				...prev,
				{
					id: `cmd-${Date.now()}`,
					text: `Password: ${maskedOutput}`,
					type: "dim",
				},
			]);

			if (input === ADMIN_PASSWORD) {
				setIsAuthenticated(true);
				setOutput((prev) => [
					...prev,
					{ id: `auth-${Date.now()}`, text: "", type: "blank" },
					{
						id: `auth-${Date.now()}-1`,
						text: "✓ Authentication successful",
						type: "success",
					},
					{
						id: `auth-${Date.now()}-2`,
						text: "Admin mode activated. Type 'admin' to access admin panel.",
						type: "dim",
					},
					{ id: `auth-${Date.now()}-3`, text: "", type: "blank" },
				]);
			} else {
				setOutput((prev) => [
					...prev,
					{ id: `auth-${Date.now()}`, text: "", type: "blank" },
					{
						id: `auth-${Date.now()}-1`,
						text: "✗ Authentication failed",
						type: "error",
					},
					{ id: `auth-${Date.now()}-2`, text: "", type: "blank" },
				]);
			}
			setInput("");
			return;
		}

		if (!input.trim() && input !== "") {
			setOutput((prev) => [
				...prev,
				{
					id: `cmd-${Date.now()}`,
					text: `${PROMPT_USER}@${PROMPT_HOST}:~$ `,
					type: "dim",
				},
			]);
			setInput("");
			return;
		}

		const cmdLine = input;

		// Check for login command
		if (cmdLine.trim().toLowerCase() === "login") {
			setOutput((prev) => [
				...prev,
				{
					id: `cmd-${Date.now()}`,
					text: `${PROMPT_USER}@${PROMPT_HOST}:~$ ${cmdLine}`,
					type: "dim",
				},
				{
					id: `login-${Date.now()}`,
					text: "",
					type: "blank",
				},
			]);
			setPasswordMode(true);
			setInput("");
			return;
		}

		setOutput((prev) => [
			...prev,
			{
				id: `cmd-${Date.now()}`,
				text: `${PROMPT_USER}@${PROMPT_HOST}:~$ ${cmdLine}`,
				type: "dim",
			},
		]);

		// Increment command count
		if (cmdLine.trim()) {
			setCommandCount((prev) => prev + 1);
		}

		// Check if admin command
		const [cmd] = cmdLine.trim().toLowerCase().split(" ");
		if (["admin", "logout", "stats"].includes(cmd)) {
			const result = processAdminCommand(
				cmdLine,
				isAuthenticated,
				{ sessionStartTime, commandCount: commandCount + 1 },
				() => setIsAuthenticated(false),
			);
			if (result !== "clear") {
				setOutput((prev) => [...prev, ...result]);
			}
		} else {
			const result = processCommand(cmdLine);
			if (result === "clear") {
				setOutput([]);
			} else {
				setOutput((prev) => [...prev, ...result]);
			}
		}

		if (cmdLine.trim()) {
			setHistory((prev) => [cmdLine, ...prev.slice(0, 99)]);
		}
		setHistoryIndex(-1);
		setInput("");
		setSuggestion("");
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Tab") {
			e.preventDefault();
			handleTabComplete();
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			const nextIndex = Math.min(historyIndex + 1, history.length - 1);
			setHistoryIndex(nextIndex);
			setInput(history[nextIndex] ?? "");
			setSuggestion("");
		} else if (e.key === "ArrowDown") {
			e.preventDefault();
			const nextIndex = Math.max(historyIndex - 1, -1);
			setHistoryIndex(nextIndex);
			setInput(nextIndex === -1 ? "" : (history[nextIndex] ?? ""));
			setSuggestion("");
		}
	};

	return (
		<Container>
			<TerminalWindow className="scanlines crt-vignette terminal-flicker">
				{/* Title bar */}
				<TitleBar>
					<TitleText>
						{PROMPT_USER}@{PROMPT_HOST}
					</TitleText>
				</TitleBar>

				{/* Terminal body */}
				<TerminalBody onClick={focusInput}>
					{booting ? (
						<BootContainer>
							{bootText.map((t, i) => (
								<BootLine
									key={i}
									isOk={t.startsWith("[ OK ]")}
									isEmpty={t === ""}
									className={
										t.startsWith("[ OK ]")
											? "text-glow line-appear"
											: "line-appear"
									}
								>
									{t || "\u00A0"}
								</BootLine>
							))}
							<BootCursorLine>
								<span className="cursor-blink text-glow">█</span>
							</BootCursorLine>
						</BootContainer>
					) : (
						<>
							<TerminalOutput lines={output} />

							{/* Input line */}
							<InputForm onSubmit={handleSubmit}>
								{passwordMode ? (
									<PromptSpan color="hsl(var(--prompt-user))">
										Password:&nbsp;
									</PromptSpan>
								) : (
									<>
										<PromptSpan
											color="hsl(var(--prompt-user))"
											glow="0 0 8px hsl(var(--terminal-green) / 0.7)"
											className="text-glow"
										>
											{PROMPT_USER}
										</PromptSpan>
										<PromptSpan color="hsl(var(--muted-foreground))">
											@
										</PromptSpan>
										<PromptSpan
											color="hsl(var(--prompt-host))"
											className="text-glow-amber"
										>
											{PROMPT_HOST}
										</PromptSpan>
										<PromptSpan
											color="hsl(var(--prompt-path))"
											className="text-glow-cyan"
										>
											:~
										</PromptSpan>
										<PromptSpan color="hsl(var(--foreground))">
											$&nbsp;
										</PromptSpan>
									</>
								)}

								<InputContainer>
									{!passwordMode && suggestion && (
										<SuggestionText aria-hidden>{suggestion}</SuggestionText>
									)}
									<TerminalInput
										ref={inputRef}
										type={passwordMode ? "password" : "text"}
										value={input}
										onChange={(e) => handleInputChange(e.target.value)}
										onKeyDown={handleKeyDown}
										autoFocus
										autoComplete="off"
										autoCapitalize="off"
										spellCheck={false}
										aria-label="Terminal input"
									/>
									<Cursor
										offset={input.length}
										className="cursor-blink text-glow"
										aria-hidden
									>
										█
									</Cursor>
								</InputContainer>
							</InputForm>
						</>
					)}
					<div ref={bottomRef} />
				</TerminalBody>

				{/* Status bar */}
				{!booting && (
					<StatusBar>
						<StatusLeft>NORMAL</StatusLeft>
						<StatusCenter>
							{PROMPT_USER}@{PROMPT_HOST} — ResumeOS 2.0.26
						</StatusCenter>
						<StatusRight>TAB: autocomplete · ↑↓: history</StatusRight>
					</StatusBar>
				)}
			</TerminalWindow>
		</Container>
	);
};

export default Terminal;
