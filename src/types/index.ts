export interface Feature {
  id: string;
  name: string;
  description: string;
  complexity: 'Low' | 'Medium' | 'High';
  estimatedHours: number;
  subFeatures?: Feature[];
}

export interface Estimation {
  id: string;
  projectId: string;
  features: Feature[];
  totalHours: number;
  riskBuffer: number;
  totalWithBuffer: number;
  hourlyRate: number;
  totalCost: number;
  assumptions: string[];
  createdAt: Date;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  requirements: string;
  status: 'draft' | 'estimated' | 'completed';
  estimation?: Estimation;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
}
