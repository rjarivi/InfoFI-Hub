import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ResponsiveNavigation } from "@/components/responsive-navigation";
import { MobileFloatingProjectSelector } from "@/components/mobile-floating-project-selector";
import { LanguageSelector } from "@/components/language-selector";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/hooks/use-language";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import { 
  Globe,
  BookOpen,
  Palette,
  Smile,
  ExternalLink,
  Calendar,
  User,
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

const Resources = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { t, language } = useLanguage();
  const navigate = useNavigate();
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

  const handleProjectClick = (id: string) => {
    navigate('/');
    // The main page will handle setting the active tab
  };

  const guides = [
    {
      id: "content-writing-guide",
      title: "The Power of Good Content Writing",
      author: "@big_sensei1",
      authorImage: "https://pbs.twimg.com/profile_images/1959559098308972544/cWZVwu6t_400x400.jpg",
      date: "Mar 29, 2025",
      time: "12:55 PM",
      content: `Imagine this…

You're scrolling through Twitter, and suddenly, a tweet catches your eye. You stop, read it, and even reply. Ever wonder why?

That's the power of good content writing. If you want people to stop, read, and engage with your posts, here's what you need to do:

➭ Start with a strong hook. If your first sentence is boring, no one will read the rest. 

➭ Big blocks of text are hard to read. Keep your sentences short and space it after 3-4 lines so people don't get tired.

➭ Know what you're talking about. If you can't explain it in your own words, you don't understand it well enough. Learn first, then write.

➭ Talk to your readers. Ask them questions. Make them feel like they're part of the conversation.

➭ People relate more to stories! Instead of just giving facts, turn them into a fun or interesting story 

➭ No need for big words. Write like you're talking to a friend.

➭ Use pictures. An image can grab attention faster than words.

➭ End with a question. Want more people to comment? Ask them what they think!

Now, tell me what's the hardest part about writing for you? Let's see how I can help`,
      category: "Content Creation",
      tags: ["writing", "engagement", "social media", "tips"]
    }
  ];

  const creatives = [
    {
      id: "creative-1",
      title: "Coming Soon",
      description: "Creative resources and templates will be added here soon.",
      category: "Templates",
      tags: ["coming soon"]
    }
  ];

  const memes = [
    {
      id: "meme-1", 
      title: "Coming Soon",
      description: "Meme templates and viral content will be added here soon.",
      category: "Memes",
      tags: ["coming soon"]
    }
  ];

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
                  activeItem={activeTab}
                  onItemClick={handleProjectClick}
                  showResourcesButton={true}
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
        activeItem={activeTab}
        onItemChange={handleProjectClick}
      />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 md:px-6 py-6 md:py-8">
        <motion.div 
          className="flex flex-col gap-4 mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
            <h2 className="text-lg md:text-xl font-bold">
              Resources
            </h2>
            <Badge variant="secondary" className="neon-border">
              Guides & Content
            </Badge>
          </div>
        </motion.div>

        {/* Resources Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full grid-cols-3 glass-card">
              <TabsTrigger value="guides" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Guides
              </TabsTrigger>
              <TabsTrigger value="creatives" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Creatives
              </TabsTrigger>
              <TabsTrigger value="memes" className="flex items-center gap-2">
                <Smile className="w-4 h-4" />
                Memes
              </TabsTrigger>
            </TabsList>

            {/* Guides Tab */}
            <TabsContent value="guides" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {guides.map((guide, index) => (
                  <motion.div
                    key={guide.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card className="h-full glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {guide.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight">
                          {guide.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <img 
                            src={guide.authorImage} 
                            alt={guide.author}
                            className="w-6 h-6 rounded-full border border-border/50"
                          />
                          <span className="text-sm">{guide.author}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-6">
                            {guide.content.split('\n').slice(0, 8).join('\n')}...
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{guide.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>{guide.time}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {guide.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs px-2 py-1">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full"
                          asChild
                        >
                          <a 
                            href={`https://x.com/${guide.author.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="w-3 h-3" />
                            View on X
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Creatives Tab */}
            <TabsContent value="creatives" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {creatives.map((creative, index) => (
                  <motion.div
                    key={creative.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card className="h-full glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {creative.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight">
                          {creative.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <div className="flex-1">
                          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                            {creative.description}
                          </CardDescription>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mt-4">
                          {creative.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs px-2 py-1">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Memes Tab */}
            <TabsContent value="memes" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {memes.map((meme, index) => (
                  <motion.div
                    key={meme.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card className="h-full glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {meme.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight">
                          {meme.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <div className="flex-1">
                          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                            {meme.description}
                          </CardDescription>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mt-4">
                          {meme.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs px-2 py-1">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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
                  <span className="text-sm font-medium">Resources</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-neon-cyan" />
                  <span className="text-sm font-medium">Community Guides</span>
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

export default Resources;
