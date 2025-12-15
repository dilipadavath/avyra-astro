import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { useAppStore } from '@/store/useAppStore';
import { toast } from 'sonner';
import { Loader2, Sparkles, ArrowRight, DollarSign } from 'lucide-react';
import { Project, Feature, Estimation } from '@/types';

// AI estimation logic (simulated - would be API call in production)
function generateEstimation(requirements: string, hourlyRate: number): Estimation {
  const features = analyzeRequirements(requirements);
  const totalHours = features.reduce((acc, f) => acc + f.estimatedHours, 0);
  const riskBuffer = Math.round(totalHours * 0.2); // 20% buffer
  const totalWithBuffer = totalHours + riskBuffer;
  const totalCost = totalWithBuffer * hourlyRate;

  return {
    id: crypto.randomUUID(),
    projectId: '',
    features,
    totalHours,
    riskBuffer,
    totalWithBuffer,
    hourlyRate,
    totalCost,
    assumptions: [
      'Requirements are well-defined and stable',
      'Team has experience with the technology stack',
      'No major third-party integration delays',
      'Standard working hours (8h/day)',
      'Includes code review and testing time'
    ],
    createdAt: new Date(),
  };
}

function analyzeRequirements(requirements: string): Feature[] {
  // Simulated AI analysis - in production this would call GPT-4
  const keywords = requirements.toLowerCase();
  const features: Feature[] = [];

  if (keywords.includes('auth') || keywords.includes('login') || keywords.includes('signup')) {
    features.push({
      id: crypto.randomUUID(),
      name: 'User Authentication',
      description: 'Login, signup, password reset, and session management',
      complexity: 'Medium',
      estimatedHours: 16,
    });
  }

  if (keywords.includes('dashboard') || keywords.includes('admin')) {
    features.push({
      id: crypto.randomUUID(),
      name: 'Dashboard & Admin Panel',
      description: 'Main dashboard with metrics, charts, and navigation',
      complexity: 'High',
      estimatedHours: 24,
    });
  }

  if (keywords.includes('api') || keywords.includes('backend') || keywords.includes('database')) {
    features.push({
      id: crypto.randomUUID(),
      name: 'Backend API Development',
      description: 'RESTful API endpoints with database integration',
      complexity: 'High',
      estimatedHours: 32,
    });
  }

  if (keywords.includes('ai') || keywords.includes('gpt') || keywords.includes('openai')) {
    features.push({
      id: crypto.randomUUID(),
      name: 'AI Integration',
      description: 'OpenAI GPT integration with prompt engineering',
      complexity: 'High',
      estimatedHours: 20,
    });
  }

  if (keywords.includes('export') || keywords.includes('pdf') || keywords.includes('report')) {
    features.push({
      id: crypto.randomUUID(),
      name: 'Export & Reporting',
      description: 'PDF and CSV export functionality',
      complexity: 'Medium',
      estimatedHours: 12,
    });
  }

  if (keywords.includes('ui') || keywords.includes('frontend') || keywords.includes('design')) {
    features.push({
      id: crypto.randomUUID(),
      name: 'UI/UX Implementation',
      description: 'Responsive frontend with modern design',
      complexity: 'Medium',
      estimatedHours: 20,
    });
  }

  if (keywords.includes('payment') || keywords.includes('stripe') || keywords.includes('billing')) {
    features.push({
      id: crypto.randomUUID(),
      name: 'Payment Integration',
      description: 'Stripe payment processing and subscription management',
      complexity: 'High',
      estimatedHours: 24,
    });
  }

  if (keywords.includes('notification') || keywords.includes('email')) {
    features.push({
      id: crypto.randomUUID(),
      name: 'Notifications System',
      description: 'Email notifications and in-app alerts',
      complexity: 'Medium',
      estimatedHours: 14,
    });
  }

  if (keywords.includes('search') || keywords.includes('filter')) {
    features.push({
      id: crypto.randomUUID(),
      name: 'Search & Filtering',
      description: 'Advanced search and data filtering',
      complexity: 'Low',
      estimatedHours: 8,
    });
  }

  if (keywords.includes('responsive') || keywords.includes('mobile')) {
    features.push({
      id: crypto.randomUUID(),
      name: 'Mobile Responsiveness',
      description: 'Responsive design for all screen sizes',
      complexity: 'Low',
      estimatedHours: 10,
    });
  }

  // Add base features if not many detected
  if (features.length < 3) {
    features.push(
      {
        id: crypto.randomUUID(),
        name: 'Project Setup & Architecture',
        description: 'Initial project setup, architecture planning, and configuration',
        complexity: 'Low',
        estimatedHours: 8,
      },
      {
        id: crypto.randomUUID(),
        name: 'Core Application Logic',
        description: 'Main application features and business logic',
        complexity: 'Medium',
        estimatedHours: 24,
      },
      {
        id: crypto.randomUUID(),
        name: 'Testing & QA',
        description: 'Unit testing, integration testing, and quality assurance',
        complexity: 'Medium',
        estimatedHours: 16,
      }
    );
  }

  return features;
}

export default function NewProject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [hourlyRate, setHourlyRate] = useState('100');
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, addProject } = useAppStore();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error('Please enter a project name');
      return;
    }
    
    if (!requirements.trim()) {
      toast.error('Please enter project requirements');
      return;
    }

    setIsLoading(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const rate = parseFloat(hourlyRate) || 100;
    const estimation = generateEstimation(requirements, rate);
    
    const project: Project = {
      id: crypto.randomUUID(),
      name: name.trim(),
      description: description.trim(),
      requirements: requirements.trim(),
      status: 'estimated',
      estimation: { ...estimation, projectId: '' },
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    project.estimation!.projectId = project.id;
    
    addProject(project);
    setIsLoading(false);
    
    toast.success('Estimation complete!');
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Create New Project</h1>
            <p className="text-muted-foreground">
              Describe your project and let AI generate an accurate estimate.
            </p>
          </div>

          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Project Details
              </CardTitle>
              <CardDescription>
                Provide detailed requirements for the most accurate estimation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Project Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="e.g., E-commerce Platform"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium text-foreground">
                    Short Description
                  </label>
                  <Input
                    id="description"
                    placeholder="Brief overview of the project"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="requirements" className="text-sm font-medium text-foreground">
                    Project Requirements *
                  </label>
                  <Textarea
                    id="requirements"
                    placeholder="Describe your project in detail. Include features like:
- User authentication and authorization
- Dashboard with analytics
- API integrations
- Payment processing
- Export functionality
- Mobile responsiveness
                    
The more detail you provide, the more accurate the estimate."
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    disabled={isLoading}
                    className="min-h-[200px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="hourlyRate" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Hourly Rate (USD)
                  </label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    placeholder="100"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    disabled={isLoading}
                    min="1"
                    className="max-w-[200px]"
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="hero" size="lg" disabled={isLoading} className="w-full sm:w-auto">
                    {isLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Analyzing with AI...
                      </>
                    ) : (
                      <>
                        Generate Estimate
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
