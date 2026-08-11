"use client";

import React from 'react';
import { Info } from 'lucide-react';
import { NotificationCard } from './components/NotificationCard';
import { MOCK_CORE_NOTIFICATIONS, MOCK_ESCALATION_NOTIFICATIONS } from './components/types';

export default function NotificationConfigPage() {
    return (
        <div className="w-full flex flex-col h-[calc(100vh-230px)] overflow-y-auto pb-6 [scrollbar-color:#16A34A_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#16A34A] [&::-webkit-scrollbar-thumb]:rounded-full pr-2 bg-white p-6 rounded-lg border border-[#F1F3F4] ">

            {/* Info Banner */}
            <div className="flex items-center gap-2 bg-[#F0F7FF] border border-[#D6E8FF] rounded-lg p-3 mb-6">
                <Info className="w-4 h-4 text-[#1447E6] shrink-0" />
                <span className="text-xs font-semibold text-[#1447E6]">
                    FSD Appendix C — 19-event notification matrix. Use template variables: {'{{id}}'}, {'{{date}}'}, {'{{category}}'}, {'{{officerName}}'}, {'{{statusLine}}'}
                </span>
            </div>

            {/* All Notifications List */}
            <NotificationCard notifications={[...MOCK_CORE_NOTIFICATIONS, ...MOCK_ESCALATION_NOTIFICATIONS]} />

        </div>
    );
}
