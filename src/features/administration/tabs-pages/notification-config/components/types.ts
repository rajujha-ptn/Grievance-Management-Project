export interface NotificationConfig {
    id: string;
    title: string;
    active: boolean;
    channels: ('SMS' | 'Email')[];
    subtitle: string;
    trigger: string;
    to: string[];
    bodyTemplate?: string;
}

export const MOCK_CORE_NOTIFICATIONS: NotificationConfig[] = [
    {
        id: 'EC-001',
        title: 'Confirmation Window Open',
        active: true,
        channels: ['SMS'],
        subtitle: 'Action Required — Confirm Resolution of Grievance {{id}}',
        trigger: 'Response submitted',
        to: ['Submitter'],
        bodyTemplate: 'Dear {{name}},\n\nYour grievance ({{id}}) is awaiting your confirmation.\n\nPlease log in to the portal to confirm resolution.'
    },
    {
        id: 'EC-002',
        title: 'Submission Received',
        active: true,
        channels: ['SMS', 'Email'],
        subtitle: 'Grievance [{{id}}] Received — OAN Ethiopia',
        trigger: 'Immediately on save',
        to: ['Submitter']
    },
    {
        id: 'EC-003',
        title: 'Duplicate Detected',
        active: true,
        channels: ['SMS', 'Email'],
        subtitle: 'Possible Duplicate Submission — Grievance {{id}}',
        trigger: 'On validation',
        to: ['Submitter']
    },
    {
        id: 'EC-004',
        title: 'Grievance Assigned (Auto-routing)',
        active: false,
        channels: ['Email'],
        subtitle: '[OAN] Grievance {{id}} Assigned — Action Required',
        trigger: 'On auto-routing via SLA',
        to: ['L1 Officer']
    },
    {
        id: 'EC-005',
        title: 'Grievance Assigned (Manual Routing)',
        active: true,
        channels: ['Email'],
        subtitle: '[OAN] Grievance {{id}} Manually Assigned',
        trigger: 'On manual flow assignment',
        to: ['L1 Officer']
    },
    {
        id: 'EC-006',
        title: 'Status -> In Progress',
        active: true,
        channels: ['SMS'],
        subtitle: 'Your Grievance {{id}} is Being Processed',
        trigger: 'Officer accepts ticket',
        to: ['Submitter']
    },
    {
        id: 'EC-007',
        title: 'More Information Requested',
        active: true,
        channels: ['SMS', 'Email'],
        subtitle: 'Additional Information Needed — Grievance {{id}}',
        trigger: 'Officer asks More Info needed',
        to: ['Submitter']
    },
    {
        id: 'EC-008',
        title: 'Submitter Responds to Info Request',
        active: false,
        channels: ['Email'],
        subtitle: 'Submitter Response Received — Grievance {{id}}',
        trigger: 'Submitter provides requested info',
        to: ['L1 Officer']
    },
    {
        id: 'EC-009',
        title: 'Structured Response Sent to Submitter',
        active: true,
        channels: ['SMS', 'Email'],
        subtitle: 'Department Response on Grievance {{id}}',
        trigger: 'Officer submits structured response',
        to: ['Submitter']
    },
    {
        id: 'EC-010',
        title: 'Grievance Confirmed / Resolved',
        active: true,
        channels: ['SMS', 'Email'],
        subtitle: 'Grievance {{id}} Resolved — Thank You',
        trigger: 'Submitter confirms satisfaction',
        to: ['Submitter'],
        bodyTemplate: 'Dear {{name}},\n\nYour grievance ({{id}}) has been marked as Resolved.\n\nWe would appreciate your feedback. Please rate your experience (1-5) at: oan.gov.et/rate/{{id}}\n\nThank you for using the OAN Ethiopia Grievance Portal.'
    }
];

export const MOCK_ESCALATION_NOTIFICATIONS: NotificationConfig[] = [
    {
        id: 'EC-011',
        title: 'Grievance Reopened',
        active: true,
        channels: ['Email'],
        subtitle: '[OAN] Grievance {{id}} Reopened by Submitter',
        trigger: 'Submitter reopens grievance',
        to: ['L1 Officer']
    },
    {
        id: 'EC-012',
        title: 'Auto-closed (No Response)',
        active: true,
        channels: ['SMS', 'Email'],
        subtitle: 'Grievance {{id}} Auto-Closed — No Objection Received',
        trigger: 'Confirmation window expires',
        to: ['Submitter']
    },
    {
        id: 'EC-013',
        title: 'SLA Reminder — 50%',
        active: false,
        channels: ['Email'],
        subtitle: '[Reminder] SLA at 50% — Grievance {{id}}',
        trigger: 'Scheduled job at 50% SLA elapsed',
        to: ['L1 Officer']
    },
    {
        id: 'EC-014',
        title: 'SLA Reminder — 80%',
        active: true,
        channels: ['Email'],
        subtitle: '[URGENT] SLA at 80% — Grievance {{id}}',
        trigger: 'Scheduled job at 80% SLA elapsed',
        to: ['L1 Officer']
    },
    {
        id: 'EC-015',
        title: 'SLA At-Risk Report (Nodal Officer)',
        active: true,
        channels: ['Email'],
        subtitle: 'SLA At-Risk Digest — [Count] Tickets Near Deadline',
        trigger: 'Scheduled job at 80% SLA elapsed',
        to: ['Nodal Officer']
    },
    {
        id: 'EC-016',
        title: 'SLA Breached — L1 Escalation',
        active: true,
        channels: ['Email'],
        subtitle: '[ESCALATED] SLA Breached — Grievance {{id}}',
        trigger: 'SLA deadline passed',
        to: ['Dept Head', 'Nodal Officer']
    },
    {
        id: 'EC-017',
        title: 'SLA Breached — L2 Escalation',
        active: true,
        channels: ['Email'],
        subtitle: '[L2 ESCALATION] 2x SLA Breached — Grievance {{id}}',
        trigger: '2x SLA deadline passed',
        to: ['L2 Officer']
    },
    {
        id: 'EC-020',
        title: 'Manual Escalation by Submitter',
        active: true,
        channels: ['Email'],
        subtitle: '[MANUAL ESCALATION] Grievance {{id}} Escalated by Submitter',
        trigger: 'Submitter triggers escalation via portal',
        to: ['Dept Head', 'Nodal Officer']
    },
    {
        id: 'EC-021',
        title: 'Reassignment Requested',
        active: true,
        channels: ['Email'],
        subtitle: '[OAN] Reassignment Requested — Grievance {{id}}',
        trigger: 'Officer requests reassignment',
        to: ['Nodal Officer']
    }
];
