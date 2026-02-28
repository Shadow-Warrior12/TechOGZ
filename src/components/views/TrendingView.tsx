import React, { useState } from "react";
import { GainersLosersGrid, GainerLoser } from "../ui/GainersLosersGrid";
import { SectorHeatmap, Sector } from "../ui/SectorHeatmap";
import { TrendingTable, TrendingToken } from "../ui/TrendingTable";
import { Card } from "../ui/Card";
import { Filter } from "lucide-react";

const generateSparkline = (trend: "up" | "down" | "flat"): number[] => {
    let current = 100;
    return Array.from({ length: 20 }).map(() => {
        const change = (Math.random() - 0.5) * 10;
        const direction = trend === "up" ? 2 : trend === "down" ? -2 : 0;
        current = current + change + direction;
        return Math.max(0, current);
    });
};

const MOCK_GAINERS: GainerLoser[] = [
    { id: "g1", symbol: "PEPE", name: "Pepe", price: 0.0000124, change: 42.5 },
    { id: "g2", symbol: "WIF", name: "dogwifhat", price: 2.85, change: 35.2 },
    { id: "g3", symbol: "BONK", name: "Bonk", price: 0.0000285, change: 28.1 },
    { id: "g4", symbol: "FLOKI", name: "Floki", price: 0.000198, change: 22.4 },
    { id: "g5", symbol: "RNDR", name: "Render", price: 8.45, change: 18.7 },
];

const MOCK_LOSERS: GainerLoser[] = [
    { id: "l1", symbol: "APE", name: "ApeCoin", price: 1.25, change: -18.5 },
    { id: "l2", symbol: "SAND", name: "Sandbox", price: 0.42, change: -15.2 },
    { id: "l3", symbol: "MANA", name: "Decentraland", price: 0.38, change: -12.8 },
    { id: "l4", symbol: "AXS", name: "Axie Infinity", price: 7.15, change: -10.4 },
    { id: "l5", symbol: "ENJ", name: "Enjin", price: 0.28, change: -8.9 },
];

const MOCK_SECTORS: Sector[] = [
    { id: "s1", name: "DeFi", marketCap: 85e9, change: 3.2 },
    { id: "s2", name: "Layer 1", marketCap: 420e9, change: -1.5 },
    { id: "s3", name: "Layer 2", marketCap: 15e9, change: 8.1 },
    { id: "s4", name: "NFT/Gaming", marketCap: 12e9, change: -4.3 },
    { id: "s5", name: "Meme Coins", marketCap: 45e9, change: 15.2 },
    { id: "s6", name: "AI & Data", marketCap: 28e9, change: 6.7 },
];

const MOCK_TRENDING_TOKENS: TrendingToken[] = [
    { id: "t1", symbol: "SOL", name: "Solana", price: 145.20, volChange: 45.2, sentiment: 88, sparkline: generateSparkline("up") },
    { id: "t2", symbol: "DOGE", name: "Dogecoin", price: 0.154, volChange: 124.5, sentiment: 92, sparkline: generateSparkline("up") },
    { id: "t3", symbol: "LINK", name: "Chainlink", price: 18.40, volChange: 12.4, sentiment: 65, sparkline: generateSparkline("flat") },
    { id: "t4", symbol: "ARB", name: "Arbitrum", price: 1.15, volChange: -15.4, sentiment: 45, sparkline: generateSparkline("down") },
    { id: "t5", symbol: "AVAX", name: "Avalanche", price: 38.50, volChange: 5.2, sentiment: 58, sparkline: generateSparkline("up") },
    { id: "t6", symbol: "TON", name: "Toncoin", price: 6.80, volChange: 84.1, sentiment: 75, sparkline: generateSparkline("up") },
];

export const TrendingView = () => {
    const [sortField, setSortField] = useState<"volChange" | "sentiment">("volChange");

    const sortedTokens = [...MOCK_TRENDING_TOKENS].sort((a, b) => {
        return b[sortField] - a[sortField];
    });

    return (
        <div className="p-8 max-w-7xl mx-auto flex flex-col gap-8">
            {/* Top Section: Gainers/Losers & Heatmap */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[400px]">
                {/* Left: Gainers & Losers Grid */}
                <GainersLosersGrid gainers={MOCK_GAINERS} losers={MOCK_LOSERS} />

                {/* Right: Sector Heatmap */}
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-white tracking-tight">Sector Heatmap</h2>
                    </div>
                    <div className="flex-1">
                        <SectorHeatmap sectors={MOCK_SECTORS} />
                    </div>
                </div>
            </div>

            {/* Bottom Section: Trending Table */}
            <div className="flex flex-col gap-4 mt-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">Trending Assets</h2>
                        <p className="text-sm text-zinc-500 mt-1">Based on volume momentum and social sentiment</p>
                    </div>

                    <div className="flex bg-[#151619] p-1 rounded-lg border border-[#1A1B1E]">
                        <button
                            onClick={() => setSortField("volChange")}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${
                                sortField === "volChange"
                                    ? "bg-[#1A1B1E] text-white shadow-sm border border-[#2A2B2E]"
                                    : "text-zinc-500 hover:text-white hover:bg-white/5 border border-transparent"
                            }`}
                        >
                            <Filter size={14} /> By Volume
                        </button>
                        <button
                            onClick={() => setSortField("sentiment")}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${
                                sortField === "sentiment"
                                    ? "bg-[#1A1B1E] text-white shadow-sm border border-[#2A2B2E]"
                                    : "text-zinc-500 hover:text-white hover:bg-white/5 border border-transparent"
                            }`}
                        >
                            <Filter size={14} /> By Sentiment
                        </button>
                    </div>
                </div>

                <Card>
                    <TrendingTable tokens={sortedTokens} />
                </Card>
            </div>
        </div>
    );
};
