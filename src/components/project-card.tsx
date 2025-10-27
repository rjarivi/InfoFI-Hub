import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/use-language";
import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  id: string;
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
  id,
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
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

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

  // Handle card click to navigate to details page
  const handleCardClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div 
      className={cn(
            "group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 transition-all duration-300 cursor-pointer",
            "hover:scale-[1.02] hover:shadow-lg hover:border-primary/50 hover:bg-card/80",
            "min-h-[520px] h-full flex flex-col",
            isEnded && "opacity-75",
      className
      )}
      onClick={handleCardClick}
    >
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
                     <div className="mb-4 flex justify-between items-center">
                       <a 
                         href={source} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-xs text-muted-foreground hover:text-primary transition-colors"
                         onClick={(e) => e.stopPropagation()}
                       >
                         {t("viewSource")}
                       </a>
                       {additionalData?.miniCampaign === "true" && (
                         <span className="text-xs text-blue-500 font-medium">
                           {additionalData?.miniCampaignNote || "Mini Campaigns"}
                         </span>
                       )}
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
  );
};