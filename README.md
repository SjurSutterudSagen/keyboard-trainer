# Keyboard Trainer

A modern web application for improving typing skills with support for various keyboard layouts and ergonomic keyboards.

Made because I needed a project to practice using my Ergonomic Split Keyboard on, and since I also wanted to practice and
use AI for more complex tasks.

Still very much a work-in-progress.

## Features

- **Multiple Keyboard Support**: Works with popular keyboards including Corne, Lily58, Glove80, and many others
- **Custom Layouts**: Supports QWERTY, Dvorak, and custom keymaps
- **Ergonomic Focus**: Optimized for split and ergonomic keyboard layouts
- **Real-time Training**: Interactive typing exercises with immediate feedback

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Typography**: Geist font family
- **Testing**: Vitest + Playwright
- **Language**: TypeScript

## Keyboard Data

The application includes comprehensive keyboard layout data generated from the [ZMK firmware repository](https://github.com/zmkfirmware/zmk). See [scripts/README.md](scripts/README.md) for details on data generation.

## Development

```bash
# Run tests
pnpm test

# Run E2E tests
pnpm test:e2e

# Generate keyboard layouts
./scripts/generate-layouts-keymaps-zmk.sh
```

## Project Structure

- [`src/app/`](src/app/) - Next.js app router pages and layouts
- [`src/data/`](src/data/) - Generated keyboard layout and keymap data
- [`scripts/`](scripts/) - Data generation scripts for ZMK integration
- [`e2e/`](e2e/) - End-to-end tests

## License

MIT
