import React, { useState } from 'react';
import { X, MessageCircle, Clock, FileText, CheckCircle2, AlertCircle, Paperclip, ChevronUp, User, ChevronRight } from 'lucide-react';
import { Grievance } from '../mockData';
import { SidebarHeader } from './components/SidebarHeader';
import { CommentsAndCommunication } from './components/CommentsAndCommunication';
import { SLATracker } from './components/SLATracker';

export function GrievanceDetailSidebar({
  grievance,
  onClose
}: {
  grievance: Grievance | null;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<'response' | 'internal'>('response');

  if (!grievance) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-900/20 z-40 transition-opacity duration-300 ${grievance ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <div className={`fixed inset-y-0 right-0 w-[950px] max-w-[100vw] bg-[#F8F9FA] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${grievance ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Header */}
        <SidebarHeader grievance={grievance} onClose={onClose} />

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="grid grid-cols-3 gap-6">

            {/* Left Column */}
            <div className="col-span-2 flex flex-col gap-6">

              {/* Comments & Communication */}
              <CommentsAndCommunication />

              {/* Response Form */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('response')}
                    className={`flex-1 py-4 px-6 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === 'response' ? 'text-emerald-700 bg-emerald-50/50 border-b-2 border-emerald-500' : 'text-gray-500 hover:bg-gray-50'}`}
                  >
                    <FileText className="h-4 w-4" /> Dept Response (Appendix D)
                  </button>
                  <button
                    onClick={() => setActiveTab('internal')}
                    className={`flex-1 py-4 px-6 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === 'internal' ? 'text-emerald-700 bg-emerald-50/50 border-b-2 border-emerald-500' : 'text-gray-500 hover:bg-gray-50'}`}
                  >
                    <AlertCircle className="h-4 w-4" /> Internal Note
                  </button>
                </div>
                <div className="p-6 flex flex-col gap-5">
                  {activeTab === 'response' ? (
                    <>
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="block text-sm font-bold text-gray-700 mb-1.5">Response Type <span className="text-red-500">*</span></label>
                          <select className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white">
                            <option value="">Select Response Type</option>
                            <option>Initial Acknowledgment</option>
                            <option>Investigation Update</option>
                            <option>Final Resolution</option>
                          </select>
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-bold text-gray-700 mb-1.5">Proposed Closure Date <span className="text-red-500">*</span></label>
                          <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">Action Taken <span className="text-red-500">*</span> <span className="text-gray-400 font-normal">(0/500)</span></label>
                        <textarea rows={3} placeholder="Describe the specific action taken by the department..." className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white resize-none"></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">Resolution Summary <span className="text-red-500">*</span></label>
                        <textarea rows={3} placeholder="Summarize the outcome for the submitter..." className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white resize-none"></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-1.5"><AlertCircle className="h-3.5 w-3.5" /> Internal Notes <span className="text-gray-400 font-normal">(not visible to submitter)</span></label>
                        <textarea rows={2} placeholder="Process gaps, follow-up actions, escalation reasons..." className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white resize-none bg-gray-50"></textarea>
                      </div>
                    </>
                  ) : (
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Internal Note</label>
                      <textarea rows={6} placeholder="Type an internal note here..." className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white resize-none"></textarea>
                    </div>
                  )}
                  <div className="flex justify-end pt-2">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-[#66C38A] hover:bg-[#56A877] text-white font-bold rounded-lg transition-colors shadow-sm text-sm">
                      <FileText className="h-4 w-4" />
                      Submit Response
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="col-span-1 flex flex-col gap-6">

              {/* SLA Tracker */}
              <SLATracker />

              {/* Case Management */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-5 w-5 text-indigo-600" />
                  <h3 className="text-[15px] font-bold text-gray-900">Case Management</h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Status</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white">
                      <option>Select Status</option>
                      <option>In Progress</option>
                      <option>Resolved</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Assigned Officer</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white">
                      <option>Select Status</option>
                      <option>Tigist Alemu</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Department</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white">
                      <option>Select Status</option>
                      <option>Inputs</option>
                    </select>
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer mt-1">
                    <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500" />
                    <span className="text-sm font-medium text-gray-700">Escalated</span>
                  </label>
                  <button className="w-full py-2.5 bg-[#1E8E3E] hover:bg-[#177233] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm text-sm mt-2">
                    <CheckCircle2 className="h-4 w-4" /> Save Assignment
                  </button>
                </div>
              </div>

              {/* Submitter Details */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-5 w-5 text-blue-600" />
                  <h3 className="text-[15px] font-bold text-gray-900">Submitter Details</h3>
                </div>

                <div className="flex items-center gap-3 mb-5 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden shrink-0">
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 text-sm">Abebe Bekele</span>
                    <span className="text-xs text-gray-500">Individual Farmer</span>
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase tracking-wider mt-1 w-max">FYD-9821-0034</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 mb-0.5"><FileText className="h-3 w-3" /> Category</div>
                    <div className="text-sm font-semibold text-gray-800">{grievance.category}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 mb-0.5"><AlertCircle className="h-3 w-3" /> Type</div>
                    <div className="text-sm font-semibold text-gray-800">{grievance.type}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 mb-0.5"><User className="h-3 w-3" /> Location</div>
                    <div className="text-sm font-semibold text-gray-800">{grievance.location}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 mb-0.5"><FileText className="h-3 w-3" /> Kebele</div>
                    <div className="text-sm font-semibold text-gray-800">Kebele 01</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 mb-0.5"><MessageCircle className="h-3 w-3" /> Channel</div>
                    <div className="text-sm font-semibold text-gray-800">Field Officer Assisted</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 mb-0.5"><Clock className="h-3 w-3" /> Submitted</div>
                    <div className="text-sm font-semibold text-gray-800">{grievance.submittedAt}</div>
                  </div>
                </div>
              </div>

              {/* Thread Summary */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Paperclip className="h-5 w-5 text-indigo-600" />
                  <h3 className="text-[15px] font-bold text-gray-900">Thread Summary</h3>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <div className="p-1.5 bg-orange-100 text-orange-600 rounded-md"><FileText className="h-3.5 w-3.5" /></div>
                      Dept responses
                    </div>
                    <span className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs font-bold rounded-full">1</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <div className="p-1.5 bg-blue-100 text-blue-600 rounded-md"><AlertCircle className="h-3.5 w-3.5" /></div>
                      Internal notes
                    </div>
                    <span className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs font-bold rounded-full">1</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <div className="p-1.5 bg-indigo-100 text-indigo-600 rounded-md"><Paperclip className="h-3.5 w-3.5" /></div>
                      Attachments
                    </div>
                    <span className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs font-bold rounded-full">3</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
