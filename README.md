# Nexus Terminal

A Web3 crypto dashboard built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Real-time cryptocurrency market data via CoinGecko API
- Interactive price charts with sparkline visualizations
- Watchlist management (add/remove coins)
- Activity feed with transaction history and live network data
- Trending assets with volume and sentiment analysis
- Sector heatmap visualization
- Settings panel for wallet, trading, security, and appearance preferences

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file from the example:
   ```bash
   cp .env.example .env
   ```

3. Add your API keys to `.env`.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS v4, Recharts, Motion
- **Backend:** Express.js with Vite middleware
- **Data:** CoinGecko API, TanStack React Query
