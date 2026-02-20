# Terminal Resume

A modern, interactive terminal-style portfolio/resume website built with React and TypeScript. Features a retro terminal aesthetic with modern purple/indigo theming, complete with boot sequences, command processing, and a hidden admin panel.

![Terminal Resume](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue) ![Styled Components](https://img.shields.io/badge/styled--components-6.1.13-pink)

## ✨ Features

### Terminal Interface

- **Authentic Terminal Experience** - Complete with boot sequence, command prompt, and retro CRT effects
- **Interactive Commands** - Type commands to navigate through resume sections
- **Command History** - Use ↑/↓ arrow keys to navigate command history
- **Tab Completion** - Auto-complete commands with the Tab key
- **Live Suggestions** - See command suggestions as you type

### Visual Design

- **Modern Purple/Indigo Theme** - Professional color scheme with teal accents
- **CRT Effects** - Scanlines, vignette, flicker, and text glow for authentic terminal feel
- **Monospace Typography** - JetBrains Mono font for perfect ASCII art rendering
- **Large ASCII Banner** - Eye-catching header with your name in ASCII art
- **Responsive Layout** - Works seamlessly on desktop and mobile devices

### Hidden Features 🔐

- **Admin Login System** - Type `login` to access hidden admin features
- **Session Statistics** - Track session duration, command count, and more
- **Dynamic Prompt** - Prompt changes from "Recruiter" to "Admin" when authenticated

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/axelgandersson/terminal-resume.git

# Navigate to project directory
cd terminal-resume

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 📝 Available Commands

Type these commands in the terminal:

| Command       | Description                    |
| ------------- | ------------------------------ |
| `help`        | Display all available commands |
| `about`       | Personal introduction          |
| `experience`  | Work history and roles         |
| `education`   | Academic background            |
| `skills`      | Technical skill set            |
| `links`       | Social profiles and websites   |
| `contact`     | Contact information            |
| `ls`          | List all resume sections       |
| `banner`      | Show ASCII banner              |
| `date`        | Current timestamp              |
| `uname`       | System information             |
| `clear`       | Clear the terminal             |
| `echo <text>` | Echo text back                 |

### Hidden Commands 🤫

| Command  | Description                 | Requires Auth |
| -------- | --------------------------- | ------------- |
| `login`  | Authenticate as admin       | No            |
| `admin`  | Open admin panel            | Yes           |
| `stats`  | View detailed session stats | Yes           |
| `logout` | Exit admin mode             | Yes           |

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript 5.6.2
- **Styling**: styled-components 6.1.13
- **Build Tool**: Vite 5.4.19
- **Router**: React Router 7.1.3
- **Font**: JetBrains Mono (Google Fonts)

## 🎨 Customization

### Update Your Information

Edit `src/data/resumeData.ts` to customize:

- Name, title, and location
- About section
- Work experience
- Education
- Skills (languages, frontend, backend, devops, tools)
- Social links
- Contact information

### Change Colors

Modify CSS variables in `src/index.css`:

```css
--primary: 250 70% 70%; /* Purple accent */
--accent: 180 65% 65%; /* Teal accent */
--terminal-bg: 240 21% 10%; /* Dark blue background */
```

### Change Admin Password

Update the password in `src/components/Terminal.tsx`:

```typescript
const ADMIN_PASSWORD = "your-password-here";
```

## 📁 Project Structure

```
terminal-resume/
├── src/
│   ├── components/          # React components
│   │   ├── Terminal.tsx     # Main terminal component
│   │   ├── TerminalEngine.ts # Command processing logic
│   │   ├── TerminalOutput.tsx # Output rendering
│   │   └── ui/              # shadcn/ui components
│   ├── data/
│   │   └── resumeData.ts    # Your resume data
│   ├── pages/
│   │   ├── Index.tsx        # Main page
│   │   └── NotFound.tsx     # 404 page
│   ├── index.css            # Global styles & CSS variables
│   └── main.tsx             # App entry point
├── package.json
└── vite.config.ts
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Drag and drop the 'dist' folder to Netlify
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own resume!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Axel Santana**

- GitHub: [@axelgandersson](https://github.com/axelgandersson)
- Location: Malmö, Sweden

---

Made with ❤️ using React, TypeScript, and styled-components
