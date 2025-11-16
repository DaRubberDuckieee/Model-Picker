# Model Picker

This is the model picker project.

A clean, lightweight demo app for comparing different AI models (GPT and Claude).

## Features

- Simple dropdown to select between GPT-4, GPT-3.5, Claude 3 Opus, and Claude 3 Sonnet
- Clean chat interface with text input
- Response display area
- Dark mode support

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open your browser to `http://localhost:5173`

## Next Steps

The app currently uses placeholder responses. To integrate real API calls:

1. Install API clients (e.g., `openai`, `@anthropic-ai/sdk`)
2. Add environment variables for API keys
3. Replace the `setTimeout` in `handleSubmit` with actual API calls
4. Add streaming support if desired

## Project Structure

- `src/App.tsx` - Main application component
- `src/App.css` - Styling for the app
- `src/index.css` - Global styles

Built with React, TypeScript, and Vite.
