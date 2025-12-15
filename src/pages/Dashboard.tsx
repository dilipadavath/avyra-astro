import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { useAppStore } from '@/store/useAppStore';
import { Plus, FolderOpen, Clock, DollarSign, Trash2, ArrowRight, FileText } from 'lucide-react';
import { useEffect } from 'react';

export default function Dashboard() {
  const { isAuthenticated, user, projects, deleteProject } = useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-muted text-muted-foreground';
      case 'estimated': return 'bg-primary/20 text-primary';
      case 'completed': return 'bg-complexity-low/20 text-complexity-low';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Welcome, {user?.name}!</h1>
              <p className="text-muted-foreground mt-1">Manage your project estimates</p>
            </div>
            <Link to="/new-project">
              <Button variant="hero">
                <Plus className="h-4 w-4" />
                New Project
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Card className="glass border-border/50">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FolderOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{projects.length}</p>
                  <p className="text-sm text-muted-foreground">Total Projects</p>
                </div>
              </CardContent>
            </Card>
            <Card className="glass border-border/50">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {projects.reduce((acc, p) => acc + (p.estimation?.totalWithBuffer || 0), 0)}h
                  </p>
                  <p className="text-sm text-muted-foreground">Total Hours</p>
                </div>
              </CardContent>
            </Card>
            <Card className="glass border-border/50">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    ${projects.reduce((acc, p) => acc + (p.estimation?.totalCost || 0), 0).toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects List */}
          <Card>
            <CardHeader>
              <CardTitle>Your Projects</CardTitle>
              <CardDescription>View and manage your project estimates</CardDescription>
            </CardHeader>
            <CardContent>
              {projects.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No projects yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Create your first project to get an AI-powered estimate.
                  </p>
                  <Link to="/new-project">
                    <Button>
                      <Plus className="h-4 w-4" />
                      Create Project
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-4 rounded-lg glass hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-medium truncate">{project.name}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {project.description || 'No description'}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 ml-4">
                        {project.estimation && (
                          <div className="text-right hidden sm:block">
                            <p className="font-medium text-primary">
                              {project.estimation.totalWithBuffer}h
                            </p>
                            <p className="text-sm text-muted-foreground">
                              ${project.estimation.totalCost.toLocaleString()}
                            </p>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Link to={`/project/${project.id}`}>
                            <Button variant="ghost" size="sm">
                              View
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => deleteProject(project.id)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
