import React from "react";
import styled from "styled-components";
import { OutputLine } from "./TerminalEngine";

interface TerminalOutputProps {
	lines: OutputLine[];
}

const OutputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0;
`;

const OutputLineStyled = styled.div<{ lineType: OutputLine["type"] }>`
	font-family: "JetBrains Mono", "Courier New", monospace;
	font-size: 0.875rem;
	line-height: 1.5;
	white-space: pre;
	overflow-x: auto;
	font-variant-ligatures: none;
	font-feature-settings: normal;
	letter-spacing: 0;

	${(props) => {
		switch (props.lineType) {
			case "normal":
				return `color: hsl(var(--foreground));`;
			case "success":
				return `
					color: hsl(var(--prompt-user));
					text-shadow: 0 0 8px hsl(var(--terminal-green) / 0.7),
					             0 0 16px hsl(var(--terminal-green) / 0.3);
				`;
			case "error":
				return `color: hsl(var(--destructive));`;
			case "accent":
				return `
					color: hsl(var(--accent));
					text-shadow: 0 0 8px hsl(var(--terminal-amber) / 0.7),
					             0 0 16px hsl(var(--terminal-amber) / 0.3);
				`;
			case "dim":
				return `color: hsl(var(--muted-foreground));`;
			case "amber":
				return `
					color: hsl(var(--accent));
					text-shadow: 0 0 8px hsl(var(--terminal-amber) / 0.7),
					             0 0 16px hsl(var(--terminal-amber) / 0.3);
				`;
			case "cyan":
				return `
					color: hsl(var(--terminal-cyan));
					text-shadow: 0 0 8px hsl(var(--terminal-cyan) / 0.7),
					             0 0 16px hsl(var(--terminal-cyan) / 0.3);
				`;
			case "header":
				return `
					color: hsl(var(--prompt-user));
					text-shadow: 0 0 8px hsl(var(--terminal-green) / 0.7),
					             0 0 16px hsl(var(--terminal-green) / 0.3);
					font-weight: normal;
				`;
			case "blank":
				return ``;
			default:
				return `color: hsl(var(--foreground));`;
		}
	}}
`;

const StyledLink = styled.a`
	text-decoration: underline;
	text-underline-offset: 2px;
	transition: color 0.2s;
	cursor: pointer;

	&:hover {
		color: hsl(var(--primary));
	}
`;

// Detect URLs and make them clickable
function renderTextWithLinks(text: string) {
	const urlRegex = /(https?:\/\/[^\s]+|mailto:[^\s]+)/g;
	const parts = text.split(urlRegex);
	return parts.map((part, i) => {
		if (urlRegex.test(part)) {
			urlRegex.lastIndex = 0;
			return (
				<StyledLink
					key={i}
					href={part}
					target="_blank"
					rel="noopener noreferrer"
					onClick={(e) => e.stopPropagation()}
				>
					{part}
				</StyledLink>
			);
		}
		return <span key={i}>{part}</span>;
	});
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ lines }) => {
	return (
		<OutputContainer>
			{lines.map((line) => (
				<OutputLineStyled
					key={line.id}
					lineType={line.type}
					className="line-appear"
				>
					{line.type === "blank" ? "\u00A0" : renderTextWithLinks(line.text)}
				</OutputLineStyled>
			))}
		</OutputContainer>
	);
};

export default TerminalOutput;
