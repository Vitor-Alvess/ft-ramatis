# 🚀 React Template

A modern, production-ready Next.js template with TypeScript, Tailwind CSS, and best practices built-in.

## ✨ Features

- ⚡ **Next.js 15** - Latest version with App Router
- 🔷 **TypeScript** - Type safety with strict mode
- 🎨 **Tailwind CSS v4** - Utility-first styling
- ⚛️ **React 19** - Latest React features
- 🎭 **Framer Motion** - Smooth animations
- 📏 **ESLint & Prettier** - Code quality tools
- 📊 **Vercel Analytics** - Built-in analytics
- 🚄 **Turbopack** - Fast development builds
- 📁 **Organized Structure** - Scalable architecture

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
├── screens/           # Feature views
│   └── [feature]/
│       ├── [Feature]View.tsx
│       ├── components/
│       └── sections/
├── actions/           # Server actions & API calls
├── interfaces/        # TypeScript interfaces
├── constants/         # App constants
├── utils/            # Utility functions
└── mocks/            # Development data
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.11.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-template.git
cd react-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create environment variables:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📝 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 🛠️ Configuration

### 🔑 Setting up SSH Agent Forwarding

This devcontainer is configured to use your local SSH keys for GitHub access.  
Before opening the project in the container, make sure your SSH key is loaded into the agent:

```bash
# IF YOU DON'T HAVE A KEY RUNNING, start the SSH agent
eval "$(ssh-agent -s)"

# 1. Add your SSH private key (default is id_ed25519, replace if yours is different)
ssh-add ~/.ssh/id_ed25519

# 2. Verify the key is loaded
ssh-add -l

# 3. Open in container and you can verify the key was added with:
ssh -T git@github.com

#You should see a success message like:
Hi <username>! You've successfully authenticated...

```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.example.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-ga-id

# Other secrets
SECRET_KEY=your-secret-key
```

### Tailwind CSS

Customize your design system in `src/app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #0e0e0e;
  --primary: #0070f3;
  --secondary: #ff0080;
}
```

## 📚 Documentation

### Creating Components

Components follow a consistent pattern:

```typescript
// src/components/MyComponent.tsx
interface MyComponentProps {
  title: string;
  className?: string;
}

export const MyComponent = ({
  title,
  className
}: MyComponentProps): React.JSX.Element => {
  return (
    <div className={className}>
      <h2>{title}</h2>
    </div>
  );
};
```

### API Routes

Create API endpoints in `src/app/api/`:

```typescript
// src/app/api/hello/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello World" });
}
```

### Using Actions

Server actions for data fetching:

```typescript
// src/actions/users.ts
export async function fetchUsers(): Promise<IUser[]> {
  const response = await fetch("/api/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}
```

## 🎨 Styling Guidelines

This template uses Tailwind CSS v4 with a utility-first approach:

- Use Tailwind utilities for styling
- Organize classes logically (layout → spacing → typography → colors → effects)
- Use CSS variables for theme customization
- Avoid inline styles

Example:

```tsx
<div className="bg-background text-foreground flex items-center justify-center rounded-lg p-4 shadow-md transition-shadow hover:shadow-lg">
  Content
</div>
```

## 🧪 Testing

```bash
npm run test        # Run tests (configure your test runner)
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

## 📦 Building for Production

1. Build the application:

```bash
npm run build
```

2. Test the production build locally:

```bash
npm run start
```

3. Deploy to your platform of choice (Vercel, Netlify, etc.)

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Tests
- `chore:` Maintenance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/)

## 💡 Tips

- Use the included `claude.md` for AI-assisted development guidelines
- Check `.cursor_rules` for IDE configuration and code snippets
- Follow the established patterns for consistency
- Keep components small and focused
- Write tests for critical functionality
- Document complex logic

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Module not found errors:**

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

**TypeScript errors:**

```bash
# Check for type errors
npm run type-check
```

## 📞 Support

- Create an issue on GitHub
- Check existing issues for solutions
- Read the documentation in `claude.md`

---

Built with ❤️ using modern web technologies
