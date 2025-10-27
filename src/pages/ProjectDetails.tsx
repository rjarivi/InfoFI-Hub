import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ResponsiveNavigation } from "@/components/responsive-navigation";
import { MobileFloatingProjectSelector } from "@/components/mobile-floating-project-selector";
import { LanguageSelector } from "@/components/language-selector";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { useIsMobile } from "@/hooks/use-mobile";
import { projectsData, translateProject } from "@/data/projects";
import { 
  Globe,
  Copy,
  Check,
  ExternalLink,
  ArrowLeft,
  Calendar,
  Users,
  Clock,
  Trophy,
  Heart
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
  galxe: "/assets/Info Fi Logo/Galxe.svg",
  pulse: "/assets/Info Fi Logo/Pulse.svg",
  stake: "/assets/Info Fi Logo/stake.jpg"
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

const mainMenuItems = menuItems;

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [project, setProject] = useState<any>(null);
  const isMobile = useIsMobile();
  const [isPortrait, setIsPortrait] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(orientation: portrait)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mql = window.matchMedia("(orientation: portrait)");
    const handleChange = () => setIsPortrait(mql.matches);
    mql.addEventListener("change", handleChange);
    setIsPortrait(mql.matches);
    return () => mql.removeEventListener("change", handleChange);
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projectId) {
      // Find the project across all platforms
      const allProjects = Object.values(projectsData).flat();
      const foundProject = allProjects.find(p => p.id === projectId);
      
      if (foundProject) {
        const translatedProject = translateProject(foundProject, language);
        setProject(translatedProject);
      }
      setLoading(false);
    }
  }, [projectId, language]);

  // Copy referral code to clipboard
  const copyReferralCode = async () => {
    if (project?.referralCode) {
      try {
        await navigator.clipboard.writeText(project.referralCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy referral code:', err);
      }
    }
  };

  // Helper function to translate common values
  const translateValue = (value: string): string => {
    if (value === "To Be Confirmed") return t("toBeConfirmed");
    if (value === "TBD") return t("tbd");
    return value;
  };

  // Check if project is ended
  const isEnded = project?.status === 'ended' || project?.timeLeft === "ENDED";

  const handleProjectClick = (id: string) => {
    navigate('/');
    // The main page will handle setting the active tab
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

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
              {(!isMobile || !isPortrait) && (
                <ResponsiveNavigation
                  mainItems={mainMenuItems}
                  overflowItems={[]}
                  activeItem="all"
                  onItemClick={handleProjectClick}
                  showResourcesButton={false}
                />
              )}
            </div>
            
            {/* Language Selector */}
            <div className="flex-shrink-0">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Floating bottom project selector for mobile/tablet portrait only */}
      <MobileFloatingProjectSelector
        mainItems={mainMenuItems}
        overflowItems={[]}
        activeItem={"all"}
        onItemChange={handleProjectClick}
      />

      {/* Main Content */}
      <main className="flex-1 w-full px-4 md:px-6 py-6 md:py-8">
        <motion.div 
          className="flex flex-col gap-4 mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
            <h2 className="text-lg md:text-xl font-bold">
              {project.title}
            </h2>
            <Badge variant="secondary" className="neon-border">
              {project.category}
            </Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full"
        >
          {/* Project Header */}
          <Card className="glass-card border-border/50 mb-6">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                {project.logo && (
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted/20 ring-1 ring-border/50">
                    <img src={project.logo} alt={`${project.platform} logo`} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    {project.additionalData?.isNew === "true" && (
                      <Badge variant="default" className="bg-green-500 text-white text-xs px-2 py-1 animate-pulse">
                        NEW
                      </Badge>
                    )}
                    {project.additionalData?.miniCampaign === "true" && (
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs px-2 py-1">
                        {project.additionalData?.miniCampaignNote || "Mini Campaigns"}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-lg">@{project.additionalData?.xHandle || project.platform} • {project.category}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Reward Pool Details */}
          <Card className="glass-card border-border/50 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Reward Pool
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <div className="text-sm text-muted-foreground mb-2">{t("rewardPool")}</div>
                <div className="text-3xl font-bold text-primary mb-2">{translateValue(project.rewardPool)}</div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Stats */}
          <Card className="glass-card border-border/50 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Project Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">{t("participants")}</div>
                  <div className="font-medium">{translateValue(project.participants)}</div>
                </div>
                <div className="p-4 rounded-lg bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">{t("timeLeft")}</div>
                  <div className="font-medium">{translateValue(project.timeLeft)}</div>
                </div>
                <div className="p-4 rounded-lg bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">{t("status")}</div>
                  <div className={`font-medium ${isEnded ? 'text-red-500' : 'text-green-500'}`}>
                    {isEnded ? t("ended") : t("active")}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">{t("platform")}</div>
                  <div className="font-medium">{project.platform}</div>
                </div>
                {project.claimPeriod && (
                  <div className="p-4 rounded-lg bg-muted/30">
                    <div className="text-sm text-muted-foreground mb-1">{t("claimPeriod")}</div>
                    <div className="font-medium">{project.claimPeriod}</div>
                  </div>
                )}
                {project.vestingSchedule && (
                  <div className="p-4 rounded-lg bg-muted/30">
                    <div className="text-sm text-muted-foreground mb-1">{t("vestingSchedule")}</div>
                    <div className="font-medium">{project.vestingSchedule}</div>
                  </div>
                )}
                {project.distributionPlatform && (
                  <div className="p-4 rounded-lg bg-muted/30">
                    <div className="text-sm text-muted-foreground mb-1">{t("distributionPlatform")}</div>
                    <div className="font-medium">{project.distributionPlatform}</div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Campaign Rules */}
          {project.campaignRules && project.campaignRules.length > 0 && (
            <Card className="glass-card border-border/50 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Campaign Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <div className="text-sm font-semibold text-green-600 mb-3">{t("campaignRules")}</div>
                  <ul className="space-y-2">
                    {project.campaignRules.map((rule: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Additional Data */}
          {project.additionalData && (
            <Card className="glass-card border-border/50 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Additional Info - Main content */}
                  {project.additionalData.additionalInfo && (
                    <div className="p-4 rounded-lg bg-muted/30">
                      <div className="text-sm text-muted-foreground mb-2">Additional Information</div>
                      <div className="text-sm font-medium leading-relaxed whitespace-pre-line">{project.additionalData.additionalInfo}</div>
                    </div>
                  )}
                  
                  {/* Creator Guide Link */}
                  {project.additionalData.creatorGuide && (
                    <div className="p-4 rounded-lg bg-muted/30">
                      <div className="text-sm text-muted-foreground mb-2">Creator Guide</div>
                      <a 
                        href={project.additionalData.creatorGuide} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Creator Guide
                      </a>
                    </div>
                  )}
                  
                  {/* Other additional data fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.additionalData.bakers && (
                      <div className="p-4 rounded-lg bg-muted/30">
                        <div className="text-sm text-muted-foreground mb-1">Bakers</div>
                        <div className="font-medium">{project.additionalData.bakers}</div>
                      </div>
                    )}
                    {project.additionalData.airdropRecipients && (
                      <div className="p-4 rounded-lg bg-muted/30">
                        <div className="text-sm text-muted-foreground mb-1">Airdrop Recipients</div>
                        <div className="font-medium">{project.additionalData.airdropRecipients}</div>
                      </div>
                    )}
                    {project.additionalData.crumbsDistributed && (
                      <div className="p-4 rounded-lg bg-muted/30">
                        <div className="text-sm text-muted-foreground mb-1">Crumbs Distributed</div>
                        <div className="font-medium">{project.additionalData.crumbsDistributed}</div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Referral Code Section */}
          {project.referralCode && (
            <Card className="glass-card border-border/50 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Copy className="w-5 h-5 text-primary" />
                  Referral Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted/50 rounded-lg border border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {t("enterReferralCode")}
                      </p>
                      <p className="text-lg font-mono font-bold text-foreground">
                        {project.referralCode}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyReferralCode}
                      className="ml-3 h-8 w-8 p-0"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Links Section */}
          {(project.source || project.platform || project.zealyLink) && (
            <Card className="glass-card border-border/50 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {project.source && (
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                      <span className="text-sm text-muted-foreground">Source:</span>
                      <a 
                        href={project.source} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        Visit Source
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                  {(project.additionalData?.xHandle || project.platform) && (
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                      <span className="text-sm text-muted-foreground">X Profile:</span>
                      <a 
                        href={`https://x.com/${project.additionalData?.xHandle || project.platform}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        @{project.additionalData?.xHandle || project.platform}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                  {project.zealyLink && (
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                      <span className="text-sm text-muted-foreground">Zealy:</span>
                      <a 
                        href={project.zealyLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        Join Quest
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <Card className="glass-card border-border/50">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                {project.platformLink && (
                  <Button 
                    variant="outline" 
                    className="flex-1 font-medium transition-all duration-200"
                    asChild={true}
                  >
                    <a href={project.platformLink} target="_blank" rel="noopener noreferrer">
                      Visit {project.platform}
                    </a>
                  </Button>
                )}
                <Button 
                  variant="default" 
                  className={`${project.platformLink ? 'flex-1' : 'w-full'} font-medium shadow-lg transition-all duration-200 bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-xl`}
                  asChild={true}
                >
                  {isEnded ? (
                    <a href={project.referralLink || project.link} target="_blank" rel="noopener noreferrer">
                      {t("viewProject")}
                    </a>
                  ) : (
                    <a href={project.referralLink || project.link} target="_blank" rel="noopener noreferrer">
                      Join {project.title}
                    </a>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
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
                  <span className="text-sm font-medium">Project Details</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-neon-cyan" />
                  <span className="text-sm font-medium">Community Driven</span>
                </div>
              </div>
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

export default ProjectDetails;

