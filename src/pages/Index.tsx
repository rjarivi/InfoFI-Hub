import { useState } from "react";
import { BubbleMenu } from "@/components/ui/bubble-menu";
import { ProjectCard } from "@/components/project-card";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Brain,
  MessageSquare, 
  Link2,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Globe,
  ExternalLink
} from "lucide-react";

const projectLogos = {
  kaito: "/assets/Info Fi Logo/Kaito.svg",
  bantr: "/assets/Info Fi Logo/Bantr.svg",
  wallchain: "/assets/Info Fi Logo/wallchainsvg.svg",
  cookie: "/assets/Info Fi Logo/Cookie.svg",
  rey: "/assets/Info Fi Logo/Rey.svg",
  aira: "/assets/Info Fi Logo/Aira.svg",
  breadcrumbs: "/assets/Info Fi Logo/Breadcrumbs.svg",
  mindoai: "/assets/Info Fi Logo/MindoAi.svg",
  parle: "/assets/Info Fi Logo/parle.svg",
  pulse: "/assets/Info Fi Logo/Pulse.svg"
};

const referralLinks = {
  kaito: "https://metawin.com/rjarivi/",
  bantr: "https://t.co/gu1phQxNsd",
  xeet: "https://www.xeet.ai/refer/godofbayc",
  wallchain: "https://app.wallchain.xyz/leaderboards?ref=godofbayc",
  cookie: "https://www.cookie.community/?referral=ZTJjZGE2ZjE1MmE2LTM5N2ItOGU1NC01NDQ4LWQyMjRhNTg0",
  rey: "https://app.rey.xyz/rjarivi"
};

const menuItems = [
  { id: "all", label: "All Projects", icon: <Globe className="w-4 h-4" /> },
  { id: "kaito", label: "Kaito", logo: projectLogos.kaito },
  { id: "bantr", label: "Bantr", logo: projectLogos.bantr },
  { id: "xeet", label: "Xeet", logo: "https://www.xeet.ai/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1947308130301255680%2FZ71pe0B2_400x400.png&w=32&q=75" },
  { id: "wallchain", label: "Wallchain", logo: projectLogos.wallchain },
  { id: "pulse", label: "Pulse", logo: projectLogos.pulse },
  { id: "aira", label: "Aira", logo: projectLogos.aira },
  { id: "mindoai", label: "MindoAi", logo: projectLogos.mindoai },
  { id: "cookie", label: "Cookie", logo: projectLogos.cookie },
  { id: "rey", label: "Rey", logo: projectLogos.rey },
  { id: "breadcrumbs", label: "Breadcrumbs", logo: projectLogos.breadcrumbs },
  { id: "parle", label: "Parle", logo: projectLogos.parle }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");

  const getAllProjects = () => {
    return Object.values(projectsData).flat();
  };

  const getActiveProjects = () => {
    if (activeTab === "all") {
      return getAllProjects();
    }
    return projectsData[activeTab] || [];
  };

  const activeProjects = getActiveProjects();
  const totalProjects = getAllProjects().length;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-16 h-14 rounded-xl glass-card p-2 flex items-center justify-center">
                <img 
                  src="/InfoFI-Icon.svg" 
                  alt="InfoFi Hub" 
                  className="w-10 h-10"
                />
              </div>
            </div>
            
            {/* Navigation Menu */}
            <div className="flex-1 flex justify-center">
              <BubbleMenu
                items={menuItems}
                activeItem={activeTab}
                onItemClick={setActiveTab}
              />
            </div>
            
            {/* Right spacer for balance */}
            <div className="flex-shrink-0 w-16"></div>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="flex-1 container mx-auto px-6 py-8">
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">
              {activeTab === "all" ? "All Projects" : menuItems.find(item => item.id === activeTab)?.label}
            </h2>
            <Badge variant="secondary" className="neon-border">
              {activeProjects.length} projects
            </Badge>
          </div>
          
          {/* CTA Button for platforms with referral links */}
          {activeTab !== "all" && referralLinks[activeTab as keyof typeof referralLinks] && (
            <Button 
              variant="outline" 
              size="sm"
              className="neon-border hover:bg-primary/10"
              asChild
            >
              <a 
                href={referralLinks[activeTab as keyof typeof referralLinks]} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Haven't joined yet? Join Now</span>
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            </Button>
          )}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {activeProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {activeProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try selecting a different category or check back later.</p>
          </motion.div>
        )}
      </main>

      {/* Footer with InfoFi Hub Info */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-neon-cyan/10 via-background to-neon-purple/10 border-t border-border/50">
        <div className="container mx-auto px-6 py-12">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <TrendingUp className="w-8 h-8 text-neon-cyan" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
                InfoFi Hub
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover and participate in cutting-edge InfoFi projects. Earn rewards, build communities, 
              and shape the future of decentralized information finance.
            </p>
            
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" />
                <span className="text-sm font-medium">{totalProjects} Active Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm font-medium">1000+ Contributors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;