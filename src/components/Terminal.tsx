import React, { useState, useEffect, useRef, useCallback } from "react";
import { OutputLine, processCommand, getBanner, AVAILABLE_COMMANDS } from "./TerminalEngine";
import TerminalOutput from "./TerminalOutput";
import { resumeData } from "@/data/resumeData";

const PROMPT_USER = resumeData.name.toLowerCase().replace(" ", "");
const PROMPT_HOST = "resume";

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
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

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
    const match = AVAILABLE_COMMANDS.find((c) => c.startsWith(input.toLowerCase()));
    if (match) setInput(match);
  }, [input]);

  // Input change with suggestion
  const handleInputChange = (val: string) => {
    setInput(val);
    if (val.trim()) {
      const match = AVAILABLE_COMMANDS.find((c) => c.startsWith(val.toLowerCase()));
      setSuggestion(match && match !== val ? match : "");
    } else {
      setSuggestion("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

    setOutput((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        text: `${PROMPT_USER}@${PROMPT_HOST}:~$ ${cmdLine}`,
        type: "dim",
      },
    ]);

    const result = processCommand(cmdLine);
    if (result === "clear") {
      setOutput([]);
    } else {
      setOutput((prev) => [...prev, ...result]);
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
    <div className="h-screen w-screen bg-[hsl(var(--terminal-bg))] flex p-4 overflow-hidden">
      <div className="flex-1 flex flex-col border border-border rounded-sm overflow-hidden scanlines crt-vignette terminal-flicker">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[hsl(220_16%_10%)] border-b border-border shrink-0">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive opacity-80" />
            <div className="w-3 h-3 rounded-full bg-accent opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[hsl(120_50%_45%)] opacity-80" />
          </div>
          <span className="flex-1 text-center text-xs text-muted-foreground tracking-widest">
            {PROMPT_USER}@{PROMPT_HOST}: ~
          </span>
        </div>

        {/* Terminal body */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto font-mono text-sm bg-[hsl(var(--terminal-bg))]" onClick={focusInput}>
          {booting ? (
            <div className="space-y-0.5">
              {bootText.map((t, i) => (
                <div
                  key={i}
                  className={`text-sm leading-relaxed line-appear ${
                    t.startsWith("[ OK ]")
                      ? "text-primary text-glow"
                      : t === ""
                      ? "opacity-0 select-none"
                      : "text-muted-foreground"
                  }`}
                >
                  {t || "\u00A0"}
                </div>
              ))}
              <div className="text-muted-foreground text-sm">
                <span className="cursor-blink text-primary text-glow">█</span>
              </div>
            </div>
          ) : (
            <>
              <TerminalOutput lines={output} />

              {/* Input line */}
              <form onSubmit={handleSubmit} className="flex items-center mt-1 relative">
                <span className="text-[hsl(var(--prompt-user))] text-glow shrink-0 select-none">
                  {PROMPT_USER}
                </span>
                <span className="text-muted-foreground shrink-0 select-none">@</span>
                <span className="text-[hsl(var(--prompt-host))] text-glow-amber shrink-0 select-none">
                  {PROMPT_HOST}
                </span>
                <span className="text-[hsl(var(--prompt-path))] text-glow-cyan shrink-0 select-none">:~</span>
                <span className="text-foreground shrink-0 select-none">$&nbsp;</span>

                <div className="relative flex-1 flex items-center">
                  {suggestion && (
                    <span
                      className="absolute left-0 top-0 text-muted-foreground opacity-30 pointer-events-none select-none"
                      aria-hidden
                    >
                      {suggestion}
                    </span>
                  )}
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent text-foreground caret-transparent outline-none border-none w-full font-mono text-sm"
                    autoFocus
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    aria-label="Terminal input"
                  />
                  <span
                    className="cursor-blink text-[hsl(var(--prompt-user))] text-glow select-none pointer-events-none"
                    style={{ marginLeft: `${input.length}ch`, position: "absolute", left: 0 }}
                    aria-hidden
                  >
                    █
                  </span>
                </div>
              </form>
            </>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Status bar */}
        {!booting && (
          <div className="flex items-center justify-between px-4 py-1 bg-[hsl(220_16%_13%)] border-t border-border text-xs shrink-0">
            <span className="text-[hsl(var(--prompt-user))] font-bold tracking-wider">NORMAL</span>
            <span className="text-muted-foreground">
              {PROMPT_USER}@{PROMPT_HOST} — ResumeOS 2.0.26
            </span>
            <span className="text-muted-foreground">TAB: autocomplete · ↑↓: history</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
