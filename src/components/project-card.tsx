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
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/use-language";
import { useState } from "react";
import { Copy, Check, ChevronDown, ExternalLink } from "lucide-react";

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
  referralCode?: string;
  zealyLink?: string;
  platformLink?: string;
  campaignRules?: string[];
  claimPeriod?: string;
  vestingSchedule?: string;
  distributionPlatform?: string;
  status?: 'active' | 'ended';
  additionalData?: {
    airdropRecipients?: string;
    crumbsDistributed?: string;
    [key: string]: string | undefined;
  };
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
  referralCode,
  zealyLink,
  platformLink,
  campaignRules,
  claimPeriod,
  vestingSchedule,
  distributionPlatform,
  status,
  additionalData,
  className
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  // Copy referral code to clipboard
  const copyReferralCode = async () => {
    if (referralCode) {
      try {
        await navigator.clipboard.writeText(referralCode);
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
  const isEnded = status === 'ended' || timeLeft === "ENDED";

  return (
    <>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
    <div className={cn(
            "group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 transition-all duration-300 cursor-pointer",
            "hover:scale-[1.02] hover:shadow-lg hover:border-primary/50 hover:bg-card/80",
            "min-h-[520px] h-full flex flex-col",
            isEnded && "opacity-75",
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
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                {additionalData?.isNew === "true" && (
                  <Badge variant="default" className="bg-green-500 text-white text-xs px-2 py-1 animate-pulse">
                    NEW
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">@{additionalData?.xHandle || platform}</p>
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
                 <div className="flex-1 flex flex-col">
                   <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-shrink-0">
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
                         {t("viewSource")}
                       </a>
                     </div>
                   )}

                   {/* Stats Preview */}
                   <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
                     <div className="text-center p-2 rounded-lg bg-muted/30">
                       <div className="text-xs text-muted-foreground mb-1">{t("participants")}</div>
                       <div className="text-xs font-medium leading-tight">{translateValue(participants)}</div>
                     </div>
                     <div className="text-center p-2 rounded-lg bg-muted/30">
                       <div className="text-xs text-muted-foreground mb-1">{t("timeLeft")}</div>
                       <div className="text-xs font-medium leading-tight">{translateValue(timeLeft)}</div>
                     </div>
                     <div className="text-center p-2 rounded-lg bg-muted/30">
                       <div className="text-xs text-muted-foreground mb-1">{t("status")}</div>
                       <div className={`text-xs font-medium leading-tight ${isEnded ? 'text-red-500' : 'text-green-500'}`}>
                         {isEnded ? t("ended") : t("active")}
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="flex-shrink-0 mt-auto">
                   {/* Click hint */}
                   <div className="text-xs text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity mb-3">
                     Click for details
                   </div>

                 {/* Referral Code Section */}
                 {referralCode && (
                   <div className="mb-4 p-3 bg-muted/50 rounded-lg border border-border/50">
                     <div className="flex items-center justify-between">
                       <div>
                         <p className="text-sm font-medium text-muted-foreground mb-1">
                           {t("enterReferralCode")}
                         </p>
                         <p className="text-lg font-mono font-bold text-foreground">
                           {referralCode}
                         </p>
                       </div>
                       <Button
                         variant="outline"
                         size="sm"
                         onClick={(e) => {
                           e.stopPropagation();
                           copyReferralCode();
                         }}
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
                 )}

                   {/* Ended Project Support Text */}
                   {isEnded && (
                     <div className="mb-3 p-2 rounded-lg bg-muted/30 border border-border/50">
                       <p className="text-xs text-muted-foreground text-center leading-relaxed">
                         {t("endedProjectSupport")}
                       </p>
                     </div>
                   )}

                   {/* CTA Buttons */}
                   <div className="flex gap-2">
                     {platformLink && (
                       <Button 
                         variant="outline" 
                         size="sm"
                         className="flex-1 font-medium transition-all duration-200"
                         asChild={true}
                         onClick={(e) => e.stopPropagation()}
                       >
                         <a href={platformLink} target="_blank" rel="noopener noreferrer">
                           Visit {platform}
                         </a>
                       </Button>
                     )}
                     <Button 
                       variant="default" 
                       size="sm"
                       className={`${platformLink ? 'flex-1' : 'w-full'} font-medium shadow-lg transition-all duration-200 bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-xl`}
                       asChild={true}
                       onClick={(e) => e.stopPropagation()}
                     >
                       {isEnded ? (
                         <a href={referralLink || link} target="_blank" rel="noopener noreferrer">
                           {t("viewProject")}
                         </a>
                       ) : (
                         <a href={referralLink || link} target="_blank" rel="noopener noreferrer">
                           Join {title}
                         </a>
                       )}
                     </Button>
                   </div>
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
                <div className="flex items-center gap-2">
                  <DrawerTitle className="text-xl">{title}</DrawerTitle>
                  {additionalData?.isNew === "true" && (
                    <Badge variant="default" className="bg-green-500 text-white text-xs px-2 py-1 animate-pulse">
                      NEW
                    </Badge>
                  )}
                </div>
                <DrawerDescription>@{platform} • {category}</DrawerDescription>
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
              <div className="text-sm text-muted-foreground mb-2">{t("rewardPool")}</div>
              <div className="text-2xl font-bold text-primary mb-2">{translateValue(rewardPool)}</div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>

            {/* Detailed Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="text-sm text-muted-foreground mb-1">{t("participants")}</div>
                <div className="font-medium">{translateValue(participants)}</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="text-sm text-muted-foreground mb-1">{t("timeLeft")}</div>
                <div className="font-medium">{translateValue(timeLeft)}</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="text-sm text-muted-foreground mb-1">{t("status")}</div>
                <div className={`font-medium ${isEnded ? 'text-red-500' : 'text-green-500'}`}>
                  {isEnded ? t("ended") : t("active")}
                </div>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="text-sm text-muted-foreground mb-1">{t("platform")}</div>
                <div className="font-medium">{platform}</div>
              </div>
              {claimPeriod && (
                <div className="p-4 rounded-lg bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">{t("claimPeriod")}</div>
                  <div className="font-medium">{claimPeriod}</div>
                </div>
              )}
              {vestingSchedule && (
                <div className="p-4 rounded-lg bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">{t("vestingSchedule")}</div>
                  <div className="font-medium">{vestingSchedule}</div>
                </div>
              )}
              {distributionPlatform && (
                <div className="p-4 rounded-lg bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">{t("distributionPlatform")}</div>
                  <div className="font-medium">{distributionPlatform}</div>
                </div>
              )}
            </div>

            {/* Additional Data */}
            {additionalData && (
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                    <div className="text-sm font-semibold text-blue-600">Additional Information</div>
                    <ChevronDown className="h-4 w-4 text-blue-600 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3">
                    <div className="space-y-3">
                      {/* Additional Info - Main content */}
                      {additionalData.additionalInfo && (
                        <div className="p-3 rounded-lg bg-white/5 border border-blue-500/10">
                          <div className="text-xs text-muted-foreground mb-2">Campaign Updates</div>
                          <div className="text-sm font-medium leading-relaxed">{additionalData.additionalInfo}</div>
                        </div>
                      )}
                      
                      {/* Creator Guide Link */}
                      {additionalData.creatorGuide && (
                        <div className="p-3 rounded-lg bg-white/5 border border-blue-500/10">
                          <div className="text-xs text-muted-foreground mb-2">Creator Guide</div>
                          <a 
                            href={additionalData.creatorGuide} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                          >
                            <ExternalLink className="h-3 w-3" />
                            View Creator Guide
                          </a>
                        </div>
                      )}
                      
                      {/* Other additional data fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {additionalData.bakers && (
                          <div className="p-3 rounded-lg bg-white/5">
                            <div className="text-xs text-muted-foreground mb-1">Bakers</div>
                            <div className="text-sm font-medium">{additionalData.bakers}</div>
                          </div>
                        )}
                        {additionalData.airdropRecipients && (
                          <div className="p-3 rounded-lg bg-white/5">
                            <div className="text-xs text-muted-foreground mb-1">Airdrop Recipients</div>
                            <div className="text-sm font-medium">{additionalData.airdropRecipients}</div>
                          </div>
                        )}
                        {additionalData.crumbsDistributed && (
                          <div className="p-3 rounded-lg bg-white/5">
                            <div className="text-xs text-muted-foreground mb-1">Crumbs Distributed</div>
                            <div className="text-sm font-medium">{additionalData.crumbsDistributed}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            )}

            {/* Campaign Rules */}
            {campaignRules && campaignRules.length > 0 && (
              <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div className="text-sm font-semibold text-green-600 mb-3">{t("campaignRules")}</div>
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

            {/* Special Arbitrum Distribution Details */}
            {title === "Arbitrum Season 2" && (
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <div className="text-sm font-semibold text-blue-600 mb-3">{t("distributionSchedule")}</div>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-white/5">
                    <div className="text-sm font-medium text-blue-500 mb-1">{t("october2025")}</div>
                    <div className="text-lg font-bold text-blue-600">233,333 {t("arbDistributed")}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5">
                    <div className="text-sm font-medium text-blue-500 mb-1">{t("november2025")}</div>
                    <div className="text-lg font-bold text-blue-600">233,333 {t("arbDistributed")}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5">
                    <div className="text-sm font-medium text-blue-500 mb-1">{t("december2025")}</div>
                    <div className="text-lg font-bold text-blue-600">233,334 {t("arbDistributed")}</div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                  <div className="text-sm font-semibold text-yellow-600 mb-2">{t("topLeaderboardRewards")}</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{t("firstPlace")}:</span>
                      <span className="font-bold text-yellow-600">32,000 ARB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{t("secondPlace")}:</span>
                      <span className="font-bold text-yellow-600">29,800 ARB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{t("thirdPlace")}:</span>
                      <span className="font-bold text-yellow-600">27,600 ARB</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20">
                  <div className="text-sm font-semibold text-red-600 mb-2">{t("importantEligibilityNote")}</div>
                  <p className="text-sm text-muted-foreground">
                    {t("arbitrumEligibilityText")}
                  </p>
                </div>
              </div>
            )}

            {/* Ended Project Support Text */}
            {isEnded && (
              <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {t("endedProjectSupport")}
                </p>
              </div>
            )}

            {/* Links Section */}
            {(source || platform || zealyLink) && (
              <div className="p-4 rounded-lg bg-muted/20">
                <div className="text-sm text-muted-foreground mb-3">Links</div>
                <div className="space-y-2">
                  {source && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Source:</span>
                      <a 
                        href={source} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        Visit Source
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                  {(additionalData?.xHandle || platform) && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">X Profile:</span>
                      <a 
                        href={`https://x.com/${additionalData?.xHandle || platform}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        @{additionalData?.xHandle || platform}
                        <img src="/logo.svg" alt="X" className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                  {zealyLink && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Zealy:</span>
                      <a 
                        href={zealyLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        Join Quest
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
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
            {platformLink && (
              <Button 
                variant="outline"
                className="flex-1"
                asChild={true}
              >
                <a href={platformLink} target="_blank" rel="noopener noreferrer">
                  Visit {platform}
                </a>
              </Button>
            )}
            <Button 
              className="flex-1"
              asChild={true}
            >
              {isEnded ? (
                <a href={referralLink || link} target="_blank" rel="noopener noreferrer">
                  {t("viewProject")}
                </a>
              ) : (
                <a href={referralLink || link} target="_blank" rel="noopener noreferrer">
                  Join {title}
                </a>
              )}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
