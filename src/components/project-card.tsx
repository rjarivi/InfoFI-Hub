import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  rewardPool: string;
  participants: string;
  timeLeft: string;
  category: string;
  platform: string;
  link: string;
  image?: string;
  logo?: string;
  source?: string;
  referralLink?: string;
  campaignRules?: string[];
  claimPeriod?: string;
  vestingSchedule?: string;
  distributionPlatform?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  rewardPool,
  participants,
  timeLeft,
  category,
  platform,
  link,
  image,
  logo,
  source,
  referralLink,
  campaignRules,
  claimPeriod,
  vestingSchedule,
  distributionPlatform,
  className
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
    <div className={cn(
            "group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 transition-all duration-300 cursor-pointer",
            "hover:scale-[1.02] hover:shadow-lg hover:border-primary/50 hover:bg-card/80",
            "h-[480px] flex flex-col",
      className
    )}>
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
                  {logo && (
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-muted/20 ring-1 ring-border/50">
                      <img src={logo} alt={`${platform} logo`} className="w-full h-full object-cover" />
              </div>
            )}
            <div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">@{platform}</p>
                <Button 
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  asChild
                >
                  <a href={`https://x.com/${platform}`} target="_blank" rel="noopener noreferrer">
                    <img src="/logo.svg" alt="X" className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            {category}
          </Badge>
        </div>

        {/* Reward Pool */}
              <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                <div className="text-sm text-muted-foreground mb-1">Reward Pool</div>
                <div className="text-xl font-bold text-primary">
            {rewardPool}
          </div>
        </div>

               {/* Description Preview */}
               <div className="flex-1 flex flex-col justify-between">
                 <div>
                   <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                     {description}
                   </p>

                   {/* Source Link */}
                   {source && (
                     <div className="mb-4">
                       <a 
                         href={source} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-xs text-muted-foreground hover:text-primary transition-colors"
                         onClick={(e) => e.stopPropagation()}
                       >
                         View source →
                       </a>
                     </div>
                   )}

                   {/* Stats Preview */}
                   <div className="grid grid-cols-3 gap-3 mb-4">
                     <div className="text-center p-2 rounded-lg bg-muted/30">
                       <div className="text-xs text-muted-foreground mb-1">Participants</div>
                       <div className="text-xs font-medium leading-tight">{participants}</div>
                     </div>
                     <div className="text-center p-2 rounded-lg bg-muted/30">
                       <div className="text-xs text-muted-foreground mb-1">Duration</div>
                       <div className="text-xs font-medium leading-tight">{timeLeft}</div>
                     </div>
                     <div className="text-center p-2 rounded-lg bg-muted/30">
                       <div className="text-xs text-muted-foreground mb-1">Status</div>
                       <div className="text-xs font-medium text-green-500 leading-tight">Active</div>
                     </div>
                   </div>
                 </div>

                 <div>
                   {/* Click hint */}
                   <div className="text-xs text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity mb-3">
                     Click for details
                   </div>

                   {/* View Project Button */}
                   <Button 
                     variant="default" 
                     size="sm"
                     className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                     asChild
                     onClick={(e) => e.stopPropagation()}
                   >
                     <a href={referralLink || link} target="_blank" rel="noopener noreferrer">
                       View Project
                     </a>
                   </Button>
                 </div>
               </div>
      </div>
    </div>
        </DrawerTrigger>

        <DrawerContent className="max-h-[90vh] flex flex-col">
          <DrawerHeader className="text-left flex-shrink-0 relative">
            <div className="flex items-center gap-3 mb-2">
              {logo && (
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted/20 ring-1 ring-border/50">
                  <img src={logo} alt={`${platform} logo`} className="w-full h-full object-cover" />
                </div>
              )}
              <div>
                <DrawerTitle className="text-xl">{title}</DrawerTitle>
                <div className="flex items-center gap-2">
                  <DrawerDescription>@{platform} • {category}</DrawerDescription>
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    asChild
                  >
                    <a href={`https://x.com/${platform}`} target="_blank" rel="noopener noreferrer">
                      <img src="/logo.svg" alt="X" className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Close X Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-8 h-8 w-8 p-0 hover:bg-white/10 hover:text-white/80"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </DrawerHeader>

          <div className="px-4 pb-4 space-y-6 overflow-y-auto flex-1">
            {/* Reward Pool Details */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <div className="text-sm text-muted-foreground mb-2">Reward Pool</div>
              <div className="text-2xl font-bold text-primary mb-2">{rewardPool}</div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>

            {/* Detailed Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="text-sm text-muted-foreground mb-1">Participants</div>
                <div className="font-medium">{participants}</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="text-sm text-muted-foreground mb-1">Duration</div>
                <div className="font-medium">{timeLeft}</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="text-sm text-muted-foreground mb-1">Status</div>
                <div className="font-medium text-green-500">Active</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="text-sm text-muted-foreground mb-1">Platform</div>
                <div className="font-medium">{platform}</div>
              </div>
              {claimPeriod && (
                <div className="p-4 rounded-lg bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">Claim Period</div>
                  <div className="font-medium">{claimPeriod}</div>
                </div>
              )}
              {vestingSchedule && (
                <div className="p-4 rounded-lg bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">Vesting Schedule</div>
                  <div className="font-medium">{vestingSchedule}</div>
                </div>
              )}
              {distributionPlatform && (
                <div className="p-4 rounded-lg bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">Distribution Platform</div>
                  <div className="font-medium">{distributionPlatform}</div>
                </div>
              )}
            </div>

            {/* Campaign Rules */}
            {campaignRules && campaignRules.length > 0 && (
              <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div className="text-sm font-semibold text-green-600 mb-3">Campaign Rules</div>
                <ul className="space-y-2">
                  {campaignRules.map((rule, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Source Link */}
            {source && (
              <div className="p-4 rounded-lg bg-muted/20">
                <div className="text-sm text-muted-foreground mb-2">Source</div>
                <a 
                  href={source} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {source}
                </a>
              </div>
            )}
          </div>

          <DrawerFooter className="flex-row gap-2 flex-shrink-0">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
            <Button 
              className="flex-1"
              asChild
            >
              <a href={referralLink || link} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
