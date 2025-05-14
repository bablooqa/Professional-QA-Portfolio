import { useState } from 'react';
import { Check, ArrowRight, Clock, Shield, Sparkles, Bold, Italic, List } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

// Simple className utility function
const classNames = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export function TryBeforeHire() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectScope: '',
    startDate: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '5f588a49-34bc-422a-9425-3312ccbc53fa',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          project_scope: formData.projectScope,
          start_date: formData.startDate,
          subject: `Trial Request from ${formData.name} - ${formData.company}`,
        })
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Trial Request Submitted Successfully",
          description: "We'll get back to you within 24 hours to discuss your project.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectScope: '',
          startDate: '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error Submitting Form",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatText = (type: 'bold' | 'italic' | 'list') => {
    const textarea = document.getElementById('projectScope') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    let newText = textarea.value;

    switch (type) {
      case 'bold':
        newText = 
          textarea.value.substring(0, start) +
          `**${selectedText}**` +
          textarea.value.substring(end);
        break;
      case 'italic':
        newText = 
          textarea.value.substring(0, start) +
          `_${selectedText}_` +
          textarea.value.substring(end);
        break;
      case 'list':
        const lines = selectedText ? selectedText.split('\n') : [''];
        const formattedLines = lines.map(line => `• ${line}`).join('\n');
        newText = 
          textarea.value.substring(0, start) +
          formattedLines +
          textarea.value.substring(end);
        break;
    }

    setFormData({ ...formData, projectScope: newText });
    
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + (type === 'list' ? 2 : (type === 'bold' ? 2 : 1));
      textarea.setSelectionRange(newCursorPos, newCursorPos + selectedText.length);
    }, 0);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text animate-fade-in">
          Experience Quality Assurance Excellence Risk-Free
        </h2>

        <p className="text-lg text-center text-muted-foreground mb-12 animate-fade-in [animation-delay:200ms]">
          Test my expertise with a free 3-day trial period. Get hands-on experience with my QA services, 
          methodologies, and attention to detail before making a commitment. No upfront costs, just pure value.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "1. Submit Request",
              description: "Fill out the trial form with your project details and requirements.",
              icon: <Sparkles className="w-6 h-6" />
            },
            {
              title: "2. Quick Setup",
              description: "We'll have a brief call to align on goals and set up the trial project.",
              icon: <Clock className="w-6 h-6" />
            },
            {
              title: "3. Start Trial",
              description: "Experience 3 days of professional QA services tailored to your needs.",
              icon: <ArrowRight className="w-6 h-6" />
            }
          ].map((step, index) => (
            <Card key={step.title} className={classNames(
              "p-6 text-center animate-fade-in",
              `[animation-delay:${(index + 2) * 200}ms]`
            )}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6 mb-12 animate-fade-in [animation-delay:800ms]">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Trial Terms & Limitations
          </h3>
          <ul className="space-y-3">
            {[
              "3-day trial period with full access to QA services",
              "One specific feature or module testing scope",
              "Detailed testing report and recommendations included",
              "NDA and confidentiality agreement provided",
              "No financial commitment required during trial"
            ].map((term, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary mt-1" />
                <span className="text-muted-foreground">{term}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 animate-fade-in [animation-delay:1000ms]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Start Your Free Trial</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Company Ltd."
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectScope">Project Scope</Label>
              <div className="relative bg-background rounded-md border border-input shadow-sm hover:border-ring focus-within:border-ring focus-within:ring-1 focus-within:ring-ring">
                <div className="flex gap-2 p-2 border-b border-input">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => formatText('bold')}
                  >
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => formatText('italic')}
                  >
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => formatText('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  id="projectScope"
                  name="project_scope"
                  placeholder="Brief description of your testing needs..."
                  required
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="min-h-[200px] resize-y border-0 focus-visible:ring-0 rounded-t-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="startDate">Preferred Start Date</Label>
              <Input
                id="startDate"
                name="start_date"
                type="date"
                required
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              />
            </div>

            <div className="text-sm text-muted-foreground mb-6">
              <h4 className="font-semibold mb-2">Terms and Conditions</h4>
              <p>
                By submitting this form, you agree to participate in a 3-day trial of our QA services. 
                The trial includes testing of one specific feature or module, with a comprehensive report 
                provided at the end. All information shared during the trial period is protected under our 
                confidentiality agreement. No payment is required for the trial period. We reserve the right 
                to decline trial requests based on project scope and availability.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] hover:opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Request Free Trial'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}