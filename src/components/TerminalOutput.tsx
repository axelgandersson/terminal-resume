import React from "react";
import { OutputLine } from "./TerminalEngine";
import { cn } from "@/lib/utils";

interface TerminalOutputProps {
  lines: OutputLine[];
}

const typeClass: Record<OutputLine["type"], string> = {
  normal: "text-foreground",
  success: "text-[hsl(var(--prompt-user))] text-glow",
  error: "text-destructive",
  accent: "text-accent text-glow-amber",
  dim: "text-muted-foreground",
  amber: "text-accent text-glow-amber",
  cyan: "text-[hsl(var(--terminal-cyan))] text-glow-cyan",
  header: "text-[hsl(var(--prompt-user))] text-glow font-bold tracking-widest",
  blank: "",
};

// Detect URLs and make them clickable
function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+|mailto:[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) => {
    if (urlRegex.test(part)) {
      urlRegex.lastIndex = 0;
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-primary transition-colors cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ lines }) => {
  return (
    <div className="space-y-0">
      {lines.map((line) => (
        <div
          key={line.id}
          className={cn(
            "font-mono text-sm leading-relaxed whitespace-pre-wrap break-all line-appear",
            typeClass[line.type]
          )}
        >
          {line.type === "blank" ? "\u00A0" : renderTextWithLinks(line.text)}
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;
