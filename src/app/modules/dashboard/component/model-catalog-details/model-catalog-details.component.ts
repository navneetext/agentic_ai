import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-catalog-details',
  templateUrl: './model-catalog-details.component.html',
  styleUrls: ['./model-catalog-details.component.scss']
})
export class ModelCatalogDetailsComponent implements OnInit {
  modelCards = [
    {
      title: 'Video Content Analyzer',
      category: 'Public Sector',
      description: 'Processes body cam footage for case analysis, generates insights, and provides a chat-based interface for legal inquiries.',
      lastEdited: 'Edited 4 hours ago'
    },
    {
      title: 'Risk Analyzer',
      category: 'Finance',
      description: 'Scans financial transactions for fraud, anomalies, and risk assessment. Provides real-time alerts on suspicious activities.',
      lastEdited: 'Edited 4 hours ago'
    },
    {
      title: 'Supply Chain Optimizer',
      category: 'Logistic',
      description: 'Scans financial transactions for fraud, anomalies, and risk assessment. Provides real-time alerts on suspicious activities.',
      lastEdited: 'Edited 4 hours ago'
    },
    {
      title: 'Personalized Shopping Assistant',
      category: 'Retail',
      description: 'Scans financial transactions for fraud, anomalies, and risk assessment. Provides real-time alerts on suspicious activities.',
      lastEdited: 'Edited 4 hours ago'
    },
    {
      title: 'Medical Diagnosis Assistant',
      category: 'Healthcare',
      description: 'Processes body cam footage for case analysis, generates insights, and provides a chat-based interface for legal inquiries.',
      lastEdited: 'Edited 4 hours ago'
    },
    {
      title: 'Automated Customer Support AI',
      category: 'E-Commerce',
      description: 'Scans financial transactions for fraud, anomalies, and risk assessment. Provides real-time alerts on suspicious activities.',
      lastEdited: 'Edited 4 hours ago'
    },
    {
      title: 'AI-Powered IT Helpdesk',
      category: 'Hi_Tech',
      description: 'Scans financial transactions for fraud, anomalies, and risk assessment. Provides real-time alerts on suspicious activities.',
      lastEdited: 'Edited 4 hours ago'
    },
    {
      title: 'Humanoid Robotics Assistant',
      category: 'Embodied AI',
      description: 'Scans financial transactions for fraud, anomalies, and risk assessment. Provides real-time alerts on suspicious activities.',
      lastEdited: 'Edited 4 hours ago'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
} 