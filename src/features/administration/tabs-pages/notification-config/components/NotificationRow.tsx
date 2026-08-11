"use client";

import React, { useState } from 'react';
import { Pencil, FileText, X } from 'lucide-react';
import { NotificationConfig } from './types';

interface NotificationRowProps {
    notification: NotificationConfig;
    isLast?: boolean;
}

export function NotificationRow({ notification, isLast }: NotificationRowProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isActive, setIsActive] = useState(notification.active);
    const [activeChannels, setActiveChannels] = useState<string[]>(notification.channels);
    const [subject, setSubject] = useState(notification.subtitle);
    const [body, setBody] = useState(notification.bodyTemplate || '');

    const toggleChannel = (channel: string) => {
        if (activeChannels.includes(channel)) {
            setActiveChannels(activeChannels.filter(c => c !== channel));
        } else {
            setActiveChannels([...activeChannels, channel]);
        }
    };

    const allRecipients = ['Submitter', 'L1 Officer', 'L2 Officer', 'Dept Head', 'Nodal Officer', 'Top-level Authority'];

    return (
        <div className={`py-4 border border-[#E5E7EB] p-6 rounded-lg mb-4  ${!isLast ? 'border border-[#E5E7EB] p-6 rounded-lg mb-4' : ''}`}>
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    {/* Header Row */}
                    <div className="flex items-center gap-3 mb-1">
                        <span className="text-[11px] font-medium text-gray-500 w-12 shrink-0">{notification.id}</span>
                        <span className="text-sm font-medium text-gray-900">{notification.title}</span>

                        {/* Badges */}
                        <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${isActive ? 'bg-[#DCFCE7] text-[#008236]' : 'bg-gray-100 text-gray-500'}`}>
                                {isActive ? 'Active' : 'Disabled'}
                            </span>
                            {notification.channels.map(channel => (
                                <span
                                    key={channel}
                                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white border ${channel === 'SMS' ? 'border-[#F9CA96] text-[#CA3500]' : 'border-[#BEDBFF] text-[#1447E6]'
                                        }`}
                                >
                                    {channel}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="ml-[60px]">
                        <p className="text-[13px] text-gray-600 mb-1">{notification.subtitle}</p>
                        <div className="flex items-center gap-2 text-[11px] text-gray-500">
                            <span>Trigger: {notification.trigger}</span>
                            <span className="text-gray-300">•</span>
                            <div className="flex items-center gap-1.5">
                                <span>To:</span>
                                {notification.to.map((recipient, i) => (
                                    <span key={i} className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600">{recipient}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 ml-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={isActive}
                            onChange={(e) => setIsActive(e.target.checked)}
                        />
                        <div className={`w-9 h-5 rounded-full transition-colors ${isActive ? 'bg-[#16A34A]' : 'bg-gray-300'}`}></div>
                        <div className={`absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform transform shadow-sm ${isActive ? 'translate-x-4' : ''}`}></div>
                    </label>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-colors ${isExpanded ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}`}
                    >
                        {isExpanded ? <X className="w-4 h-4 text-gray-500" /> : <Pencil className="w-4 h-4 text-gray-500" />}
                    </button>
                </div>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="mt-6 ml-[60px] pr-12">
                    <div className="flex gap-10 mb-6">
                        <div className="flex-1">
                            <label className="block text-[11px] font-bold text-gray-700 mb-2">
                                Email Subject <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#16A34A] focus:border-[#16A34A]"
                            />
                        </div>
                        <div>
                            <label className="block text-[11px] font-bold text-gray-700 mb-2">Channels</label>
                            <div className="flex items-center gap-2">
                                {['SMS', 'Email'].map(channel => (
                                    <button
                                        key={channel}
                                        onClick={() => toggleChannel(channel)}
                                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${activeChannels.includes(channel)
                                            ? 'bg-[#DCFCE7] text-[#008236]'
                                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                            }`}
                                    >
                                        {channel}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-[11px] font-bold text-gray-700 mb-2">Recipients</label>
                        <div className="flex flex-wrap gap-2">
                            {allRecipients.map(recipient => {
                                const isSelected = notification.to.includes(recipient);
                                return (
                                    <button
                                        key={recipient}
                                        className={`px-4 py-1.5 rounded-full text-[11px] font-medium border transition-colors ${isSelected
                                            ? 'bg-[#DCFCE7] text-[#008236] border-[#99E8B5]'
                                            : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        {recipient}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-[11px] font-bold text-gray-700 mb-2">Template Body</label>
                        <textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 h-40 focus:outline-none focus:ring-1 focus:ring-[#16A34A] focus:border-[#16A34A] resize-none"
                            placeholder="Enter template body here..."
                        />
                    </div>

                    <div className="flex justify-end gap-3">
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-[#16A34A] rounded-lg hover:bg-[#10883c] transition-colors">
                            <FileText className="w-4 h-4" />
                            Save Template
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
