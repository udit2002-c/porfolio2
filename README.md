# 🚀 Udit Narain Tewari - Portfolio

A modern, interactive portfolio website built with React and TypeScript, featuring a unique **IDE-themed design** that showcases development skills through an authentic coding environment interface.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-purple)

## 🎯 Overview

This portfolio represents a unique approach to showcasing development skills by recreating the familiar environment developers work in daily - an Integrated Development Environment (IDE). The entire interface mimics **Visual Studio Code**, complete with file tabs, terminal functionality, and authentic developer tooling.

## ✨ Key Features

### 🖥️ **IDE-Themed Interface**
- **VS Code-style Navigation**: Authentic IDE window with file tabs, menu bar, and window controls
- **File Explorer**: Navigate through sections as if browsing a project directory
- **Terminal Integration**: Functional terminal with real command execution
- **Syntax Highlighting**: Code-style display throughout the interface

### 🔍 **Advanced Search Functionality**
- **Quick Open (Ctrl+P)**: VS Code-style command palette for instant navigation
- **Smart Search**: Search through sections, skills, projects, and achievements
- **Keyboard Navigation**: Full keyboard support with arrow keys and shortcuts
- **Real-time Filtering**: Instant results as you type

### 💻 **Interactive Terminal**
- **Command Line Interface**: Navigate portfolio using real terminal commands
- **Available Commands**:
  - `cd <section>` - Navigate to specific sections
  - `ls` - List all available sections
  - `pwd` - Show current directory
  - `whoami` - Display profile information
  - `help` - Show all commands
  - `clear` - Clear terminal history
- **Command History**: Use ↑/↓ arrows to navigate previous commands
- **Auto-completion**: Intelligent command parsing and validation

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all device sizes
- **Touch-Friendly**: Mobile navigation with drawer-style file explorer
- **Cross-Platform**: Works seamlessly on desktop, tablet, and mobile

### 🎨 **Modern UI/UX**
- **Dark Theme**: Professional dark color scheme with cyan accents
- **Smooth Animations**: Framer Motion animations throughout
- **Grid Background**: Subtle developer-style grid pattern
- **Monospace Typography**: JetBrains Mono and Fira Code fonts

## 🛠️ Technologies Used

### **Frontend**
- **React 18.x** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### **UI & Animation**
- **Framer Motion** - Advanced animations and page transitions
- **Lucide React** - Beautiful icon library
- **Radix UI** - Accessible UI components

### **Form & Communication**
- **EmailJS** - Contact form email functionality
- **React Hook Form** - Form state management and validation

### **Development Tools**
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🏗️ Project Structure

```
portfolio/
├── public/
│   ├── images/           # Profile and project images
│   └── index.html
├── src/
│   ├── components/       # React components
│   │   ├── About.tsx     # About section with TypeScript interface
│   │   ├── Achievements.tsx # GitHub-style achievements
│   │   ├── Contact.tsx   # API documentation interface
│   │   ├── Experience.tsx # File explorer experience view
│   │   ├── Footer.tsx    # System status terminal
│   │   ├── Hero.tsx      # Main landing with IDE window
│   │   ├── Navbar.tsx    # VS Code-style navigation
│   │   ├── Projects.tsx  # GitHub repository interface
│   │   └── Skills.tsx    # Package.json dependencies view
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── pages/
│   │   └── Index.tsx     # Main page component
│   ├── index.css         # Global styles and IDE theme
│   └── main.tsx          # Application entry point
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/udit-in/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:8080` (or the port shown in terminal)

### Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🎨 Design Philosophy

### **IDE-First Approach**
Every component is designed to feel like a natural part of a development environment:
- **Hero Section**: Main IDE window with code editor and terminal
- **About Section**: TypeScript interface definition
- **Experience**: File explorer with job entries as files
- **Projects**: GitHub repository browser
- **Skills**: Package.json dependencies view
- **Achievements**: Git log with commits as achievements
- **Contact**: API documentation with endpoints

### **Developer Experience**
The portfolio provides an authentic developer experience:
- **Familiar Interface**: Uses patterns developers recognize
- **Functional Elements**: Search and terminal actually work
- **Attention to Detail**: Syntax highlighting, window controls, status bars

## 📧 Contact Integration

The contact form uses **EmailJS** for sending emails directly from the client:
- **Service ID**: `service_uex1fqi`
- **Template ID**: `template_ctmziz6`
- **Real-time Validation**: Form validation with helpful error messages
- **Success Feedback**: Confirmation of successful message sending

## 🔧 Configuration

### **EmailJS Setup**
To configure email functionality:
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Update service and template IDs in `Contact.tsx`
3. Add your public key to the EmailJS initialization

### **Customization**
Key files to modify for customization:
- `src/index.css` - Color scheme and fonts
- `src/components/Hero.tsx` - Personal information and stats
- `tailwind.config.js` - Design system configuration

## 🎯 Key Sections

### **Hero Section**
- Professional IDE window with syntax-highlighted code
- Developer statistics (Status, Hackathons, Projects, Tea consumption)
- Terminal simulation with npm start output
- Profile image with online status indicator

### **About Section**
- Personal information as TypeScript interface
- Multiple terminal windows for different data
- Education credentials as JSON structure
- Contact endpoints as API simulation

### **Experience Section**
- Work experience as file explorer entries
- Terminal execution logs for each role
- Multi-tab interface for different positions
- Syntax-highlighted job descriptions

### **Projects Section**
- GitHub repository-style project showcase
- Code file views with syntax highlighting
- Star ratings and technology indicators
- Terminal navigation between projects

### **Skills Section**
- Technical skills as npm package dependencies
- Terminal installation commands
- Package.json structure display
- TypeScript module definitions

### **Achievements Section**
- Awards displayed as GitHub achievements
- Git log showing accomplishments as commits
- Academic performance as JSON data
- Terminal analysis commands

### **Contact Section**
- API documentation interface with endpoints
- Working contact form with EmailJS integration
- JSON request/response format display
- Terminal-style command examples

## 📱 Mobile Experience

The portfolio is fully responsive with special mobile optimizations:
- **Drawer Navigation**: File explorer in slide-out drawer
- **Touch Gestures**: Optimized for touch interaction
- **Mobile Terminal**: Adapted terminal interface for mobile
- **Responsive Grid**: Adaptive layouts for all screen sizes

## 🌟 Special Features

### **Keyboard Shortcuts**
- `Ctrl+P` / `Cmd+P` - Open search modal
- `Ctrl+``  / `Cmd+`` - Open terminal
- `Esc` - Close modals
- `↑/↓` - Navigate search results or command history
- `Enter` - Select/Execute

### **Interactive Elements**
- **Run Button**: Simulates portfolio execution
- **Window Controls**: Authentic macOS-style window buttons
- **File Tabs**: Show active section with unsaved changes indicator
- **Status Bar**: Real-time clock and system status

### **Animations**
- **Page Transitions**: Smooth section scrolling
- **Hover Effects**: Interactive button and link animations
- **Loading States**: Animated loading indicators
- **Typing Effects**: Simulated typing in terminal

## 🧑‍💻 About the Developer

**Udit Narain Tewari**
- 🎓 Computer Science Engineering Student at NIE Mysore
- 💼 Treasurer of Onyx E-Cell
- 🏆 3+ Hackathons Completed
- 🌐 Full Stack Developer specializing in React, TypeScript, and Node.js

### **Connect with Me**
- 📧 Email: [udittewari888@gmail.com](mailto:udittewari888@gmail.com)
- 🐙 GitHub: [udit-in](https://github.com/udit-in)
- 💼 LinkedIn: [udit-tewari-24b8b3252](https://www.linkedin.com/in/udit-narain-tewari)
- 📱 Phone: +91-8887547458

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Design Inspiration**: Visual Studio Code interface
- **Icons**: Lucide React icon library
- **Fonts**: JetBrains Mono and Fira Code
- **Animations**: Framer Motion library
- **Email Service**: EmailJS for contact form functionality

---

⭐ **If you found this portfolio interesting, please consider giving it a star!**

*Built with ❤️ by Udit Narain Tewari*

