"use client";

import React from 'react';
import { GlobalSlaPolicyCard } from './components/GlobalSlaPolicyCard';
import { SlaCategoryCard } from './components/SlaCategoryCard';
import { MOCK_SLA_CATEGORIES } from './components/types';

export default function SlaConfigurationPage() {
    return (
        <div className="w-full flex flex-col h-[calc(100vh-320px)] overflow-y-auto [scrollbar-color:#16A34A_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#16A34A] [&::-webkit-scrollbar-thumb]:rounded-full pr-2">

            {/* CARD 1 */}
            <GlobalSlaPolicyCard />

            {/* CARD 2 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col mb-2">
                <div className="mb-6 shrink-0">
                    <h2 className="text-lg font-bold text-gray-900 mb-1">Per-Category SLA Windows</h2>
                    <p className="text-sm text-gray-500">Edit the SLA deadline and escalation behaviour for each service category.</p>
                </div>

                <div className="flex flex-col">
                    {MOCK_SLA_CATEGORIES.map((category) => (
                        <SlaCategoryCard
                            key={category.id}
                            categoryData={category}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}
