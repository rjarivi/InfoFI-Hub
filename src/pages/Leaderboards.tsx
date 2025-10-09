import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink, Trophy, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface KaitoYapsData {
  user_id: string;
  username: string;
  yaps_all: number;
  yaps_l24h: number;
  yaps_l48h: number;
  yaps_l7d: number;
  yaps_l30d: number;
  yaps_l3m: number;
  yaps_l6m: number;
  yaps_l12m: number;
}

interface WallchainData {
  // Wallchain API structure - will be defined based on their API
  username: string;
  score: number;
  rank: number;
  // Add more fields as needed
}

const Leaderboards = () => {
  const [searchUsername, setSearchUsername] = useState("");
  const [kaitoData, setKaitoData] = useState<KaitoYapsData | null>(null);
  const [wallchainData, setWallchainData] = useState<WallchainData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { t } = useLanguage();

  const handleSearch = async () => {
    if (!searchUsername.trim()) return;
    
    setLoading(true);
    setError("");
    setKaitoData(null);
    setWallchainData(null);

    try {
      // For development, we'll use a proxy or mock data
      // In production, you'd need a backend proxy to handle CORS
      
      // Mock Kaito data for demonstration
      const mockKaitoData: KaitoYapsData = {
        user_id: "123456789",
        username: searchUsername,
        yaps_all: Math.random() * 1000 + 100,
        yaps_l24h: Math.random() * 50,
        yaps_l48h: Math.random() * 100,
        yaps_l7d: Math.random() * 300,
        yaps_l30d: Math.random() * 800,
        yaps_l3m: Math.random() * 900,
        yaps_l6m: Math.random() * 950,
        yaps_l12m: Math.random() * 1000
      };
      
      setKaitoData(mockKaitoData);

      // Mock Wallchain data for demonstration
      const mockWallchainData: WallchainData = {
        username: searchUsername,
        score: Math.random() * 500 + 50,
        rank: Math.floor(Math.random() * 1000) + 1
      };
      
      setWallchainData(mockWallchainData);

      // Note: In production, you would need a backend proxy to handle CORS
      // Example backend endpoint: /api/kaito-yaps?username=${username}
      // The backend would then call the Kaito API and return the data

    } catch (err) {
      setError("Failed to fetch leaderboard data. Please try again.");
      console.error("Error fetching leaderboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl glass-card p-2 flex items-center justify-center">
                <img
                  src="/InfoFI-Icon.svg"
                  alt="InfoFi Hub"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-neon-green" style={{
                fontFamily: 'Gasoek One, sans-serif',
                letterSpacing: '0.027em',
                fontWeight: '400'
              }}>
                Jeet.ing
              </h1>
            </div>
            <div className="text-sm text-muted-foreground">
              Leaderboards
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Leaderboards
            </h1>
            <p className="text-muted-foreground text-lg">
              Search your X username to see your rankings across different projects
            </p>
          </div>

          {/* Search Section */}
          <div className="glass-card p-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your X username (e.g., VitalikButerin)"
                  value={searchUsername}
                  onChange={(e) => setSearchUsername(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-background/50 border border-primary/30 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={loading || !searchUsername.trim()}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Searching..." : "Search"}
              </button>
            </div>
            {error && (
              <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                {error}
              </div>
            )}
          </div>

          {/* Results Section */}
          {(kaitoData || wallchainData) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Kaito Results */}
              {kaitoData && (
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Kaito Yaps</h2>
                    <a
                      href={`https://x.com/${kaitoData.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">All Time</div>
                      <div className="text-lg font-semibold text-foreground">
                        {kaitoData.yaps_all.toFixed(2)}
                      </div>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Last 30 Days</div>
                      <div className="text-lg font-semibold text-foreground">
                        {kaitoData.yaps_l30d.toFixed(2)}
                      </div>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Last 7 Days</div>
                      <div className="text-lg font-semibold text-foreground">
                        {kaitoData.yaps_l7d.toFixed(2)}
                      </div>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Last 24 Hours</div>
                      <div className="text-lg font-semibold text-foreground">
                        {kaitoData.yaps_l24h.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Wallchain Results */}
              {wallchainData && (
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Wallchain</h2>
                    <a
                      href={`https://x.com/${wallchainData.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Score</div>
                      <div className="text-lg font-semibold text-foreground">
                        {wallchainData.score.toFixed(2)}
                      </div>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Rank</div>
                      <div className="text-lg font-semibold text-foreground">
                        #{wallchainData.rank}
                      </div>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Username</div>
                      <div className="text-lg font-semibold text-foreground">
                        @{wallchainData.username}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 glass-card p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">About Leaderboards</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">Kaito Yaps</h4>
                <p className="text-sm">
                  Kaito's Yaps system tracks tokenized attention across social platforms. 
                  Higher scores indicate greater influence and engagement in the crypto community.
                </p>
                <a
                  href="https://docs.kaito.ai/kaito-yaps-tokenized-attention/yaps-open-protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm inline-flex items-center gap-1 mt-1"
                >
                  Learn more <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Wallchain</h4>
                <p className="text-sm">
                  Wallchain provides comprehensive leaderboard data for various crypto projects and communities.
                </p>
                <a
                  href="https://app.wallchain.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm inline-flex items-center gap-1 mt-1"
                >
                  Visit Wallchain <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2">Development Note</h4>
                <p className="text-sm text-blue-300">
                  Currently showing mock data for demonstration. In production, a backend proxy is needed to handle CORS restrictions when calling external APIs directly from the browser.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Leaderboards;
