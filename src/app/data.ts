export interface Folders {
    id: string,
    name: string,
    unread?: number,
    total: number
}

export interface Labels {
    id: string,
    name: string,
    color: string
}

export interface Attachments {
    id: string,
    name: string,
    size: number,
    type: string
}

export interface Email {
    id: string,
    subject: string,
    from: {
        email: string,
        name: string
    },
    to: [{
        email: string,
        name: string
    }],
    timestamp: string,
    folder: string,
    labels: string[],
    isRead: boolean,
    hasAttachments: boolean,
    attachments: Attachments[]
    content: {
        text: string,
        html: string
    },
    thread: string[]
}

export interface Contacts {
    id: string,
    name: string,
    email: string,
    avatar: string,
    frequently_contacted: boolean
}

export interface EmailData {
    folders: Folders[],
    labels: Labels[],
    emails: Email[],
    contacts: Contacts[]
}

export const emailData: EmailData = {
    folders: [
        {
            id: "inbox",
            name: "Inbox",
            unread: 3,
            total: 120
        },
        {
            id: "sent",
            name: "Sent",
            total: 50
        },
        {
            id: "drafts",
            name: "Drafts",
            total: 2
        }
    ],
    labels: [
        {
            id: "work",
            name: "Work",
            color: "#FF4444"
        },
        {
            id: "personal",
            name: "Personal",
            color: "#44FF44"
        }
    ],
    emails: [
        {
            id: "email1",
            subject: "Project Update - Q1 Goals",
            from: {
                email: "kiran@example.com",
                name: "Kiran PV"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: true,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q1-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q1 goals...",
                html: "<div>Hi team,<br/>Here are the Q1 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email2",
            subject: "Project Update - Q2 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 2"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: true,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q2 goals...",
                html: "<div>Hi team,<br/>Here are the Q2 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email3",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 3"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: true,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email4",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 4"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: true,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email5",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 5"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: false,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email6",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 6"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: false,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email7",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 7"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: false,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email8",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 8"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: false,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email9",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 9"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: false,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email10",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 10"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: false,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email11",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 11"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: false,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email12",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 12"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: false,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email13",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 13"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: false,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email14",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 14"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: false,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email15",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 15"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: true,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        },
        {
            id: "email16",
            subject: "Project Update - Q4 Goals",
            from: {
                email: "sarah@example.com",
                name: "Sarah Johnson 16"
            },
            to: [{
                email: "user@example.com",
                name: "Current User"
            }],
            timestamp: "2024-10-30T14:30:00Z",
            folder: "inbox",
            labels: ["work"],
            isRead: false,
            hasAttachments: true,
            attachments: [
                {
                    id: "att1",
                    name: "Q4-Goals.pdf",
                    size: 2048576,
                    type: "application/pdf"
                }
            ],
            content: {
                text: "Hi team,\nHere are the Q4 goals...",
                html: "<div>Hi team,<br/>Here are the Q4 goals...</div>"
            },
            thread: ["email1", "email2"]
        }
    ],
    contacts: [
        {
            id: "contact1",
            name: "Sarah Johnson",
            email: "sarah@example.com",
            avatar: "/avatars/sarah.jpg",
            frequently_contacted: true
        }
    ]
}