import { useState } from "react";
import { ResponsiveNavigation } from "@/components/responsive-navigation";
import { LanguageSelector } from "@/components/language-selector";
import { ProjectCard } from "@/components/project-card";
import { HideEndedToggle } from "@/components/hide-ended-toggle";
import { TextPressure } from "@/components/text-pressure";
import { AdCarousel } from "@/components/ad-carousel";
import { projectsData, translateProject } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { usePagination } from "@/hooks/use-pagination";
import { SiteCaptcha } from "@/components/site-captcha";
import { motion } from "framer-motion";
import { 
  Brain,
  MessageSquare, 
  Link2,
  Shield,
  Zap,
  Users,
  Globe,
  ExternalLink,
  Copy,
  Check,
  Heart
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const projectLogos = {
  kaito: "/assets/Info Fi Logo/Kaito.svg",
  bantr: "/assets/Info Fi Logo/Bantr.svg",
  wallchain: "/assets/Info Fi Logo/wallchainsvg.svg",
  cookie: "/assets/Info Fi Logo/Cookie.svg",
  rey: "/assets/Info Fi Logo/Rey.svg",
  aira: "/assets/Info Fi Logo/Aira.svg",
  breadcrumbs: "/assets/Info Fi Logo/Breadcrumbs.svg",
  mindoai: "/assets/Info Fi Logo/MindoAi.svg",
  galxe: "/assets/Info Fi Logo/Galxe.svg",
  pulse: "/assets/Info Fi Logo/Pulse.svg"
};

const referralLinks = {
  kaito: "https://metawin.com/rjarivi/",
  bantr: "https://bantr.fun/?ic=D490AA7",
  xeet: "https://www.xeet.ai/refer/godofbayc",
  wallchain: "https://app.wallchain.xyz/leaderboards?ref=godofbayc",
  cookie: "https://www.cookie.community/?referral=ZTJjZGE2ZjE1MmE2LTM5N2ItOGU1NC01NDQ4LWQyMjRhNTg0",
  rey: "https://app.rey.xyz/rjarivi",
  pulse: "https://www.alphabot.app/pulse/boost/XQ9S9C",
  mindoai: "https://mindoshare.ai/kol?ref=cmg6kqx8u00x0sd3wasc2tbca",
  galxe: "https://app.galxe.com/hub/invite?code=GICyJr43Nj1NKCIpDtJlpV7gSBHFvpYO6y3IpKCZD4=",
};

const menuItems = [
  { id: "all", label: "All Projects", icon: <Globe className="w-4 h-4" /> },
  { id: "kaito", label: "Kaito", logo: projectLogos.kaito },
  { id: "wallchain", label: "Wallchain", logo: projectLogos.wallchain },
  { id: "xeet", label: "Xeet", logo: "https://www.xeet.ai/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1947308130301255680%2FZ71pe0B2_400x400.png&w=32&q=75" },
  { id: "bantr", label: "Bantr", logo: projectLogos.bantr },
  { id: "galxe", label: "Galxe", logo: projectLogos.galxe },
  { id: "cookie", label: "Cookie", logo: projectLogos.cookie },
  { id: "pulse", label: "Pulse", logo: projectLogos.pulse },
  { id: "aira", label: "Aira", logo: projectLogos.aira },
  { id: "mindoai", label: "MindoAi", logo: projectLogos.mindoai },
  { id: "rey", label: "Rey", logo: projectLogos.rey },
  { id: "breadcrumbs", label: "Breadcrumbs", logo: projectLogos.breadcrumbs }
];

      // All navigation items visible in main bar
      const mainMenuItems = menuItems; // All platforms in main bar

      // Overflow items (empty for now, can be used when we add more projects)
      const overflowMenuItems: any[] = [];

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hideEnded, setHideEnded] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(true); // Start as verified to avoid blank screen
  const { t, language } = useLanguage();
  
  const getAllProjects = () => {
    const allProjects = Object.values(projectsData).flat().map(project => translateProject(project, language));
    
    // Filter out ended projects if hideEnded is true
    const filteredProjects = hideEnded 
      ? allProjects.filter(project => project.status !== 'ended' && project.timeLeft !== 'ENDED')
      : allProjects;
    
    // Sort projects to prioritize NEW projects at the top, then by section order
    return filteredProjects.sort((a, b) => {
      const aIsNew = a.additionalData?.isNew === "true";
      const bIsNew = b.additionalData?.isNew === "true";
      
      // If one is new and the other isn't, new one comes first
      if (aIsNew && !bIsNew) return -1;
      if (!aIsNew && bIsNew) return 1;
      
      // If both are new or both are not new, sort by section priority
      // Define section order priority (lower number = higher priority)
      const sectionOrder = {
        'xeet': 1,
        'wallchain': 2,
        'galxe': 3,
        'cookie': 4,
        'kaito': 5,
        'bantr': 6,
        'aira': 7,
        'rey': 8,
        'breadcrumbs': 9,
        'mindoai': 10,
        'pulse': 11
      };
      
      // Get section for each project by checking which section contains it
      const getProjectSection = (project: any) => {
        for (const [sectionName, projects] of Object.entries(projectsData)) {
          if (projects.some(p => p.id === project.id)) {
            return sectionName;
          }
        }
        return 'other';
      };
      
      const aSection = getProjectSection(a);
      const bSection = getProjectSection(b);
      
      const aOrder = sectionOrder[aSection as keyof typeof sectionOrder] || 999;
      const bOrder = sectionOrder[bSection as keyof typeof sectionOrder] || 999;
      
      return aOrder - bOrder;
    });
  };

  const getActiveProjects = () => {
    if (activeTab === "all") {
      return getAllProjects();
    }
    const platformProjects = (projectsData[activeTab] || []).map(project => translateProject(project, language));
    
    // Filter out ended projects if hideEnded is true
    const filteredProjects = hideEnded 
      ? platformProjects.filter(project => project.status !== 'ended' && project.timeLeft !== 'ENDED')
      : platformProjects;
    
    // Sort projects to prioritize NEW projects at the top
    return filteredProjects.sort((a, b) => {
      const aIsNew = a.additionalData?.isNew === "true";
      const bIsNew = b.additionalData?.isNew === "true";
      
      // If one is new and the other isn't, new one comes first
      if (aIsNew && !bIsNew) return -1;
      if (!aIsNew && bIsNew) return 1;
      
      // If both are new or both are not new, maintain original order within the platform
      return 0;
    });
  };

  const allActiveProjects = getActiveProjects();
  const totalProjects = getAllProjects().length;
  
  // Use pagination hook with 9 projects per page
  const {
    currentPage,
    totalPages,
    paginatedItems: activeProjects,
    goToPage,
    nextPage,
    previousPage,
    canGoNext,
    canGoPrevious,
    getVisiblePages,
  } = usePagination(allActiveProjects, {
    itemsPerPage: 9,
    totalItems: allActiveProjects.length,
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="w-full px-4 md:px-6 py-4">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            {/* Logo */}
            <div className="flex-shrink-0 group flex items-center">
              <div className="flex flex-col relative">
                <img 
                  src="/Jeet.ing.svg" 
                  alt="Jeet.ing" 
                  className="h-[2.6rem] md:h-[3.12rem] w-auto"
                />
                {/* Creator badge under the logo - only visible on hover, positioned below logo */}
                <div className="absolute top-full left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 z-10">
                  <a
                    href="https://otgstats.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-emerald-900/60 border border-emerald-700 text-emerald-200 px-2.5 py-1 text-xs hover:bg-emerald-800 transition-colors"
                  >
                    <span className="opacity-80">Creator of</span>
                    <span className="font-medium underline">OTGStats</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Navigation Menu */}
            <div className="flex-1 flex justify-center min-w-0">
              <ResponsiveNavigation
                mainItems={mainMenuItems}
                overflowItems={overflowMenuItems}
                activeItem={activeTab}
                onItemClick={setActiveTab}
              />
            </div>
            
            {/* Language Selector */}
            <div className="flex-shrink-0">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="flex-1 container mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Site Captcha - Temporarily disabled to fix loading issues */}
        {/* {!isCaptchaVerified && (
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SiteCaptcha
              sitekey="0x4AAAAAAABkMYinukE8nzYV0"
              onVerified={() => setIsCaptchaVerified(true)}
              className="max-w-md"
            />
          </motion.div>
        )} */}

        <motion.div 
          className="flex flex-col gap-4 mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
            <h2 className="text-lg md:text-xl font-bold">
              {activeTab === "all" ? t("allProjects") : menuItems.find(item => item.id === activeTab)?.label}
            </h2>
            <Badge variant="secondary" className="neon-border">
              {allActiveProjects.length} {t("projects")}
            </Badge>
            {totalPages > 1 && (
              <Badge variant="outline" className="text-muted-foreground">
                Page {currentPage} of {totalPages}
              </Badge>
            )}
            {/* Hide Ended Projects Toggle */}
            <HideEndedToggle 
              hideEnded={hideEnded} 
              onToggle={setHideEnded}
              className="ml-auto"
            />
          </div>
          
          {/* CTA Button for platforms with referral links */}
          {activeTab !== "all" && referralLinks[activeTab as keyof typeof referralLinks] && (
            <a 
              href={referralLinks[activeTab as keyof typeof referralLinks]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-center gap-2 items-center shadow-xl text-sm glass-card backdrop-blur-md font-semibold isolation-auto border-border/50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-neon-green hover:text-background before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group w-full sm:w-auto neon-border"
            >
              {activeTab !== "all" ? `${t("haventJoined")} ${menuItems.find(item => item.id === activeTab)?.label} yet? ${t("joinNow")}` : t("joinNow")}
              <svg
                className="w-6 h-6 justify-end group-hover:rotate-45 group-hover:bg-background text-foreground ease-linear duration-300 rounded-full border border-border group-hover:border-none p-1 rotate-90"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-foreground group-hover:fill-neon-green"
                ></path>
              </svg>
            </a>
          )}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start"
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
              className="h-full"
            >
              <ProjectCard {...project} className="h-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (canGoPrevious) previousPage();
                    }}
                    className={!canGoPrevious ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {getVisiblePages().map((page, index) => (
                  <PaginationItem key={index}>
                    {typeof page === 'string' && page === '...' ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          goToPage(page as number);
                        }}
                        isActive={typeof page === 'number' && currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (canGoNext) nextPage();
                    }}
                    className={!canGoNext ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </motion.div>
        )}

        {activeProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">{t("noProjectsFound")}</h3>
            <p className="text-muted-foreground">{t("tryDifferentCategory")}</p>
          </motion.div>
        )}
      </main>

      {/* Footer with InfoFi Hub Info */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-neon-cyan/10 via-background to-neon-purple/10 border-t border-border/50">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Main InfoFi Hub Content */}
            <motion.div 
              className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-start gap-2 mb-6 -translate-x-[10%]">
                <img 
                  src="/Jeet.ing.svg" 
                  alt="Jeet.ing" 
                  className="h-[5.4rem] md:h-[7.2rem] w-auto"
                />
              </div>
              
              <div className="flex items-center justify-start gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" />
                  <span className="text-sm font-medium">{totalProjects} {t("activeProjects")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-neon-cyan" />
                  <span className="text-sm font-medium">10+ {t("contributors")}</span>
                </div>
              </div>
            </motion.div>

            {/* Ad Carousel */}
            <motion.div 
              className="w-full lg:w-auto lg:max-w-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AdCarousel />
            </motion.div>
          </div>
          
          {/* Made with Love Section */}
          <motion.div 
            className="mt-8 pt-8 border-t border-border/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>by</span>
              </div>
              
              <a 
                href="https://x.com/rjarivi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <img 
                  src="https://pbs.twimg.com/profile_images/1978094221182529536/Uf7CZDo3_400x400.jpg" 
                  alt="@rjarivi" 
                  className="w-6 h-6 rounded-full border border-border/50 group-hover:border-primary/50 transition-colors"
                />
                <span className="font-medium">@rjarivi</span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;