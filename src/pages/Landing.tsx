import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Zap, 
  Brain, 
  Clock, 
  DollarSign, 
  FileText, 
  Shield, 
  ArrowRight,
  Check,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced GPT-4 reasoning breaks down requirements into actionable features with accurate complexity assessment.',
  },
  {
    icon: Clock,
    title: 'Instant Estimates',
    description: 'Get detailed time and cost breakdowns in seconds, not hours. Save weeks of estimation work.',
  },
  {
    icon: DollarSign,
    title: 'Cost Calculation',
    description: 'Automatic cost projection based on your hourly rates with built-in risk buffers.',
  },
  {
    icon: FileText,
    title: 'Export Reports',
    description: 'Generate professional PDF and CSV reports for client proposals and internal planning.',
  },
  {
    icon: Shield,
    title: 'Risk Assessment',
    description: 'Intelligent risk buffer recommendations based on project complexity and uncertainty.',
  },
  {
    icon: Sparkles,
    title: 'Editable Results',
    description: 'Fine-tune AI-generated estimates with full editing capabilities for each feature.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for individual developers',
    features: ['5 projects/month', 'Basic AI estimation', 'PDF export', 'Email support'],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams and agencies',
    features: ['Unlimited projects', 'Advanced AI analysis', 'PDF & CSV export', 'Priority support', 'Team collaboration', 'Custom hourly rates'],
    cta: 'Start Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: ['Everything in Pro', 'SSO integration', 'API access', 'Dedicated support', 'Custom AI training', 'SLA guarantee'],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] gradient-glow opacity-50" />
        
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Estimation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Estimate Software Projects{' '}
              <span className="text-gradient">in Seconds</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your project requirements into accurate time and cost estimates using advanced AI. 
              Stop guessing, start shipping.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="hero" size="xl">
                  Start Estimating Free
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/#features">
                <Button variant="outline" size="xl">
                  See How It Works
                </Button>
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required • 5 free estimates per month
            </p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 gradient-glow blur-3xl opacity-30" />
              <Card className="glass border-primary/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-secondary/30 px-4 py-3 border-b border-border flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-complexity-medium/60" />
                      <div className="w-3 h-3 rounded-full bg-complexity-low/60" />
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">DevEstimate Dashboard</span>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="glass rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Total Features</div>
                        <div className="text-2xl font-bold text-foreground">24</div>
                      </div>
                      <div className="glass rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Estimated Hours</div>
                        <div className="text-2xl font-bold text-primary">186h</div>
                      </div>
                      <div className="glass rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Total Cost</div>
                        <div className="text-2xl font-bold text-foreground">$18,600</div>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      {['User Authentication', 'Dashboard UI', 'API Integration'].map((feature, i) => (
                        <div key={feature} className="flex items-center justify-between glass rounded-lg p-3">
                          <span className="text-foreground">{feature}</span>
                          <div className="flex items-center gap-4">
                            <span className={`text-sm ${i === 0 ? 'complexity-low' : i === 1 ? 'complexity-medium' : 'complexity-high'}`}>
                              {i === 0 ? 'Low' : i === 1 ? 'Medium' : 'High'}
                            </span>
                            <span className="text-muted-foreground">{8 + i * 8}h</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to{' '}
              <span className="text-gradient">Estimate Accurately</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to give you confidence in your project estimates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary mb-4">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent{' '}
              <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. Scale as you grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`relative h-full ${plan.popular ? 'border-primary shadow-glow' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="gradient-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/signup" className="w-full">
                      <Button 
                        variant={plan.popular ? 'hero' : 'outline'} 
                        className="w-full"
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your{' '}
              <span className="text-gradient">Estimation Process?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of developers who trust DevEstimate for accurate project planning.
            </p>
            <Link to="/signup">
              <Button variant="hero" size="xl">
                Get Started for Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
