export const dashboardStats = {
  overallProgress: 78.65,
  totalCriteria: 95,
  completedCriteria: 52,
  evidenceDocuments: 386,
  evidenceCompleted: 302,
  uploadedToDGA: 258
};

export const projectTimeline = [
  { id: 1, label: 'Kickoff Workshop', date: 'Mar 17', status: 'completed' },
  { id: 2, label: 'Data Collection', date: 'March 18', status: 'completed' },
  { id: 3, label: 'Initial Phase', date: 'May 8', status: 'in_progress' },
  { id: 4, label: 'Verification', date: 'May 9–July 12', status: 'pending' },
  { id: 5, label: 'Completion Reviews', date: 'July 13', status: 'pending' },
  { id: 6, label: 'Cycle Conclusion', date: 'August 21', status: 'pending' }
];

export const perspectiveProgress = [
  {
    id: 1,
    name: 'Strategy And Planning',
    score: 97.78,
    subItems: [
      { name: 'Digital Transformation', items: [1, 2, 3] },
      { name: 'Digital Governance', items: [1, 2, 3] },
      { name: 'Enterprise Architecture', items: [1, 2] }
    ]
  },
  {
    id: 2,
    name: 'Organization And Culture',
    score: 70.83,
    subItems: [
      { name: 'Digital Culture And Environment', items: [1, 2, 3] },
      { name: 'Leadership Development', items: [1, 2, 3, 4] },
      { name: 'Skills & Capacity Building', items: [1, 2, 3] }
    ]
  },
  {
    id: 3,
    name: 'Operations And Execution',
    score: 80.00,
    subItems: [
      { name: 'Business Processes', items: [1, 2, 3, 4] }
    ]
  },
  {
    id: 4,
    name: 'Business Continuity',
    score: 90.59,
    subItems: [
      { name: 'Risk Management', items: [1, 2, 3, 4, 5] },
      { name: 'Business Continuity', items: [1, 2, 3, 4, 5, 6, 7] }
    ]
  },
  {
    id: 5,
    name: 'Information Technology',
    score: 75.00,
    subItems: [
      { name: 'Support Systems', items: [1, 2, 3, 4, 5] },
      { name: 'IT Infrastructure', items: [1, 2, 3, 4, 5, 6, 7] },
      { name: 'Cloud Infrastructure', items: [1, 2, 3] }
    ]
  },
  {
    id: 6,
    name: 'Comprehensive Governance',
    score: 64.44,
    subItems: [
      { name: 'Governance Platforms', items: [1, 2, 3, 4, 5, 6, 7, 8, 9] }
    ]
  },
  {
    id: 7,
    name: 'Channels And Services',
    score: 100,
    subItems: [
      { name: 'Service Quality', items: [1, 2, 3] },
      { name: 'Digital Channels', items: [1, 2, 3, 4] }
    ]
  },
  {
    id: 8,
    name: 'Beneficiary Centralization',
    score: 60.00,
    subItems: [
      { name: 'User Engagement', items: [1, 2, 3, 4] },
      { name: 'User Relationship', items: [1, 2, 3] },
      { name: 'User Experience', items: [1, 2, 3, 4, 5] }
    ]
  },
  {
    id: 9,
    name: 'Government Data',
    score: 87.50,
    subItems: [
      { name: 'Data Governance', items: [1, 2, 3] },
      { name: 'Data Usage & Availability', items: [1, 2, 3] },
      { name: 'Open Data', items: [1, 2, 3] }
    ]
  },
  {
    id: 10,
    name: 'Research And Innovation',
    score: 17.65,
    subItems: [
      { name: 'Innovation', items: [1, 2, 3, 4] },
      { name: 'Creative Solutions', items: [1, 2] }
    ]
  }
];

export const topPerformers = [
  { id: 1, name: 'Ahmed Al-Ali', role: 'Strategy Perspective', score: 96, avatarUrl: 'https://i.pravatar.cc/100?u=ahmed-ali' },
  { id: 2, name: 'Sarah Al-Khaled', role: 'Beneficiary Perspective', score: 94, avatarUrl: 'https://i.pravatar.cc/100?u=sarah-khaled' },
  { id: 3, name: 'Mohammad Al-Mansour', role: 'IT Perspective', score: 92, avatarUrl: 'https://i.pravatar.cc/100?u=mohammad-mansour' }
];

export const recentActivities = [
  {
    id: 1,
    message: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled',
    time: '5 Mins Ago',
    type: 'upload'
  },
  {
    id: 2,
    message: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
    time: '20 Mins Ago',
    type: 'task'
  },
  {
    id: 3,
    message: 'New Criterion "5.3 Digital Identity" Was Created By Admin',
    time: '1 Hour Ago',
    type: 'create'
  }
];

export const monthlyPerformance = [
  { month: 'Jan', value: 75 },
  { month: 'Feb', value: 82 },
  { month: 'Mar', value: 78 },
  { month: 'Apr', value: 85 },
  { month: 'May', value: 72 },
  { month: 'Jun', value: 68 },
  { month: 'Jul', value: 55 },
  { month: 'Aug', value: 60 },
  { month: 'Sept', value: 58 },
  { month: 'Oct', value: 65 },
  { month: 'Nov', value: 75 },
  { month: 'Dec', value: 70 }
];

export const auditReadiness = {
  readinessLevel: 80,
  overdueStds: 12,
  missingEvidence: 5
};

export const perspectiveDetails = {
  id: 'digital-transformation-strategic-planning',
  title: 'Digital Transformation Strategic Planning',
  category: 'Strategy & Planning',
  description: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
  progress: 100,
  evidence: {
    total: 4,
    underReview: 3,
    inProgress: 2,
    completed: 1
  },
  objective: 'Develop A Digital Transformation Strategy Aligned With The Organization\'s Strategy And The Objectives Of Saudi Vision 2030.',
  implementationRequirements: [
    'Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:',
    'A. The Organization\'s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization\'s Overall Strategy.',
    'B. Strategic Initiatives, Programs, And Performance Indicators.',
    'C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives.',
    'D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.'
  ],
  evidenceDocuments: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
  relatedRegulations: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
  scope: 'All Government Entities.',
  leaders: [
    { id: 1, name: 'Ahmed Al-Ali', role: 'Strategy Perspective', avatarUrl: '/perspective/leaders-ahmed.svg' },
    { id: 2, name: 'Ahmed Al-Ali', role: 'Strategy Perspective', avatarUrl: '/perspective/leaders-ahmed-2.svg' }
  ]
};

export const evidenceDocuments = [
  {
    id: 1,
    documentNumber: '5.4.1.1',
    documentName: 'Digital_Transformation_Plan.Pdf',
    documentLead: 'Ahmed Khaled',
    documentPreparer: 'Ahmed Khaled',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'approved'
  },
  {
    id: 2,
    documentNumber: '5.4.1.2',
    documentName: 'KPI_Framework.Xlsx',
    documentLead: 'Mona Hamed',
    documentPreparer: 'Mona Hamed',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'pending_review'
  },
  {
    id: 3,
    documentNumber: '5.4.1.3',
    documentName: 'Roadmap_Version1.Docx',
    documentLead: 'Rami AlSharif',
    documentPreparer: 'Rami AlSharif',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'pending_review'
  }
];

export const comments = [
  {
    id: 1,
    author: 'Sara Ibrahim',
    initials: 'E',
    date: '2025-08-05',
    content: 'Ensure The Plan Includes A Clear Governance Model.'
  },
  {
    id: 2,
    author: 'Mona Hamed',
    initials: 'M',
    date: '2025-08-05',
    content: 'Ensure The Plan Includes A Clear Governance Model.'
  }
];

export const evidenceActivities = [
  { id: 1, message: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif', time: '5 Mins Ago' },
  { id: 2, message: 'KPI_Framework.Xlsx Uploaded By Mona Hamed', time: '20 Mins Ago' },
  { id: 3, message: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team', time: '1 Hour Ago' }
];

export const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', path: '/' },
  { id: 'perspectives', label: 'Perspectives', icon: 'Target', path: '/perspectives' },
  { id: 'tasks', label: 'Tasks', icon: 'CheckSquare', path: '/tasks' },
  { id: 'documents', label: 'Documents', icon: 'FileText', path: '/documents' },
  { id: 'reports', label: 'Reports', icon: 'BarChart3', path: '/reports' },
  { id: 'users', label: 'Users & Roles', icon: 'Users', path: '/users' }
];
