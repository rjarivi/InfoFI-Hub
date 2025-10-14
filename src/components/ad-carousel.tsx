import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AdData {
  id: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const ads: AdData[] = [
  {
    id: "nordvpn",
    image: "/assets/NordVPN-AD.png",
    ctaText: "Get NordVPN",
    ctaLink: "https://refer-nordvpn.com/fQUXOOnCzrU"
  },
  {
    id: "otgstats",
    image: "/assets/otgstats-AD.png",
    ctaText: "Visit OTGstats",
    ctaLink: "https://otgstats.com"
  }
];

export function AdCarousel() {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => 
        prevIndex === ads.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  const currentAd = ads[currentAdIndex];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAd.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-lg max-w-sm"
        >
          {/* Ad Image */}
          <div className="mb-4">
            <img
              src={currentAd.image}
              alt={currentAd.ctaText}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* CTA Button */}
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a
              href={currentAd.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              {currentAd.ctaText}
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {ads.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-8 rounded-full transition-colors duration-300 ${
                  index === currentAdIndex
                    ? "bg-primary"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
