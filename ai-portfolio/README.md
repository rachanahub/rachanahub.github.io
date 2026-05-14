# AI-Powered Developer Portfolio

A modern, highly unique, and visually stunning developer portfolio built with Next.js, Tailwind CSS, Framer Motion, and Three.js. 

## Features
- **3D Interactive Hero:** Uses `@react-three/fiber` for a dynamic particle network background.
- **Glassmorphism UI:** Advanced glowing effects and premium futuristic design.
- **Skills Radar:** Interactive charts using `recharts`.
- **AI Chatbot (Static Demo):** A sleek chat interface representing an AI assistant.
- **Fully Responsive & Accessible:** Built for all devices.

## How to Deploy to GitHub Pages (Without Git CLI)

Since this project uses Next.js static export (`output: 'export'`), deploying to GitHub Pages is incredibly simple.

1. **Build the Project**
   Open your terminal in this folder and run:
   ```bash
   npm run build
   ```
   This will generate a folder called `/out` inside this directory.

2. **Upload to GitHub**
   - Go to [GitHub.com](https://github.com) and create a new repository (e.g., `rachanahub.github.io` or `portfolio`).
   - Go to the **Upload files** section of your new repository.
   - Drag and drop **all the files and folders** that are *inside* the newly created `/out` folder into the GitHub upload area.
   - Commit the changes.

3. **Configure GitHub Pages**
   - Go to the **Settings** tab of your repository.
   - Click on **Pages** in the left sidebar.
   - Under "Build and deployment", set the **Source** to `Deploy from a branch`.
   - Select the `main` branch and `/ (root)` folder, then click Save.

Within a few minutes, your premium portfolio will be live on GitHub Pages!

## Development

To run locally:
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
