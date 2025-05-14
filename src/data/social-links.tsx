import { Linkedin, Github, Code2, Terminal, MessageSquare } from 'lucide-react';

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/qababloo/",
    icon: <Linkedin className="w-5 h-5" />,
    color: "bg-[#0077B5]"
  },
  {
    name: "GitHub",
    url: "https://github.com/bablooqa",
    icon: <Github className="w-5 h-5" />,
    color: "bg-[#333]"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/bablooqa",
    icon: <Code2 className="w-5 h-5" />,
    color: "bg-[#2EC866]"
  },
  {
    name: "Code360",
    url: "https://www.naukri.com/code360/profile/bablooqa",
    icon: <Terminal className="w-5 h-5" />,
    color: "bg-[#FF7555]"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/7888632265?text=Hi%20Babloo",
    icon: <MessageSquare className="w-5 h-5" />,
    color: "bg-[#25D366]"
  }
];