import { Calendar, Download, Mail, Award, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/data/social-links';

export function Contact() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          I'm always open to discussing QA opportunities, sharing insights, or exploring how I can contribute to your team's success.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="p-6 transform hover:scale-[1.01] transition-all duration-200">
          <h3 className="text-xl font-semibold mb-4">Professional Networks</h3>
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                className="w-full justify-start gap-2 hover:scale-105 transition-transform"
                onClick={() => window.open(link.url, '_blank')}
              >
                {link.icon}
                {link.name}
              </Button>
            ))}
          </div>
        </Card>

        <Card className="p-6 transform hover:scale-[1.01] transition-all duration-200">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-4">
            <Button
              className="w-full justify-start gap-2 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] hover:opacity-90 animate-pulse"
              onClick={() => window.open('https://calendly.com/qa-babloo/15min', '_blank')}
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Button>
            
            <Button
              variant="outline"
              className="w-full justify-start gap-2 hover:scale-105 transition-transform"
              onClick={() => window.open('https://drive.google.com/file/d/1Sw3_gedPT73DuwVqL_ac04RefYmdZll-/view?usp=sharing', '_blank')}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start gap-2 hover:scale-105 transition-transform"
              onClick={() => window.open('mailto:bablooshahcse@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5" />
              Send Email
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}