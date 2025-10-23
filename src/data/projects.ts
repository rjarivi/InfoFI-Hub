import { Language, TranslationKey } from './translations';

export interface Project {
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
    bakers?: string;
    airdropRecipients?: string;
    crumbsDistributed?: string;
    [key: string]: string | undefined;
  };
}

// Translation mapping for project data
const projectTranslations: Record<Language, Record<string, Partial<Project>>> = {
  en: {
    "breadcrumbs-breadcrumb-cash": {
      title: "Breadcrumb.cash",
      description: "Breadcrumb.cash is a decentralized platform for tracking and managing cryptocurrency transactions and rewards",
      category: "DeFi"
    },
    "breadcrumbs-blackmirror-xp": {
      title: "blackmirror_xp",
      description: "$MIRROR — The Official Black Mirror Token — Built on @korprotocol. Backed by @avax, @solana, @republiccrypto, @animocabrands",
      category: "Token"
    },
    "breadcrumbs-dream-space-hq": {
      title: "Dream Space HQ",
      description: "Dreamspace is the first vibe coding canvas for crypto's creatives ✨ we make it easy for anyone — not just devs — to build, ship, and monetize onchain apps without touching code. dream it → generate it → ship it → monetize it.",
      category: "Development Tools"
    },
    "breadcrumbs-daemons": {
      title: "Dæmons",
      description: "Dæmons is an AI-enabled, Tamagotchi-meets-Pokémon blockchain experience. PvP, PvE and interactive AI-Chat.",
      category: "Gaming"
    },
    "breadcrumbs-bondi-finance": {
      title: "Bondi Finance",
      description: "Bondi Finance tokenizes publicly traded corporate bonds into onchain fixed-income products. Each Bond Token represents fractional exposure to USD-denominated corporate bonds.",
      category: "DeFi"
    },
    "kaito-integra": {
      title: "Integra",
      description: "0.5% of Integra's IRL supply (TGE soon) is allocated to reward Integra's points program and Kaito Creators, Referrers, and Kaito Eco",
      category: "Infrastructure",
      platform: "Kaito",
      link: "https://x.com/integra_layer",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1795808049908621312.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1980671802545217844",
      rewardPool: "0.5% IRL Supply",
      participants: "Creators, Referrers, and Kaito Eco",
      timeLeft: "TGE Soon",
      claimPeriod: "Upcoming",
      vestingSchedule: "TBD",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Breakdown: 0.4% for creators, 0.1% for eco",
        "Post high-quality content about Integra to climb the leaderboard",
        "Rewards are based on leaderboard rank considering content quality, engagement, and consistency with other tasks in the points program",
        "Tag @integra_layer in your posts",
        "Create original, thoughtful content",
        "Do not spam or post low-effort content",
        "Do not plagiarize or copy others' work"
      ],
      additionalData: {
        isNew: "true"
      }
    },
    "kaito-multipli": {
      title: "Multipli Creator Currency",
      description: "100k Crystals / Week (24.7 bps at TGE) - the liquid creator currency of Multipli, built on top of Kaito",
      category: "Creator Economy"
    },
    "kaito-playai": {
      title: "PlayAI",
      description: "0.5% PLAI Supply totally allocated to Top 500 Creators, with bonus allocations to Top 10",
      category: "AI Platform",
      platform: "Kaito",
      link: "https://x.com/playAInetwork",
      platformLink: "https://yaps.kaito.ai/referral/2522887435",
      source: "https://x.com/playAInetwork/status/1975901146016518472",
      referralCode: "rjarivi",
      rewardPool: "0.5% PLAI Supply",
      participants: "Top 500 Creators",
      timeLeft: "Aug 01, 2025 - TBD",
      claimPeriod: "Upcoming",
      vestingSchedule: "No vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Top 500 Yappers, with bonus allocations to Top 10 are rewarded",
        "Rewards distributed with no vesting after 2 snapshots, with 0.25% PLAI during TGE & 0.25% PLAI 1 month after TGE",
        "Prioritize original, thoughtful, and high-quality content over volume",
        "Maintain long-term, consistent engagement, even from smaller accounts",
        "Avoid spam, plagiarism, and misinformation"
      ]
    },
    "kaito-lombard": {
      title: "Lombard",
      description: "The Yapper Program Season 2 is underway — with opportunities to earn $BARD, and become an Official Lombard Ambassador",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/lombard_finance",
      platformLink: "https://yaps.kaito.ai/referral/2522887435",
      source: "https://x.com/Lombard_Finance/status/1970371793228910645",
      rewardPool: "0.8% BARD supply",
      participants: "Top 100 Contributors each month",
      timeLeft: "Jan 01, 2025 - Mar 31, 2026",
      claimPeriod: "Upcoming",
      vestingSchedule: "50% upfront, 50% in 6 months",
      distributionPlatform: "Kaito",
      campaignRules: [
        "BARD is awarded monthly to the top 100 contributors of Lombard based on mindshare",
        "Monthly Rewards: Top 100 Yappers by mindshare will be eligible to claim $BARD",
        "Creative Challenge Weeks: Bonus $BARD for the Top 10 standout creators in originality and knowledge",
        "They are expanding the Ambassador Program — bringing in leaders from across and beyond the Bitcoin ecosystem"
      ]
    },
    "kaito-beldex": {
      title: "Beldex",
      description: "150K USDC to the top 100 30D Creators, split equally over 3 months",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/BeldexCoin",
      source: "https://x.com/BeldexCoin/status/1972957466381148473",
      rewardPool: "$150K USDC ($50K/Month)",
      participants: "Top 100 Creators",
      timeLeft: "Oct 01, 2025 - Dec 31, 2025",
      claimPeriod: "Upcoming",
      vestingSchedule: "No Vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Follow @BeldexCoin on X",
        "Use the hashtag #Beldex in your posts",
        "Pro tip: The more original, engaging, and consistent your content is, the higher you'll climb"
      ]
    },
    "kaito-polygon": {
      title: "Polygon",
      description: "$30K USDC/Month to their top 50 30D Creators",
      category: "Infrastructure"
    },
    "kaito-arbitrum": {
      title: "Arbitrum",
      description: "700,000 ARB will be distributed to the top 150 creators on the Arbitrum Kaito Leaderboard across three monthly distributions (Season 2)",
      category: "Infrastructure",
      campaignRules: [
        "700K ARB distributed in three tranches: October (233,333 ARB), November (233,333 ARB), December (233,334 ARB)",
        "Season 2 features a more balanced algorithm ensuring fair play for creators of all sizes",
        "Distribution tiers: Top 10 (1st: 32,000 ARB, 2nd: 29,800 ARB, 3rd: 27,600 ARB), Next 40, Remaining 100",
        "Monthly distributions based on current leaderboard standings at time of distribution",
        "Arbitrum employees and affiliates are not eligible for grants"
      ]
    },
    "kaito-multibank": {
      title: "MultiBank",
      description: "MultiBank.io is a comprehensive trading platform offering advanced financial services. $150K USDT will be distributed to the top 200 creators based on leaderboard rank, considering content quality, engagement, and consistency.",
      category: "Trading Platform"
    },
    "kaito-warden-protocol": {
      title: "Warden Protocol",
      description: "2.5% WARD over 3 seasons to Warden Protocol Creators, Warden App users and broader Kaito Eco",
      category: "Infrastructure"
    },
    "kaito-talus-network": {
      title: "Talus Network",
      description: "0.3% of token supply for Talus Creators, regional Creators and Kaito Eco; 20% unlocked at TGE, remaining vested over 9M at TGE+3M",
      category: "Infrastructure"
    },
    "bantr-morph": {
      title: "Morph",
      description: "Morph is a hybrid Layer 2 blockchain on Ethereum, redefining onchain consumer finance with ultralow fees, instant settlement, and modular tools. Rewards: $500,000 in BGB Tokens",
      category: "DeFi"
    },
    "bantr-cointel": {
      title: "Cointel",
      description: "AI-native crypto intelligence. Real-time analytics & gamified education to make Web3 simple, safe & actionable. Powered by $COLS. Campaign: $50,000 in $COLS rewards",
      category: "Analysis"
    },
    "bantr-bantr": {
      title: "Bantr",
      description: "Bantr is a social trading platform that connects traders and provides community-driven insights",
      category: "Social Trading"
    },
    "bantr-multichainz": {
      title: "MultichainZ",
      description: "MultichainZ is a next-gen omnichain credit platform connecting RWAs with DeFi. Users can supply ETH, stables, or even NFTs as collateral and borrow seamlessly across chains.",
      category: "DeFi"
    },
    "bantr-firestarter": {
      title: "Firestarter",
      description: "Drive conversations around how creators can own and monetise their communities directly. Firestarter is a \"Shopify for tokens\" platform that lets anyone launch their own digital token in minutes.",
      category: "Creator Economy"
    },
    "bantr-quranium": {
      title: "Quranium",
      description: "Quranium is rewarding creators who spark authentic conversations around their AI x blockchain x quantum security vision.",
      category: "AI & Blockchain"
    },
    "kaito-turtle": {
      title: "TURTLE Liquidity Program",
      description: "0.3% to Creators (Liquidity Leaderboard + Kaito Creators), with additional 0.2% upon milestone unlock",
      category: "DeFi"
    },
    "kaito-hyperpie": {
      title: "Hyperpie",
      description: "2% of Hyperpie's HPP initial supply is allocated to reward Hyperpie Creators, Referrers, and Kaito Eco",
      category: "DeFi"
    },
    "wallchain-covalent": {
      title: "Covalent",
      description: "Covalent provides unified APIs to access blockchain data across multiple networks",
      category: "Data"
    },
    "wallchain-heyelsa": {
      title: "HeyElsa",
      description: "HeyElsa is an AI-powered assistant for Web3 and cryptocurrency interactions",
      category: "AI"
    },
    "wallchain-idos": {
      title: "idOS",
      description: "idOS provides decentralized identity solutions for Web3 applications",
      category: "Identity"
    },
    "wallchain-apecoin": {
      title: "ApeCoin R.A.I.D",
      description: "ApeCoin R.A.I.D is a community-driven initiative for the ApeCoin ecosystem",
      category: "Community"
    },
    "wallchain-genome": {
      title: "Genome Protocol",
      description: "2% of $NOME Supply for Top Quackers! Genome Protocol is Web3's user engagement engine - a modular, intelligent middleware layer",
      category: "Infrastructure"
    },
    "wallchain-analog": {
      title: "Analog",
      description: "With over $200,000 in $ANLOG rewards to be earned by our top contributors, the earlier you start, the better! The best part is it's free for any and everyone to participate.",
      category: "Infrastructure"
    },
    "cookie-lab": {
      title: "LAB",
      description: "LAB is the ultimate multi-chain trading ecosystem with lowest fees. A comprehensive trading platform enabling users to trade, deploy, and analyze tokens with exceptional speed, precision, and control across any platform.",
      category: "Trading Infrastructure"
    },
    "cookie-solv-protocol": {
      title: "Solv Protocol",
      description: "@SolvProtocol just pulled up with $230K+ in rewards for Snappers. Top 5 Snappers can expect rewards over $5K for 2 months of snapping. Important: The Solv team decided not to allocate rewards for $COOKIE stakers in this campaign. All other ongoing Snaps campaigns on cookie(dot)fun still include rewards for stakers.",
      category: "SNAPS Campaign"
    },
    "bantr-blazpay": {
      title: "BlazPay",
      description: "Blazpay AI is redefining crypto interactions by combining cutting-edge artificial intelligence with seamless DeFi solutions. Designed to simplify even the most complex tasks, Blaz AI empowers users to manage, trade, and explore crypto effortlessly, all through a conversational interface.",
      category: "AI-Powered DeFi"
    },
    "wallchain-klout": {
      title: "KLOUT",
      description: "KLOUT is a social influence platform rewarding top Quackers with 1% of KLOUT supply across two epochs. Epoch I runs for 40 days 10 hours with 0.5% supply for top 300 Quackers, followed by Epoch II with another 0.5% supply for top 300 Quackers.",
      category: "Social Influence"
    },
    "xeet-vdex": {
      title: "Vdex",
      description: "Trade Anything, Anywhere. VDEX is the gasless, omnichain sovereign DEX with CEX speed. Perps & prediction markets across crypto, equities, and FX on ETH, SOL, BSC, ARB, and AVAX. Rewards: 0.5% $VDEX over 3 months",
      category: "Trading"
    },
    "xeet-kona": {
      title: "KonaDeFi",
      description: "KonaDeFi is a decentralized finance platform offering innovative DeFi solutions and yield farming opportunities.",
      category: "DeFi"
    },
    "xeet-xeet": {
      title: "Xeet",
      description: "Influence should be measured by the impact you make, not just the noise you make. How do you compare vs your peers? Join Xeet Leagues and find out. Rewards: Xeets",
      category: "Platform"
    },
    "kaito-metawin": {
      title: "MetaWin Web3 Ecosystem",
      description: "Earn a share of $100K USDC Monthly for sharing about the MetaWin Web3 ecosystem. Start Winning in Web3 today.",
      category: "Casino"
    },
    "kaito-bitdealer": {
      title: "Bitdealer Launchpad",
      description: "Create, Trade & Hold tokens on Bitdealer, official Launchpad on Jupiter, seamlessly integrated with Axiom, Trojan, Photon & Bonkbot",
      category: "Launchpad"
    },
    "kaito-cysic": {
      title: "Cysic",
      description: "0.6% of CYS to Kaito: 60% top Cysic Creators, 10% KR/CN Creators, 30% Kaito Eco",
      category: "Infrastructure"
    },
    "kaito-lumiterra": {
      title: "Lumiterra",
      description: "1% of LUMITERRA to their top Creators and the Kaito Eco",
      category: "Gaming"
    },
    "kaito-peaq": {
      title: "Peaq",
      description: "0.55% of PEAQ supply to peaq Creators and the broader Kaito Eco over 11 months",
      category: "Infrastructure"
    },
    "wallchain-limitless": {
      title: "Limitless Exchange",
      description: "0.5% of Supply for Top Quackers! Limitless is the largest prediction market on Base (>$260M bet) and the easiest way to trade your favorite assets.",
      category: "Trading"
    },
    "rey-tea3": {
      title: "Tea3",
      description: "Tea3 is the web's most advanced open affiliate and referral system. It allows you to grow your onchain legacy and maximize your winnings across our entire ecosystem.",
      category: "Affiliate System"
    },
    "aira-zkagi": {
      title: "ZkAGI",
      description: "The ZkAGI x Airaa Auraboard Campaign is a 3-month community initiative that rewards contributors across Twitter, Discord, and onchain activity. Up to 2.5% of ZkAGI's total token supply has been allocated for this campaign. Rewards will be released in stages based on FDV milestones verified through platforms such as DexScreener and Birdeye.",
      category: "Campaign"
    },
    "aira-xo-market": {
      title: "XO Market",
      description: "XO Market is a decentralized trading platform for digital assets and cryptocurrencies.",
      category: "Trading Platform"
    },
    "aira-hq": {
      title: "Airaa HQ 🌾",
      description: "Airaa HQ is the central hub for Airaa ecosystem projects and community initiatives.",
      category: "Ecosystem Hub"
    },
    "aira-folks-finance": {
      title: "Folks Finance",
      description: "The Folks Finance x Airaa campaign runs for about 4 months starting with the pre-TGE phase, followed by 3 months post-TGE. It's designed to reward contributors across Twitter, Discord, and onchain through the Auraboard leaderboard. Folks Finance is the leading crosschain DeFi lending protocol backed by Coinbase Ventures, Jump, ParaFi, OKX Ventures, and Borderless Capital. The FOLKS token (and airdrop) will launch on November 6th, 2025.",
      category: "DeFi"
    },
    "mindoai-tria": {
      title: "Tria",
      description: "A self-custodial neobank that unifies trading, spending, and earning in a single app - with no bridges, no gas, and no intermediaries. Pay, trade, and earn yield across any network and currency! Tria has raised $12M and partnered with 70+ top protocols, including Arbitrum, Polygon, Injective, Sentient, Aethir, and Katana.",
      category: "Neobank"
    },
    "mindoai-cryptorubic": {
      title: "Cryptorubic",
      description: "Cryptorubic is an advanced cryptocurrency trading platform with AI-powered market analysis.",
      category: "Trading Platform"
    },
    "mindoai-mindoai": {
      title: "MindoAI",
      description: "MindoAI is an intelligent AI assistant for cryptocurrency market insights and trading strategies.",
      category: "AI Assistant"
    },
    "galxe-dagama-s2": {
      title: "daGama (S2)",
      description: "Following its first success, daGama launches Season 2! Explore and champion the AI-powered Arbitrum protocol making recommendations transparent, trusted & rewarding.",
      category: "AI Protocol"
    },
    "galxe-platform": {
      title: "Galxe Platform",
      description: "Galxe is a Web3 credential data network. Build better products and communities with Galxe's credential infrastructure.",
      category: "Social Platform"
    },
    "pulse-grvt": {
      title: "GRVT",
      description: "Trade, Invest, Earn. Finance that just flows. Get going in minutes, see results for years.",
      category: "Trading Platform"
    },
    "pulse-boost": {
      title: "Boost",
      description: "Pulse Boost is a community-driven platform for accelerating Web3 project growth and adoption.",
      category: "Growth Platform"
    },
    "pulse-aegis": {
      title: "Aegis",
      description: "Pulse Aegis provides comprehensive security solutions for Web3 projects and DeFi protocols.",
      category: "Security"
    },
    "pulse-belong": {
      title: "Belong",
      description: "Pulse Belong is a community building platform that connects Web3 enthusiasts and projects.",
      category: "Community"
    },
    "pulse-campnetwork": {
      title: "Camp Network",
      description: "Pulse Camp Network is a decentralized networking platform for Web3 professionals and entrepreneurs.",
      category: "Networking"
    },
    "pulse-sixr": {
      title: "SixR",
      description: "Pulse SixR is an innovative platform for Web3 project incubation and acceleration.",
      category: "Incubation"
    },
    "pulse-imua": {
      title: "Imua",
      description: "Pulse Imua provides advanced analytics and insights for Web3 project performance tracking.",
      category: "Analytics"
    },
    "pulse-play-ai": {
      title: "Play AI",
      description: "Pulse Play AI is an AI-powered platform for automated Web3 project management and optimization.",
      category: "AI Management"
    },
    "xeet-solstice": {
      title: "Solstice",
      description: "Solstice is focused on delivering stable, real yield through strategies that don't rely on hype or speculation. Our approach combines proven delta-neutral trading, robust infrastructure, and institutional-grade risk management to build a foundation for long-term positive returns. Rewards: 1% $SLX Token Supply",
      category: "Yield Platform"
    },
    "xeet-myriad-market": {
      title: "Myriad Markets",
      description: "Xeet Myriad Market provides diverse trading opportunities across multiple cryptocurrency markets.",
      category: "Multi-Market Trading"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "Xeet Abstract offers abstract trading strategies and advanced market insights for cryptocurrency traders.",
      category: "Trading Strategies"
    },
    "xeet-iopn": {
      title: "IOPn",
      description: "Join \"The Internet of People\" with $100,000 per month in $OPN $300,000 in total rewards over the next 3 months paid out at TGE (date TBA). IOPn is building OPN chain which is a scalable L1 that integrates decentralized digital identity, real-world asset tokenization, and sovereign AI infrastructure to empower users with borderless digital ownership.",
      category: "Infrastructure"
    }
  },
  es: {
    "kaito-integra": {
      title: "Integra",
      description: "0.5% del suministro IRL de Integra (TGE pronto) se asigna para recompensar el programa de puntos de Integra y los Creadores de Kaito, Referidos y Ecosistema Kaito",
      category: "Infraestructura",
      platform: "Kaito",
      link: "https://x.com/integra_layer",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1795808049908621312.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1980671802545217844",
      rewardPool: "0.5% Suministro IRL",
      participants: "Creadores, Referidos y Ecosistema Kaito",
      timeLeft: "TGE Pronto",
      claimPeriod: "Próximamente",
      vestingSchedule: "TBD",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Desglose: 0.4% para creadores, 0.1% para eco",
        "Publica contenido de alta calidad sobre Integra para escalar en el ranking",
        "Las recompensas se basan en el ranking considerando calidad del contenido, engagement y consistencia con otras tareas en el programa de puntos",
        "Etiqueta @integra_layer en tus publicaciones",
        "Crea contenido original y reflexivo",
        "No hagas spam o publiques contenido de bajo esfuerzo",
        "No plagies o copies el trabajo de otros"
      ],
      additionalData: {
        isNew: "true"
      }
    },
    "kaito-metawin": {
      title: "Ecosistema MetaWin Web3",
      description: "Gana una parte de $100K USDC mensuales por compartir sobre el ecosistema MetaWin Web3. Comienza a ganar en Web3 hoy.",
      category: "Casino"
    },
    "kaito-bitdealer": {
      title: "Plataforma de Lanzamiento Bitdealer",
      description: "Crea, comercia y mantén tokens en Bitdealer, plataforma oficial de lanzamiento en Jupiter, integrada perfectamente con Axiom, Trojan, Photon y Bonkbot",
      category: "Trading"
    },
    "kaito-cysic": {
      title: "Cysic",
      description: "0.6% de CYS para Kaito: 60% mejores Creadores de Cysic, 10% Creadores KR/CN, 30% Ecosistema Kaito",
      category: "Infraestructura",
      campaignRules: [
        "0.6% de CYS para:",
        "- 60% a mejores Creadores de Cysic",
        "- 10% a Creadores KR/CN", 
        "- 30% al Ecosistema Kaito"
      ]
    },
    "kaito-lumiterra": {
      title: "Lumiterra",
      description: "1% de LUMITERRA para sus mejores Creadores y el Ecosistema Kaito",
      category: "Juegos"
    },
    "kaito-peaq": {
      title: "Peaq",
      description: "Durante 11 meses, 0.55% de PEAQ para creadores de peaq y el Ecosistema Kaito",
      category: "Infraestructura",
      campaignRules: [
        "0.55% del suministro genesis de PEAQ",
        "Campaña de 11 meses",
        "Distribuciones mensuales"
      ]
    },
    "wallchain-limitless": {
      title: "Limitless Exchange",
      description: "¡0.5% del suministro para los mejores Quackers! Limitless es el mercado de predicciones más grande en Base (>$260M en apuestas) y la forma más fácil de operar tus activos favoritos.",
      category: "Trading"
    },
    "breadcrumbs-breadcrumb-cash": {
      title: "Breadcrumb.cash",
      description: "Breadcrumb.cash es una plataforma descentralizada para rastrear y gestionar transacciones de criptomonedas y recompensas",
      category: "DeFi"
    },
    "breadcrumbs-blackmirror-xp": {
      title: "blackmirror_xp",
      description: "$MIRROR — El Token Oficial de Black Mirror — Construido en @korprotocol. Respaldado por @avax, @solana, @republiccrypto, @animocabrands",
      category: "Token"
    },
    "breadcrumbs-dream-space-hq": {
      title: "Dream Space HQ",
      description: "Dreamspace es el primer lienzo de codificación de vibraciones para creativos de crypto ✨ facilitamos que cualquiera — no solo desarrolladores — construya, lance y monetice aplicaciones onchain sin tocar código. sueña → genera → lanza → monetiza.",
      category: "Herramientas de Desarrollo"
    },
    "breadcrumbs-daemons": {
      title: "Dæmons",
      description: "Dæmons es una experiencia blockchain habilitada por IA que combina Tamagotchi con Pokémon. PvP, PvE y chat interactivo con IA.",
      category: "Gaming"
    },
    "breadcrumbs-bondi-finance": {
      title: "Bondi Finance",
      description: "Bondi Finance tokeniza bonos corporativos públicamente cotizados en productos de renta fija onchain. Cada Bond Token representa exposición fraccional a bonos corporativos denominados en USD.",
      category: "DeFi"
    },
    "kaito-multipli": {
      title: "Multipli Creator Currency",
      description: "100k Crystals / Week (24.7 bps at TGE) - la moneda líquida de creadores de Multipli, construida sobre Kaito",
      category: "Economía de Creadores"
    },
    "kaito-playai": {
      title: "PlayAI",
      description: "0.5% del Suministro PLAI totalmente asignado a los Mejores 500 Creadores, con asignaciones adicionales para los Top 10",
      category: "Plataforma de IA",
      platform: "Kaito",
      link: "https://x.com/playAInetwork",
      source: "https://x.com/playAInetwork/status/1975901146016518472",
      referralCode: "rjarivi",
      rewardPool: "0.5% del Suministro PLAI",
      participants: "Mejores 500 Creadores",
      timeLeft: "01 Ago 2025 - TBD",
      claimPeriod: "Próximamente",
      vestingSchedule: "Sin vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Top 500 Yappers, con asignaciones adicionales para los Top 10 son recompensados",
        "Recompensas distribuidas sin vesting después de 2 snapshots, con 0.25% PLAI durante TGE y 0.25% PLAI 1 mes después de TGE",
        "Priorizar contenido original, reflexivo y de alta calidad sobre volumen",
        "Mantener engagement a largo plazo y consistente, incluso de cuentas más pequeñas",
        "Evitar spam, plagio y desinformación"
      ]
    },
    "kaito-lombard": {
      title: "Lombard",
      description: "El Programa Yapper Temporada 2 está en marcha — con oportunidades para ganar $BARD y convertirse en Embajador Oficial de Lombard",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/lombard_finance",
      source: "https://x.com/Lombard_Finance/status/1970371793228910645",
      rewardPool: "0.8% del suministro BARD",
      participants: "Top 100 Contribuidores cada mes",
      timeLeft: "01 Ene 2025 - 31 Mar 2026",
      claimPeriod: "Próximamente",
      vestingSchedule: "50% por adelantado, 50% en 6 meses",
      distributionPlatform: "Kaito",
      campaignRules: [
        "BARD se otorga mensualmente a los top 100 contribuidores de Lombard basado en mindshare",
        "Recompensas Mensuales: Top 100 Yappers por mindshare serán elegibles para reclamar $BARD",
        "Semanas de Desafío Creativo: Bono $BARD para los Top 10 creadores destacados en originalidad y conocimiento",
        "Están expandiendo el Programa de Embajadores — trayendo líderes de todo el ecosistema Bitcoin y más allá"
      ]
    },
    "kaito-beldex": {
      title: "Beldex",
      description: "150K USDC para los mejores 100 Creadores de 30D, dividido equitativamente durante 3 meses",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/BeldexCoin",
      source: "https://x.com/BeldexCoin/status/1972957466381148473",
      rewardPool: "$150K USDC ($50K/Mes)",
      participants: "Top 100 Creadores",
      timeLeft: "01 Oct 2025 - 31 Dic 2025",
      claimPeriod: "Próximamente",
      vestingSchedule: "Sin Vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Seguir a @BeldexCoin en X",
        "Usar el hashtag #Beldex en tus publicaciones",
        "Pro tip: Mientras más original, atractivo y consistente sea tu contenido, más alto subirás"
      ]
    },
    "kaito-polygon": {
      title: "Polygon",
      description: "$30K USDC/Mes para sus mejores 50 Creadores de 30D",
      category: "Infraestructura"
    },
    "kaito-arbitrum": {
      title: "Arbitrum",
      description: "700,000 ARB se distribuirán a los mejores 150 creadores en el Ranking de Arbitrum Kaito a través de tres distribuciones mensuales (Temporada 2)",
      category: "Infraestructura",
      campaignRules: [
        "700K ARB distribuidos en tres tramos: Octubre (233,333 ARB), Noviembre (233,333 ARB), Diciembre (233,334 ARB)",
        "La Temporada 2 presenta un algoritmo más equilibrado que garantiza un juego justo para creadores de todos los tamaños",
        "Niveles de distribución: Top 10 (1º: 32,000 ARB, 2º: 29,800 ARB, 3º: 27,600 ARB), Siguientes 40, Restantes 100",
        "Distribuciones mensuales basadas en las posiciones actuales del ranking al momento de la distribución",
        "Los empleados y afiliados de Arbitrum no son elegibles para las subvenciones"
      ]
    },
    "kaito-multibank": {
      title: "MultiBank",
      description: "MultiBank.io es una plataforma de trading integral que ofrece servicios financieros avanzados. $150K USDT se distribuirán a los mejores 200 creadores basado en el ranking del leaderboard, considerando calidad del contenido, engagement y consistencia.",
      category: "Plataforma de Trading"
    },
    "kaito-warden-protocol": {
      title: "Warden Protocol",
      description: "2.5% WARD durante 3 temporadas para Creadores de Warden Protocol, usuarios de la App Warden y el Ecosistema Kaito más amplio",
      category: "Infraestructura"
    },
    "kaito-talus-network": {
      title: "Talus Network",
      description: "0.3% del suministro de tokens para Creadores de Talus, Creadores regionales y Ecosistema Kaito; 20% desbloqueado en TGE, el resto con vesting durante 9M en TGE+3M",
      category: "Infraestructura"
    },
    "bantr-morph": {
      title: "Morph",
      description: "Morph es un intercambio descentralizado y protocolo DeFi construido en Ethereum Layer 2",
      category: "DeFi"
    },
    "bantr-cointel": {
      title: "Cointel",
      description: "Cointel proporciona insights de trading inteligentes y análisis de mercado para traders de criptomonedas",
      category: "Análisis"
    },
    "bantr-bantr": {
      title: "Bantr",
      description: "Bantr es una plataforma de trading social que conecta traders y proporciona insights impulsados por la comunidad",
      category: "Trading Social"
    },
    "bantr-multichainz": {
      title: "MultichainZ",
      description: "MultichainZ es una plataforma de crédito omnichain de próxima generación que conecta RWAs con DeFi. Los usuarios pueden suministrar ETH, estables, o incluso NFTs como garantía y pedir prestado sin problemas a través de cadenas.",
      category: "DeFi"
    },
    "bantr-firestarter": {
      title: "Firestarter",
      description: "Impulsa conversaciones sobre cómo los creadores pueden poseer y monetizar sus comunidades directamente. Firestarter es una plataforma \"Shopify para tokens\" que permite a cualquiera lanzar su propio token digital en minutos.",
      category: "Economía de Creadores"
    },
    "bantr-quranium": {
      title: "Quranium",
      description: "Quranium está recompensando a los creadores que generan conversaciones auténticas en torno a su visión de IA x blockchain x seguridad cuántica.",
      category: "IA y Blockchain"
    },
    "kaito-turtle": {
      title: "Programa de Liquidez TURTLE",
      description: "0.3% para Creadores (Tabla de Líderes de Liquidez + Creadores de Kaito), con 0.2% adicional al desbloquear hitos",
      category: "DeFi"
    },
    "kaito-hyperpie": {
      title: "Hyperpie",
      description: "2% del suministro inicial de HPP de Hyperpie se asigna para recompensar a Creadores de Hyperpie, Referidos y Ecosistema Kaito",
      category: "DeFi"
    },
    "wallchain-covalent": {
      title: "Covalent",
      description: "Covalent proporciona APIs unificadas para acceder a datos de blockchain a través de múltiples redes",
      category: "Datos"
    },
    "wallchain-heyelsa": {
      title: "HeyElsa",
      description: "HeyElsa es un asistente impulsado por IA para interacciones Web3 y criptomonedas",
      category: "IA"
    },
    "wallchain-idos": {
      title: "idOS",
      description: "idOS proporciona soluciones de identidad descentralizadas para aplicaciones Web3",
      category: "Identidad"
    },
    "wallchain-apecoin": {
      title: "ApeCoin R.A.I.D",
      description: "ApeCoin R.A.I.D es una iniciativa impulsada por la comunidad para el ecosistema ApeCoin",
      category: "Comunidad"
    },
    "wallchain-genome": {
      title: "Protocolo Genome",
      description: "2% del suministro de $NOME para los mejores Quackers! Genome Protocol es el motor de participación de usuarios de Web3 - una capa de middleware modular e inteligente",
      category: "Infraestructura"
    },
    "wallchain-analog": {
      title: "Analog",
      description: "Con más de $200,000 en recompensas $ANLOG para ser ganadas por nuestros mejores contribuidores, ¡cuanto antes empieces, mejor! La mejor parte es que es gratis para cualquiera y todos pueden participar.",
      category: "Infraestructura"
    },
    "cookie-lab": {
      title: "LAB",
      description: "LAB es el ecosistema de trading multi-cadena definitivo con las tarifas más bajas. Una plataforma de trading integral que permite a los usuarios comerciar, desplegar y analizar tokens con velocidad, precisión y control excepcionales en cualquier plataforma.",
      category: "Infraestructura de Trading"
    },
    "cookie-solv-protocol": {
      title: "Solv Protocol",
      description: "@SolvProtocol acaba de llegar con más de $230K en recompensas para Snappers. Los 5 mejores Snappers pueden esperar recompensas de más de $5K por 2 meses de snapping. Importante: El equipo de Solv decidió no asignar recompensas para los stakers de $COOKIE en esta campaña. Todas las demás campañas de Snaps en curso en cookie(dot)fun aún incluyen recompensas para stakers.",
      category: "Campaña SNAPS"
    },
    "bantr-blazpay": {
      title: "BlazPay",
      description: "Blazpay AI está redefiniendo las interacciones cripto al combinar inteligencia artificial de vanguardia con soluciones DeFi perfectas. Diseñado para simplificar incluso las tareas más complejas, Blaz AI permite a los usuarios gestionar, comerciar y explorar cripto sin esfuerzo, todo a través de una interfaz conversacional.",
      category: "DeFi Impulsado por IA"
    },
    "wallchain-klout": {
      title: "KLOUT",
      description: "KLOUT es una plataforma de influencia social que recompensa a los mejores Quackers con el 1% del suministro de KLOUT a través de dos épocas. La Época I dura 40 días 10 horas con 0.5% del suministro para los mejores 300 Quackers, seguida de la Época II con otro 0.5% del suministro para los mejores 300 Quackers.",
      category: "Influencia Social"
    },
    "xeet-vdex": {
      title: "Vdex",
      description: "Vdex proporciona señales de trading avanzadas y análisis de mercado para traders de criptomonedas",
      category: "Trading"
    },
    "xeet-kona": {
      title: "KonaDeFi",
      description: "KonaDeFi es una plataforma de finanzas descentralizadas que ofrece soluciones DeFi innovadoras y oportunidades de yield farming.",
      category: "DeFi"
    },
    "xeet-xeet": {
      title: "Xeet",
      description: "Xeet es una plataforma integral para señales de trading de criptomonedas y análisis de mercado",
      category: "Plataforma"
    },
    "rey-tea3": {
      title: "Tea3 - Sistema de Afiliados Onchain Avanzado",
      description: "Tea3 es el sistema de afiliados y referidos abierto más avanzado de la web. Te permite hacer crecer tu legado onchain y maximizar tus ganancias en todo nuestro ecosistema.",
      category: "Sistema de Afiliados"
    },
    "aira-zkagi": {
      title: "ZkAGI",
      description: "La Campaña ZkAGI x Airaa Auraboard es una iniciativa comunitaria de 3 meses que recompensa a los contribuidores en Twitter, Discord y actividad onchain. Hasta el 2.5% del suministro total de tokens de ZkAGI ha sido asignado para esta campaña. Las recompensas se liberarán en etapas basadas en hitos de FDV verificados a través de plataformas como DexScreener y Birdeye.",
      category: "Campaña"
    },
    "aira-xo-market": {
      title: "XO Market",
      description: "XO Market es una plataforma de trading descentralizada para activos digitales y criptomonedas.",
      category: "Plataforma de Trading"
    },
    "aira-hq": {
      title: "Airaa HQ 🌾",
      description: "Airaa HQ es el centro central para proyectos del ecosistema Airaa e iniciativas comunitarias.",
      category: "Centro del Ecosistema"
    },
    "aira-folks-finance": {
      title: "Folks Finance",
      description: "La campaña Folks Finance x Airaa se ejecuta durante aproximadamente 4 meses comenzando con la fase pre-TGE, seguida de 3 meses post-TGE. Está diseñada para recompensar a los contribuidores a través de Twitter, Discord y onchain a través del leaderboard Auraboard. Folks Finance es el protocolo líder de préstamos DeFi crosschain respaldado por Coinbase Ventures, Jump, ParaFi, OKX Ventures y Borderless Capital. El token FOLKS (y airdrop) se lanzará el 6 de noviembre de 2025.",
      category: "DeFi"
    },
    "mindoai-tria": {
      title: "Tria",
      description: "Un neobanco auto-custodial que unifica el trading, gasto y ganancias en una sola aplicación - sin puentes, sin gas y sin intermediarios. ¡Paga, comercia y gana rendimiento en cualquier red y moneda! Tria ha recaudado $12M y se ha asociado con más de 70 protocolos principales, incluyendo Arbitrum, Polygon, Injective, Sentient, Aethir y Katana.",
      category: "Neobanco"
    },
    "mindoai-cryptorubic": {
      title: "Cryptorubic",
      description: "Cryptorubic es una plataforma avanzada de trading de criptomonedas con análisis de mercado impulsado por IA.",
      category: "Plataforma de Trading"
    },
    "mindoai-mindoai": {
      title: "MindoAI",
      description: "MindoAI es un asistente de IA inteligente para insights del mercado de criptomonedas y estrategias de trading.",
      category: "Asistente de IA"
    },
    "galxe-dagama-s2": {
      title: "daGama (S2)",
      description: "¡Tras su primer éxito, daGama lanza la Temporada 2! Explora y defiende el protocolo Arbitrum impulsado por IA que hace las recomendaciones transparentes, confiables y gratificantes.",
      category: "Protocolo de IA"
    },
    "galxe-platform": {
      title: "Plataforma Galxe",
      description: "Galxe es una red de datos de credenciales Web3. Construye mejores productos y comunidades con la infraestructura de credenciales de Galxe.",
      category: "Plataforma Social"
    },
    "pulse-grvt": {
      title: "GRVT",
      description: "Comercia, Invierte, Gana. Finanzas que simplemente fluyen. Comienza en minutos, ve resultados durante años.",
      category: "Plataforma de Trading"
    },
    "pulse-boost": {
      title: "Boost",
      description: "Pulse Boost es una plataforma impulsada por la comunidad para acelerar el crecimiento y adopción de proyectos Web3.",
      category: "Plataforma de Crecimiento"
    },
    "pulse-aegis": {
      title: "Aegis",
      description: "Pulse Aegis proporciona soluciones de seguridad integrales para proyectos Web3 y protocolos DeFi.",
      category: "Seguridad"
    },
    "pulse-belong": {
      title: "Belong",
      description: "Pulse Belong es una plataforma de construcción de comunidad que conecta entusiastas y proyectos Web3.",
      category: "Comunidad"
    },
    "pulse-campnetwork": {
      title: "Camp Network",
      description: "Pulse Camp Network es una plataforma de networking descentralizada para profesionales y emprendedores Web3.",
      category: "Networking"
    },
    "pulse-sixr": {
      title: "SixR",
      description: "Pulse SixR es una plataforma innovadora para incubación y aceleración de proyectos Web3.",
      category: "Incubación"
    },
    "pulse-imua": {
      title: "Imua",
      description: "Pulse Imua proporciona análisis avanzados e insights para seguimiento del rendimiento de proyectos Web3.",
      category: "Análisis"
    },
    "pulse-play-ai": {
      title: "Play AI",
      description: "Pulse Play AI es una plataforma impulsada por IA para gestión automatizada y optimización de proyectos Web3.",
      category: "Gestión IA"
    },
    "xeet-solstice": {
      title: "Solstice",
      description: "Solstice se enfoca en entregar rendimientos estables y reales a través de estrategias que no dependen del hype o la especulación. Nuestro enfoque combina trading delta-neutral probado, infraestructura robusta y gestión de riesgos de grado institucional para construir una base para rendimientos positivos a largo plazo. Recompensas: 1% del suministro de tokens $SLX",
      category: "Plataforma de Rendimiento"
    },
    "xeet-myriad-market": {
      title: "Myriad Markets",
      description: "Xeet Myriad Market proporciona oportunidades de trading diversas en múltiples mercados de criptomonedas.",
      category: "Trading Multi-Mercado"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "Xeet Abstract ofrece estrategias de trading abstractas e insights avanzados de mercado para traders de criptomonedas.",
      category: "Estrategias de Trading"
    },
    "xeet-iopn": {
      title: "IOPn",
      description: "Únete a \"La Internet de las Personas\" con $100,000 por mes en $OPN $300,000 en recompensas totales durante los próximos 3 meses pagados en TGE (fecha por confirmar). IOPn está construyendo la cadena OPN que es una L1 escalable que integra identidad digital descentralizada, tokenización de activos del mundo real e infraestructura de IA soberana para empoderar a los usuarios con propiedad digital sin fronteras.",
      category: "Infraestructura"
    }
  },
  fr: {
    "kaito-integra": {
      title: "Integra",
      description: "0.5% de l'offre IRL d'Integra (TGE bientôt) est alloué pour récompenser le programme de points d'Integra et les Créateurs Kaito, Parrains et Écosystème Kaito",
      category: "Infrastructure",
      platform: "Kaito",
      link: "https://x.com/integra_layer",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1795808049908621312.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1980671802545217844",
      rewardPool: "0.5% Offre IRL",
      participants: "Créateurs, Parrains et Écosystème Kaito",
      timeLeft: "TGE Bientôt",
      claimPeriod: "À venir",
      vestingSchedule: "TBD",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Répartition: 0.4% pour les créateurs, 0.1% pour l'écosystème",
        "Publiez du contenu de haute qualité sur Integra pour grimper dans le classement",
        "Les récompenses sont basées sur le rang du classement en considérant la qualité du contenu, l'engagement et la cohérence avec d'autres tâches du programme de points",
        "Mentionnez @integra_layer dans vos publications",
        "Créez du contenu original et réfléchi",
        "Ne faites pas de spam ou ne publiez pas de contenu de faible effort",
        "Ne plagiez pas ou ne copiez pas le travail d'autrui"
      ],
      additionalData: {
        isNew: "true"
      }
    },
    "kaito-metawin": {
      title: "Écosystème MetaWin Web3",
      description: "Gagnez une part de 100K USDC par mois en partageant sur l'écosystème MetaWin Web3. Commencez à gagner en Web3 aujourd'hui.",
      category: "Casino"
    },
    "kaito-bitdealer": {
      title: "Plateforme de Lancement Bitdealer",
      description: "Créez, échangez et détenez des tokens sur Bitdealer, plateforme officielle de lancement sur Jupiter, intégrée de manière transparente avec Axiom, Trojan, Photon et Bonkbot",
      category: "Trading"
    },
    "kaito-cysic": {
      title: "Cysic",
      description: "0.6% de CYS pour Kaito : 60% meilleurs Créateurs Cysic, 10% Créateurs KR/CN, 30% Écosystème Kaito",
      category: "Infrastructure",
      campaignRules: [
        "0.6% de CYS pour :",
        "- 60% aux meilleurs Créateurs Cysic",
        "- 10% aux Créateurs KR/CN", 
        "- 30% à l'Écosystème Kaito"
      ]
    },
    "kaito-lumiterra": {
      title: "Lumiterra",
      description: "1% de LUMITERRA pour leurs meilleurs Créateurs et l'Écosystème Kaito",
      category: "Jeux"
    },
    "kaito-peaq": {
      title: "Peaq",
      description: "Sur 11 mois, 0.55% de PEAQ pour les créateurs peaq et l'Écosystème Kaito",
      category: "Infrastructure",
      campaignRules: [
        "0.55% de l'approvisionnement genesis de PEAQ",
        "Campagne de 11 mois",
        "Distributions mensuelles"
      ]
    },
    "wallchain-limitless": {
      title: "Limitless Exchange",
      description: "0.5% de l'approvisionnement pour les meilleurs Quackers ! Limitless est le plus grand marché de prédiction sur Base (>260M$ de paris) et le moyen le plus simple de trader vos actifs favoris.",
      category: "Trading"
    },
    "kaito-multipli": {
      title: "Multipli Creator Currency",
      description: "100k Crystals / Semaine (24.7 bps à TGE) - la monnaie liquide des créateurs de Multipli, construite sur Kaito",
      category: "Économie des Créateurs"
    },
    "kaito-playai": {
      title: "PlayAI",
      description: "0.5% de l'Offre PLAI totalement alloué aux Top 500 Créateurs, avec allocations bonus pour les Top 10",
      category: "Plateforme IA",
      platform: "Kaito",
      link: "https://x.com/playAInetwork",
      source: "https://x.com/playAInetwork/status/1975901146016518472",
      referralCode: "rjarivi",
      rewardPool: "0.5% de l'Offre PLAI",
      participants: "Top 500 Créateurs",
      timeLeft: "01 Août 2025 - TBD",
      claimPeriod: "À venir",
      vestingSchedule: "Pas de vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Top 500 Yappers, avec allocations bonus pour les Top 10 sont récompensés",
        "Récompenses distribuées sans vesting après 2 snapshots, avec 0.25% PLAI pendant TGE et 0.25% PLAI 1 mois après TGE",
        "Prioriser le contenu original, réfléchi et de haute qualité plutôt que le volume",
        "Maintenir un engagement à long terme et cohérent, même des comptes plus petits",
        "Éviter le spam, le plagiat et la désinformation"
      ]
    },
    "kaito-lombard": {
      title: "Lombard",
      description: "Le Programme Yapper Saison 2 est en cours — avec des opportunités pour gagner $BARD et devenir Ambassadeur Officiel Lombard",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/lombard_finance",
      source: "https://x.com/Lombard_Finance/status/1970371793228910645",
      rewardPool: "0.8% de l'offre BARD",
      participants: "Top 100 Contributeurs chaque mois",
      timeLeft: "01 Jan 2025 - 31 Mar 2026",
      claimPeriod: "À venir",
      vestingSchedule: "50% d'avance, 50% en 6 mois",
      distributionPlatform: "Kaito",
      campaignRules: [
        "BARD est attribué mensuellement aux top 100 contributeurs de Lombard basé sur le mindshare",
        "Récompenses Mensuelles: Top 100 Yappers par mindshare seront éligibles pour réclamer $BARD",
        "Semaines de Défi Créatif: Bonus $BARD pour les Top 10 créateurs exceptionnels en originalité et connaissance",
        "Ils étendent le Programme d'Ambassadeurs — amenant des leaders de tout l'écosystème Bitcoin et au-delà"
      ]
    },
    "kaito-beldex": {
      title: "Beldex",
      description: "150K USDC aux meilleurs 100 Créateurs de 30J, répartis équitablement sur 3 mois",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/BeldexCoin",
      source: "https://x.com/BeldexCoin/status/1972957466381148473",
      rewardPool: "$150K USDC ($50K/Mois)",
      participants: "Top 100 Créateurs",
      timeLeft: "01 Oct 2025 - 31 Déc 2025",
      claimPeriod: "À venir",
      vestingSchedule: "Pas de Vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Suivre @BeldexCoin sur X",
        "Utiliser le hashtag #Beldex dans vos publications",
        "Pro tip: Plus votre contenu est original, engageant et cohérent, plus vous monterez haut"
      ]
    },
    "kaito-polygon": {
      title: "Polygon",
      description: "$30K USDC/Mois pour leurs meilleurs 50 Créateurs de 30J",
      category: "Infrastructure"
    },
    "kaito-arbitrum": {
      title: "Arbitrum",
      description: "700,000 ARB seront distribués aux 150 meilleurs créateurs du Classement Arbitrum Kaito à travers trois distributions mensuelles (Saison 2)",
      category: "Infrastructure",
      campaignRules: [
        "700K ARB distribués en trois tranches: Octobre (233,333 ARB), Novembre (233,333 ARB), Décembre (233,334 ARB)",
        "La Saison 2 présente un algorithme plus équilibré garantissant un jeu équitable pour les créateurs de toutes tailles",
        "Niveaux de distribution: Top 10 (1er: 32,000 ARB, 2e: 29,800 ARB, 3e: 27,600 ARB), Suivants 40, Restants 100",
        "Distributions mensuelles basées sur les positions actuelles du classement au moment de la distribution",
        "Les employés et affiliés d'Arbitrum ne sont pas éligibles aux subventions"
      ]
    },
    "kaito-multibank": {
      title: "MultiBank",
      description: "MultiBank.io est une plateforme de trading complète offrant des services financiers avancés. $150K USDT seront distribués aux 200 meilleurs créateurs basé sur le classement du leaderboard, en considérant la qualité du contenu, l'engagement et la cohérence.",
      category: "Plateforme de Trading"
    },
    "kaito-warden-protocol": {
      title: "Warden Protocol",
      description: "2.5% WARD sur 3 saisons pour les Créateurs de Warden Protocol, utilisateurs de l'App Warden et l'Écosystème Kaito élargi",
      category: "Infrastructure"
    },
    "kaito-talus-network": {
      title: "Talus Network",
      description: "0.3% de l'approvisionnement de tokens pour les Créateurs de Talus, Créateurs régionaux et Écosystème Kaito; 20% débloqué à TGE, le reste avec vesting sur 9M à TGE+3M",
      category: "Infrastructure"
    },
    "bantr-morph": {
      title: "Morph",
      description: "Morph est un échange décentralisé et protocole DeFi construit sur Ethereum Layer 2",
      category: "DeFi"
    },
    "bantr-cointel": {
      title: "Cointel",
      description: "Cointel fournit des insights de trading intelligents et une analyse de marché pour les traders de cryptomonnaies",
      category: "Analyse"
    },
    "bantr-bantr": {
      title: "Bantr",
      description: "Bantr est une plateforme de trading social qui connecte les traders et fournit des insights communautaires",
      category: "Trading Social"
    },
    "bantr-multichainz": {
      title: "MultichainZ",
      description: "MultichainZ est une plateforme de crédit omnichain de nouvelle génération connectant les RWAs avec DeFi. Les utilisateurs peuvent fournir ETH, stablecoins, ou même des NFTs comme garantie et emprunter de manière transparente à travers les chaînes.",
      category: "DeFi"
    },
    "bantr-firestarter": {
      title: "Firestarter",
      description: "Déclenchez des conversations sur la façon dont les créateurs peuvent posséder et monétiser leurs communautés directement. Firestarter est une plateforme \"Shopify pour les tokens\" qui permet à quiconque de lancer son propre token numérique en quelques minutes.",
      category: "Économie des Créateurs"
    },
    "bantr-quranium": {
      title: "Quranium",
      description: "Quranium récompense les créateurs qui suscitent des conversations authentiques autour de leur vision IA x blockchain x sécurité quantique.",
      category: "IA et Blockchain"
    },
    "wallchain-genome": {
      title: "Protocole Genome",
      description: "2% de l'offre de $NOME pour les meilleurs Quackers! Genome Protocol est le moteur d'engagement utilisateur de Web3 - une couche middleware modulaire et intelligente",
      category: "Infrastructure"
    },
    "wallchain-analog": {
      title: "Analog",
      description: "Avec plus de 200 000 $ en récompenses $ANLOG à gagner par nos meilleurs contributeurs, plus vous commencez tôt, mieux c'est ! La meilleure partie est que c'est gratuit pour tous et que tout le monde peut participer.",
      category: "Infrastructure"
    },
    "cookie-lab": {
      title: "LAB",
      description: "LAB est l'écosystème de trading multi-chaînes ultime avec les frais les plus bas. Une plateforme de trading complète permettant aux utilisateurs de trader, déployer et analyser des tokens avec une vitesse, précision et contrôle exceptionnels sur toute plateforme.",
      category: "Infrastructure de Trading"
    },
    "cookie-solv-protocol": {
      title: "Solv Protocol",
      description: "@SolvProtocol vient d'arriver avec plus de 230K$ en récompenses pour les Snappers. Les 5 meilleurs Snappers peuvent s'attendre à des récompenses de plus de 5K$ pour 2 mois de snapping. Important : L'équipe Solv a décidé de ne pas allouer de récompenses pour les stakers de $COOKIE dans cette campagne. Toutes les autres campagnes Snaps en cours sur cookie(dot)fun incluent encore des récompenses pour les stakers.",
      category: "Campagne SNAPS"
    },
    "bantr-blazpay": {
      title: "BlazPay",
      description: "Blazpay AI redéfinit les interactions crypto en combinant une intelligence artificielle de pointe avec des solutions DeFi transparentes. Conçu pour simplifier même les tâches les plus complexes, Blaz AI permet aux utilisateurs de gérer, trader et explorer la crypto sans effort, le tout via une interface conversationnelle.",
      category: "DeFi Alimenté par IA"
    },
    "wallchain-klout": {
      title: "KLOUT",
      description: "KLOUT est une plateforme d'influence sociale qui récompense les meilleurs Quackers avec 1% de l'offre de KLOUT à travers deux époques. L'Époque I dure 40 jours 10 heures avec 0.5% de l'offre pour les meilleurs 300 Quackers, suivie de l'Époque II avec un autre 0.5% de l'offre pour les meilleurs 300 Quackers.",
      category: "Influence Sociale"
    },
    "xeet-vdex": {
      title: "Vdex",
      description: "Vdex fournit des signaux de trading avancés et une analyse de marché pour les traders de cryptomonnaies",
      category: "Trading"
    },
    "xeet-kona": {
      title: "KonaDeFi",
      description: "KonaDeFi est une plateforme de finance décentralisée offrant des solutions DeFi innovantes et des opportunités de yield farming.",
      category: "DeFi"
    },
    "xeet-xeet": {
      title: "Xeet",
      description: "Xeet est une plateforme complète pour les signaux de trading de cryptomonnaies et l\'analyse de marché",
      category: "Plateforme"
    },
    "kaito-turtle": {
      title: "TURTLE Liquidity Program",
      description: "Programme de liquidité TURTLE pour les créateurs et l\'écosystème Kaito",
      category: "Liquidité"
    },
    "kaito-hyperpie": {
      title: "Hyperpie",
      description: "Hyperpie est une plateforme de trading avancée pour les actifs numériques",
      category: "Trading"
    },
    "wallchain-covalent": {
      title: "Covalent",
      description: "Covalent fournit des API unifiées pour accéder aux données blockchain sur plusieurs réseaux",
      category: "Données"
    },
    "wallchain-heyelsa": {
      title: "HeyElsa",
      description: "HeyElsa est un assistant alimenté par l\'IA pour Web3 et les applications décentralisées",
      category: "IA"
    },
    "wallchain-idos": {
      title: "idOS",
      description: "idOS fournit des solutions d\'identité décentralisées pour les applications Web3",
      category: "Identité"
    },
    "wallchain-apecoin": {
      title: "ApeCoin R.A.I.D",
      description: "ApeCoin R.A.I.D est une initiative communautaire pour l\'écosystème ApeCoin",
      category: "Communauté"
    },
    "breadcrumbs-breadcrumb-cash": {
      title: "Breadcrumb.cash",
      description: "Breadcrumb.cash est une plateforme décentralisée pour suivre et gérer les transactions et récompenses de cryptomonnaies",
      category: "DeFi"
    },
    "breadcrumbs-blackmirror-xp": {
      title: "blackmirror_xp",
      description: "$MIRROR — Le Token Officiel de Black Mirror — Construit sur @korprotocol. Soutenu par @avax, @solana, @republiccrypto, @animocabrands",
      category: "Token"
    },
    "breadcrumbs-dream-space-hq": {
      title: "Dream Space HQ",
      description: "Dreamspace est la première toile de codage vibes pour les créatifs crypto ✨ nous facilitons à quiconque — pas seulement les développeurs — de construire, lancer et monétiser des applications onchain sans toucher au code. rêve → génère → lance → monétise.",
      category: "Outils de Développement"
    },
    "breadcrumbs-daemons": {
      title: "Dæmons",
      description: "Dæmons est une expérience blockchain alimentée par l'IA qui combine Tamagotchi et Pokémon. PvP, PvE et chat interactif avec IA.",
      category: "Gaming"
    },
    "breadcrumbs-bondi-finance": {
      title: "Bondi Finance",
      description: "Bondi Finance tokenise les obligations d'entreprises publiquement négociées en produits de revenus fixes onchain. Chaque Bond Token représente une exposition fractionnaire aux obligations d'entreprises libellées en USD.",
      category: "DeFi"
    },
    "breadcrumbs-a0x": {
      title: "A0x",
      description: "A0x est un bot de trading avancé et une plateforme d\'automatisation pour les marchés de cryptomonnaies",
      category: "Bot de Trading"
    },
    "rey-tea3": {
      title: "Tea3 - Système d'Affiliation Onchain Avancé",
      description: "Tea3 est le système d'affiliation et de parrainage ouvert le plus avancé du web. Il vous permet de développer votre héritage onchain et de maximiser vos gains dans tout notre écosystème.",
      category: "Système d'Affiliation"
    },
    "aira-zkagi": {
      title: "ZkAGI",
      description: "La Campagne ZkAGI x Airaa Auraboard est une initiative communautaire de 3 mois qui récompense les contributeurs sur Twitter, Discord et l'activité onchain. Jusqu'à 2,5% de l'offre totale de tokens ZkAGI a été alloué pour cette campagne. Les récompenses seront libérées par étapes basées sur les jalons FDV vérifiés via des plateformes comme DexScreener et Birdeye.",
      category: "Campagne"
    },
    "aira-xo-market": {
      title: "XO Market",
      description: "XO Market est une plateforme de trading décentralisée pour les actifs numériques et les cryptomonnaies.",
      category: "Plateforme de Trading"
    },
    "aira-hq": {
      title: "Airaa HQ 🌾",
      description: "Airaa HQ est le centre central pour les projets de l'écosystème Airaa et les initiatives communautaires.",
      category: "Centre de l'Écosystème"
    },
    "aira-folks-finance": {
      title: "Folks Finance",
      description: "La campagne Folks Finance x Airaa dure environ 4 mois en commençant par la phase pré-TGE, suivie de 3 mois post-TGE. Elle est conçue pour récompenser les contributeurs sur Twitter, Discord et onchain via le leaderboard Auraboard. Folks Finance est le protocole de prêt DeFi crosschain leader soutenu par Coinbase Ventures, Jump, ParaFi, OKX Ventures et Borderless Capital. Le token FOLKS (et airdrop) sera lancé le 6 novembre 2025.",
      category: "DeFi"
    },
    "mindoai-tria": {
      title: "Tria",
      description: "Une néobanque auto-custodiale qui unifie le trading, les dépenses et les gains dans une seule application - sans ponts, sans gas et sans intermédiaires. Payez, tradez et gagnez des rendements sur n'importe quel réseau et devise ! Tria a levé 12M$ et s'est associé à plus de 70 protocoles de premier plan, notamment Arbitrum, Polygon, Injective, Sentient, Aethir et Katana.",
      category: "Néobanque"
    },
    "mindoai-cryptorubic": {
      title: "Cryptorubic",
      description: "Cryptorubic est une plateforme de trading de cryptomonnaies avancée avec analyse de marché alimentée par l'IA.",
      category: "Plateforme de Trading"
    },
    "mindoai-mindoai": {
      title: "MindoAI",
      description: "MindoAI est un assistant IA intelligent pour les insights du marché des cryptomonnaies et les stratégies de trading.",
      category: "Assistant IA"
    },
    "galxe-dagama-s2": {
      title: "daGama (S2)",
      description: "Suite à son premier succès, daGama lance la Saison 2 ! Explorez et défendez le protocole Arbitrum alimenté par l'IA qui rend les recommandations transparentes, fiables et gratifiantes.",
      category: "Protocole IA"
    },
    "galxe-platform": {
      title: "Plateforme Galxe",
      description: "Galxe est un réseau de données d'identifiants Web3. Construisez de meilleurs produits et communautés avec l'infrastructure d'identifiants de Galxe.",
      category: "Plateforme Sociale"
    },
    "pulse-grvt": {
      title: "GRVT",
      description: "Tradez, Investissez, Gagnez. La finance qui coule simplement. Commencez en minutes, voyez des résultats pendant des années.",
      category: "Plateforme de Trading"
    },
    "pulse-boost": {
      title: "Boost",
      description: "Pulse Boost est une plateforme communautaire pour accélérer la croissance et l'adoption des projets Web3.",
      category: "Plateforme de Croissance"
    },
    "pulse-aegis": {
      title: "Aegis",
      description: "Pulse Aegis fournit des solutions de sécurité complètes pour les projets Web3 et les protocoles DeFi.",
      category: "Sécurité"
    },
    "pulse-belong": {
      title: "Belong",
      description: "Pulse Belong est une plateforme de construction communautaire qui connecte les passionnés et projets Web3.",
      category: "Communauté"
    },
    "pulse-campnetwork": {
      title: "Camp Network",
      description: "Pulse Camp Network est une plateforme de réseautage décentralisée pour professionnels et entrepreneurs Web3.",
      category: "Réseautage"
    },
    "pulse-sixr": {
      title: "SixR",
      description: "Pulse SixR est une plateforme innovante pour l'incubation et l'accélération de projets Web3.",
      category: "Incubation"
    },
    "pulse-imua": {
      title: "Imua",
      description: "Pulse Imua fournit des analyses avancées et des insights pour le suivi des performances de projets Web3.",
      category: "Analyse"
    },
    "pulse-play-ai": {
      title: "Play AI",
      description: "Pulse Play AI est une plateforme alimentée par l'IA pour la gestion automatisée et l'optimisation de projets Web3.",
      category: "Gestion IA"
    },
    "xeet-solstice": {
      title: "Solstice",
      description: "Solstice se concentre sur la fourniture de rendements stables et réels grâce à des stratégies qui ne dépendent pas du battage médiatique ou de la spéculation. Notre approche combine le trading delta-neutre éprouvé, une infrastructure robuste et une gestion des risques de niveau institutionnel pour construire une base de rendements positifs à long terme. Récompenses: 1% de l'offre de tokens $SLX",
      category: "Plateforme de Rendement"
    },
    "xeet-myriad-market": {
      title: "Myriad Markets",
      description: "Xeet Myriad Market fournit des opportunités de trading diversifiées sur plusieurs marchés de cryptomonnaies.",
      category: "Trading Multi-Marché"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "Xeet Abstract offre des stratégies de trading abstraites et des insights avancés du marché pour les traders de cryptomonnaies.",
      category: "Stratégies de Trading"
    },
    "xeet-iopn": {
      title: "IOPn",
      description: "Rejoignez \"L'Internet des Personnes\" avec $100,000 par mois en $OPN $300,000 en récompenses totales sur les 3 prochains mois payés au TGE (date à confirmer). IOPn construit la chaîne OPN qui est une L1 évolutive intégrant l'identité numérique décentralisée, la tokenisation d'actifs du monde réel et l'infrastructure d'IA souveraine pour autonomiser les utilisateurs avec la propriété numérique sans frontières.",
      category: "Infrastructure"
    }
  },
  de: {
    "kaito-metawin": {
      title: "MetaWin Web3 Ökosystem",
      description: "Verdienen Sie einen Anteil von 100K USDC monatlich für das Teilen über das MetaWin Web3 Ökosystem. Beginnen Sie heute mit dem Gewinnen in Web3.",
      category: "Casino"
    },
    "kaito-bitdealer": {
      title: "Bitdealer Launchpad",
      description: "Erstellen, handeln und halten Sie Token auf Bitdealer, dem offiziellen Launchpad auf Jupiter, nahtlos integriert mit Axiom, Trojan, Photon und Bonkbot",
      category: "Trading"
    },
    "kaito-multipli": {
      title: "Multipli Creator Currency",
      description: "100k Crystals / Woche (24.7 bps bei TGE) - die flüssige Creator-Währung von Multipli, auf Kaito aufgebaut",
      category: "Creator Economy"
    },
    "kaito-playai": {
      title: "PlayAI",
      description: "0.5% PLAI-Versorgung vollständig an Top 500 Creator zugewiesen, mit Bonus-Zuweisungen für Top 10",
      category: "KI-Plattform",
      platform: "Kaito",
      link: "https://x.com/playAInetwork",
      source: "https://x.com/playAInetwork/status/1975901146016518472",
      referralCode: "rjarivi",
      rewardPool: "0.5% PLAI-Versorgung",
      participants: "Top 500 Creator",
      timeLeft: "01. Aug 2025 - TBD",
      claimPeriod: "Bevorstehend",
      vestingSchedule: "Kein Vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Top 500 Yappers, mit Bonus-Zuweisungen für Top 10 werden belohnt",
        "Belohnungen ohne Vesting nach 2 Snapshots verteilt, mit 0.25% PLAI während TGE & 0.25% PLAI 1 Monat nach TGE",
        "Originale, durchdachte und hochwertige Inhalte vor Volumen priorisieren",
        "Langfristiges, konsistentes Engagement aufrechterhalten, auch von kleineren Accounts",
        "Spam, Plagiat und Fehlinformationen vermeiden"
      ]
    },
    "kaito-lombard": {
      title: "Lombard",
      description: "Das Yapper-Programm Saison 2 läuft — mit Möglichkeiten, $BARD zu verdienen und offizieller Lombard-Botschafter zu werden",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/lombard_finance",
      source: "https://x.com/Lombard_Finance/status/1970371793228910645",
      rewardPool: "0.8% BARD-Versorgung",
      participants: "Top 100 Beiträger jeden Monat",
      timeLeft: "01. Jan 2025 - 31. Mär 2026",
      claimPeriod: "Bevorstehend",
      vestingSchedule: "50% im Voraus, 50% in 6 Monaten",
      distributionPlatform: "Kaito",
      campaignRules: [
        "BARD wird monatlich an die Top 100 Beiträger von Lombard basierend auf Mindshare vergeben",
        "Monatliche Belohnungen: Top 100 Yappers nach Mindshare sind berechtigt, $BARD zu beanspruchen",
        "Kreative Herausforderungswochen: Bonus $BARD für die Top 10 herausragenden Schöpfer in Originalität und Wissen",
        "Sie erweitern das Botschafter-Programm — bringen Führer aus dem gesamten Bitcoin-Ökosystem und darüber hinaus"
      ]
    },
    "kaito-beldex": {
      title: "Beldex",
      description: "150K USDC an die Top 100 30-Tage-Creator, gleichmäßig über 3 Monate verteilt",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/BeldexCoin",
      source: "https://x.com/BeldexCoin/status/1972957466381148473",
      rewardPool: "$150K USDC ($50K/Monat)",
      participants: "Top 100 Creator",
      timeLeft: "01. Okt 2025 - 31. Dez 2025",
      claimPeriod: "Bevorstehend",
      vestingSchedule: "Kein Vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "@BeldexCoin auf X folgen",
        "Den Hashtag #Beldex in deinen Posts verwenden",
        "Pro-Tipp: Je origineller, ansprechender und konsistenter dein Inhalt ist, desto höher steigst du"
      ]
    },
    "kaito-polygon": {
      title: "Polygon",
      description: "$30K USDC/Monat für ihre besten 50 30-Tage-Creators",
      category: "Infrastruktur"
    },
    "kaito-arbitrum": {
      title: "Arbitrum",
      description: "700,000 ARB werden an die besten 150 Creator im Arbitrum Kaito Leaderboard über drei monatliche Verteilungen verteilt (Saison 2)",
      category: "Infrastruktur",
      campaignRules: [
        "700K ARB verteilt in drei Tranchen: Oktober (233,333 ARB), November (233,333 ARB), Dezember (233,334 ARB)",
        "Saison 2 bietet einen ausgewogeneren Algorithmus, der faire Chancen für Creator aller Größen gewährleistet",
        "Verteilungsstufen: Top 10 (1.: 32,000 ARB, 2.: 29,800 ARB, 3.: 27,600 ARB), Nächste 40, Verbleibende 100",
        "Monatliche Verteilungen basierend auf aktuellen Leaderboard-Positionen zum Zeitpunkt der Verteilung",
        "Arbitrum-Mitarbeiter und -Partner sind nicht förderberechtigt"
      ]
    },
    "kaito-multibank": {
      title: "MultiBank",
      description: "MultiBank.io ist eine umfassende Trading-Plattform mit erweiterten Finanzdienstleistungen. $150K USDT werden an die besten 200 Creator basierend auf Leaderboard-Ranking verteilt, unter Berücksichtigung von Inhaltsqualität, Engagement und Konsistenz.",
      category: "Trading-Plattform"
    },
    "kaito-warden-protocol": {
      title: "Warden Protocol",
      description: "2.5% WARD über 3 Saisons für Warden Protocol Creators, Warden App-Nutzer und das breitere Kaito Ökosystem",
      category: "Infrastruktur"
    },
    "kaito-talus-network": {
      title: "Talus Network",
      description: "0.3% des Token-Angebots für Talus Creators, regionale Creators und Kaito Ökosystem; 20% bei TGE freigeschaltet, der Rest über 9M bei TGE+3M vestiert",
      category: "Infrastruktur"
    },
    "bantr-morph": {
      title: "Morph",
      description: "Morph ist eine dezentrale Börse und DeFi-Protokoll auf Ethereum Layer 2",
      category: "DeFi"
    },
    "bantr-cointel": {
      title: "Cointel",
      description: "Cointel bietet intelligente Trading-Insights und Marktanalyse für Kryptowährungs-Trader",
      category: "Analyse"
    },
    "bantr-bantr": {
      title: "Bantr",
      description: "Bantr ist eine Social-Trading-Plattform, die Trader verbindet und Community-gesteuerte Insights bietet",
      category: "Social Trading"
    },
    "bantr-multichainz": {
      title: "MultichainZ",
      description: "MultichainZ ist eine Next-Gen-Omnichain-Kreditplattform, die RWAs mit DeFi verbindet. Benutzer können ETH, Stablecoins oder sogar NFTs als Sicherheit hinterlegen und nahtlos über Ketten hinweg borgen.",
      category: "DeFi"
    },
    "bantr-firestarter": {
      title: "Firestarter",
      description: "Führen Sie Gespräche darüber, wie Ersteller ihre Communities direkt besitzen und monetarisieren können. Firestarter ist eine \"Shopify für Token\"-Plattform, die es jedem ermöglicht, seinen eigenen digitalen Token in Minuten zu starten.",
      category: "Creator Economy"
    },
    "bantr-quranium": {
      title: "Quranium",
      description: "Quranium belohnt Ersteller, die authentische Gespräche über ihre AI x Blockchain x Quantensicherheitsvision führen.",
      category: "KI & Blockchain"
    },
    "wallchain-genome": {
      title: "Genome Protokoll",
      description: "2% des $NOME-Angebots für Top Quackers! Genome Protocol ist Web3's Benutzerengagement-Motor - eine modulare, intelligente Middleware-Schicht",
      category: "Infrastruktur"
    },
    "wallchain-analog": {
      title: "Analog",
      description: "Mit über 200.000 $ in $ANLOG-Belohnungen, die von unseren Top-Beiträgern verdient werden können, je früher Sie anfangen, desto besser! Das Beste daran ist, dass es kostenlos ist und jeder teilnehmen kann.",
      category: "Infrastruktur"
    },
    "cookie-lab": {
      title: "LAB",
      description: "LAB ist das ultimative Multi-Chain-Trading-Ökosystem mit den niedrigsten Gebühren. Eine umfassende Trading-Plattform, die Benutzern ermöglicht, Token mit außergewöhnlicher Geschwindigkeit, Präzision und Kontrolle auf jeder Plattform zu handeln, bereitzustellen und zu analysieren.",
      category: "Trading-Infrastruktur"
    },
    "cookie-solv-protocol": {
      title: "Solv Protocol",
      description: "@SolvProtocol ist gerade mit über $230K Belohnungen für Snappers aufgetaucht. Die Top 5 Snappers können Belohnungen von über $5K für 2 Monate Snapping erwarten. Wichtig: Das Solv-Team hat beschlossen, keine Belohnungen für $COOKIE-Staker in dieser Kampagne zuzuweisen. Alle anderen laufenden Snaps-Kampagnen auf cookie(dot)fun beinhalten weiterhin Belohnungen für Staker.",
      category: "SNAPS-Kampagne"
    },
    "bantr-blazpay": {
      title: "BlazPay",
      description: "Blazpay AI revolutioniert Krypto-Interaktionen durch die Kombination modernster künstlicher Intelligenz mit nahtlosen DeFi-Lösungen. Entwickelt, um selbst die komplexesten Aufgaben zu vereinfachen, ermöglicht Blaz AI Benutzern, Krypto mühelos zu verwalten, zu handeln und zu erkunden, alles über eine Gesprächsoberfläche.",
      category: "KI-gestütztes DeFi"
    },
    "wallchain-klout": {
      title: "KLOUT",
      description: "KLOUT ist eine Social-Influence-Plattform, die die besten Quackers mit 1% des KLOUT-Angebots über zwei Epochen belohnt. Epoche I läuft 40 Tage 10 Stunden mit 0.5% des Angebots für die besten 300 Quackers, gefolgt von Epoche II mit weiteren 0.5% des Angebots für die besten 300 Quackers.",
      category: "Social Influence"
    },
    "xeet-vdex": {
      title: "Vdex",
      description: "Vdex bietet erweiterte Trading-Signale und Marktanalyse für Kryptowährungs-Trader",
      category: "Trading"
    },
    "xeet-kona": {
      title: "KonaDeFi",
      description: "KonaDeFi ist eine dezentrale Finanzplattform, die innovative DeFi-Lösungen und Yield-Farming-Möglichkeiten bietet.",
      category: "DeFi"
    },
    "xeet-xeet": {
      title: "Xeet",
      description: "Xeet ist eine umfassende Plattform für Kryptowährungs-Trading-Signale und Marktanalyse",
      category: "Plattform"
    },
    "kaito-turtle": {
      title: "TURTLE Liquiditätsprogramm",
      description: "TURTLE Liquiditätsprogramm für Creators und das Kaito Ökosystem",
      category: "Liquidität"
    },
    "kaito-hyperpie": {
      title: "Hyperpie",
      description: "Hyperpie ist eine fortschrittliche Trading-Plattform für digitale Assets",
      category: "Trading"
    },
    "kaito-cysic": {
      title: "Cysic",
      description: "0.6% von CYS für Kaito: 60% Top Cysic Creators, 10% KR/CN Creators, 30% Kaito Ökosystem",
      category: "Infrastruktur"
    },
    "kaito-lumiterra": {
      title: "Lumiterra",
      description: "1% von LUMITERRA für ihre Top Creators und das Kaito Ökosystem",
      category: "Gaming"
    },
    "kaito-peaq": {
      title: "Peaq",
      description: "0.55% des PEAQ-Angebots für peaq Creators und das breitere Kaito Ökosystem über 11 Monate",
      category: "Infrastruktur"
    },
    "wallchain-covalent": {
      title: "Covalent",
      description: "Covalent bietet einheitliche APIs für den Zugriff auf Blockchain-Daten über mehrere Netzwerke",
      category: "Daten"
    },
    "wallchain-heyelsa": {
      title: "HeyElsa",
      description: "HeyElsa ist ein KI-gestützter Assistent für Web3 und dezentrale Anwendungen",
      category: "KI"
    },
    "wallchain-idos": {
      title: "idOS",
      description: "idOS bietet dezentrale Identitätslösungen für Web3-Anwendungen",
      category: "Identität"
    },
    "wallchain-apecoin": {
      title: "ApeCoin R.A.I.D",
      description: "ApeCoin R.A.I.D ist eine Community-gesteuerte Initiative für das ApeCoin Ökosystem",
      category: "Community"
    },
    "breadcrumbs-breadcrumb-cash": {
      title: "Breadcrumb.cash",
      description: "Breadcrumb.cash ist eine dezentrale Plattform zur Verfolgung und Verwaltung von Kryptowährungs-Transaktionen und Belohnungen",
      category: "DeFi"
    },
    "breadcrumbs-blackmirror-xp": {
      title: "blackmirror_xp",
      description: "$MIRROR — Der Offizielle Black Mirror Token — Erbaut auf @korprotocol. Unterstützt von @avax, @solana, @republiccrypto, @animocabrands",
      category: "Token"
    },
    "breadcrumbs-dream-space-hq": {
      title: "Dream Space HQ",
      description: "Dreamspace ist die erste Vibe-Coding-Leinwand für Krypto-Kreative ✨ wir machen es jedem leicht — nicht nur Entwicklern — Onchain-Apps zu bauen, zu veröffentlichen und zu monetarisieren, ohne Code zu berühren. träumen → generieren → veröffentlichen → monetarisieren.",
      category: "Entwicklungstools"
    },
    "breadcrumbs-daemons": {
      title: "Dæmons",
      description: "Dæmons ist eine KI-gestützte Blockchain-Erfahrung, die Tamagotchi mit Pokémon verbindet. PvP, PvE und interaktiver KI-Chat.",
      category: "Gaming"
    },
    "breadcrumbs-bondi-finance": {
      title: "Bondi Finance",
      description: "Bondi Finance tokenisiert öffentlich gehandelte Unternehmensanleihen in Onchain-Festzinsprodukte. Jeder Bond Token repräsentiert eine fraktionale Exposition gegenüber USD-denominierten Unternehmensanleihen.",
      category: "DeFi"
    },
    "breadcrumbs-a0x": {
      title: "A0x",
      description: "A0x ist ein fortschrittlicher Trading-Bot und Automatisierungsplattform für Kryptowährungsmärkte",
      category: "Trading-Bot"
    },
    "wallchain-limitless": {
      title: "Limitless Exchange",
      description: "0.5% des Angebots für Top Quackers! Limitless ist der größte Vorhersagemarkt auf Base (>260M$ Wetten) und der einfachste Weg, Ihre Lieblings-Assets zu handeln.",
      category: "Trading"
    },
    "rey-tea3": {
      title: "Tea3 - Fortgeschrittenes Onchain-Affiliate-System",
      description: "Tea3 ist das fortschrittlichste offene Affiliate- und Empfehlungssystem des Webs. Es ermöglicht Ihnen, Ihr Onchain-Vermächtnis zu vergrößern und Ihre Gewinne in unserem gesamten Ökosystem zu maximieren.",
      category: "Affiliate-System"
    },
    "aira-zkagi": {
      title: "ZkAGI",
      description: "Die ZkAGI x Airaa Auraboard-Kampagne ist eine 3-monatige Community-Initiative, die Beiträger auf Twitter, Discord und Onchain-Aktivitäten belohnt. Bis zu 2,5% des gesamten ZkAGI-Token-Angebots wurde für diese Kampagne zugewiesen. Belohnungen werden in Stufen basierend auf FDV-Meilensteinen freigegeben, die über Plattformen wie DexScreener und Birdeye verifiziert werden.",
      category: "Kampagne"
    },
    "aira-xo-market": {
      title: "XO Market",
      description: "XO Market ist eine dezentrale Trading-Plattform für digitale Assets und Kryptowährungen.",
      category: "Trading-Plattform"
    },
    "aira-hq": {
      title: "Airaa HQ 🌾",
      description: "Airaa HQ ist das zentrale Zentrum für Airaa-Ökosystem-Projekte und Community-Initiativen.",
      category: "Ökosystem-Zentrum"
    },
    "aira-folks-finance": {
      title: "Folks Finance",
      description: "Die Folks Finance x Airaa Kampagne läuft etwa 4 Monate, beginnend mit der Pre-TGE-Phase, gefolgt von 3 Monaten Post-TGE. Sie ist darauf ausgelegt, Beiträger über Twitter, Discord und Onchain durch das Auraboard Leaderboard zu belohnen. Folks Finance ist das führende Crosschain DeFi-Kreditprotokoll, unterstützt von Coinbase Ventures, Jump, ParaFi, OKX Ventures und Borderless Capital. Der FOLKS Token (und Airdrop) wird am 6. November 2025 gestartet.",
      category: "DeFi"
    },
    "mindoai-tria": {
      title: "Tria",
      description: "Eine selbstverwaltete Neobank, die Trading, Ausgaben und Einnahmen in einer einzigen App vereint - ohne Brücken, ohne Gas und ohne Zwischenhändler. Zahlen, handeln und Rendite verdienen über jedes Netzwerk und jede Währung! Tria hat 12M$ eingesammelt und sich mit über 70 Top-Protokollen zusammengetan, darunter Arbitrum, Polygon, Injective, Sentient, Aethir und Katana.",
      category: "Neobank"
    },
    "mindoai-cryptorubic": {
      title: "Cryptorubic",
      description: "Cryptorubic ist eine fortschrittliche Kryptowährungs-Trading-Plattform mit KI-gestützter Marktanalyse.",
      category: "Trading-Plattform"
    },
    "mindoai-mindoai": {
      title: "MindoAI",
      description: "MindoAI ist ein intelligenter KI-Assistent für Kryptowährungs-Markteinblicke und Trading-Strategien.",
      category: "KI-Assistent"
    },
    "galxe-dagama-s2": {
      title: "daGama (S2)",
      description: "Nach seinem ersten Erfolg startet daGama die Saison 2! Erkunden und fördern Sie das KI-gestützte Arbitrum-Protokoll, das Empfehlungen transparent, vertrauenswürdig und belohnend macht.",
      category: "KI-Protokoll"
    },
    "galxe-platform": {
      title: "Galxe-Plattform",
      description: "Galxe ist ein Web3-Credential-Datennetzwerk. Erstellen Sie bessere Produkte und Gemeinschaften mit Galxes Credential-Infrastruktur.",
      category: "Soziale Plattform"
    },
    "pulse-grvt": {
      title: "GRVT",
      description: "Handeln, Investieren, Verdienen. Finanzen, die einfach fließen. In Minuten starten, jahrelang Ergebnisse sehen.",
      category: "Trading-Plattform"
    },
    "pulse-boost": {
      title: "Boost",
      description: "Pulse Boost ist eine Community-gesteuerte Plattform zur Beschleunigung des Wachstums und der Adoption von Web3-Projekten.",
      category: "Wachstumsplattform"
    },
    "pulse-aegis": {
      title: "Aegis",
      description: "Pulse Aegis bietet umfassende Sicherheitslösungen für Web3-Projekte und DeFi-Protokolle.",
      category: "Sicherheit"
    },
    "pulse-belong": {
      title: "Belong",
      description: "Pulse Belong ist eine Community-Building-Plattform, die Web3-Enthusiasten und Projekte verbindet.",
      category: "Community"
    },
    "pulse-campnetwork": {
      title: "Camp Network",
      description: "Pulse Camp Network ist eine dezentrale Networking-Plattform für Web3-Profis und Unternehmer.",
      category: "Networking"
    },
    "pulse-sixr": {
      title: "SixR",
      description: "Pulse SixR ist eine innovative Plattform für Web3-Projektinkubation und -beschleunigung.",
      category: "Inkubation"
    },
    "pulse-imua": {
      title: "Imua",
      description: "Pulse Imua bietet erweiterte Analysen und Einblicke für Web3-Projektleistungsverfolgung.",
      category: "Analyse"
    },
    "pulse-play-ai": {
      title: "Play AI",
      description: "Pulse Play AI ist eine KI-gestützte Plattform für automatisierte Web3-Projektverwaltung und -optimierung.",
      category: "KI-Verwaltung"
    },
    "xeet-solstice": {
      title: "Solstice",
      description: "Solstice konzentriert sich auf die Bereitstellung stabiler, realer Renditen durch Strategien, die nicht auf Hype oder Spekulation angewiesen sind. Unser Ansatz kombiniert bewährtes Delta-neutrales Trading, robuste Infrastruktur und institutionelles Risikomanagement, um eine Grundlage für langfristig positive Renditen zu schaffen. Belohnungen: 1% des $SLX Token-Angebots",
      category: "Rendite-Plattform"
    },
    "xeet-myriad-market": {
      title: "Myriad Markets",
      description: "Xeet Myriad Market bietet vielfältige Trading-Möglichkeiten über mehrere Kryptowährungsmärkte.",
      category: "Multi-Markt-Trading"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "Xeet Abstract bietet abstrakte Trading-Strategien und erweiterte Markteinblicke für Kryptowährungs-Trader.",
      category: "Trading-Strategien"
    },
    "xeet-iopn": {
      title: "IOPn",
      description: "Treten Sie dem \"Internet der Menschen\" bei mit $100,000 pro Monat in $OPN $300,000 in Gesamtbelohnungen über die nächsten 3 Monate ausgezahlt bei TGE (Datum TBA). IOPn baut die OPN-Kette auf, die eine skalierbare L1 ist, die dezentrale digitale Identität, Tokenisierung von Real-World-Assets und souveräne KI-Infrastruktur integriert, um Benutzern grenzenlosen digitalen Besitz zu ermöglichen.",
      category: "Infrastruktur"
    },
    "kaito-integra": {
      title: "Integra",
      description: "0.5% von Integras IRL-Versorgung (TGE bald) ist für die Belohnung von Integras Punkteprogramm und Kaito-Creators, Referrern und Kaito-Ökosystem vorgesehen",
      category: "Infrastruktur",
      platform: "Kaito",
      link: "https://x.com/integra_layer",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1795808049908621312.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1980671802545217844",
      rewardPool: "0.5% IRL-Versorgung",
      participants: "Creators, Referrer und Kaito-Ökosystem",
      timeLeft: "TGE Bald",
      claimPeriod: "Bevorstehend",
      vestingSchedule: "TBD",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Aufschlüsselung: 0.4% für Creators, 0.1% für Ökosystem",
        "Veröffentlichen Sie hochwertige Inhalte über Integra, um im Leaderboard zu steigen",
        "Belohnungen basieren auf Leaderboard-Rang unter Berücksichtigung von Inhaltsqualität, Engagement und Konsistenz mit anderen Aufgaben im Punkteprogramm",
        "Erwähnen Sie @integra_layer in Ihren Posts",
        "Erstellen Sie originelle, durchdachte Inhalte",
        "Spammen Sie nicht oder veröffentlichen Sie keine Low-Effort-Inhalte",
        "Plagiieren oder kopieren Sie nicht die Arbeit anderer"
      ],
      additionalData: {
        isNew: "true"
      }
    }
  },
  ja: {
    "kaito-metawin": {
      title: "MetaWin Web3エコシステム",
      description: "MetaWin Web3エコシステムについて共有することで、月額10万USDCのシェアを獲得。今日からWeb3で勝利を始めましょう。",
      category: "カジノ"
    },
    "kaito-bitdealer": {
      title: "Bitdealer ローンチパッド",
      description: "Bitdealerでトークンを作成、取引、保持。Jupiterの公式ローンチパッドで、Axiom、Trojan、Photon、Bonkbotとシームレスに統合",
      category: "トレーディング"
    },
    "kaito-cysic": {
      title: "Cysic",
      description: "CYSの0.6%をKaitoに：上位Cysicクリエイター60%、KR/CNクリエイター10%、Kaitoエコ30%",
      category: "インフラストラクチャ",
      campaignRules: [
        "CYSの0.6%を配布：",
        "- 上位Cysicクリエイターに60%",
        "- KR/CNクリエイターに10%", 
        "- Kaitoエコに30%"
      ]
    },
    "kaito-lumiterra": {
      title: "Lumiterra",
      description: "LUMITERRAの1%を上位クリエイターとKaitoエコに配布",
      category: "ゲーミング"
    },
    "kaito-peaq": {
      title: "Peaq",
      description: "11ヶ月間、PEAQの0.55%をpeaqクリエイターとKaitoエコに配布",
      category: "インフラストラクチャ",
      campaignRules: [
        "PEAQのジェネシス供給量の0.55%",
        "11ヶ月間のキャンペーン",
        "月次配布"
      ]
    },
    "wallchain-limitless": {
      title: "Limitless Exchange",
      description: "上位Quackerに0.5%の供給量！LimitlessはBase上で最大の予測市場（>2億6000万ドルのベット）で、お気に入りの資産を取引する最も簡単な方法です。",
      category: "トレーディング"
    },
    "kaito-multipli": {
      title: "Multipli Creator Currency",
      description: "100k Crystals / Week (24.7 bps at TGE) - Kaito上に構築されたMultipliの流動クリエイター通貨",
      category: "クリエイター経済",
      campaignRules: [
        "Crystals are credited weekly to the top 200 Creators of Multipli",
        "Based on mindshare in the Multipli x Kaito leaderboard or follower quality",
        "Claim anytime at http://app.multipli.fi/crystals",
        "No lockups, full flexibility"
      ]
    },
    "kaito-playai": {
      title: "PlayAI",
      description: "0.5% PLAI供給量が上位500名のクリエイターに完全配分、上位10名にはボーナス配分",
      category: "AIプラットフォーム",
      platform: "Kaito",
      link: "https://x.com/playAInetwork",
      source: "https://x.com/playAInetwork/status/1975901146016518472",
      referralCode: "rjarivi",
      rewardPool: "0.5% PLAI供給量",
      participants: "上位500名のクリエイター",
      timeLeft: "2025年8月1日 - TBD",
      claimPeriod: "近日公開",
      vestingSchedule: "ベスティングなし",
      distributionPlatform: "Kaito",
      campaignRules: [
        "上位500名のYapper、上位10名にはボーナス配分で報酬",
        "2回のスナップショット後にベスティングなしで報酬配布、TGE時に0.25% PLAI、TGE後1ヶ月で0.25% PLAI",
        "ボリュームよりもオリジナルで思慮深く高品質なコンテンツを優先",
        "小さなアカウントでも長期的で一貫したエンゲージメントを維持",
        "スパム、盗用、誤情報を避ける"
      ]
    },
    "kaito-lombard": {
      title: "Lombard",
      description: "Yapperプログラムシーズン2が進行中 — $BARDを獲得し、公式Lombardアンバサダーになる機会",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/lombard_finance",
      source: "https://x.com/Lombard_Finance/status/1970371793228910645",
      rewardPool: "0.8% BARD供給量",
      participants: "月間上位100名の貢献者",
      timeLeft: "2025年1月1日 - 2026年3月31日",
      claimPeriod: "近日公開",
      vestingSchedule: "50%前払い、50%は6ヶ月後",
      distributionPlatform: "Kaito",
      campaignRules: [
        "BARDは月間でLombardの上位100名の貢献者にマインドシェアに基づいて授与",
        "月間報酬：マインドシェア上位100名のYapperが$BARDを請求する資格",
        "クリエイティブチャレンジ週間：独創性と知識で上位10名の優秀なクリエイターにボーナス$BARD",
        "アンバサダープログラムを拡張中 — ビットコインエコシステム全体とその先のリーダーを招致"
      ]
    },
    "kaito-beldex": {
      title: "Beldex",
      description: "上位100名の30日間クリエイターに150K USDC、3ヶ月間で均等に分配",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/BeldexCoin",
      source: "https://x.com/BeldexCoin/status/1972957466381148473",
      rewardPool: "$150K USDC（月額$50K）",
      participants: "上位100名のクリエイター",
      timeLeft: "2025年10月1日 - 2025年12月31日",
      claimPeriod: "近日公開",
      vestingSchedule: "ベスティングなし",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Xで@BeldexCoinをフォロー",
        "投稿でハッシュタグ#Beldexを使用",
        "プロのヒント：コンテンツがより独創的で魅力的で一貫性があるほど、より高く上昇します"
      ]
    },
    "kaito-turtle": {
      title: "TURTLE Liquidity Program",
      description: "クリエイターに0.3%（流動性リーダーボード + Kaitoクリエイター）、マイルストーン解除時に追加0.2%",
      category: "DeFi"
    },
    "kaito-hyperpie": {
      title: "Hyperpie",
      description: "HyperpieのHPP初期供給量の2%がHyperpieクリエイター、紹介者、Kaitoエコシステムへの報酬に割り当てられています",
      category: "DeFi",
      campaignRules: [
        "500K HPP (0.5%) - X（Twitter）でHyperpieを宣伝するクリエイターへのエアドロップ",
        "750K HPP (0.75%) - 友人をHyperpieに招待するクリエイターに配布",
        "750K HPP (0.75%) - Kaitoエコシステム（ステーカー含む）用に予約、紹介マイルストーンでアンロック"
      ]
    },
    "kaito-polygon": {
      title: "Polygon",
      description: "上位50名の30日間クリエイターに月額$30K USDC",
      category: "インフラストラクチャ",
      campaignRules: [
        "To Be Confirmed"
      ]
    },
    "kaito-arbitrum": {
      title: "Arbitrum",
      description: "700,000 ARBが3回の月次配布を通じてArbitrum Kaitoリーダーボードの上位150名のクリエイターに配布されます（シーズン2）",
      category: "インフラストラクチャ",
      campaignRules: [
        "700K ARBが3回に分けて配布: 10月(233,333 ARB)、11月(233,333 ARB)、12月(233,334 ARB)",
        "シーズン2は、あらゆるサイズのクリエイターに公平な機会を保証するよりバランスの取れたアルゴリズムを特徴とします",
        "配布階層: トップ10 (1位: 32,000 ARB、2位: 29,800 ARB、3位: 27,600 ARB)、次の40名、残り100名",
        "配布時点での現在のリーダーボード順位に基づく月次配布",
        "Arbitrumの従業員と関係者は助成金の対象外です"
      ]
    },
    "kaito-multibank": {
      title: "MultiBank",
      description: "MultiBank.ioは高度な金融サービスを提供する包括的なトレーディングプラットフォームです。$150K USDTがリーダーボードランキングに基づいて上位200名のクリエイターに配布され、コンテンツの品質、エンゲージメント、一貫性が考慮されます。",
      category: "トレーディングプラットフォーム"
    },
    "kaito-warden-protocol": {
      title: "Warden Protocol",
      description: "2.5% WARD over 3 seasons to Warden Protocol Creators, Warden App users and broader Kaito Eco",
      category: "Infrastructure",
      campaignRules: [
        "2.5% of WARD supply",
        "3-season campaign",
        "Seasonal distributions"
      ]
    },
    "kaito-talus-network": {
      title: "Talus Network",
      description: "0.3% of token supply for Talus Creators, regional Creators and Kaito Eco; 20% unlocked at TGE, remaining vested over 9M at TGE+3M",
      category: "Infrastructure",
      campaignRules: [
        "0.3% of token supply",
        "20% unlocked at TGE",
        "Remaining vested over 9M at TGE+3M"
      ]
    },
    "bantr-morph": {
      title: "Morph",
      description: "Morph is a hybrid Layer 2 blockchain on Ethereum, redefining onchain consumer finance with ultralow fees, instant settlement, and modular tools. Rewards: $500,000 in BGB Tokens",
      category: "DeFi"
    },
    "bantr-cointel": {
      title: "Cointel",
      description: "AI-native crypto intelligence. Real-time analytics & gamified education to make Web3 simple, safe & actionable. Powered by $COLS. Campaign: $50,000 in $COLS rewards",
      category: "Analysis"
    },
    "bantr-bantr": {
      title: "Bantr",
      description: "Bantr is a social trading platform that connects traders and provides community-driven insights",
      category: "Social Trading"
    },
    "wallchain-genome": {
      title: "Genome Protocol",
      description: "2% of $NOME Supply for Top Quackers! Genome Protocol is Web3's user engagement engine - a modular, intelligent middleware layer",
      category: "Infrastructure"
    },
    "wallchain-covalent": {
      title: "Covalent",
      description: "Covalent provides unified APIs to access blockchain data across multiple networks",
      category: "Data"
    },
    "wallchain-heyelsa": {
      title: "HeyElsa",
      description: "HeyElsa is an AI-powered assistant for Web3 and cryptocurrency interactions",
      category: "AI"
    },
    "wallchain-idos": {
      title: "idOS",
      description: "idOS provides decentralized identity solutions for Web3 applications",
      category: "Identity"
    },
    "wallchain-apecoin": {
      title: "ApeCoin R.A.I.D",
      description: "ApeCoin R.A.I.D is a community-driven initiative for the ApeCoin ecosystem",
      category: "Community"
    },
    "rey-tea3": {
      title: "Tea3",
      description: "Tea3 is the web's most advanced open affiliate and referral system. It allows you to grow your onchain legacy and maximize your winnings across our platforms",
      category: "Affiliate System"
    },
    "aira-xo-market": {
      title: "XO Market",
      description: "XO Market is a decentralized trading platform for digital assets and cryptocurrencies",
      category: "Trading"
    },
    "aira-hq": {
      title: "HQ",
      description: "HQ is a comprehensive platform for content management and analytics in the Web3 space",
      category: "Management"
    },
    "mindoai-cryptorubic": {
      title: "CryptoRubic",
      description: "CryptoRubic provides advanced and intelligent analysis of the cryptocurrency market",
      category: "Analysis"
    },
    "mindoai-mindoai": {
      title: "MindoAI",
      description: "MindoAI is an advanced AI platform for market analysis and predictions in cryptocurrency",
      category: "AI"
    },
    "galxe-platform": {
      title: "Galxe Platform",
      description: "Galxe is a Web3 credential data network. Build better products and communities with Galxe's credential infrastructure",
      category: "Communication"
    },
    "pulse-boost": {
      title: "Boost",
      description: "Boost provides acceleration and development solutions for projects in the Web3 space",
      category: "Development"
    },
    "pulse-aegis": {
      title: "Aegis",
      description: "Aegis provides advanced security and protection solutions for projects in the Web3 space",
      category: "Security"
    },
    "pulse-belong": {
      title: "Belong",
      description: "Belong is a community platform that connects users and projects in the Web3 space",
      category: "Community"
    },
    "pulse-campnetwork": {
      title: "Camp Network",
      description: "Camp Network provides a comprehensive network for projects and creators in the Web3 space",
      category: "Network"
    },
    "pulse-sixr": {
      title: "SixR",
      description: "SixR provides advanced solutions for interaction and engagement in the Web3 space",
      category: "Interaction"
    },
    "pulse-imua": {
      title: "Imua",
      description: "Imua provides advanced tools for development and growth in the Web3 space",
      category: "Development"
    },
    "pulse-play-ai": {
      title: "Play AI",
      description: "Play AI provides an advanced AI platform for gaming and entertainment in the Web3 space",
      category: "Gaming"
    },
    "xeet-solstice": {
      title: "Solstice",
      description: "Solstice provides advanced trading signals and market analysis for cryptocurrencies",
      category: "Trading"
    },
    "xeet-myriad-market": {
      title: "Myriad Market",
      description: "Prediction Markets for everything! From crypto, politics and sports to gaming, culture and technology. Trade your opinion. Rewards: 1 Billion $MYR Points",
      category: "Market Analysis"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "Abstract is an Ethereum Layer-2 built with the ZK Stack, offering fast, low-fee transactions with full EVM compatibility. It features the Abstract Global Wallet for seamless onboarding and a developer portal to deploy and scale Web3 apps. Rewards: Xeets",
      category: "Trading Strategy"
    },
    "xeet-xeet": {
      title: "Xeet",
      description: "Influence should be measured by the impact you make, not just the noise you make. How do you compare vs your peers? Join Xeet Leagues and find out. Rewards: Xeets",
      category: "Platform"
    },
    "xeet-vdex": {
      title: "Vdex",
      description: "Vdexは暗号通貨トレーダー向けの高度なトレーディングシグナルと市場分析を提供",
      category: "トレーディング"
    },
    "xeet-kona": {
      title: "KonaDeFi",
      description: "KonaDeFiは革新的なDeFiソリューションとイールドファーミングの機会を提供する分散型金融プラットフォームです。",
      category: "DeFi"
    },
    "breadcrumbs-breadcrumb-cash": {
      title: "Breadcrumb.cash",
      description: "Breadcrumb.cashは、暗号通貨取引と報酬の追跡・管理のための分散型プラットフォームです",
      category: "DeFi"
    },
    "breadcrumbs-blackmirror-xp": {
      title: "blackmirror_xp",
      description: "$MIRROR — 公式Black Mirrorトークン — @korprotocolで構築。@avax、@solana、@republiccrypto、@animocabrandsが支援",
      category: "トークン"
    },
    "breadcrumbs-dream-space-hq": {
      title: "Dream Space HQ",
      description: "Dreamspaceは、クリプトクリエイター向けの最初のバイブコーディングキャンバスです ✨ 開発者だけでなく、誰でもコードに触れることなくオンチェーンアプリを構築、公開、収益化できるようにします。夢見る → 生成する → 公開する → 収益化する。",
      category: "開発ツール"
    },
    "breadcrumbs-daemons": {
      title: "Dæmons",
      description: "Dæmonsは、AI搭載のタマゴッチとポケモンを組み合わせたブロックチェーン体験です。PvP、PvE、インタラクティブAIチャット。",
      category: "ゲーミング"
    },
    "breadcrumbs-bondi-finance": {
      title: "Bondi Finance",
      description: "Bondi Financeは、公開取引されている企業債券をオンチェーンの固定収入商品にトークン化します。各Bondトークンは、USD建て企業債券への部分的なエクスポージャーを表します。",
      category: "DeFi"
    },
    "breadcrumbs-a0x": {
      title: "A0x",
      description: "A0xは、暗号通貨市場向けの高度なトレーディングボットと自動化プラットフォームです",
      category: "トレーディングボット"
    },
    "rey-tea3": {
      title: "Tea3 - 高度なオンチェーンアフィリエイトシステム",
      description: "Tea3は、ウェブで最も高度なオープンアフィリエイト・紹介システムです。オンチェーンのレガシーを成長させ、エコシステム全体で勝利を最大化できます。",
      category: "アフィリエイトシステム"
    },
    "aira-zkagi": {
      title: "ZkAGI",
      description: "ZkAGI x Airaa Auraboardキャンペーンは、Twitter、Discord、オンチェーン活動の貢献者に報酬を与える3ヶ月間のコミュニティイニシアチブです。ZkAGIの総トークン供給量の最大2.5%がこのキャンペーンに割り当てられています。報酬は、DexScreenerやBirdeyeなどのプラットフォームを通じて検証されたFDVマイルストーンに基づいて段階的にリリースされます。",
      category: "キャンペーン"
    },
    "aira-xo-market": {
      title: "XO Market",
      description: "XO Marketは、デジタル資産と暗号通貨のための分散型取引プラットフォームです。",
      category: "取引プラットフォーム"
    },
    "aira-hq": {
      title: "Airaa HQ 🌾",
      description: "Airaa HQは、Airaaエコシステムプロジェクトとコミュニティイニシアチブの中央ハブです。",
      category: "エコシステムハブ"
    },
    "aira-folks-finance": {
      title: "Folks Finance",
      description: "Folks Finance x Airaaキャンペーンは、Pre-TGEフェーズから始まり、3ヶ月のPost-TGEフェーズが続く約4ヶ月間実行されます。Auraboardリーダーボードを通じて、Twitter、Discord、オンチェーンでの貢献者に報酬を与えるように設計されています。Folks Financeは、Coinbase Ventures、Jump、ParaFi、OKX Ventures、Borderless Capitalに支援された主要なクロスチェーンDeFiレンディングプロトコルです。FOLKSトークン（およびエアドロップ）は2025年11月6日にローンチされます。",
      category: "DeFi"
    },
    "mindoai-tria": {
      title: "Tria",
      description: "トレーディング、支出、収益を単一のアプリに統合する自己保管ネオバンク - ブリッジなし、ガスなし、仲介者なし。あらゆるネットワークと通貨で支払い、取引、収益を得ることができます！Triaは1200万ドルを調達し、Arbitrum、Polygon、Injective、Sentient、Aethir、Katanaを含む70以上のトッププロトコルと提携しています。",
      category: "ネオバンク"
    },
    "mindoai-cryptorubic": {
      title: "Cryptorubic",
      description: "Cryptorubicは、AI駆動の市場分析を備えた高度な暗号通貨取引プラットフォームです。",
      category: "取引プラットフォーム"
    },
    "mindoai-mindoai": {
      title: "MindoAI",
      description: "MindoAIは、暗号通貨市場の洞察と取引戦略のためのインテリジェントAIアシスタントです。",
      category: "AIアシスタント"
    },
    "galxe-dagama-s2": {
      title: "daGama (S2)",
      description: "最初の成功を受けて、daGamaがシーズン2を開始！推奨を透明で信頼でき、報酬のあるものにするAI搭載のArbitrumプロトコルを探索し、支援しましょう。",
      category: "AIプロトコル"
    },
    "galxe-platform": {
      title: "Galxeプラットフォーム",
      description: "GalxeはWeb3クレデンシャルデータネットワークです。Galxeのクレデンシャルインフラストラクチャでより良い製品とコミュニティを構築します。",
      category: "ソーシャルプラットフォーム"
    },
    "pulse-grvt": {
      title: "GRVT",
      description: "取引、投資、収益。単純に流れる金融。数分で始めて、何年も結果を見る。",
      category: "取引プラットフォーム"
    },
    "pulse-boost": {
      title: "Boost",
      description: "Pulse Boostは、Web3プロジェクトの成長と採用を加速するコミュニティ主導のプラットフォームです。",
      category: "成長プラットフォーム"
    },
    "pulse-aegis": {
      title: "Aegis",
      description: "Pulse Aegisは、Web3プロジェクトとDeFiプロトコル向けの包括的なセキュリティソリューションを提供します。",
      category: "セキュリティ"
    },
    "pulse-belong": {
      title: "Belong",
      description: "Pulse Belongは、Web3愛好家とプロジェクトを結ぶコミュニティ構築プラットフォームです。",
      category: "コミュニティ"
    },
    "pulse-campnetwork": {
      title: "Camp Network",
      description: "Pulse Camp Networkは、Web3プロフェッショナルと起業家のための分散型ネットワーキングプラットフォームです。",
      category: "ネットワーキング"
    },
    "pulse-sixr": {
      title: "SixR",
      description: "Pulse SixRは、Web3プロジェクトのインキュベーションとアクセラレーションのための革新的なプラットフォームです。",
      category: "インキュベーション"
    },
    "pulse-imua": {
      title: "Imua",
      description: "Pulse Imuaは、Web3プロジェクトのパフォーマンス追跡のための高度な分析とインサイトを提供します。",
      category: "分析"
    },
    "pulse-play-ai": {
      title: "Play AI",
      description: "Pulse Play AIは、Web3プロジェクトの自動管理と最適化のためのAI駆動プラットフォームです。",
      category: "AI管理"
    },
    "xeet-solstice": {
      title: "Solstice",
      description: "Solsticeは、ハイプや投機に依存しない戦略を通じて安定した真の収益を提供することに焦点を当てています。私たちのアプローチは、実証済みのデルタニュートラル取引、堅牢なインフラストラクチャ、機関グレードのリスク管理を組み合わせて、長期的な正の収益の基盤を構築します。報酬：$SLXトークン供給量の1%",
      category: "収益プラットフォーム"
    },
    "xeet-myriad-market": {
      title: "Myriad Markets",
      description: "Xeet Myriad Marketは、複数の暗号通貨市場にわたる多様な取引機会を提供します。",
      category: "マルチマーケット取引"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "Xeet Abstractは、暗号通貨トレーダー向けの抽象的な取引戦略と高度な市場洞察を提供します。",
      category: "取引戦略"
    },
    "xeet-iopn": {
      title: "IOPn",
      description: "「人々のインターネット」に参加して、$OPNで月額$100,000、次の3ヶ月間で合計$300,000の報酬をTGEで受け取ります（日付は後日発表）。IOPnは、分散型デジタルアイデンティティ、リアルワールドアセットのトークン化、主権AIインフラストラクチャを統合し、ユーザーに国境のないデジタル所有権を提供するスケーラブルなL1であるOPNチェーンを構築しています。",
      category: "インフラストラクチャ"
    },
    "cookie-lab": {
      title: "LAB",
      description: "LABは最低手数料の究極のマルチチェーントレーディングエコシステムです。ユーザーが任意のプラットフォームで例外的な速度、精度、制御でトークンを取引、展開、分析できる包括的なトレーディングプラットフォームです。",
      category: "トレーディングインフラ"
    },
    "cookie-solv-protocol": {
      title: "Solv Protocol",
      description: "@SolvProtocolがSnapper向けに$230K+の報酬で登場しました。上位5名のSnapperは2ヶ月間のスナッピングで$5K以上の報酬を期待できます。重要：Solvチームはこのキャンペーンで$COOKIEステーカー向けの報酬を割り当てないことを決定しました。cookie(dot)funの他の進行中のSnapsキャンペーンでは、ステーカー向けの報酬が引き続き含まれています。",
      category: "SNAPSキャンペーン"
    },
    "bantr-blazpay": {
      title: "BlazPay",
      description: "Blazpay AIは、最先端の人工知能とシームレスなDeFiソリューションを組み合わせて、暗号通貨の相互作用を再定義しています。最も複雑なタスクでさえも簡素化するように設計され、Blaz AIはユーザーが会話型インターフェースを通じて暗号通貨を簡単に管理、取引、探索できるようにします。",
      category: "AI搭載DeFi"
    },
    "wallchain-klout": {
      title: "KLOUT",
      description: "KLOUTは、2つのエポックにわたって上位QuackerにKLOUT供給量の1%を報酬として与えるソーシャルインフルエンスプラットフォームです。エポックIは40日10時間で上位300名のQuackerに0.5%の供給量、その後エポックIIでさらに上位300名のQuackerに0.5%の供給量を提供します。",
      category: "ソーシャルインフルエンス"
    },
    "kaito-integra": {
      title: "Integra",
      description: "IntegraのIRL供給量の0.5%（TGE間もなく）は、IntegraのポイントプログラムとKaitoクリエイター、リファラー、Kaitoエコシステムへの報酬に割り当てられています",
      category: "インフラストラクチャ",
      platform: "Kaito",
      link: "https://x.com/integra_layer",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1795808049908621312.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1980671802545217844",
      rewardPool: "0.5% IRL供給量",
      participants: "クリエイター、リファラー、Kaitoエコシステム",
      timeLeft: "TGE間もなく",
      claimPeriod: "近日公開",
      vestingSchedule: "TBD",
      distributionPlatform: "Kaito",
      campaignRules: [
        "内訳：クリエイターに0.4%、エコシステムに0.1%",
        "リーダーボードを上昇させるためにIntegraについて高品質なコンテンツを投稿",
        "報酬は、ポイントプログラムの他のタスクとの一貫性、コンテンツの品質、エンゲージメントを考慮したリーダーボードランクに基づきます",
        "投稿で@integra_layerをタグ付け",
        "オリジナルで思慮深いコンテンツを作成",
        "スパムや低品質なコンテンツを投稿しない",
        "他人の作品を盗用やコピーしない"
      ],
      additionalData: {
        isNew: "true"
      }
    }
  },
  ko: {
    "kaito-metawin": {
      title: "MetaWin Web3 생태계",
      description: "MetaWin Web3 생태계에 대해 공유하여 월 10만 USDC의 몫을 획득하세요. 오늘부터 Web3에서 승리하기 시작하세요.",
      category: "카지노"
    },
    "kaito-bitdealer": {
      title: "Bitdealer 런치패드",
      description: "Bitdealer에서 토큰을 생성, 거래, 보유하세요. Jupiter의 공식 런치패드로 Axiom, Trojan, Photon, Bonkbot과 원활하게 통합",
      category: "트레이딩"
    },
    "kaito-multipli": {
      title: "Multipli Creator Currency",
      description: "100k Crystals / Week (24.7 bps at TGE) - the liquid creator currency of Multipli, built on top of Kaito",
      category: "Creator Economy",
      campaignRules: [
        "Crystals are credited weekly to the top 200 Creators of Multipli",
        "Based on mindshare in the Multipli x Kaito leaderboard or follower quality",
        "Claim anytime at http://app.multipli.fi/crystals",
        "No lockups, full flexibility"
      ]
    },
    "kaito-playai": {
      title: "PlayAI",
      description: "0.5% PLAI 공급량이 상위 500명의 크리에이터에게 완전 배분, 상위 10명에게는 보너스 배분",
      category: "AI 플랫폼",
      platform: "Kaito",
      link: "https://x.com/playAInetwork",
      source: "https://x.com/playAInetwork/status/1975901146016518472",
      referralCode: "rjarivi",
      rewardPool: "0.5% PLAI 공급량",
      participants: "상위 500명의 크리에이터",
      timeLeft: "2025년 8월 1일 - TBD",
      claimPeriod: "곧 출시",
      vestingSchedule: "베스팅 없음",
      distributionPlatform: "Kaito",
      campaignRules: [
        "상위 500명의 Yapper, 상위 10명에게는 보너스 배분으로 보상",
        "2번의 스냅샷 후 베스팅 없이 보상 배포, TGE 시 0.25% PLAI 및 TGE 후 1개월에 0.25% PLAI",
        "볼륨보다 원본적이고 사려 깊으며 고품질의 콘텐츠를 우선시",
        "작은 계정이라도 장기적이고 일관된 참여 유지",
        "스팸, 표절, 허위 정보 피하기"
      ]
    },
    "kaito-lombard": {
      title: "Lombard",
      description: "Yapper 프로그램 시즌 2 진행 중 — $BARD 획득 및 공식 Lombard 앰배서더가 될 기회",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/lombard_finance",
      source: "https://x.com/Lombard_Finance/status/1970371793228910645",
      rewardPool: "0.8% BARD 공급량",
      participants: "월간 상위 100명의 기여자",
      timeLeft: "2025년 1월 1일 - 2026년 3월 31일",
      claimPeriod: "곧 출시",
      vestingSchedule: "50% 선불, 50%는 6개월 후",
      distributionPlatform: "Kaito",
      campaignRules: [
        "BARD는 월간으로 Lombard의 상위 100명 기여자에게 마인드셰어 기반으로 수여",
        "월간 보상: 마인드셰어 상위 100명의 Yapper가 $BARD 청구 자격",
        "크리에이티브 챌린지 주간: 독창성과 지식에서 상위 10명의 뛰어난 크리에이터에게 보너스 $BARD",
        "앰배서더 프로그램 확장 중 — 비트코인 생태계 전체와 그 너머의 리더들 영입"
      ]
    },
    "kaito-beldex": {
      title: "Beldex",
      description: "상위 100명의 30일 크리에이터에게 150K USDC, 3개월에 걸쳐 균등 분배",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/BeldexCoin",
      source: "https://x.com/BeldexCoin/status/1972957466381148473",
      rewardPool: "$150K USDC (월 $50K)",
      participants: "상위 100명의 크리에이터",
      timeLeft: "2025년 10월 1일 - 2025년 12월 31일",
      claimPeriod: "곧 출시",
      vestingSchedule: "베스팅 없음",
      distributionPlatform: "Kaito",
      campaignRules: [
        "X에서 @BeldexCoin 팔로우",
        "게시물에 해시태그 #Beldex 사용",
        "프로 팁: 콘텐츠가 더 독창적이고 매력적이며 일관성 있을수록 더 높이 상승합니다"
      ]
    },
    "kaito-turtle": {
      title: "TURTLE Liquidity Program",
      description: "0.3% to Creators (Liquidity Leaderboard + Kaito Creators), with additional 0.2% upon milestone unlock",
      category: "DeFi"
    },
    "kaito-hyperpie": {
      title: "Hyperpie",
      description: "2% of Hyperpie's HPP initial supply is allocated to reward Hyperpie Creators, Referrers, and Kaito Eco",
      category: "DeFi",
      campaignRules: [
        "500K HPP (0.5%) - Airdrop to Creators who promote Hyperpie on X (Twitter)",
        "750K HPP (0.75%) - Distributed to Creators who refer their friends to join Hyperpie",
        "750K HPP (0.75%) - Reserved for the Kaito Eco (incl. stakers), unlocked via referral milestones"
      ]
    },
    "kaito-polygon": {
      title: "Polygon",
      description: "$30K USDC/Month to their top 50 30D Creators",
      category: "Infrastructure",
      campaignRules: [
        "To Be Confirmed"
      ]
    },
    "kaito-arbitrum": {
      title: "Arbitrum",
      description: "700,000 ARB가 3회의 월별 배포를 통해 Arbitrum Kaito 리더보드 상위 150명의 크리에이터에게 배포됩니다 (시즌 2)",
      category: "인프라",
      campaignRules: [
        "700K ARB가 3회에 걸쳐 배포: 10월(233,333 ARB), 11월(233,333 ARB), 12월(233,334 ARB)",
        "시즌 2는 모든 규모의 크리에이터에게 공정한 기회를 보장하는 더 균형 잡힌 알고리즘을 특징으로 합니다",
        "배포 계층: 상위 10명 (1위: 32,000 ARB, 2위: 29,800 ARB, 3위: 27,600 ARB), 다음 40명, 나머지 100명",
        "배포 시점의 현재 리더보드 순위를 기반으로 한 월별 배포",
        "Arbitrum 직원 및 관계자는 보조금 대상이 아닙니다"
      ]
    },
    "kaito-multibank": {
      title: "MultiBank",
      description: "MultiBank.io는 고급 금융 서비스를 제공하는 포괄적인 거래 플랫폼입니다. $150K USDT가 리더보드 순위를 기반으로 상위 200명의 크리에이터에게 배포되며, 콘텐츠 품질, 참여도 및 일관성이 고려됩니다.",
      category: "거래 플랫폼"
    },
    "kaito-cysic": {
      title: "Cysic",
      description: "CYS의 0.6%를 Kaito에: 상위 Cysic 크리에이터 60%, KR/CN 크리에이터 10%, Kaito 생태계 30%",
      category: "인프라",
      campaignRules: [
        "CYS의 0.6% 배분:",
        "- 상위 Cysic 크리에이터에게 60%",
        "- KR/CN 크리에이터에게 10%", 
        "- Kaito 생태계에 30%"
      ]
    },
    "kaito-lumiterra": {
      title: "Lumiterra",
      description: "LUMITERRA의 1%를 상위 크리에이터와 Kaito 생태계에 배분",
      category: "게이밍"
    },
    "kaito-peaq": {
      title: "Peaq",
      description: "11개월 동안 PEAQ의 0.55%를 peaq 크리에이터와 Kaito 생태계에 배분",
      category: "인프라",
      campaignRules: [
        "PEAQ 제네시스 공급량의 0.55%",
        "11개월 캠페인",
        "월간 배분"
      ]
    },
    "kaito-warden-protocol": {
      title: "Warden Protocol",
      description: "2.5% WARD를 3시즌에 걸쳐 Warden Protocol 크리에이터, Warden 앱 사용자 및 더 넓은 Kaito 생태계에 배분",
      category: "인프라",
      campaignRules: [
        "WARD 공급량의 2.5%",
        "3시즌 캠페인",
        "시즌별 배분"
      ]
    },
    "kaito-talus-network": {
      title: "Talus Network",
      description: "Talus 크리에이터, 지역 크리에이터 및 Kaito 생태계를 위해 토큰 공급량의 0.3%; TGE에서 20% 잠금 해제, 나머지는 TGE+3M에서 9M에 걸쳐 베스팅",
      category: "인프라",
      campaignRules: [
        "토큰 공급량의 0.3%",
        "TGE에서 20% 잠금 해제",
        "나머지는 TGE+3M에서 9M에 걸쳐 베스팅"
      ]
    },
    "bantr-morph": {
      title: "Morph",
      description: "Morph는 Ethereum Layer 2에 구축된 탈중앙화 거래소 및 DeFi 프로토콜입니다",
      category: "DeFi"
    },
    "bantr-cointel": {
      title: "Cointel",
      description: "Cointel은 암호화폐 거래자를 위한 지능형 거래 인사이트 및 시장 분석을 제공합니다",
      category: "분석"
    },
    "bantr-bantr": {
      title: "Bantr",
      description: "Bantr는 거래자를 연결하고 커뮤니티 중심의 인사이트를 제공하는 소셜 거래 플랫폼입니다",
      category: "소셜 트레이딩"
    },
    "bantr-multichainz": {
      title: "MultichainZ",
      description: "MultichainZ는 RWA와 DeFi를 연결하는 차세대 옴니체인 크레딧 플랫폼입니다. 사용자는 ETH, 스테이블코인, 심지어 NFT를 담보로 제공하고 체인 간에 원활하게 차용할 수 있습니다.",
      category: "DeFi"
    },
    "bantr-firestarter": {
      title: "Firestarter",
      description: "크리에이터가 커뮤니티를 직접 소유하고 수익화하는 방법에 대한 대화를 촉진합니다. Firestarter는 누구나 몇 분 만에 자신만의 디지털 토큰을 출시할 수 있는 \"토큰용 Shopify\" 플랫폼입니다.",
      category: "크리에이터 경제"
    },
    "bantr-quranium": {
      title: "Quranium",
      description: "Quranium는 AI x 블록체인 x 양자 보안 비전에 대한 진정한 대화를 불러일으키는 크리에이터에게 보상을 제공합니다.",
      category: "AI & 블록체인"
    },
    "wallchain-genome": {
      title: "Genome Protocol",
      description: "상위 Quacker를 위한 $NOME 공급량의 2%! Genome Protocol은 Web3의 사용자 참여 엔진 - 모듈화되고 지능적인 미들웨어 레이어입니다",
      category: "인프라"
    },
    "wallchain-limitless": {
      title: "Limitless Exchange",
      description: "상위 Quacker를 위한 공급량의 0.5%! Limitless는 Base에서 가장 큰 예측 시장(>2억 6천만 달러 베팅)이며 좋아하는 자산을 거래하는 가장 쉬운 방법입니다",
      category: "트레이딩"
    },
    "wallchain-covalent": {
      title: "Covalent",
      description: "Covalent는 여러 네트워크에서 블록체인 데이터에 접근할 수 있는 통합 API를 제공합니다",
      category: "데이터"
    },
    "wallchain-heyelsa": {
      title: "HeyElsa",
      description: "HeyElsa는 Web3 및 암호화폐 상호작용을 위한 AI 기반 어시스턴트입니다",
      category: "AI"
    },
    "wallchain-idos": {
      title: "idOS",
      description: "idOS는 Web3 애플리케이션을 위한 탈중앙화 신원 솔루션을 제공합니다",
      category: "신원"
    },
    "wallchain-apecoin": {
      title: "ApeCoin R.A.I.D",
      description: "ApeCoin R.A.I.D는 ApeCoin 생태계를 위한 커뮤니티 중심 이니셔티브입니다",
      category: "커뮤니티"
    },
    "rey-tea3": {
      title: "Tea3",
      description: "Tea3는 웹에서 가장 고급 오픈 어필리에이트 및 추천 시스템입니다. 온체인 유산을 성장시키고 플랫폼에서 승리를 극대화할 수 있습니다",
      category: "어필리에이트 시스템"
    },
    "aira-xo-market": {
      title: "XO Market",
      description: "XO Market는 디지털 자산 및 암호화폐를 위한 탈중앙화 거래 플랫폼입니다",
      category: "트레이딩"
    },
    "aira-hq": {
      title: "HQ",
      description: "HQ는 Web3 공간에서 콘텐츠 관리 및 분석을 위한 포괄적인 플랫폼입니다",
      category: "관리"
    },
    "mindoai-cryptorubic": {
      title: "CryptoRubic",
      description: "CryptoRubic는 암호화폐 시장의 고급 및 지능형 분석을 제공합니다",
      category: "분석"
    },
    "mindoai-mindoai": {
      title: "MindoAI",
      description: "MindoAI는 암호화폐 시장 분석 및 예측을 위한 고급 AI 플랫폼입니다",
      category: "AI"
    },
    "galxe-platform": {
      title: "Galxe Platform",
      description: "Galxe is a Web3 credential data network. Build better products and communities with Galxe's credential infrastructure",
      category: "커뮤니케이션"
    },
    "pulse-boost": {
      title: "Boost",
      description: "Boost는 Web3 공간에서 프로젝트를 위한 가속 및 개발 솔루션을 제공합니다",
      category: "개발"
    },
    "pulse-aegis": {
      title: "Aegis",
      description: "Aegis는 Web3 공간에서 프로젝트를 위한 고급 보안 및 보호 솔루션을 제공합니다",
      category: "보안"
    },
    "pulse-belong": {
      title: "Belong",
      description: "Belong는 Web3 공간에서 사용자와 프로젝트를 연결하는 커뮤니티 플랫폼입니다",
      category: "커뮤니티"
    },
    "pulse-campnetwork": {
      title: "Camp Network",
      description: "Camp Network는 Web3 공간에서 프로젝트와 크리에이터를 위한 포괄적인 네트워크를 제공합니다",
      category: "네트워크"
    },
    "pulse-sixr": {
      title: "SixR",
      description: "SixR는 Web3 공간에서 상호작용 및 참여를 위한 고급 솔루션을 제공합니다",
      category: "상호작용"
    },
    "pulse-imua": {
      title: "Imua",
      description: "Imua는 Web3 공간에서 개발 및 성장을 위한 고급 도구를 제공합니다",
      category: "개발"
    },
    "pulse-play-ai": {
      title: "Play AI",
      description: "Play AI는 Web3 공간에서 게임 및 엔터테인먼트를 위한 고급 AI 플랫폼을 제공합니다",
      category: "게이밍"
    },
    "pulse-grvt": {
      title: "GRVT",
      description: "거래, 투자, 수익. 단순히 흐르는 금융. 몇 분 안에 시작하고, 몇 년 동안 결과를 보세요.",
      category: "거래 플랫폼"
    },
    "xeet-solstice": {
      title: "Solstice",
      description: "Solstice는 암호화폐를 위한 고급 거래 신호 및 시장 분석을 제공합니다",
      category: "트레이딩"
    },
    "xeet-myriad-market": {
      title: "Myriad Market",
      description: "Myriad Market는 여러 자산 클래스에 걸쳐 포괄적인 시장 분석 및 거래 기회를 제공합니다",
      category: "시장 분석"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "Abstract는 고급 암호화폐 거래자를 위한 혁신적인 거래 전략 및 시장 인사이트를 제공합니다",
      category: "거래 전략"
    },
    "xeet-xeet": {
      title: "Xeet",
      description: "Xeet는 암호화폐 거래 신호 및 시장 분석을 위한 포괄적인 플랫폼입니다",
      category: "플랫폼"
    },
    "xeet-vdex": {
      title: "Vdex",
      description: "Vdex는 암호화폐 거래자를 위한 고급 거래 신호 및 시장 분석을 제공합니다",
      category: "거래 신호"
    },
    "xeet-kona": {
      title: "KonaDeFi",
      description: "KonaDeFi는 혁신적인 DeFi 솔루션과 수익률 농사 기회를 제공하는 탈중앙화 금융 플랫폼입니다.",
      category: "DeFi"
    },
    "breadcrumbs-breadcrumb-cash": {
      title: "Breadcrumb.cash",
      description: "Breadcrumb.cash는 암호화폐 거래 및 보상 추적 및 관리를 위한 분산형 플랫폼입니다",
      category: "DeFi"
    },
    "breadcrumbs-blackmirror-xp": {
      title: "blackmirror_xp",
      description: "$MIRROR — 공식 Black Mirror 토큰 — @korprotocol에서 구축. @avax, @solana, @republiccrypto, @animocabrands가 지원",
      category: "토큰"
    },
    "breadcrumbs-dream-space-hq": {
      title: "Dream Space HQ",
      description: "Dreamspace는 크립토 크리에이티브를 위한 첫 번째 바이브 코딩 캔버스입니다 ✨ 개발자가 아닌 누구나 코드를 건드리지 않고 온체인 앱을 구축, 출시, 수익화할 수 있도록 합니다. 꿈꾸기 → 생성하기 → 출시하기 → 수익화하기.",
      category: "개발 도구"
    },
    "breadcrumbs-daemons": {
      title: "Dæmons",
      description: "Dæmons는 AI 기반의 타마고치와 포켓몬을 결합한 블록체인 경험입니다. PvP, PvE 및 대화형 AI 채팅.",
      category: "게이밍"
    },
    "breadcrumbs-bondi-finance": {
      title: "Bondi Finance",
      description: "Bondi Finance는 공개 거래되는 기업 채권을 온체인 고정 수익 상품으로 토큰화합니다. 각 Bond 토큰은 USD 표시 기업 채권에 대한 부분적 노출을 나타냅니다.",
      category: "DeFi"
    },
    "breadcrumbs-a0x": {
      title: "A0x",
      description: "A0x는 암호화폐 시장을 위한 고급 거래 봇 및 자동화 플랫폼입니다",
      category: "거래 봇"
    },
    "rey-tea3": {
      title: "Tea3 - 고급 온체인 제휴 시스템",
      description: "Tea3는 웹에서 가장 고급스러운 오픈 제휴 및 추천 시스템입니다. 온체인 레거시를 성장시키고 전체 생태계에서 승리를 극대화할 수 있습니다.",
      category: "제휴 시스템"
    },
    "aira-zkagi": {
      title: "ZkAGI",
      description: "ZkAGI x Airaa Auraboard 캠페인은 Twitter, Discord 및 온체인 활동에 기여하는 기여자들에게 보상을 제공하는 3개월 커뮤니티 이니셔티브입니다. ZkAGI의 총 토큰 공급량의 최대 2.5%가 이 캠페인에 할당되었습니다. 보상은 DexScreener 및 Birdeye와 같은 플랫폼을 통해 검증된 FDV 마일스톤을 기반으로 단계적으로 출시됩니다.",
      category: "캠페인"
    },
    "aira-xo-market": {
      title: "XO Market",
      description: "XO Market은 디지털 자산과 암호화폐를 위한 분산형 거래 플랫폼입니다.",
      category: "거래 플랫폼"
    },
    "aira-hq": {
      title: "Airaa HQ 🌾",
      description: "Airaa HQ는 Airaa 생태계 프로젝트와 커뮤니티 이니셔티브의 중앙 허브입니다.",
      category: "생태계 허브"
    },
    "aira-folks-finance": {
      title: "Folks Finance",
      description: "Folks Finance x Airaa 캠페인은 Pre-TGE 단계로 시작하여 3개월의 Post-TGE 단계가 이어지는 약 4개월 동안 진행됩니다. Auraboard 리더보드를 통해 Twitter, Discord, 온체인에서 기여자들에게 보상을 제공하도록 설계되었습니다. Folks Finance는 Coinbase Ventures, Jump, ParaFi, OKX Ventures, Borderless Capital이 지원하는 선도적인 크로스체인 DeFi 대출 프로토콜입니다. FOLKS 토큰(및 에어드롭)은 2025년 11월 6일에 출시됩니다.",
      category: "DeFi"
    },
    "mindoai-tria": {
      title: "Tria",
      description: "거래, 지출, 수익을 단일 앱으로 통합하는 자체 보관 네오뱅크 - 브리지 없음, 가스 없음, 중개자 없음. 모든 네트워크와 통화에서 결제, 거래, 수익을 얻으세요! Tria는 1200만 달러를 모금했으며 Arbitrum, Polygon, Injective, Sentient, Aethir, Katana를 포함한 70개 이상의 최고 프로토콜과 파트너십을 맺었습니다.",
      category: "네오뱅크"
    },
    "mindoai-cryptorubic": {
      title: "Cryptorubic",
      description: "Cryptorubic은 AI 기반 시장 분석을 갖춘 고급 암호화폐 거래 플랫폼입니다.",
      category: "거래 플랫폼"
    },
    "mindoai-mindoai": {
      title: "MindoAI",
      description: "MindoAI는 암호화폐 시장 인사이트와 거래 전략을 위한 지능형 AI 어시스턴트입니다.",
      category: "AI 어시스턴트"
    },
    "galxe-dagama-s2": {
      title: "daGama (S2)",
      description: "첫 번째 성공에 이어 daGama가 시즌 2를 시작합니다! 추천을 투명하고 신뢰할 수 있으며 보상이 있는 것으로 만드는 AI 기반 Arbitrum 프로토콜을 탐색하고 지원하세요.",
      category: "AI 프로토콜"
    },
    "galxe-platform": {
      title: "Galxe 플랫폼",
      description: "Galxe는 Web3 크리덴셜 데이터 네트워크입니다. Galxe의 크리덴셜 인프라로 더 나은 제품과 커뮤니티를 구축하세요.",
      category: "소셜 플랫폼"
    },
    "pulse-boost": {
      title: "Pulse Boost",
      description: "Pulse Boost는 Web3 프로젝트의 성장과 채택을 가속화하는 커뮤니티 주도 플랫폼입니다.",
      category: "성장 플랫폼"
    },
    "pulse-aegis": {
      title: "Pulse Aegis",
      description: "Pulse Aegis는 Web3 프로젝트와 DeFi 프로토콜을 위한 포괄적인 보안 솔루션을 제공합니다.",
      category: "보안"
    },
    "pulse-belong": {
      title: "Pulse Belong",
      description: "Pulse Belong은 Web3 애호가와 프로젝트를 연결하는 커뮤니티 구축 플랫폼입니다.",
      category: "커뮤니티"
    },
    "pulse-campnetwork": {
      title: "Pulse Camp Network",
      description: "Pulse Camp Network는 Web3 전문가와 기업가를 위한 분산형 네트워킹 플랫폼입니다.",
      category: "네트워킹"
    },
    "pulse-sixr": {
      title: "Pulse SixR",
      description: "Pulse SixR는 Web3 프로젝트 인큐베이션과 가속화를 위한 혁신적인 플랫폼입니다.",
      category: "인큐베이션"
    },
    "pulse-imua": {
      title: "Pulse Imua",
      description: "Pulse Imua는 Web3 프로젝트 성능 추적을 위한 고급 분석과 인사이트를 제공합니다.",
      category: "분석"
    },
    "pulse-play-ai": {
      title: "Pulse Play AI",
      description: "Pulse Play AI는 Web3 프로젝트의 자동화된 관리와 최적화를 위한 AI 기반 플랫폼입니다.",
      category: "AI 관리"
    },
    "xeet-solstice": {
      title: "Solstice",
      description: "Solstice는 과대광고나 투기에 의존하지 않는 전략을 통해 안정적이고 실제적인 수익을 제공하는 데 중점을 둡니다. 우리의 접근 방식은 검증된 델타 중립 거래, 견고한 인프라, 기관급 리스크 관리를 결합하여 장기적인 긍정적 수익의 기반을 구축합니다. 보상: $SLX 토큰 공급량의 1%",
      category: "수익 플랫폼"
    },
    "xeet-myriad-market": {
      title: "Myriad Markets",
      description: "Xeet Myriad Market은 여러 암호화폐 시장에 걸쳐 다양한 거래 기회를 제공합니다.",
      category: "멀티 마켓 거래"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "Xeet Abstract는 암호화폐 거래자를 위한 추상적인 거래 전략과 고급 시장 인사이트를 제공합니다.",
      category: "거래 전략"
    },
    "xeet-iopn": {
      title: "IOPn",
      description: "\"사람들의 인터넷\"에 참여하여 $OPN으로 월 $100,000, 다음 3개월 동안 총 $300,000의 보상을 TGE에서 받으세요 (날짜 추후 발표). IOPn은 분산형 디지털 신원, 실물 자산 토큰화, 주권 AI 인프라를 통합하여 사용자에게 국경 없는 디지털 소유권을 제공하는 확장 가능한 L1인 OPN 체인을 구축하고 있습니다.",
      category: "인프라"
    },
    "cookie-lab": {
      title: "LAB",
      description: "LAB은 최저 수수료의 궁극적인 멀티체인 거래 생태계입니다. 사용자가 모든 플랫폼에서 예외적인 속도, 정확성 및 제어로 토큰을 거래, 배포 및 분석할 수 있는 포괄적인 거래 플랫폼입니다.",
      category: "거래 인프라"
    },
    "cookie-solv-protocol": {
      title: "Solv Protocol",
      description: "@SolvProtocol이 Snapper들을 위해 $230K+ 상당의 보상을 가지고 등장했습니다. 상위 5명의 Snapper는 2개월간의 스냅핑으로 $5K 이상의 보상을 기대할 수 있습니다. 중요: Solv 팀은 이 캠페인에서 $COOKIE 스테이커들에게 보상을 할당하지 않기로 결정했습니다. cookie(dot)fun의 다른 진행 중인 Snaps 캠페인들은 여전히 스테이커들을 위한 보상을 포함합니다.",
      category: "SNAPS 캠페인"
    },
    "bantr-blazpay": {
      title: "BlazPay",
      description: "Blazpay AI는 최첨단 인공지능과 원활한 DeFi 솔루션을 결합하여 암호화폐 상호작용을 재정의하고 있습니다. 가장 복잡한 작업까지도 단순화하도록 설계된 Blaz AI는 사용자가 대화형 인터페이스를 통해 암호화폐를 쉽게 관리, 거래 및 탐색할 수 있게 합니다.",
      category: "AI 기반 DeFi"
    },
    "wallchain-klout": {
      title: "KLOUT",
      description: "KLOUT는 두 에포크에 걸쳐 상위 Quacker에게 KLOUT 공급량의 1%를 보상으로 제공하는 소셜 인플루언스 플랫폼입니다. 에포크 I은 40일 10시간 동안 상위 300명의 Quacker에게 0.5% 공급량을 제공하고, 그 후 에포크 II에서 상위 300명의 Quacker에게 추가로 0.5% 공급량을 제공합니다.",
      category: "소셜 인플루언스"
    },
    "kaito-integra": {
      title: "Integra",
      description: "Integra의 IRL 공급량의 0.5%(TGE 곧 출시)는 Integra의 포인트 프로그램과 Kaito 크리에이터, 추천인, Kaito 생태계에 대한 보상으로 할당됩니다",
      category: "인프라",
      platform: "Kaito",
      link: "https://x.com/integra_layer",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1795808049908621312.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1980671802545217844",
      rewardPool: "0.5% IRL 공급량",
      participants: "크리에이터, 추천인, Kaito 생태계",
      timeLeft: "TGE 곧 출시",
      claimPeriod: "곧 출시",
      vestingSchedule: "TBD",
      distributionPlatform: "Kaito",
      campaignRules: [
        "세부사항: 크리에이터에게 0.4%, 생태계에게 0.1%",
        "리더보드를 올리기 위해 Integra에 대한 고품질 콘텐츠 게시",
        "보상은 포인트 프로그램의 다른 작업과의 일관성, 콘텐츠 품질, 참여도를 고려한 리더보드 순위에 기반합니다",
        "게시물에서 @integra_layer 태그",
        "독창적이고 사려 깊은 콘텐츠 생성",
        "스팸이나 저품질 콘텐츠 게시 금지",
        "타인의 작품 표절이나 복사 금지"
      ],
      additionalData: {
        isNew: "true"
      }
    }
  },
  zh: {
    "kaito-metawin": {
      title: "MetaWin Web3生态系统",
      description: "通过分享MetaWin Web3生态系统相关内容，每月获得10万USDC的份额。今天就开始在Web3中获胜。",
      category: "赌场"
    },
    "kaito-bitdealer": {
      title: "Bitdealer启动平台",
      description: "在Bitdealer上创建、交易和持有代币，这是Jupiter的官方启动平台，与Axiom、Trojan、Photon和Bonkbot无缝集成",
      category: "交易"
    },
    "bantr-abstract": {
      title: "抽象交易策略",
      description: "为高级加密货币交易者提供创新交易策略和市场洞察",
      category: "交易策略"
    },
    "bantr-myriad": {
      title: "多元化市场",
      description: "提供跨多个资产类别的全面市场分析和交易机会",
      category: "市场分析"
    },
    "xeet-platform": {
      title: "Xeet平台",
      description: "加密货币交易信号和市场分析的综合平台",
      category: "平台"
    },
    "kaito-polygon": {
      title: "Polygon",
      description: "每月向顶级50名30天创作者提供3万USDC",
      category: "基础设施",
      campaignRules: [
        "待确认"
      ]
    },
    "kaito-playai": {
      title: "PlayAI",
      description: "0.5% PLAI供应量完全分配给前500名创作者，前10名有额外分配",
      category: "AI平台",
      platform: "Kaito",
      link: "https://x.com/playAInetwork",
      source: "https://x.com/playAInetwork/status/1975901146016518472",
      referralCode: "rjarivi",
      rewardPool: "0.5% PLAI供应量",
      participants: "前500名创作者",
      timeLeft: "2025年8月1日 - TBD",
      claimPeriod: "即将推出",
      vestingSchedule: "无锁仓",
      distributionPlatform: "Kaito",
      campaignRules: [
        "前500名Yapper，前10名有额外分配奖励",
        "2次快照后无锁仓分发奖励，TGE时0.25% PLAI，TGE后1个月0.25% PLAI",
        "优先考虑原创、深思熟虑和高质量内容而非数量",
        "保持长期、一致的参与，即使来自较小的账户",
        "避免垃圾信息、抄袭和错误信息"
      ]
    },
    "kaito-lombard": {
      title: "Lombard",
      description: "Yapper计划第2季正在进行 — 有机会赚取$BARD并成为官方Lombard大使",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/lombard_finance",
      source: "https://x.com/Lombard_Finance/status/1970371793228910645",
      rewardPool: "0.8% BARD供应量",
      participants: "每月前100名贡献者",
      timeLeft: "2025年1月1日 - 2026年3月31日",
      claimPeriod: "即将推出",
      vestingSchedule: "50%预付款，50%在6个月后",
      distributionPlatform: "Kaito",
      campaignRules: [
        "BARD每月根据思维份额奖励给Lombard的前100名贡献者",
        "月度奖励：思维份额前100名的Yapper有资格领取$BARD",
        "创意挑战周：为原创性和知识方面前10名杰出创作者提供奖金$BARD",
        "他们正在扩展大使计划 — 引入来自整个比特币生态系统及更远范围的领导者"
      ]
    },
    "kaito-beldex": {
      title: "Beldex",
      description: "150K USDC分配给前100名30天创作者，在3个月内平均分配",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/BeldexCoin",
      source: "https://x.com/BeldexCoin/status/1972957466381148473",
      rewardPool: "$150K USDC（每月$50K）",
      participants: "前100名创作者",
      timeLeft: "2025年10月1日 - 2025年12月31日",
      claimPeriod: "即将推出",
      vestingSchedule: "无锁仓",
      distributionPlatform: "Kaito",
      campaignRules: [
        "在X上关注@BeldexCoin",
        "在帖子中使用#Beldex标签",
        "专业提示：内容越原创、吸引人且一致，排名就越高"
      ]
    },
    "kaito-arbitrum": {
      title: "Arbitrum",
      description: "700,000 ARB将通过三次月度分发分发给Arbitrum Kaito排行榜前150名创作者（第二季）",
      category: "基础设施",
      campaignRules: [
        "700K ARB分三批分发: 10月(233,333 ARB)、11月(233,333 ARB)、12月(233,334 ARB)",
        "第二季采用更平衡的算法，确保所有规模的创作者都有公平的机会",
        "分发层级: 前10名 (第1名: 32,000 ARB、第2名: 29,800 ARB、第3名: 27,600 ARB)、接下来40名、剩余100名",
        "基于分发时当前排行榜位置的月度分发",
        "Arbitrum员工和关联方不符合资助资格"
      ]
    },
    "kaito-multibank": {
      title: "MultiBank",
      description: "MultiBank.io是一个提供高级金融服务的综合交易平台。$150K USDT将根据排行榜排名分发给前200名创作者，考虑内容质量、参与度和一致性。",
      category: "交易平台"
    },
    "kaito-cysic": {
      title: "Cysic",
      description: "CYS的0.6%分配给Kaito：顶级Cysic创作者60%，KR/CN创作者10%，Kaito生态30%",
      category: "基础设施",
      campaignRules: [
        "CYS的0.6%分配：",
        "- 顶级Cysic创作者60%",
        "- KR/CN创作者10%", 
        "- Kaito生态30%"
      ]
    },
    "kaito-lumiterra": {
      title: "Lumiterra",
      description: "LUMITERRA的1%分配给顶级创作者和Kaito生态",
      category: "游戏"
    },
    "kaito-peaq": {
      title: "Peaq",
      description: "11个月期间，PEAQ的0.55%分配给peaq创作者和Kaito生态",
      category: "基础设施",
      campaignRules: [
        "PEAQ创世供应量的0.55%",
        "11个月活动",
        "月度分配"
      ]
    },
    "wallchain-limitless": {
      title: "Limitless Exchange",
      description: "顶级Quacker获得0.5%供应量！Limitless是Base上最大的预测市场（>2.6亿美元投注），是交易您喜爱资产的最简单方式。",
      category: "交易"
    },
    "kaito-multipli": {
      title: "Multipli Creator Currency",
      description: "100k Crystals / Week (24.7 bps at TGE) - the liquid creator currency of Multipli, built on top of Kaito",
      category: "Creator Economy",
      campaignRules: [
        "Crystals are credited weekly to the top 200 Creators of Multipli",
        "Based on mindshare in the Multipli x Kaito leaderboard or follower quality",
        "Claim anytime at http://app.multipli.fi/crystals",
        "No lockups, full flexibility"
      ]
    },
    "kaito-turtle": {
      title: "TURTLE Liquidity Program",
      description: "0.3% to Creators (Liquidity Leaderboard + Kaito Creators), with additional 0.2% upon milestone unlock",
      category: "DeFi"
    },
    "kaito-hyperpie": {
      title: "Hyperpie",
      description: "2% of Hyperpie's HPP initial supply is allocated to reward Hyperpie Creators, Referrers, and Kaito Eco",
      category: "DeFi",
      campaignRules: [
        "500K HPP (0.5%) - Airdrop to Creators who promote Hyperpie on X (Twitter)",
        "750K HPP (0.75%) - Distributed to Creators who refer their friends to join Hyperpie",
        "750K HPP (0.75%) - Reserved for the Kaito Eco (incl. stakers), unlocked via referral milestones"
      ]
    },
    "kaito-polygon": {
      title: "Polygon",
      description: "$30K USDC/Month to their top 50 30D Creators",
      category: "Infrastructure",
      campaignRules: [
        "To Be Confirmed"
      ]
    },
    "kaito-warden-protocol": {
      title: "Warden Protocol",
      description: "2.5% WARD over 3 seasons to Warden Protocol Creators, Warden App users and broader Kaito Eco",
      category: "Infrastructure",
      campaignRules: [
        "2.5% of WARD supply",
        "3-season campaign",
        "Seasonal distributions"
      ]
    },
    "kaito-talus-network": {
      title: "Talus Network",
      description: "0.3% of token supply for Talus Creators, regional Creators and Kaito Eco; 20% unlocked at TGE, remaining vested over 9M at TGE+3M",
      category: "Infrastructure",
      campaignRules: [
        "0.3% of token supply",
        "20% unlocked at TGE",
        "Remaining vested over 9M at TGE+3M"
      ]
    },
    "bantr-morph": {
      title: "Morph",
      description: "Morph is a hybrid Layer 2 blockchain on Ethereum, redefining onchain consumer finance with ultralow fees, instant settlement, and modular tools. Rewards: $500,000 in BGB Tokens",
      category: "DeFi"
    },
    "bantr-cointel": {
      title: "Cointel",
      description: "AI-native crypto intelligence. Real-time analytics & gamified education to make Web3 simple, safe & actionable. Powered by $COLS. Campaign: $50,000 in $COLS rewards",
      category: "Analysis"
    },
    "bantr-bantr": {
      title: "Bantr",
      description: "Bantr is a social trading platform that connects traders and provides community-driven insights",
      category: "Social Trading"
    },
    "wallchain-genome": {
      title: "Genome Protocol",
      description: "2% of $NOME Supply for Top Quackers! Genome Protocol is Web3's user engagement engine - a modular, intelligent middleware layer",
      category: "Infrastructure"
    },
    "wallchain-covalent": {
      title: "Covalent",
      description: "Covalent provides unified APIs to access blockchain data across multiple networks",
      category: "Data"
    },
    "wallchain-heyelsa": {
      title: "HeyElsa",
      description: "HeyElsa is an AI-powered assistant for Web3 and cryptocurrency interactions",
      category: "AI"
    },
    "wallchain-idos": {
      title: "idOS",
      description: "idOS provides decentralized identity solutions for Web3 applications",
      category: "Identity"
    },
    "wallchain-apecoin": {
      title: "ApeCoin R.A.I.D",
      description: "ApeCoin R.A.I.D is a community-driven initiative for the ApeCoin ecosystem",
      category: "Community"
    },
    "rey-tea3": {
      title: "Tea3",
      description: "Tea3 is the web's most advanced open affiliate and referral system. It allows you to grow your onchain legacy and maximize your winnings across our platforms",
      category: "Affiliate System"
    },
    "aira-xo-market": {
      title: "XO Market",
      description: "XO Market is a decentralized trading platform for digital assets and cryptocurrencies",
      category: "Trading"
    },
    "aira-hq": {
      title: "HQ",
      description: "HQ is a comprehensive platform for content management and analytics in the Web3 space",
      category: "Management"
    },
    "mindoai-cryptorubic": {
      title: "CryptoRubic",
      description: "CryptoRubic provides advanced and intelligent analysis of the cryptocurrency market",
      category: "Analysis"
    },
    "mindoai-mindoai": {
      title: "MindoAI",
      description: "MindoAI is an advanced AI platform for market analysis and predictions in cryptocurrency",
      category: "AI"
    },
    "galxe-platform": {
      title: "Galxe Platform",
      description: "Galxe is a Web3 credential data network. Build better products and communities with Galxe's credential infrastructure",
      category: "Communication"
    },
    "pulse-boost": {
      title: "Boost",
      description: "Boost provides acceleration and development solutions for projects in the Web3 space",
      category: "Development"
    },
    "pulse-aegis": {
      title: "Aegis",
      description: "Aegis provides advanced security and protection solutions for projects in the Web3 space",
      category: "Security"
    },
    "pulse-belong": {
      title: "Belong",
      description: "Belong is a community platform that connects users and projects in the Web3 space",
      category: "Community"
    },
    "pulse-campnetwork": {
      title: "Camp Network",
      description: "Camp Network provides a comprehensive network for projects and creators in the Web3 space",
      category: "Network"
    },
    "pulse-sixr": {
      title: "SixR",
      description: "SixR provides advanced solutions for interaction and engagement in the Web3 space",
      category: "Interaction"
    },
    "pulse-imua": {
      title: "Imua",
      description: "Imua provides advanced tools for development and growth in the Web3 space",
      category: "Development"
    },
    "pulse-play-ai": {
      title: "Play AI",
      description: "Play AI provides an advanced AI platform for gaming and entertainment in the Web3 space",
      category: "Gaming"
    },
    "xeet-solstice": {
      title: "Solstice",
      description: "Solstice provides advanced trading signals and market analysis for cryptocurrencies",
      category: "Trading"
    },
    "xeet-myriad-market": {
      title: "Myriad Market",
      description: "Prediction Markets for everything! From crypto, politics and sports to gaming, culture and technology. Trade your opinion. Rewards: 1 Billion $MYR Points",
      category: "Market Analysis"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "Abstract is an Ethereum Layer-2 built with the ZK Stack, offering fast, low-fee transactions with full EVM compatibility. It features the Abstract Global Wallet for seamless onboarding and a developer portal to deploy and scale Web3 apps. Rewards: Xeets",
      category: "Trading Strategy"
    },
    "xeet-xeet": {
      title: "Xeet",
      description: "Influence should be measured by the impact you make, not just the noise you make. How do you compare vs your peers? Join Xeet Leagues and find out. Rewards: Xeets",
      category: "Platform"
    },
    "xeet-vdex": {
      title: "Vdex",
      description: "Vdex为加密货币交易者提供先进的交易信号和市场分析",
      category: "交易"
    },
    "xeet-kona": {
      title: "KonaDeFi",
      description: "KonaDeFi是一个去中心化金融平台，提供创新的DeFi解决方案和收益农场机会。",
      category: "DeFi"
    },
    "breadcrumbs-breadcrumb-cash": {
      title: "Breadcrumb.cash",
      description: "Breadcrumb.cash是一个用于跟踪和管理加密货币交易和奖励的去中心化平台",
      category: "DeFi"
    },
    "breadcrumbs-blackmirror-xp": {
      title: "blackmirror_xp",
      description: "$MIRROR — 官方黑镜代币 — 基于@korprotocol构建。由@avax、@solana、@republiccrypto、@animocabrands支持",
      category: "代币"
    },
    "breadcrumbs-dream-space-hq": {
      title: "Dream Space HQ",
      description: "Dreamspace是加密创意者的第一个氛围编码画布 ✨ 我们让任何人——不仅仅是开发者——都能轻松构建、发布和货币化链上应用，而无需接触代码。梦想 → 生成 → 发布 → 货币化。",
      category: "开发工具"
    },
    "breadcrumbs-daemons": {
      title: "Dæmons",
      description: "Dæmons是一个AI驱动的区块链体验，结合了电子宠物和宝可梦。PvP、PvE和交互式AI聊天。",
      category: "游戏"
    },
    "breadcrumbs-bondi-finance": {
      title: "Bondi Finance",
      description: "Bondi Finance将公开交易的公司债券代币化为链上固定收益产品。每个债券代币代表对美元计价公司债券的部分敞口。",
      category: "DeFi"
    },
    "breadcrumbs-a0x": {
      title: "A0x",
      description: "A0x是用于加密货币市场的高级交易机器人和自动化平台",
      category: "交易机器人"
    },
    "rey-tea3": {
      title: "Tea3 - 高级链上联盟系统",
      description: "Tea3是网络上最先进的开放联盟和推荐系统。它允许您发展链上遗产并在整个生态系统中最大化您的收益。",
      category: "联盟系统"
    },
    "aira-zkagi": {
      title: "ZkAGI",
      description: "ZkAGI x Airaa Auraboard活动是一个为期3个月的社区倡议，奖励在Twitter、Discord和链上活动中做出贡献的参与者。ZkAGI总代币供应量的2.5%已分配给此活动。奖励将根据通过DexScreener和Birdeye等平台验证的FDV里程碑分阶段释放。",
      category: "活动"
    },
    "aira-xo-market": {
      title: "XO Market",
      description: "XO Market是数字资产和加密货币的去中心化交易平台。",
      category: "交易平台"
    },
    "aira-hq": {
      title: "Airaa HQ 🌾",
      description: "Airaa HQ是Airaa生态系统项目和社区倡议的中心枢纽。",
      category: "生态系统枢纽"
    },
    "aira-folks-finance": {
      title: "Folks Finance",
      description: "Folks Finance x Airaa活动持续约4个月，从Pre-TGE阶段开始，然后是3个月的Post-TGE阶段。它旨在通过Auraboard排行榜奖励Twitter、Discord和链上活动的贡献者。Folks Finance是由Coinbase Ventures、Jump、ParaFi、OKX Ventures和Borderless Capital支持的领先跨链DeFi借贷协议。FOLKS代币（和空投）将于2025年11月6日推出。",
      category: "DeFi"
    },
    "mindoai-tria": {
      title: "Tria",
      description: "一个自托管的新银行，将交易、支出和收益统一在一个应用程序中 - 无桥接、无gas费、无中介。在任何网络和货币上支付、交易和赚取收益！Tria已筹集1200万美元并与70多个顶级协议合作，包括Arbitrum、Polygon、Injective、Sentient、Aethir和Katana。",
      category: "新银行"
    },
    "mindoai-cryptorubic": {
      title: "Cryptorubic",
      description: "Cryptorubic是一个具有AI驱动市场分析的高级加密货币交易平台。",
      category: "交易平台"
    },
    "mindoai-mindoai": {
      title: "MindoAI",
      description: "MindoAI是用于加密货币市场洞察和交易策略的智能AI助手。",
      category: "AI助手"
    },
    "galxe-dagama-s2": {
      title: "daGama (S2)",
      description: "继首次成功后，daGama推出第二季！探索并支持AI驱动的Arbitrum协议，让推荐变得透明、可信且有回报。",
      category: "AI协议"
    },
    "galxe-platform": {
      title: "Galxe平台",
      description: "Galxe是Web3凭证数据网络。使用Galxe的凭证基础设施构建更好的产品和社区。",
      category: "社交平台"
    },
    "pulse-boost": {
      title: "Pulse Boost",
      description: "Pulse Boost是一个社区驱动的平台，用于加速Web3项目的增长和采用。",
      category: "增长平台"
    },
    "pulse-aegis": {
      title: "Pulse Aegis",
      description: "Pulse Aegis为Web3项目和DeFi协议提供全面的安全解决方案。",
      category: "安全"
    },
    "pulse-belong": {
      title: "Pulse Belong",
      description: "Pulse Belong是一个连接Web3爱好者和项目的社区建设平台。",
      category: "社区"
    },
    "pulse-campnetwork": {
      title: "Pulse Camp Network",
      description: "Pulse Camp Network是Web3专业人士和企业家的去中心化网络平台。",
      category: "网络"
    },
    "pulse-sixr": {
      title: "Pulse SixR",
      description: "Pulse SixR是Web3项目孵化和加速的创新平台。",
      category: "孵化"
    },
    "pulse-imua": {
      title: "Pulse Imua",
      description: "Pulse Imua为Web3项目性能跟踪提供高级分析和洞察。",
      category: "分析"
    },
    "pulse-play-ai": {
      title: "Pulse Play AI",
      description: "Pulse Play AI是用于Web3项目自动化管理和优化的AI驱动平台。",
      category: "AI管理"
    },
    "xeet-solstice": {
      title: "Solstice",
      description: "Solstice专注于通过不依赖炒作或投机的策略提供稳定、真实的收益。我们的方法结合了经过验证的Delta中性交易、强大的基础设施和机构级风险管理，为长期正收益奠定基础。奖励：$SLX代币供应量的1%",
      category: "收益平台"
    },
    "xeet-myriad-market": {
      title: "Myriad Markets",
      description: "Xeet Myriad Market在多个加密货币市场提供多样化的交易机会。",
      category: "多市场交易"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "Xeet Abstract为加密货币交易者提供抽象交易策略和高级市场洞察。",
      category: "交易策略"
    },
    "xeet-iopn": {
      title: "IOPn",
      description: "加入\"人民互联网\"，每月获得$100,000的$OPN代币，未来3个月总计$300,000的奖励将在TGE时支付（日期待定）。IOPn正在构建OPN链，这是一个可扩展的L1，集成了去中心化数字身份、现实世界资产代币化和主权AI基础设施，为用户提供无国界的数字所有权。",
      category: "基础设施"
    },
    "cookie-lab": {
      title: "LAB",
      description: "LAB是终极多链交易生态系统，具有最低费用。一个综合交易平台，使用户能够在任何平台上以卓越的速度、精度和控制力交易、部署和分析代币。",
      category: "交易基础设施"
    },
    "cookie-solv-protocol": {
      title: "Solv Protocol",
      description: "@SolvProtocol刚刚为Snapper们带来了超过$230K的奖励。前5名Snapper可以期待在2个月的snapping中获得超过$5K的奖励。重要：Solv团队决定在此活动中不为$COOKIE质押者分配奖励。cookie(dot)fun上所有其他正在进行的Snaps活动仍包括质押者的奖励。",
      category: "SNAPS活动"
    },
    "bantr-blazpay": {
      title: "BlazPay",
      description: "Blazpay AI正在通过结合尖端人工智能和无缝DeFi解决方案重新定义加密货币交互。旨在简化最复杂的任务，Blaz AI使用户能够通过对话界面轻松管理、交易和探索加密货币。",
      category: "AI驱动的DeFi"
    },
    "wallchain-klout": {
      title: "KLOUT",
      description: "KLOUT是一个社交影响力平台，在两个时代中为顶级Quacker提供KLOUT供应量的1%作为奖励。时代I持续40天10小时，为顶级300名Quacker提供0.5%供应量，随后时代II为顶级300名Quacker提供另外0.5%供应量。",
      category: "社交影响力"
    },
    "kaito-integra": {
      title: "Integra",
      description: "Integra的IRL供应量的0.5%（TGE即将推出）分配给奖励Integra积分计划和Kaito创作者、推荐人以及Kaito生态系统",
      category: "基础设施",
      platform: "Kaito",
      link: "https://x.com/integra_layer",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1795808049908621312.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1980671802545217844",
      rewardPool: "0.5% IRL供应量",
      participants: "创作者、推荐人、Kaito生态系统",
      timeLeft: "TGE即将推出",
      claimPeriod: "即将推出",
      vestingSchedule: "TBD",
      distributionPlatform: "Kaito",
      campaignRules: [
        "分配：创作者0.4%，生态系统0.1%",
        "发布关于Integra的高质量内容以提升排行榜排名",
        "奖励基于排行榜排名，考虑内容质量、参与度和与积分计划中其他任务的一致性",
        "在帖子中标记@integra_layer",
        "创建原创、深思熟虑的内容",
        "不要发送垃圾信息或发布低质量内容",
        "不要抄袭或复制他人的作品"
      ],
      additionalData: {
        isNew: "true"
      }
    }
  },
  ar: {
    "kaito-metawin": {
      title: "نظام MetaWin Web3 البيئي",
      description: "احصل على حصة من 100 ألف USDC شهرياً لمشاركة معلومات حول نظام MetaWin Web3 البيئي. ابدأ الفوز في Web3 اليوم.",
      category: "الكازينو"
    },
    "kaito-bitdealer": {
      title: "منصة إطلاق Bitdealer",
      description: "أنشئ وتداول واحتفظ بالرموز المميزة على Bitdealer، منصة الإطلاق الرسمية على Jupiter، متكاملة بسلاسة مع Axiom وTrojan وPhoton وBonkbot",
      category: "التداول"
    },
    "kaito-multipli": {
      title: "عملة Multipli للمبدعين",
      description: "100 ألف كريستال / أسبوع (24.7 نقطة أساس في TGE) - عملة المبدعين السائلة من Multipli، مبنية على Kaito",
      category: "اقتصاد المبدعين",
      campaignRules: [
        "يتم إضافة الكريستالات أسبوعياً لأفضل 200 مبدع من Multipli",
        "بناءً على الحصة الذهنية في لوحة المتصدرين Multipli x Kaito أو جودة المتابعين",
        "استرد في أي وقت على http://app.multipli.fi/crystals",
        "لا توجد قيود، مرونة كاملة"
      ]
    },
    "kaito-playai": {
      title: "PlayAI",
      description: "0.5% من إمداد PLAI مخصص بالكامل لأفضل 500 مبدع، مع تخصيصات إضافية لأفضل 10",
      category: "منصة الذكاء الاصطناعي",
      platform: "Kaito",
      link: "https://x.com/playAInetwork",
      source: "https://x.com/playAInetwork/status/1975901146016518472",
      referralCode: "rjarivi",
      rewardPool: "0.5% من إمداد PLAI",
      participants: "أفضل 500 مبدع",
      timeLeft: "01 أغسطس 2025 - TBD",
      claimPeriod: "قريباً",
      vestingSchedule: "لا يوجد تقييد",
      distributionPlatform: "Kaito",
      campaignRules: [
        "أفضل 500 Yapper، مع تخصيصات إضافية لأفضل 10 يحصلون على مكافآت",
        "توزيع المكافآت بدون تقييد بعد لقطتين، مع 0.25% PLAI أثناء TGE و 0.25% PLAI بعد شهر من TGE",
        "إعطاء الأولوية للمحتوى الأصلي والمدروس والعالية الجودة على الحجم",
        "الحفاظ على المشاركة طويلة المدى والمتسقة، حتى من الحسابات الأصغر",
        "تجنب الرسائل المزعجة والانتحال والمعلومات المضللة"
      ]
    },
    "kaito-lombard": {
      title: "Lombard",
      description: "برنامج Yapper الموسم الثاني جاري — مع فرص لكسب $BARD وأن تصبح سفيراً رسمياً لـ Lombard",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/lombard_finance",
      source: "https://x.com/Lombard_Finance/status/1970371793228910645",
      rewardPool: "0.8% من إمداد BARD",
      participants: "أفضل 100 مساهم شهرياً",
      timeLeft: "01 يناير 2025 - 31 مارس 2026",
      claimPeriod: "قريباً",
      vestingSchedule: "50% مقدماً، 50% خلال 6 أشهر",
      distributionPlatform: "Kaito",
      campaignRules: [
        "يتم منح BARD شهرياً لأفضل 100 مساهم في Lombard بناءً على الحصة الذهنية",
        "المكافآت الشهرية: أفضل 100 Yapper حسب الحصة الذهنية مؤهلون للمطالبة بـ $BARD",
        "أسابيع التحدي الإبداعي: مكافأة $BARD لأفضل 10 مبدعين متميزين في الأصالة والمعرفة",
        "إنهم يوسعون برنامج السفراء — يجلبون قادة من جميع أنحاء نظام Bitcoin البيئي وما بعده"
      ]
    },
    "kaito-beldex": {
      title: "Beldex",
      description: "150K USDC لأفضل 100 مبدع لمدة 30 يوماً، موزعة بالتساوي على 3 أشهر",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/BeldexCoin",
      source: "https://x.com/BeldexCoin/status/1972957466381148473",
      rewardPool: "$150K USDC ($50K شهرياً)",
      participants: "أفضل 100 مبدع",
      timeLeft: "01 أكتوبر 2025 - 31 ديسمبر 2025",
      claimPeriod: "قريباً",
      vestingSchedule: "لا يوجد تقييد",
      distributionPlatform: "Kaito",
      campaignRules: [
        "متابعة @BeldexCoin على X",
        "استخدام الهاشتاغ #Beldex في منشوراتك",
        "نصيحة محترف: كلما كان المحتوى أكثر أصالة وجاذبية واتساقاً، كلما صعدت أعلى"
      ]
    },
    "kaito-turtle": {
      title: "برنامج سيولة TURTLE",
      description: "0.3% للمبدعين (لوحة المتصدرين للسيولة + مبدعي Kaito)، مع 0.2% إضافي عند فتح المعالم",
      category: "DeFi"
    },
    "kaito-hyperpie": {
      title: "Hyperpie",
      description: "2% من العرض الأولي لـ HPP من Hyperpie مخصص لمكافأة مبدعي Hyperpie والمرجعين ونظام Kaito البيئي",
      category: "DeFi",
      campaignRules: [
        "500K HPP (0.5%) - إسقاط جوي للمبدعين الذين يروجون لـ Hyperpie على X (Twitter)",
        "750K HPP (0.75%) - موزعة على المبدعين الذين يحيلون أصدقاءهم للانضمام إلى Hyperpie",
        "750K HPP (0.75%) - محجوزة لنظام Kaito البيئي (بما في ذلك المودعين)، مفتوحة عبر معالم الإحالة"
      ]
    },
    "kaito-polygon": {
      title: "Polygon",
      description: "30 ألف USDC/شهر لأفضل 50 مبدع لمدة 30 يوم",
      category: "البنية التحتية",
      campaignRules: [
        "في انتظار التأكيد"
      ]
    },
    "kaito-arbitrum": {
      title: "Arbitrum",
      description: "700,000 ARB سيتم توزيعها على أفضل 150 مبدع في لوحة المتصدرين Arbitrum Kaito عبر ثلاث توزيعات شهرية (الموسم 2)",
      category: "البنية التحتية",
      campaignRules: [
        "700K ARB موزعة في ثلاث دفعات: أكتوبر (233,333 ARB)، نوفمبر (233,333 ARB)، ديسمبر (233,334 ARB)",
        "الموسم 2 يتميز بخوارزمية أكثر توازناً تضمن اللعب العادل للمبدعين من جميع الأحجام",
        "مستويات التوزيع: العشرة الأوائل (الأول: 32,000 ARB، الثاني: 29,800 ARB، الثالث: 27,600 ARB)، الأربعون التالية، المئة المتبقية",
        "توزيعات شهرية مبنية على المراكز الحالية في لوحة المتصدرين وقت التوزيع",
        "موظفو Arbitrum والشركاء غير مؤهلين للحصول على المنح"
      ]
    },
    "kaito-multibank": {
      title: "MultiBank",
      description: "MultiBank.io هي منصة تداول شاملة تقدم خدمات مالية متقدمة. سيتم توزيع 150 ألف USDT على أفضل 200 مبدع بناءً على ترتيب لوحة المتصدرين، مع مراعاة جودة المحتوى والمشاركة والاتساق.",
      category: "منصة التداول"
    },
    "kaito-cysic": {
      title: "Cysic",
      description: "0.6% من CYS لـ Kaito: 60% أفضل مبدعي Cysic، 10% مبدعي KR/CN، 30% نظام Kaito البيئي",
      category: "البنية التحتية",
      campaignRules: [
        "0.6% من CYS لـ:",
        "- 60% لأفضل مبدعي Cysic",
        "- 10% لمبدعي KR/CN", 
        "- 30% لنظام Kaito البيئي"
      ]
    },
    "kaito-lumiterra": {
      title: "Lumiterra",
      description: "1% من LUMITERRA لأفضل مبدعيهم ونظام Kaito البيئي",
      category: "الألعاب"
    },
    "kaito-peaq": {
      title: "Peaq",
      description: "على مدى 11 شهراً، 0.55% من PEAQ لمبدعي peaq ونظام Kaito البيئي",
      category: "البنية التحتية",
      campaignRules: [
        "0.55% من العرض الأولي لـ PEAQ",
        "حملة لمدة 11 شهراً",
        "توزيعات شهرية"
      ]
    },
    "kaito-warden-protocol": {
      title: "بروتوكول Warden",
      description: "2.5% من WARD على 3 مواسم لمبدعي بروتوكول Warden ومستخدمي تطبيق Warden ونظام Kaito البيئي الأوسع",
      category: "البنية التحتية",
      campaignRules: [
        "2.5% من عرض WARD",
        "حملة لمدة 3 مواسم",
        "توزيعات موسمية"
      ]
    },
    "kaito-talus-network": {
      title: "شبكة Talus",
      description: "0.3% من عرض الرموز المميزة لمبدعي Talus والمبدعين الإقليميين ونظام Kaito البيئي؛ 20% مفتوح في TGE، والباقي مقيد على 9M في TGE+3M",
      category: "البنية التحتية",
      campaignRules: [
        "0.3% من عرض الرموز المميزة",
        "20% مفتوح في TGE",
        "الباقي مقيد على 9M في TGE+3M"
      ]
    },
    "bantr-morph": {
      title: "Morph",
      description: "Morph هو تبادل لامركزي وبروتوكول DeFi مبني على Ethereum Layer 2",
      category: "DeFi"
    },
    "bantr-cointel": {
      title: "Cointel",
      description: "يوفر Cointel رؤى تداول ذكية وتحليل السوق لمتداولي العملات المشفرة",
      category: "التحليل"
    },
    "bantr-bantr": {
      title: "Bantr",
      description: "Bantr هو منصة تداول اجتماعية تربط المتداولين وتوفر رؤى مدفوعة من المجتمع",
      category: "التداول الاجتماعي"
    },
    "bantr-multichainz": {
      title: "MultichainZ",
      description: "MultichainZ هي منصة ائتمان متعددة السلاسل من الجيل القادم تربط RWAs مع DeFi. يمكن للمستخدمين توفير ETH أو العملات المستقرة أو حتى NFTs كضمان والاقتراض بسلاسة عبر السلاسل.",
      category: "DeFi"
    },
    "bantr-firestarter": {
      title: "Firestarter",
      description: "دفع المحادثات حول كيفية تمكين المبدعين من امتلاك وتنويع مجتمعاتهم مباشرة. Firestarter هي منصة \"Shopify للرموز المميزة\" تسمح لأي شخص بإطلاق رمزه الرقمي الخاص في دقائق.",
      category: "اقتصاد المبدعين"
    },
    "bantr-quranium": {
      title: "Quranium",
      description: "Quranium تكافئ المبدعين الذين يثيرون محادثات أصيلة حول رؤيتهم للذكاء الاصطناعي x البلوك تشين x الأمان الكمي.",
      category: "الذكاء الاصطناعي والبلوك تشين"
    },
    "wallchain-genome": {
      title: "بروتوكول Genome",
      description: "2% من عرض $NOME لأفضل Quackers! بروتوكول Genome هو محرك مشاركة المستخدمين في Web3 - طبقة وسطية معيارية وذكية",
      category: "البنية التحتية"
    },
    "wallchain-limitless": {
      title: "تبادل Limitless",
      description: "0.5% من العرض لأفضل Quackers! Limitless هو أكبر سوق تنبؤات على Base (>260 مليون دولار رهان) وأسهل طريقة لتداول أصولك المفضلة",
      category: "التداول"
    },
    "wallchain-covalent": {
      title: "Covalent",
      description: "يوفر Covalent واجهات برمجة تطبيقات موحدة للوصول إلى بيانات البلوك تشين عبر شبكات متعددة",
      category: "البيانات"
    },
    "wallchain-heyelsa": {
      title: "HeyElsa",
      description: "HeyElsa هو مساعد مدعوم بالذكاء الاصطناعي لتفاعلات Web3 والعملات المشفرة",
      category: "الذكاء الاصطناعي"
    },
    "wallchain-idos": {
      title: "idOS",
      description: "يوفر idOS حلول هوية لامركزية لتطبيقات Web3",
      category: "الهوية"
    },
    "wallchain-apecoin": {
      title: "ApeCoin R.A.I.D",
      description: "ApeCoin R.A.I.D هو مبادرة مدفوعة من المجتمع لنظام ApeCoin البيئي",
      category: "المجتمع"
    },
    "rey-tea3": {
      title: "Tea3 - نظام الإحالة المتقدم على السلسلة",
      description: "Tea3 هو أكثر أنظمة الإحالة والإحالة المتقدمة والمفتوحة على الويب. يسمح لك بتطوير إرثك على السلسلة وتعظيم أرباحك عبر منصاتنا",
      category: "نظام الإحالة"
    },
    "aira-xo-market": {
      title: "سوق XO",
      description: "سوق XO هو منصة تداول لامركزية للأصول الرقمية والعملات المشفرة",
      category: "التداول"
    },
    "aira-hq": {
      title: "HQ",
      description: "HQ هو منصة شاملة لإدارة المحتوى والتحليلات في مساحة Web3",
      category: "الإدارة"
    },
    "mindoai-cryptorubic": {
      title: "CryptoRubic",
      description: "CryptoRubic يوفر تحليلات متقدمة وذكية لسوق العملات المشفرة",
      category: "التحليل"
    },
    "mindoai-mindoai": {
      title: "MindoAI",
      description: "MindoAI هو منصة ذكاء اصطناعي متقدمة لتحليل السوق والتنبؤات في العملات المشفرة",
      category: "الذكاء الاصطناعي"
    },
    "galxe-platform": {
      title: "منصة Galxe",
      description: "Galxe هي شبكة بيانات اعتماد Web3. أنشئ منتجات ومجتمعات أفضل مع البنية التحتية لاعتماد Galxe",
      category: "التواصل"
    },
    "pulse-boost": {
      title: "Boost",
      description: "Boost يوفر حلول تسريع وتطوير للمشاريع في مساحة Web3",
      category: "التطوير"
    },
    "pulse-aegis": {
      title: "Aegis",
      description: "Aegis يوفر حلول أمان وحماية متقدمة للمشاريع في مساحة Web3",
      category: "الأمان"
    },
    "pulse-belong": {
      title: "Belong",
      description: "Belong هو منصة مجتمعية تربط المستخدمين والمشاريع في مساحة Web3",
      category: "المجتمع"
    },
    "pulse-campnetwork": {
      title: "Camp Network",
      description: "Camp Network يوفر شبكة شاملة للمشاريع والمبدعين في مساحة Web3",
      category: "الشبكة"
    },
    "pulse-sixr": {
      title: "SixR",
      description: "SixR يوفر حلول متقدمة للتفاعل والمشاركة في مساحة Web3",
      category: "التفاعل"
    },
    "pulse-imua": {
      title: "Imua",
      description: "Imua يوفر أدوات متقدمة للتطوير والنمو في مساحة Web3",
      category: "التطوير"
    },
    "pulse-play-ai": {
      title: "Play AI",
      description: "Play AI يوفر منصة ذكاء اصطناعي متقدمة للألعاب والترفيه في مساحة Web3",
      category: "الألعاب"
    },
    "xeet-solstice": {
      title: "Solstice",
      description: "Solstice يوفر إشارات تداول متقدمة وتحليل السوق للعملات المشفرة",
      category: "التداول"
    },
    "xeet-myriad-market": {
      title: "سوق Myriad",
      description: "يقدم سوق Myriad تحليلاً شاملاً للسوق وفرص التداول عبر فئات أصول متعددة",
      category: "تحليل السوق"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "يوفر Abstract استراتيجيات تداول مبتكرة ورؤى السوق لمتداولي العملات المشفرة المتقدمين",
      category: "استراتيجية التداول"
    },
    "xeet-xeet": {
      title: "Xeet",
      description: "Xeet هو منصة شاملة لإشارات تداول العملات المشفرة وتحليل السوق",
      category: "المنصة"
    },
    "xeet-vdex": {
      title: "Vdex",
      description: "يوفر Vdex إشارات تداول متقدمة وتحليل السوق لمتداولي العملات المشفرة",
      category: "إشارات التداول"
    },
    "xeet-kona": {
      title: "KonaDeFi",
      description: "KonaDeFi هي منصة مالية لامركزية تقدم حلول DeFi مبتكرة وفرص زراعة العائدات.",
      category: "DeFi"
    },
    "breadcrumbs-breadcrumb-cash": {
      title: "Breadcrumb.cash",
      description: "Breadcrumb.cash هو منصة لامركزية لتتبع وإدارة معاملات العملات المشفرة والمكافآت",
      category: "DeFi"
    },
    "breadcrumbs-blackmirror-xp": {
      title: "blackmirror_xp",
      description: "$MIRROR — الرمز المميز الرسمي لـ Black Mirror — مبني على @korprotocol. مدعوم من @avax و@solana و@republiccrypto و@animocabrands",
      category: "الرمز المميز"
    },
    "breadcrumbs-dream-space-hq": {
      title: "Dream Space HQ",
      description: "Dreamspace هو أول لوحة ترميز مزاجية لمبدعي العملات المشفرة ✨ نجعل من السهل على أي شخص — وليس فقط المطورين — بناء ونشر وتحقيق الدخل من التطبيقات على السلسلة دون لمس الكود. احلم → أنتج → انشر → حقق الدخل.",
      category: "أدوات التطوير"
    },
    "breadcrumbs-daemons": {
      title: "Dæmons",
      description: "Dæmons هي تجربة بلوك تشين مدعومة بالذكاء الاصطناعي تجمع بين Tamagotchi وPokémon. PvP وPvE وChat تفاعلي مع الذكاء الاصطناعي.",
      category: "الألعاب"
    },
    "breadcrumbs-bondi-finance": {
      title: "Bondi Finance",
      description: "Bondi Finance يقوم بتقسيم السندات المؤسسية المتداولة علناً إلى منتجات دخل ثابت على السلسلة. كل رمز Bond يمثل تعرضاً جزئياً لسندات مؤسسية مقومة بالدولار الأمريكي.",
      category: "DeFi"
    },
    "breadcrumbs-a0x": {
      title: "A0x",
      description: "A0x هو روبوت تداول متقدم ومنصة أتمتة لأسواق العملات المشفرة",
      category: "روبوت التداول"
    },
    "rey-tea3": {
      title: "Tea3 - نظام الشراكة المتقدم على السلسلة",
      description: "Tea3 هو أكثر أنظمة الشراكة والتحويل المفتوحة تطوراً على الويب. يتيح لك تنمية إرثك على السلسلة وتحقيق أقصى استفادة من أرباحك عبر نظامنا البيئي بالكامل.",
      category: "نظام الشراكة"
    },
    "aira-zkagi": {
      title: "ZkAGI",
      description: "حملة ZkAGI x Airaa Auraboard هي مبادرة مجتمعية لمدة 3 أشهر تكافئ المساهمين عبر Twitter وDiscord والنشاط على السلسلة. تم تخصيص ما يصل إلى 2.5% من إجمالي عرض الرموز المميزة ZkAGI لهذه الحملة. سيتم إصدار المكافآت على مراحل بناءً على معالم FDV التي تم التحقق منها من خلال منصات مثل DexScreener وBirdeye.",
      category: "حملة"
    },
    "aira-xo-market": {
      title: "XO Market",
      description: "XO Market هو منصة تداول لامركزية للأصول الرقمية والعملات المشفرة.",
      category: "منصة التداول"
    },
    "aira-hq": {
      title: "Airaa HQ 🌾",
      description: "Airaa HQ هو المركز المركزي لمشاريع نظام Airaa البيئي ومبادرات المجتمع.",
      category: "مركز النظام البيئي"
    },
    "aira-folks-finance": {
      title: "Folks Finance",
      description: "حملة Folks Finance x Airaa تستمر لمدة 4 أشهر تقريباً بدءاً من مرحلة ما قبل TGE، تليها 3 أشهر بعد TGE. وهي مصممة لمكافأة المساهمين عبر Twitter وDiscord وعلى السلسلة من خلال لوحة المتصدرين Auraboard. Folks Finance هو بروتوكول الإقراض DeFi عبر السلاسل الرائد المدعوم من Coinbase Ventures وJump وParaFi وOKX Ventures وBorderless Capital. سيتم إطلاق رمز FOLKS (والإسقاط الجوي) في 6 نوفمبر 2025.",
      category: "DeFi"
    },
    "mindoai-tria": {
      title: "Tria",
      description: "بنك نيو ذاتي الحفظ يوحد التداول والإنفاق والكسب في تطبيق واحد - بدون جسور، بدون غاز، بدون وسطاء. ادفع وتداول واكسب العائد عبر أي شبكة وعملة! جمعت Tria 12 مليون دولار وشراكت مع أكثر من 70 بروتوكولًا رائدًا، بما في ذلك Arbitrum وPolygon وInjective وSentient وAethir وKatana.",
      category: "نيوبانك"
    },
    "mindoai-cryptorubic": {
      title: "Cryptorubic",
      description: "Cryptorubic هو منصة تداول عملات مشفرة متقدمة مع تحليل السوق المدعوم بالذكاء الاصطناعي.",
      category: "منصة التداول"
    },
    "mindoai-mindoai": {
      title: "MindoAI",
      description: "MindoAI هو مساعد ذكي بالذكاء الاصطناعي لرؤى سوق العملات المشفرة واستراتيجيات التداول.",
      category: "مساعد الذكاء الاصطناعي"
    },
    "galxe-dagama-s2": {
      title: "daGama (S2)",
      description: "بعد نجاحها الأول، تطلق daGama الموسم الثاني! استكشف ودعم بروتوكول Arbitrum المدعوم بالذكاء الاصطناعي الذي يجعل التوصيات شفافة وموثوقة ومجزية.",
      category: "بروتوكول الذكاء الاصطناعي"
    },
    "galxe-platform": {
      title: "منصة Galxe",
      description: "Galxe هي منصة شاملة للوسائط الاجتماعية وإنشاء المحتوى لمجتمعات Web3.",
      category: "منصة اجتماعية"
    },
    "pulse-boost": {
      title: "Pulse Boost",
      description: "Pulse Boost هو منصة مدفوعة بالمجتمع لتسريع نمو واعتماد مشاريع Web3.",
      category: "منصة النمو"
    },
    "pulse-aegis": {
      title: "Pulse Aegis",
      description: "Pulse Aegis يوفر حلول أمنية شاملة لمشاريع Web3 وبروتوكولات DeFi.",
      category: "الأمان"
    },
    "pulse-belong": {
      title: "Pulse Belong",
      description: "Pulse Belong هو منصة بناء مجتمع تربط بين عشاق ومشاريع Web3.",
      category: "المجتمع"
    },
    "pulse-campnetwork": {
      title: "Pulse Camp Network",
      description: "Pulse Camp Network هو منصة شبكات لامركزية للمحترفين ورجال الأعمال في Web3.",
      category: "الشبكات"
    },
    "pulse-sixr": {
      title: "Pulse SixR",
      description: "Pulse SixR هو منصة مبتكرة لحضانة وتسريع مشاريع Web3.",
      category: "الحضانة"
    },
    "pulse-imua": {
      title: "Pulse Imua",
      description: "Pulse Imua يوفر تحليلات متقدمة ورؤى لتتبع أداء مشاريع Web3.",
      category: "التحليل"
    },
    "pulse-play-ai": {
      title: "Pulse Play AI",
      description: "Pulse Play AI هو منصة مدعومة بالذكاء الاصطناعي للإدارة الآلية وتحسين مشاريع Web3.",
      category: "إدارة الذكاء الاصطناعي"
    },
    "xeet-solstice": {
      title: "Solstice",
      description: "Solstice يركز على تقديم عوائد مستقرة وحقيقية من خلال استراتيجيات لا تعتمد على الضجة أو المضاربة. نهجنا يجمع بين التداول المحايد دلتا المثبت، والبنية التحتية القوية، وإدارة المخاطر على مستوى المؤسسات لبناء أساس للعوائد الإيجابية طويلة المدى. المكافآت: 1% من عرض رموز $SLX",
      category: "منصة العوائد"
    },
    "xeet-myriad-market": {
      title: "Myriad Markets",
      description: "Xeet Myriad Market يوفر فرص تداول متنوعة عبر أسواق متعددة للعملات المشفرة.",
      category: "تداول متعدد الأسواق"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "Xeet Abstract يقدم استراتيجيات تداول مجردة ورؤى متقدمة للسوق لمتداولي العملات المشفرة.",
      category: "استراتيجيات التداول"
    },
    "xeet-iopn": {
      title: "IOPn",
      description: "انضم إلى \"إنترنت الأشخاص\" مع $100,000 شهرياً في $OPN $300,000 في إجمالي المكافآت على مدى الأشهر الثلاثة القادمة تُدفع في TGE (التاريخ سيُعلن لاحقاً). IOPn تبني سلسلة OPN وهي L1 قابلة للتوسع تدمج الهوية الرقمية اللامركزية، وتوكنيز الأصول الواقعية، والبنية التحتية للذكاء الاصطناعي السيادي لتمكين المستخدمين من الملكية الرقمية بدون حدود.",
      category: "البنية التحتية"
    },
    "cookie-lab": {
      title: "LAB",
      description: "LAB هو النظام البيئي النهائي للتداول متعدد السلاسل مع أقل الرسوم. منصة تداول شاملة تمكن المستخدمين من تداول ونشر وتحليل الرموز المميزة بسرعة ودقة وتحكم استثنائيين عبر أي منصة.",
      category: "بنية تحتية للتداول"
    },
    "cookie-solv-protocol": {
      title: "Solv Protocol",
      description: "@SolvProtocol ظهر للتو بمكافآت تزيد عن $230K للـ Snappers. يمكن لأفضل 5 Snappers توقع مكافآت تزيد عن $5K لمدة شهرين من الـ snapping. مهم: قرر فريق Solv عدم تخصيص مكافآت لحاملي $COOKIE في هذه الحملة. جميع حملات Snaps الجارية الأخرى على cookie(dot)fun لا تزال تشمل مكافآت للحامليين.",
      category: "حملة SNAPS"
    },
    "bantr-blazpay": {
      title: "BlazPay",
      description: "Blazpay AI يعيد تعريف التفاعلات مع العملات المشفرة من خلال الجمع بين الذكاء الاصطناعي المتقدم والحلول DeFi السلسة. مصمم لتبسيط حتى أكثر المهام تعقيداً، Blaz AI يمكن المستخدمين من إدارة وتداول واستكشاف العملات المشفرة بسهولة، كل ذلك من خلال واجهة محادثة.",
      category: "DeFi مدعوم بالذكاء الاصطناعي"
    },
    "wallchain-klout": {
      title: "KLOUT",
      description: "KLOUT هي منصة تأثير اجتماعي تكافئ أفضل Quackers بـ 1% من عرض KLOUT عبر عصرين. العصر الأول يستمر 40 يوماً و10 ساعات مع 0.5% من العرض لأفضل 300 Quacker، يليه العصر الثاني مع 0.5% إضافي من العرض لأفضل 300 Quacker.",
      category: "التأثير الاجتماعي"
    },
    "kaito-integra": {
      title: "Integra",
      description: "0.5% من عرض IRL لـ Integra (TGE قريباً) مخصص لمكافأة برنامج نقاط Integra ومبدعي Kaito والمرجعين ونظام Kaito البيئي",
      category: "البنية التحتية",
      platform: "Kaito",
      link: "https://x.com/integra_layer",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1795808049908621312.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1980671802545217844",
      rewardPool: "0.5% عرض IRL",
      participants: "المبدعون والمرجعون ونظام Kaito البيئي",
      timeLeft: "TGE قريباً",
      claimPeriod: "قريباً",
      vestingSchedule: "TBD",
      distributionPlatform: "Kaito",
      campaignRules: [
        "التفصيل: 0.4% للمبدعين، 0.1% للنظام البيئي",
        "انشر محتوى عالي الجودة حول Integra لتسلق لوحة المتصدرين",
        "المكافآت مبنية على ترتيب لوحة المتصدرين مع مراعاة جودة المحتوى والمشاركة والاتساق مع المهام الأخرى في برنامج النقاط",
        "ضع علامة @integra_layer في منشوراتك",
        "أنشئ محتوى أصلي ومدروس",
        "لا ترسل رسائل مزعجة أو تنشر محتوى منخفض الجهد",
        "لا تسرق أو تنسخ عمل الآخرين"
      ],
      additionalData: {
        isNew: "true"
      }
    }
  }
};

// Function to translate project data
export function translateProject(project: Project, language: Language): Project {
  const translations = projectTranslations[language];
  if (!translations || !translations[project.id]) {
    return project; // Return original if no translation exists
  }
  
  return {
    ...project,
    ...translations[project.id]
  };
}

export const projectsData: Record<string, Project[]> = {
  kaito: [
    {
      id: "kaito-integra",
      title: "Integra",
      description: "0.5% of Integra's IRL supply (TGE soon) is allocated to reward Integra's points program and Kaito Creators, Referrers, and Kaito Eco",
      category: "Infrastructure",
      platform: "Kaito",
      link: "https://x.com/integra_layer",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1795808049908621312.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1980671802545217844",
      rewardPool: "0.5% IRL Supply",
      participants: "Creators, Referrers, and Kaito Eco",
      timeLeft: "TGE Soon",
      claimPeriod: "Upcoming",
      vestingSchedule: "TBD",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Breakdown: 0.4% for creators, 0.1% for eco",
        "Post high-quality content about Integra to climb the leaderboard",
        "Rewards are based on leaderboard rank considering content quality, engagement, and consistency with other tasks in the points program",
        "Tag @integra_layer in your posts",
        "Create original, thoughtful content",
        "Do not spam or post low-effort content",
        "Do not plagiarize or copy others' work"
      ],
      additionalData: {
        isNew: "true"
      }
    },
    {
      id: "kaito-theo",
      title: "Theo",
      description: "50,000 $THBILL distributed equally monthly to 100 creators. Top 50 Theo Creators, top 25 Korean Theo Creators, top 25 Chinese Theo Creators.",
      rewardPool: "50K $THBILL / month",
      participants: "Top 50 Theo Creator",
      timeLeft: "Oct 14, 2025 - Dec 14, 2025",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/Theo_Network",
      platformLink: "https://app.theo.xyz/invite?invite=JEETING",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1789368212947136512.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1977750590194159777",
      referralLink: "https://app.theo.xyz/invite?invite=JEETING",
      referralCode: "JEETING",
      claimPeriod: "Nov 15, 2025 - Dec 15, 2025",
      vestingSchedule: "No vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Top 50 Theo Creators",
        "Top 25 Korean Theo Creators", 
        "Top 25 Chinese Theo Creators",
        "A total of 50,000 thBILL is distributed evenly among them."
      ],
      additionalData: {
        isNew: "true"
      }
    },
    {
      id: "kaito-arbitrum",
      title: "Arbitrum Season 2",
      description: "700,000 ARB will be distributed to the top 150 creators on the Arbitrum Kaito Leaderboard across three monthly distributions",
      rewardPool: "700,000 ARB",
      participants: "Top 150 Creators",
      timeLeft: "Oct 7, 2025 - Dec 31, 2025",
      category: "Infrastructure",
      platform: "Arbitrum",
      link: "https://x.com/arbitrum",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1332033418088099843.jpg/w=48&q=90",
      source: "https://blog.arbitrum.io/arbitrum-x-kaito-season-2",
      claimPeriod: "Monthly",
      vestingSchedule: "No vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "700K ARB distributed in three tranches: October (233,333 ARB), November (233,333 ARB), December (233,334 ARB)",
        "Season 2 features a more balanced algorithm ensuring fair play for creators of all sizes",
        "Distribution tiers: Top 10 (1st: 32,000 ARB, 2nd: 29,800 ARB, 3rd: 27,600 ARB), Next 40, Remaining 100",
        "Monthly distributions based on current leaderboard standings at time of distribution",
        "Arbitrum employees and affiliates are not eligible for grants"
      ],
      additionalData: {
        isNew: "true"
      }
    },
    {
      id: "kaito-multibank",
      title: "MultiBank",
      description: "MultiBank.io is a comprehensive trading platform offering advanced financial services. $150K USDT will be distributed to the top 200 creators based on leaderboard rank, considering content quality, engagement, and consistency.",
      rewardPool: "$150K USDT",
      participants: "Top 200 Creators",
      timeLeft: "Jul 22, 2025 - Nov 30, 2025",
      category: "Trading Platform",
      platform: "MultiBank",
      link: "https://yaps.kaito.ai/referral/2522887435",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1331248869527654405.jpg/w=32&q=90",
      source: "https://x.com/multibank_io/status/1975931756441460981",
      referralLink: "https://yaps.kaito.ai/referral/2522887435",
      claimPeriod: "Upcoming",
      vestingSchedule: "No vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Post high-quality content about Multibank.io to climb the leaderboard",
        "Rewards based on leaderboard rank for top 200 creators",
        "Consider content quality, engagement, and consistency",
        "Tag @Multibank_io in your posts",
        "Create original, thoughtful content",
        "Participate globally and engage with community about $MBG token",
        "Do not spam or post low-effort content",
        "Do not plagiarize or copy others' work"
      ]
    },
    {
      id: "kaito-playai",
      title: "PlayAI",
      description: "0.5% PLAI Supply totally allocated to Top 500 Creators, with bonus allocations to Top 10",
      rewardPool: "0.5% PLAI Supply",
      participants: "Top 500 Creators",
      timeLeft: "Aug 01, 2025 - TBD",
      category: "AI Platform",
      platform: "Kaito",
      link: "https://x.com/playAInetwork",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1763587749138051072.jpg/w=48&q=90",
      source: "https://x.com/playAInetwork/status/1975901146016518472",
      referralCode: "rjarivi",
      claimPeriod: "Upcoming",
      vestingSchedule: "No vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Top 500 Yappers, with bonus allocations to Top 10 are rewarded",
        "Rewards distributed with no vesting after 2 snapshots, with 0.25% PLAI during TGE & 0.25% PLAI 1 month after TGE",
        "Prioritize original, thoughtful, and high-quality content over volume",
        "Maintain long-term, consistent engagement, even from smaller accounts",
        "Avoid spam, plagiarism, and misinformation"
      ]
    },
    {
      id: "kaito-lombard",
      title: "Lombard",
      description: "The Yapper Program Season 2 is underway — with opportunities to earn $BARD, and become an Official Lombard Ambassador",
      rewardPool: "0.8% BARD supply",
      participants: "Top 100 Contributors each month",
      timeLeft: "Jan 01, 2025 - Mar 31, 2026",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/lombard_finance",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1787773163209732096.jpg/w=48&q=90",
      source: "https://x.com/Lombard_Finance/status/1970371793228910645",
      claimPeriod: "Upcoming",
      vestingSchedule: "50% upfront, 50% in 6 months",
      distributionPlatform: "Kaito",
      campaignRules: [
        "BARD is awarded monthly to the top 100 contributors of Lombard based on mindshare",
        "Monthly Rewards: Top 100 Yappers by mindshare will be eligible to claim $BARD",
        "Creative Challenge Weeks: Bonus $BARD for the Top 10 standout creators in originality and knowledge",
        "They are expanding the Ambassador Program — bringing in leaders from across and beyond the Bitcoin ecosystem"
      ]
    },
    {
      id: "kaito-beldex",
      title: "Beldex",
      description: "150K USDC to the top 100 30D Creators, split equally over 3 months",
      rewardPool: "$150K USDC ($50K/Month)",
      participants: "Top 100 Creators",
      timeLeft: "Oct 01, 2025 - Dec 31, 2025",
      category: "Yap",
      platform: "Kaito",
      link: "https://x.com/BeldexCoin",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F976042792706166784.jpg/w=48&q=90",
      source: "https://x.com/BeldexCoin/status/1972957466381148473",
      claimPeriod: "Upcoming",
      vestingSchedule: "No Vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "Follow @BeldexCoin on X",
        "Use the hashtag #Beldex in your posts",
        "Pro tip: The more original, engaging, and consistent your content is, the higher you'll climb"
      ]
    },
    {
      id: "kaito-metawin",
      title: "MetaWin Web3 Ecosystem",
      description: "Earn a share of $100K USDC Monthly for sharing about the MetaWin Web3 ecosystem. Start Winning in Web3 today.",
      rewardPool: "$100k USDC / month",
      participants: "Top 100 Creators",
      timeLeft: "Sep 23, 2025 - TBD",
      category: "Casino",
      platform: "MetaWin",
      link: "https://x.com/MetaWin",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1477846541826236416.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1970793784565755986",
      referralLink: "https://metawin.com/rjarivi/",
      claimPeriod: "Upcoming",
      vestingSchedule: "No vesting",
      distributionPlatform: "Metawin",
      campaignRules: [
        "Based on the mindshare on the MetaWin Kaito Leaderboard",
        "Claim monthly in MetaWin Support",
        "Claim within 30 days"
      ]
    },
    {
      id: "kaito-bitdealer",
      title: "Bitdealer Launchpad",
      description: "Create, Trade & Hold tokens on Bitdealer, official Launchpad on Jupiter, seamlessly integrated with Axiom, Trojan, Photon & Bonkbot",
      rewardPool: "5% Supply (1% at TGE) across seasons",
      participants: "Top 500 Creators",
      timeLeft: "Sep 17, 2025 - TBD",
      category: "Launchpad",
      platform: "Bitdealer",
      link: "https://x.com/bitdealernet",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1927680078739357696.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1970793784565755986",
      referralLink: "https://bitdealer.net?referralCode=6a5bo4o7fd",
      claimPeriod: "Upcoming",
      vestingSchedule: "No vesting - over multiple seasons",
      distributionPlatform: "Bitdealer",
      campaignRules: [
        "0.55% will be distributed to the Top 500 Creators",
        "0.15% will be distributed to the broader Kaito Eco",
        "0.30% will be distributed automatically through experience points you accumulate by using the Bitdealer platform, whether it's creating, trading, or holding tokens. Plus we reward points to the Top 100 Creators of each individual week until TGE.",
        "Claim anytime on the Bitdealer Claim portal"
      ]
    },
    {
      id: "kaito-multipli",
      title: "Multipli Creator Currency",
      description: "100k Crystals / Week (24.7 bps at TGE) - the liquid creator currency of Multipli, built on top of Kaito.",
      rewardPool: "100k Crystals / Week",
      participants: "Top 200 Creators weekly",
      timeLeft: "Jul 01, 2025 - TBD",
      category: "Creator Economy",
      platform: "Multipli",
      link: "https://x.com/multiplifi",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1724451131420717056.jpg/w=48&q=90",
      source: "https://x.com/multiplifi/status/1961455915011641578",
      referralLink: "https://app.multipli.fi?referral_code=8X9KF9",
      claimPeriod: "Upcoming",
      vestingSchedule: "To Be Confirmed",
      distributionPlatform: "To Be Confirmed",
      campaignRules: [
        "Crystals are credited weekly to the top 200 Creators of Multipli",
        "Based on mindshare in the Multipli x Kaito leaderboard or follower quality",
        "Claim anytime at http://app.multipli.fi/crystals",
        "No lockups, full flexibility"
      ]
    },
    {
      id: "kaito-turtle",
      title: "TURTLE Liquidity Program",
      description: "0.3% to Creators (Liquidity Leaderboard + Kaito Creators), with additional 0.2% upon milestone unlock",
      rewardPool: "Up to 0.5% of TURTLE Supply",
      participants: "To Be Confirmed",
      timeLeft: "Sep 03, 2025 - TBD",
      category: "DeFi",
      platform: "TURTLE",
      link: "https://x.com/turtledotxyz",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1769392048392531968.jpg/w=48&q=90",
      source: "https://x.com/turtledotxyz/status/1963293230256075080",
      referralLink: "https://app.turtle.xyz/leaderboard?earnRef=GODOFBAYC"
    },
    {
      id: "kaito-hyperpie",
      title: "Hyperpie",
      description: "2% of Hyperpie's HPP initial supply is allocated to reward Hyperpie Creators, Referrers, and Kaito Eco",
      rewardPool: "2% HPP Token (~$1M)",
      participants: "To Be Confirmed",
      timeLeft: "Jul 31, 2025 - TBD",
      category: "DeFi",
      platform: "Hyperpie",
      link: "https://x.com/Hyperpiexyz_io",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1893149131767480320.jpg/w=48&q=90",
      source: "https://www.hyperliquid.magpiexyz.io/kaito",
      referralLink: "https://www.hyperliquid.magpiexyz.io/stake?ref=FsPfgF",
      claimPeriod: "Upcoming",
      vestingSchedule: "To Be Confirmed",
      distributionPlatform: "To Be Confirmed",
      campaignRules: [
        "500K HPP (0.5%) - Airdrop to Creators who promote Hyperpie on X (Twitter)",
        "750K HPP (0.75%) - Distributed to Creators who refer their friends to join Hyperpie",
        "750K HPP (0.75%) - Reserved for the Kaito Eco (incl. stakers), unlocked via referral milestones"
      ]
    },
    {
      id: "kaito-polygon",
      title: "Polygon",
      description: "$30K USDC/Month to their top 50 30D Creators",
      rewardPool: "$30K USDC/Month",
      participants: "Top 50 Creators",
      timeLeft: "Jul 29, 2025 - TBD",
      category: "Infrastructure",
      platform: "Polygon",
      link: "https://x.com/0xPolygon",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F914738730740715521.jpg/w=48&q=90",
      source: "https://x.com/0xPolygon/status/1950217265976135802",
      referralLink: "https://polygon.technology?ref=infofi",
      claimPeriod: "Upcoming",
      vestingSchedule: "No vesting",
      distributionPlatform: "To Be Confirmed",
      campaignRules: [
        "To Be Confirmed"
      ]
    },
    {
      id: "kaito-cysic",
      title: "Cysic",
      description: "0.6% of CYS to Kaito: 60% top Cysic Creators, 10% KR/CN Creators, 30% Kaito Eco",
      rewardPool: "0.6% of CYS Supply",
      participants: "To Be Confirmed",
      timeLeft: "Jul 07, 2025 - TBD",
      category: "Infrastructure",
      platform: "Cysic",
      link: "https://x.com/cysic_xyz",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1539312810458370048.jpg/w=48&q=90",
      source: "https://x.com/cysic_xyz/status/1947311114095616081",
      referralLink: "https://cysic.xyz?ref=infofi",
      claimPeriod: "Upcoming",
      vestingSchedule: "To Be Confirmed",
      distributionPlatform: "To Be Confirmed",
      campaignRules: [
        "0.6% of $CYS to:",
        "- 60% to top Cysic Creators",
        "- 10% to KR / CN Creators",
        "- 30% to Kaito Eco"
      ]
    },
    {
      id: "kaito-lumiterra",
      title: "Lumiterra",
      description: "1% of LUMITERRA to their top Creators and the Kaito Eco",
      rewardPool: "1% of LUMITERRA Supply",
      participants: "To Be Confirmed",
      timeLeft: "Jun 25, 2025 - TBD",
      category: "Casino",
      platform: "Lumiterra",
      link: "https://x.com/LumiterraGame",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1574342039172358144.jpg/w=48&q=90",
      source: "https://x.com/LumiterraGame/status/1937845437224095782",
      referralLink: "https://lumiterra.com?ref=infofi",
      claimPeriod: "Upcoming",
      vestingSchedule: "To Be Confirmed",
      distributionPlatform: "To Be Confirmed",
      campaignRules: [
        "To Be Confirmed"
      ]
    },
    {
      id: "kaito-peaq",
      title: "Peaq",
      description: "0.55% of PEAQ supply to peaq Creators and the broader Kaito Eco over 11 months",
      rewardPool: "0.55% of PEAQ Supply",
      participants: "To Be Confirmed",
      timeLeft: "Jun 18, 2025 - TBD",
      category: "Infrastructure",
      platform: "Peaq",
      link: "https://x.com/peaq",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F916698460308627456.jpg/w=48&q=90",
      source: "https://x.com/peaq/status/1935339474897998161",
      referralLink: "https://peaq.network?ref=infofi",
      claimPeriod: "Jul 21, 2025 - TBD",
      vestingSchedule: "To Be Confirmed",
      distributionPlatform: "Peaq",
      campaignRules: [
        "0.55% of $PEAQ's genesis supply",
        "11 months-long campaign",
        "Monthly distributions"
      ]
    },
    {
      id: "kaito-warden-protocol",
      title: "Warden Protocol",
      description: "2.5% of WARD supply to Warden Protocol Creators, Warden App users and broader Kaito Eco",
      rewardPool: "2.5% WARD over 3 seasons",
      participants: "To Be Confirmed",
      timeLeft: "Jun 18, 2025 - TBD",
      category: "Infrastructure",
      platform: "Warden Protocol",
      link: "https://x.com/wardenprotocol",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1748006726010310657.jpg/w=48&q=90",
      source: "https://x.com/wardenprotocol/status/1935309081922912391",
      referralLink: "https://app.wardenprotocol.org/referral?code=V978V",
      claimPeriod: "Upcoming",
      vestingSchedule: "To Be Confirmed",
      distributionPlatform: "To Be Confirmed",
      campaignRules: [
        "Rewards are based on:",
        "→ Kaito Mindshare data (reach + leaderboard position)",
        "→ Warden app usage (weekly PUMP ranking)",
        "→ Bonus multipliers (milestone rewards)",
        "2.5% of WARD supply to the community:",
        "– Season 1: 0.5%",
        "– Season 2: 0.25%",
        "– Season 3: 0.5%",
        "Additionally:",
        "– Milestone unlocks: 0.75% (shared when targets hit)",
        "– Kaito Ecosystem: 0.5% (snapshot-based)"
      ]
    },
    {
      id: "kaito-talus-network",
      title: "Talus Network",
      description: "0.3% of token supply for Talus Creators, regional Creators and Kaito Eco; 20% unlocked at TGE, remaining vested over 9M at TGE+3M",
      rewardPool: "0.3% of Token Supply",
      participants: "Top 100 Creators and Kaito Eco",
      timeLeft: "Sep 18, 2025 - TBD",
      category: "Infrastructure",
      platform: "Talus Network",
      link: "https://x.com/Talus_Labs",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1912085033902616577.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1968662416658485699",
      referralLink: "https://hub.talus.network/users/0x69f9bb9c07b1e6fb00e7b8f7c28c2408890662c8",
      claimPeriod: "Upcoming",
      vestingSchedule: "20% unlocked at TGE, remaining vested over 9M at TGE+3M",
      distributionPlatform: "To Be Confirmed",
      campaignRules: [
        "Split across Talus Creators (50%)",
        "KR+CN+JP specific Creators (30%)",
        "Kaito Eco (20%)"
      ]
    }
  ],
  bantr: [
    {
      id: "bantr-multichainz",
      title: "MultichainZ",
      description: "MultichainZ is a next-gen omnichain credit platform connecting RWAs with DeFi. Users can supply ETH, stables, or even NFTs as collateral and borrow seamlessly across chains.",
      rewardPool: "$300k in $CHAINZ tokens",
      participants: "Top 200 creators monthly",
      timeLeft: "Oct 22 - Jan 22",
      category: "DeFi",
      platform: "Bantr",
      link: "https://x.com/MultichainZ_",
      platformLink: "https://bantr.fun?ic=3066Y7V",
      logo: "https://bantr.fun/_next/image?url=https%3A%2F%2Fstatic.highongrowth.xyz%2Fenterprise%2F660be03a7851c55d93a0f21e%2F6211d5455fd3438f9a5ecba4d633cca5.png&w=64&q=75",
      source: "https://x.com/Bantr_fun/status/1981085905038561747",
      referralLink: "https://bantr.fun?ic=3066Y7V",
      claimPeriod: "Oct 22 - Jan 22",
      vestingSchedule: "$150K unlocked at TGE, $150K vested (6-month staking bonus)",
      distributionPlatform: "Bantr",
      campaignRules: [
        "Log in at least once using your X account on bantr.fun",
        "Explore the MultichainZ Docs: https://multichainz.gitbook.io/beta-multichainz-docs/ to understand the project",
        "Create and post original MultichainZ content on X, tagging @MultichainZ_",
        "Engage with @MultichainZ_ on X by quoting, replying, and ensuring your posts include context and visuals",
        "Monthly snapshots for top 200 creators",
        "Onchain multipliers going live soon!"
      ],
      additionalData: {
        isNew: "true",
        miniCampaign: "true",
        miniCampaignNote: "Mini Campaigns",
        xHandle: "MultichainZ_",
        creatorGuide: "https://intract-io.notion.site/MultichainZ-Creator-Guide-294b31fb6eb680b0a888d520d195a76b",
        additionalInfo: "Reward breakdown: $150K unlocked at TGE, $150K vested (6-month staking bonus). Monthly snapshots for top 200 creators. Onchain multipliers going live soon!"
      }
    },
    {
      id: "bantr-firestarter",
      title: "Firestarter",
      description: "Drive conversations around how creators can own and monetise their communities directly. Firestarter is a \"Shopify for tokens\" platform that lets anyone launch their own digital token in minutes.",
      rewardPool: "$60,000 USDT worth $FSTAR",
      participants: "Top 100 creators monthly",
      timeLeft: "Oct 21 - Jan 21, 2026",
      category: "Creator Economy",
      platform: "Bantr",
      link: "https://www.firestarter.fun/token/0x7564849baE8Fd974F9c5301c9a01911928cd1b67",
      platformLink: "https://bantr.fun?ic=3066Y7V",
      logo: "https://bantr.fun/_next/image?url=https%3A%2F%2Fstatic.highongrowth.xyz%2Fenterprise%2F660be03a7851c55d93a0f21e%2Fdafdc597c6db4e0ba13ecf9c39f1dbe4.png&w=96&q=75",
      source: "https://x.com/Bantr_fun/status/1980669855419506784",
      referralLink: "https://bantr.fun?ic=3066Y7V",
      claimPeriod: "Oct 21 - Jan 21, 2026",
      vestingSchedule: "$20K monthly (claimable on TGE)",
      distributionPlatform: "Bantr",
      campaignRules: [
        "You should have logged in atleast once with your X account on bantr.fun",
        "Retweets, mentions, and engagement with Firestarter posts earn points",
        "Extra points for users who launch a token or promote creator storefronts",
        "The campaign features a $60K total reward pool, with $20K distributed monthly (claimable on TGE)",
        "Only the social leaderboard is live for now; onchain multipliers are coming soon"
      ],
      additionalData: {
        isNew: "true",
        miniCampaign: "true",
        miniCampaignNote: "Mini Campaigns",
        xHandle: "Firestarter_fun",
        creatorGuide: "https://www.notion.so/teamanalog/Creator-Guidance-Document-For-Firestarter-28e4872af8ca80af8617cc7af29dc00e",
        additionalInfo: "Firestarter is a \"Shopify for tokens\" platform that lets anyone launch their own digital token in minutes. Creators, influencers, and businesses can tokenize their community, create perks, and start earning from their audience instantly."
      }
    },
    {
      id: "bantr-quranium",
      title: "Quranium",
      description: "Quranium is rewarding creators who spark authentic conversations around their AI x blockchain x quantum security vision.",
      rewardPool: "$50k worth $QRN",
      participants: "Top 100 creators monthly",
      timeLeft: "Oct 16 - Dec 16, 2025",
      category: "AI & Blockchain",
      platform: "Bantr",
      link: "https://x.com/quranium_org",
      platformLink: "https://bantr.fun?ic=3066Y7V",
      logo: "https://bantr.fun/_next/image?url=https%3A%2F%2Fstatic.highongrowth.xyz%2Fenterprise%2F660be03a7851c55d93a0f21e%2Fc3c527157ac442bf907aa97c57b33713.png&w=96&q=75",
      source: "https://x.com/Bantr_fun/status/1978901509430718933",
      referralLink: "https://bantr.fun?ic=3066Y7V",
      claimPeriod: "Oct 16 - Dec 16, 2025",
      vestingSchedule: "Month 1: $30K ($15K liquid, $15K vested linearly over 3 months). Month 2: $20K ($10K liquid, $10K vested linearly over 3 months)",
      distributionPlatform: "Bantr",
      campaignRules: [
        "You should have logged in atleast once with your X account on bantr.fun",
        "Follow @quranium_org on X and explore quranium.org to understand the project before creating content",
        "Create original, high-quality posts that highlight your thoughts about Quranium — be creative, insightful, and authentic",
        "Check the Creator Guide for reference",
        "Top 100 creators will be rewarded each month"
      ],
      additionalData: {
        isNew: "true",
        miniCampaign: "true",
        miniCampaignNote: "Mini Campaigns",
        xHandle: "quranium_org",
        creatorGuide: "https://intract-io.notion.site/Quranium-Creator-Guide-28eb31fb6eb680a68f2ec9405580ece9",
        additionalInfo: "Quranium $50K total reward pool - Month 1: $30K ($15K liquid, $15K vested linearly over 3 months) - Month 2: $20K ($10K liquid, $10K vested linearly over 3 months)"
      }
    },
    {
      id: "bantr-bluwhale",
      title: "Bluwhale",
      description: "Bluwhale AI is revolutionizing Web3 analytics and user insights. Join the campaign to earn rewards by creating quality content about Bluwhale's innovative AI-powered analytics platform and Whale Score system.",
      rewardPool: "$100,000 worth of $BLUAI",
      participants: "Community Contributors",
      timeLeft: "Oct 15 - Nov 15, 2025",
      category: "AI Analytics",
      platform: "Bantr",
      link: "https://profile.bluwhale.com/login?referral=undefined",
      platformLink: "https://bantr.fun?ic=3066Y7V",
      logo: "https://bantr.fun/_next/image?url=https%3A%2F%2Fstatic.highongrowth.xyz%2Fenterprise%2F660be03a7851c55d93a0f21e%2F4a3a160845cb47afbe4d78ed5418d16d.jpg&w=96&q=75",
      source: "https://x.com/Bantr_fun/status/1978506242827157802",
      referralLink: "https://profile.bluwhale.com/login?referral=undefined",
      claimPeriod: "Oct 15 - Nov 15, 2025",
      vestingSchedule: "TBD",
      distributionPlatform: "Bantr",
      campaignRules: [
        "You should have logged in at least once with your X account on bantr.fun",
        "Follow @bluwhaleai on X and explore Bluwhale.com to understand the project before creating content",
        "Create original, high-quality posts that highlight your thoughts about Bluwhale AI",
        "Be creative, insightful, and authentic in your content",
        "Check the Creator Guide for reference and detailed guidelines",
        "Engage with the community and share your experiences with Bluwhale AI"
      ],
      additionalData: {
        isNew: "true",
        creatorGuide: "https://docs.google.com/document/d/1E6lH5eqoxUZtDLwKs2ZtrzrbIJHgNtBj-KdkkNakR90/edit?usp=sharing",
        additionalInfo: "🔗 Key Links & Channels: App: https://profile.bluwhale.com — Try the dashboard, connect accounts, explore Whale Score. Website: https://bluwhale.ai — Overview, announcements, and resources. GitBook Docs: https://bluwhale.gitbook.io/bluwhaleai — Tokenomics, product, and protocol. Twitter/X: https://twitter.com/BluwhaleAI — Latest updates & campaigns. Press Kit: https://bluwhale.ai/press — Logos, product shots, founder photos. Media Kit: https://bluwhale.ai/media-kit — Banners, social assets, thumbnails."
      }
    },
    {
      id: "bantr-bidget",
      title: "Bidget",
      description: "Bitget Wallet is a comprehensive crypto wallet solution that provides secure storage, seamless trading, and advanced DeFi features. Join the campaign to earn rewards by creating quality content about Bitget Wallet's innovative features and user experience.",
      rewardPool: "$166,666 worth of $BGB",
      participants: "Community Contributors",
      timeLeft: "Oct 15 - Nov 15, 2025",
      category: "Wallet",
      platform: "Bitget Wallet",
      link: "https://bantr.fun/project/bitgetwallet",
      logo: "https://bantr.fun/_next/image?url=https%3A%2F%2Fstatic.highongrowth.xyz%2Fenterprise%2F660be03a7851c55d93a0f21e%2Fa81d8e7dc5cf4e19a8150fa5a8e8c260.jpg&w=96&q=75",
      source: "https://x.com/bitgetglobal",
      referralLink: "https://bantr.fun?ic=3066Y7V",
      claimPeriod: "Oct 15 - Nov 15, 2025",
      vestingSchedule: "TBD",
      distributionPlatform: "Bantr",
      campaignRules: [
        "You should have logged in at least once with your X account on bantr.fun",
        "Download Bitget Wallet and connect your wallet on Bantr",
        "Create original, high-quality posts that highlight your thoughts about Bitget Wallet",
        "Be creative, insightful, and authentic in your content",
        "Engage with the community and share your experiences",
        "Follow campaign guidelines and requirements",
        "Check Creator Guide for detailed help and resources"
      ],
      additionalData: {
        isNew: "true",
        creatorGuide: "https://docs.google.com/document/d/1XBPVVajGJoJOf_jiGAOOc2us_PXTGWcved39M8Xt88o/edit?usp=sharing",
        additionalInfo: "💳Bitget Wallet Card just launched in Asia! Activate Bitget Wallet Card in under 10 minutes. No fees, no hassle. Free activation + Rewards: First 500 users: Top up $50 → Get $20. All other users: Top up $50 → Get $10. Bonus: Free card activation during the campaign period. Eligible regions: Singapore, Vietnam, Malaysia, Philippines, Thailand, Korea, Taiwan, Australia, Japan. Campaign period: Oct 15, 18:00 – Oct 22, 18:00 (UTC+8). Each user can participate once only."
      }
    },
    {
      id: "bantr-blazpay",
      title: "BlazPay",
      description: "Blazpay AI is redefining crypto interactions by combining cutting-edge artificial intelligence with seamless DeFi solutions. Designed to simplify even the most complex tasks, Blaz AI empowers users to manage, trade, and explore crypto effortlessly, all through a conversational interface.",
      rewardPool: "$20,000 worth of $BLAZ",
      participants: "Top 200 Creators",
      timeLeft: "Oct 8 - Nov 9, 2025",
      category: "AI-Powered DeFi",
      platform: "Blazpay AI",
      link: "https://bantr.fun/project/blazpay",
      logo: "https://bantr.fun/_next/image?url=https%3A%2F%2Fstatic.highongrowth.xyz%2Fenterprise%2F660be03a7851c55d93a0f21e%2F85f8aa38ab1a4f4384c985159d014428.png&w=96&q=75",
      source: "https://x.com/Bantr_fun/status/1975905559019974858",
      referralLink: "https://bantr.fun/project/blazpay",
      claimPeriod: "Oct 8 - Nov 9, 2025",
      vestingSchedule: "TBD",
      distributionPlatform: "Bantr",
      campaignRules: [
        "Log in at least once with your X account on bantr.fun",
        "Follow @Blazpaylabs on X and join Discord & Telegram from linktr.ee/Blazpay",
        "Create original, high-quality posts about Blazpay AI",
        "Be creative, insightful, and authentic in your content",
        "Highlight your thoughts about Blazpay AI's features",
        "Pledge a portion of your rewards to community members",
        "Choose your pledge percentage (can't be changed once locked)",
        "Top 200 creators eligible for $20K worth of $BLAZ tokens",
        "Competition period: October 8 - November 9, 2025",
        "Check Creator Guide for detailed help and guidelines"
      ],
      additionalData: {
        isNew: "true"
      }
    },
    {
      id: "bantr-bantr",
      title: "Bantr",
      description: "Bantr is a social trading platform that connects traders and provides community-driven insights.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Social Trading",
      platform: "Bantr",
      link: "https://bantr.fun/project/bantr",
      logo: "https://bantr.fun/_next/image?url=https%3A%2F%2Fstatic.highongrowth.xyz%2Fenterprise%2Fundefined%2F9d3fc45e69b645fc8b749c0c2c2e71ad.png&w=96&q=75",
      source: "https://bantr.fun/project/bantr",
      referralLink: "https://bantr.fun?ic=3066Y7V"
    },
    {
      id: "bantr-morph",
      title: "Morph",
      description: "Morph is a hybrid Layer 2 blockchain on Ethereum, redefining onchain consumer finance with ultralow fees, instant settlement, and modular tools.",
      rewardPool: "$500,000 in BGB Tokens",
      participants: "Community Contributors",
      timeLeft: "Ongoing",
      category: "DeFi",
      platform: "Morph",
      link: "https://bantr.fun/project/morph",
      logo: "https://bantr.fun/_next/image?url=https%3A%2F%2Fstatic.highongrowth.xyz%2Fenterprise%2Fundefined%2F9f41746babce47d89f28441d9b1ad6f9.jpg&w=96&q=75",
      source: "https://bantr.fun/project/morph",
      referralLink: "https://morphl2.io",
      claimPeriod: "TBD",
      vestingSchedule: "TBD",
      distributionPlatform: "Bantr",
      status: "ended",
      campaignRules: [
        "Participate in Morph ecosystem activities",
        "Complete tasks and challenges",
        "Earn rewards based on contribution level",
        "Engage with Morph Layer 2 blockchain",
        "Support consumer finance innovation"
      ]
    },
    {
      id: "bantr-cointel",
      title: "Cointel",
      description: "AI-native crypto intelligence. Real-time analytics & gamified education to make Web3 simple, safe & actionable. Powered by $COLS.",
      rewardPool: "$50,000 in $COLS",
      participants: "Community Contributors",
      timeLeft: "ENDED",
      category: "Analytics",
      platform: "Cointel",
      link: "https://bantr.fun/project/cointel",
      logo: "https://bantr.fun/_next/image?url=https%3A%2F%2Fstatic.highongrowth.xyz%2Fenterprise%2F660be03a7851c55d93a0f21e%2F3335fb7ecc1346a087e494f402c5e663.jpg&w=96&q=75",
      source: "https://bantr.fun/project/cointel",
      referralLink: "https://www.cointel.io/en/login",
      claimPeriod: "TBD",
      vestingSchedule: "TBD",
      distributionPlatform: "Bantr",
      status: "ended",
      campaignRules: [
        "Post on X with @cointel_io + $COLS or include Cointel in your post",
        "Share thoughtful, quality content (see creator kit for tips)",
        "Spread awareness and earn your way up the leaderboard",
        "Rally your community to dive into Cointel",
        "Creator Kit: https://docs.google.com/document/d/1-CupwMBF7Hk6X0vP6pFMdKrwnQPP1Iv7exEQYHvg19w/edit"
      ]
    }
  ],
  wallchain: [
    {
      id: "wallchain-analog",
      title: "Analog",
      description: "With over $200,000 in $ANLOG rewards to be earned by our top contributors, the earlier you start, the better! The best part is it's free for any and everyone to participate.",
      rewardPool: "$200K $ANLOG for Quackers",
      participants: "Top 80 Quackers + 10 random from Top 81 to 300",
      timeLeft: "4 months total",
      category: "Infrastructure",
      platform: "Analog",
      link: "https://quacks.app/?ref=rjarivi&",
      logo: "https://app.wallchain.xyz/external-bucket/hashed/image-url/PStSzO3-_400x400.d6df7c97043c733dceda2c035f8be6d4.png",
      source: "https://x.com/OneAnalog/status/1980641590965334496",
      referralLink: "https://quacks.app/?ref=rjarivi&",
      referralCode: "rjarivi",
      additionalData: {
        isNew: "true",
        additionalInfo: "Here's the deal 👇\n💰 $50K in $ANLOG rewards each month\n\n🗓️ 4 months total\n🔐 Rewards: full unlock, no cliff, no vesting\n🎯 The top 80 creators ranked by mindshare, not follower count, win.\n\nIn addition, we will select 10 random creators from 81-300 to recieve rewards. 🤩\n\nCreator Guide: https://teamanalog.notion.site/ANALOG-WallChain-Creator-Guide-28e4872af8ca80de82e6facbb988bf4d\n\n### **Ecosystem Snapshot**\n\n**⚡ Analog** – The Infrastructure Layer of Liquidity\n\n> Unifies all chains into one liquidity fabric.\n\n**💧 Zenswap** – Cross-Chain Liquidity Without the Chaos\n\n> Swap any token across any chain instantly with USDC routing.\n\n**🔥 Firestarter** – The Utility Launchpad for Everyone\n\n> Turn any idea, brand, or fanbase into a tokenized storefront in 20 seconds.",
        campaignDuration: "4 months",
        totalRewards: "$200,000 in $ANLOG tokens",
        monthlyRewards: "$50K in $ANLOG rewards each month",
        rewardStructure: "Top 80 creators + 10 random from 81-300",
        vestingSchedule: "Full unlock, no cliff, no vesting",
        creatorGuide: "https://teamanalog.notion.site/ANALOG-WallChain-Creator-Guide-28e4872af8ca80de82e6facbb988bf4d",
        xAccount: "https://x.com/OneAnalog",
        xHandle: "OneAnalog"
      }
    },
    {
      id: "wallchain-klout",
      title: "KLOUT",
      description: "KLOUT is a social influence platform rewarding top Quackers with 1% of KLOUT supply across two epochs. Epoch I runs for 40 days 10 hours with 0.5% supply for top 300 Quackers, followed by Epoch II with another 0.5% supply for top 300 Quackers.",
      rewardPool: "1% of KLOUT Supply",
      participants: "Top 300 Quackers per Epoch",
      timeLeft: "Epoch I: 40 days 10 hours",
      category: "Social Influence",
      platform: "KLOUT",
      link: "https://app.wallchain.xyz/klout",
      logo: "https://app.wallchain.xyz/external-bucket/hashed/image-url/image%20(2).899095529dc46d26a5612181c88576c5.png",
      source: "https://x.com/kloutgg/status/1975908952987848958",
      referralLink: "https://app.wallchain.xyz/klout",
      claimPeriod: "Two Epochs",
      vestingSchedule: "TBD",
      distributionPlatform: "Wallchain",
      campaignRules: [
        "Epoch I: 40 days 10 hours duration",
        "Epoch I: 0.5% of KLOUT Supply for Top 300 Quackers",
        "Epoch II: Starts after Epoch I completion",
        "Epoch II: 0.5% of KLOUT Supply for Top 300 Quackers",
        "Total: 1% of KLOUT Supply across both epochs",
        "Compete as a Quacker to earn rewards",
        "Follow @kloutgg on X for updates",
        "Join the KLOUT campaign on Wallchain platform"
      ],
      additionalData: {
        isNew: "true",
        epochI: "0.5% of KLOUT Supply for Top 300 Quackers",
        epochII: "0.5% of KLOUT Supply for Top 300 Quackers",
        epochIDuration: "40 days 10 hours",
        totalSupply: "1% of KLOUT Supply"
      }
    },
    {
      id: "wallchain-genome",
      title: "Genome Protocol",
      description: "2% of $NOME Supply for Top Quackers! Genome Protocol is Web3's user engagement engine - a modular, intelligent middleware layer.",
      rewardPool: "2% of Supply",
      participants: "Top Quackers",
      timeLeft: "Active",
      category: "Infrastructure",
      platform: "Genome Protocol",
      link: "https://app.wallchain.xyz/genome",
      logo: "https://app.wallchain.xyz/external-bucket/hashed/image-url/Quacks%20Master%20Logo%20(1).5c9b7f5d483f83b65ffe0ef1d64a3940.png",
      source: "https://x.com/genome_protocol/status/1947644407311650895",
      referralLink: "https://edge.genomeprotocol.com/profile/1543320?refCode=GNM-9e3962062B056",
      referralCode: "GNM-9e3962062B056"
    },
    {
      id: "wallchain-limitless",
      title: "Limitless Exchange",
      description: "0.5% of Supply for Top 250 Quackers! Limitless is the largest prediction market on Base (>$260M bet) and the easiest way to trade your favorite assets.",
      rewardPool: "0.5% of Supply for Top 250 Quackers!",
      participants: "Top 250 Quackers",
      timeLeft: "Active",
      category: "Trading",
      platform: "Limitless Exchange",
      link: "https://app.wallchain.xyz/limitless",
      logo: "https://app.wallchain.xyz/external-bucket/static/companies/limitless/limitless_logo_small_white.svg",
      source: "https://app.wallchain.xyz/limitless",
      referralLink: "https://limitless.exchange/?r=VGYFXR4N34"
    },
    {
      id: "wallchain-covalent",
      title: "Covalent",
      description: "$200K in $CXT rewards over the next 5 months Epoch wise. Covalent provides unified APIs to access blockchain data across multiple networks.",
      rewardPool: "$200k $CXT for Quackers",
      participants: "Quackers",
      timeLeft: "Epoch II ends in 09 days",
      category: "Data",
      platform: "Covalent",
      link: "https://app.wallchain.xyz/covalent",
      logo: "https://app.wallchain.xyz/external-bucket/hashed/small-icon-white-url/covalent_logo_small_white.0c5b80a9056a4c0bd91e6578993d3747.svg",
      source: "https://app.wallchain.xyz/covalent",
      referralLink: "https://www.covalenthq.com",
      campaignRules: [
        "$200K in $CXT rewards over the next 5 months Epoch wise",
        "Epoch II: 40K $CXT rewards",
        "Epoch II ends in 09 days"
      ]
    },
    {
      id: "wallchain-heyelsa",
      title: "HeyElsa",
      description: "HeyElsa is an AI-powered assistant for Web3 and cryptocurrency interactions.",
      rewardPool: "0.25% of Supply for Top 500 Quackers!",
      participants: "Top 500 Quackers",
      timeLeft: "Active",
      category: "AI",
      platform: "HeyElsa",
      link: "https://app.wallchain.xyz/heyelsa",
      logo: "https://app.wallchain.xyz/external-bucket/static/companies/heyelsa/heyelsa_logo_small_white.svg",
      source: "https://app.wallchain.xyz/heyelsa",
      referralLink: "https://app.heyelsa.ai/referral/NRSQKU"
    },
    {
      id: "wallchain-idos",
      title: "idOS",
      description: "idOS provides decentralized identity solutions for Web3 applications.",
      rewardPool: "0.8% of Supply",
      participants: "Quackers",
      timeLeft: "Epoch I ends in 15 days",
      category: "Identity",
      platform: "idOS",
      link: "https://app.wallchain.xyz/idOS",
      logo: "https://app.wallchain.xyz/external-bucket/hashed/small-icon-white-url/idOS_logo_small_white.f42e82eaac479b488a36c86257708db4.svg",
      source: "https://app.wallchain.xyz/idOS",
      referralLink: "https://app.idos.network/?ref=96337B76"
    },
    {
      id: "wallchain-apecoin",
      title: "ApeCoin R.A.I.D",
      description: "ApeCoin R.A.I.D is a community-driven initiative for the ApeCoin ecosystem. September 9th till October 24th 2025 (Apefest).",
      rewardPool: "100,000 $APE",
      participants: "Quackers",
      timeLeft: "Project R.A.I.D ends in 15 days",
      category: "Community",
      platform: "ApeCoin R.A.I.D",
      link: "https://app.wallchain.xyz/apecoin",
      logo: "https://app.wallchain.xyz/external-bucket/hashed/small-icon-white-url/apecoin%20R.A.I.D_logo_small_white.4b4fd669b7be64a77341c5542042e561.svg",
      source: "https://x.com/OxSimpleFarmer/status/1961422732240777396",
      referralLink: "https://apechain.com",
      claimPeriod: "September 9th - October 24th 2025",
      campaignRules: [
        "100,000 $APE reward pool",
        "Period: September 9th till October 24th 2025 (Apefest)",
        "2X boost for holding BAYC",
        "1.7X boost for holding MAYC",
        "2X boost for holding at least 500 $APE",
        "Boosts are cumulative!"
      ]
    }
  ],
  cookie: [
    {
      id: "cookie-solv-protocol",
      title: "Solv Protocol",
      description: "@SolvProtocol just pulled up with $230K+ in rewards for Snappers. Top 5 Snappers can expect rewards over $5K for 2 months of snapping. Important: The Solv team decided not to allocate rewards for $COOKIE stakers in this campaign. All other ongoing Snaps campaigns on cookie(dot)fun still include rewards for stakers.",
      rewardPool: "$230K+ worth of $vSOLV",
      participants: "Top 200 Snappers",
      timeLeft: "2025-12-20",
      category: "SNAPS Campaign",
      platform: "Solv Protocol",
      link: "https://www.cookie.fun/tokens/solv-protocol",
      logo: "https://pbs.twimg.com/profile_images/1971489442235092992/njLUqgMN_400x400.jpg",
      source: "https://x.com/SolvProtocol",
      referralLink: "https://www.cookie.fun/1IWBBPno",
      claimPeriod: "TBD",
      vestingSchedule: "100% unlock on $vSOLV",
      distributionPlatform: "Cookie",
      campaignRules: [
        "Post about Solv Protocol on X to earn SNAPS",
        "Top 200 Snappers eligible for rewards",
        "Top 5 Snappers can expect rewards over $5K",
        "Distribution: 100% unlock on $vSOLV",
        "Built-in burn mechanism when swapping to $SOLV",
        "Reward calculation based on 30-day TWAP at campaign end",
        "No rewards for $COOKIE stakers in this campaign",
        "Campaign duration: 2 months"
      ],
      additionalData: {
        isNew: "true",
        campaignType: "SNAPS",
        burnMechanism: "Built-in burn mechanism when swapping to $SOLV",
        rewardCalculation: "Token amount distributed based on 30-day TWAP measured on campaign end date",
        stakerNote: "No rewards for $COOKIE stakers in this campaign"
      }
    },
    // cSnaps Campaigns
    {
      id: "cookie-vooi",
      title: "Vooi",
      description: "Commit your capital to Vooi, the #1 perp DEX aggregator, bid up your trading volume and earn rewards.",
      rewardPool: "1.92% of Total Token Supply",
      participants: "Top 300 cSnappers, Top 500 Snappers, Top 100 Korean Snappers, Stakers",
      timeLeft: "Pre-TGE",
      category: "cSnaps Campaign",
      platform: "Vooi",
      link: "https://www.cookie.fun/tokens/vooi?tab=analytics",
      logo: "https://www.cookie.fun/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1938271243876155393%2FfXAC9P_h_400x400.jpg&w=64&q=75",
      source: "https://x.com/vooi_io",
      referralLink: "https://www.cookie.fun/1IWBBPno",
      claimPeriod: "TGE",
      vestingSchedule: "TBD",
      distributionPlatform: "Cookie",
      campaignRules: [
        "Commit capital to Vooi project",
        "Top 300 cSnappers: 0.8% of TTS",
        "Top 500 Snappers: 0.65% of TTS", 
        "Top 100 Korean Snappers: 0.15% of TTS",
        "Stakers: 0.32% of TTS",
        "Part of Attention Capital Markets",
        "Creators with capital commitment eligible for multipliers"
      ],
      additionalData: {
        isNew: "true",
        campaignType: "cSnaps"
      }
    },
    {
      id: "cookie-almanak",
      title: "Almanak",
      description: "Commit your capital to Almanak and earn exclusive rewards in the first Attention Capital Markets campaign launched in partnership with Legion.",
      rewardPool: "0.55% of total supply",
      participants: "Top 500 cSnappers, Top 250 Snappers, $COOKIE stakers",
      timeLeft: "Pre-TGE",
      category: "cSnaps Campaign",
      platform: "Almanak",
      link: "https://www.cookie.fun/tokens/almanak",
      logo: "https://www.cookie.fun/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1933390399005208578%2FtBlaw9Jj_400x400.png&w=64&q=75",
      source: "https://x.com/Almanak__",
      referralLink: "https://www.cookie.fun/1IWBBPno",
      claimPeriod: "TGE",
      vestingSchedule: "100% at TGE",
      distributionPlatform: "Cookie",
      campaignRules: [
        "Commit capital to Almanak project",
        "Top 500 cSnappers: 80% of 0.55%",
        "Top 250 Snappers: 15% of 0.55%",
        "$COOKIE stakers: 5% of 0.55%",
        "Distribution: 100% at TGE",
        "Part of Attention Capital Markets",
        "Creators with capital commitment eligible for multipliers"
      ],
      additionalData: {
        isNew: "true",
        campaignType: "cSnaps"
      }
    },
    {
      id: "cookie-tria",
      title: "Tria",
      description: "Commit your capital to Tria, bid up your trading volume and earn exclusive rewards. Trade, earn, and spend in the real world.",
      rewardPool: "$650K in $TRIA",
      participants: "Top 250 cSnappers, Top 500 Snappers, $COOKIE Stakers",
      timeLeft: "Pre-TGE",
      category: "cSnaps Campaign",
      platform: "Tria",
      link: "https://www.cookie.fun/tokens/tria",
      logo: "https://www.cookie.fun/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1947271337057079296%2F_smOX_4e_400x400.jpg&w=64&q=75",
      source: "https://x.com/useTria",
      referralLink: "https://www.cookie.fun/1IWBBPno",
      claimPeriod: "TGE",
      vestingSchedule: "TBD",
      distributionPlatform: "Cookie",
      campaignRules: [
        "Commit capital to Tria project",
        "Top 250 cSnappers: 70% of 520K",
        "Top 500 Snappers: 30% of 520K",
        "$COOKIE Stakers: 130K",
        "Part of Attention Capital Markets",
        "Creators with capital commitment eligible for multipliers"
      ],
      additionalData: {
        isNew: "true",
        campaignType: "cSnaps"
      }
    },
    // SNAPS Campaigns
    {
      id: "cookie-layerbank",
      title: "LayerBank",
      description: "Post about LayerBank on X to earn SNAPS. The more SNAPS you earn, the bigger share of the reward pool goes to you.",
      rewardPool: "$280,000 in $ULAB",
      participants: "Snappers, Stakers",
      timeLeft: "Pre-TGE",
      category: "SNAPS Campaign",
      platform: "LayerBank",
      link: "https://www.cookie.fun/tokens/layerbank",
      logo: "https://pbs.twimg.com/profile_images/1874059175967547396/p25s8fYo_400x400.jpg",
      source: "https://x.com/LayerBankFi",
      referralLink: "https://www.cookie.fun/1IWBBPno",
      claimPeriod: "TGE",
      vestingSchedule: "TBD",
      distributionPlatform: "Cookie",
      campaignRules: [
        "Post about LayerBank on X to earn SNAPS",
        "Snappers: $280K",
        "Stakers: $70K",
        "Distribution: TGE",
        "More SNAPS = bigger share of reward pool"
      ],
      additionalData: {
        isNew: "true",
        campaignType: "SNAPS"
      }
    },
    {
      id: "cookie-rayls",
      title: "Rayls",
      description: "Post about the Rayls on X to earn SNAPS. The more SNAPS you earn, the bigger share of the reward pool goes to you.",
      rewardPool: "$400,000 in $RLS",
      participants: "Snappers",
      timeLeft: "Pre-TGE",
      category: "SNAPS Campaign",
      platform: "Rayls",
      link: "https://www.cookie.fun/tokens/rayls",
      logo: "https://pbs.twimg.com/profile_images/1787938574702116864/W_-vmST3_400x400.png",
      source: "https://x.com/RaylsLabs",
      referralLink: "https://www.cookie.fun/1IWBBPno",
      claimPeriod: "7 Days after TGE",
      vestingSchedule: "TBD",
      distributionPlatform: "Cookie",
      campaignRules: [
        "Post about Rayls on X to earn SNAPS",
        "Snappers: $400K",
        "Distribution: 7 Days after TGE",
        "More SNAPS = bigger share of reward pool"
      ],
      additionalData: {
        isNew: "true",
        campaignType: "SNAPS"
      }
    },
    {
      id: "cookie-velora",
      title: "Velora",
      description: "Post about Velora on X to earn SNAPS. The more SNAPS you earn, the bigger share of the reward pool goes to you.",
      rewardPool: "TBD",
      participants: "Snappers",
      timeLeft: "Pre-TGE",
      category: "SNAPS Campaign",
      platform: "Velora",
      link: "https://www.cookie.fun/tokens/velora",
      logo: "https://pbs.twimg.com/profile_images/1907811140056358913/gE8rJ5CT_400x400.jpg",
      source: "https://x.com/VeloraDEX",
      referralLink: "https://www.cookie.fun/1IWBBPno",
      claimPeriod: "TBD",
      vestingSchedule: "TBD",
      distributionPlatform: "Cookie",
      campaignRules: [
        "Post about Velora on X to earn SNAPS",
        "More SNAPS = bigger share of reward pool"
      ],
      additionalData: {
        isNew: "true",
        campaignType: "SNAPS"
      }
    },
    {
      id: "cookie-antix",
      title: "Antix",
      description: "Post about the Antix on X to earn SNAPS. The more SNAPS you earn, the bigger share of the reward pool goes to you.",
      rewardPool: "0.038% in $ANTIX",
      participants: "Snappers, Stakers",
      timeLeft: "Pre-TGE",
      category: "SNAPS Campaign",
      platform: "Antix",
      link: "https://www.cookie.fun/tokens/antix",
      logo: "https://pbs.twimg.com/profile_images/1944008841135280128/dnHkwyiA_400x400.jpg",
      source: "https://x.com/antix_in",
      referralLink: "https://www.cookie.fun/1IWBBPno",
      claimPeriod: "TGE",
      vestingSchedule: "TBD",
      distributionPlatform: "Cookie",
      campaignRules: [
        "Post about Antix on X to earn SNAPS",
        "Snappers: 0.212% in $ANTIX",
        "Stakers: 0.038% in $ANTIX",
        "Distribution: TGE",
        "More SNAPS = bigger share of reward pool"
      ],
      additionalData: {
        isNew: "true",
        campaignType: "SNAPS"
      }
    },
    {
      id: "cookie-bob",
      title: "BOB (Build on Bitcoin)",
      description: "Post about the BOB (Build on Bitcoin) on X to earn SNAPS. The more SNAPS you earn, the bigger share of the reward pool goes to you.",
      rewardPool: "$350K in $BOB",
      participants: "Snappers, Stakers",
      timeLeft: "Pre-TGE",
      category: "SNAPS Campaign",
      platform: "BOB",
      link: "https://www.cookie.fun/tokens/bob",
      logo: "https://pbs.twimg.com/profile_images/1959908677692870656/307MR6F4_400x400.jpg",
      source: "https://x.com/build_on_bob",
      referralLink: "https://www.cookie.fun/1IWBBPno",
      claimPeriod: "TGE",
      vestingSchedule: "TBD",
      distributionPlatform: "Cookie",
      campaignRules: [
        "Post about BOB (Build on Bitcoin) on X to earn SNAPS",
        "Snappers: $300K in $BOB",
        "Stakers: $50K in $BOB",
        "Distribution: TGE",
        "More SNAPS = bigger share of reward pool"
      ],
      additionalData: {
        isNew: "true",
        campaignType: "SNAPS"
      }
    },
    {
      id: "cookie-ten",
      title: "TEN",
      description: "Post about the TEN on X to earn SNAPS. The more SNAPS you earn, the bigger share of the reward pool goes to you.",
      rewardPool: "$360K in $TEN",
      participants: "Phase 1 Snappers, Phase 2 Snappers, Top Korean/Japanese/Chinese Snappers",
      timeLeft: "Pre-TGE",
      category: "SNAPS Campaign",
      platform: "TEN",
      link: "https://www.cookie.fun/tokens/ten",
      logo: "https://pbs.twimg.com/profile_images/1948670923596234752/CjzIhnby_400x400.jpg",
      source: "https://x.com/tenprotocol",
      referralLink: "https://www.cookie.fun/1IWBBPno",
      claimPeriod: "TGE",
      vestingSchedule: "TBD",
      distributionPlatform: "Cookie",
      campaignRules: [
        "Post about TEN on X to earn SNAPS",
        "Phase 1 Snappers: $360K",
        "Phase 2 Snappers: $200K",
        "Top 50 Korean Snappers: $50K",
        "Top 25 Japanese Snappers: $25K",
        "Top 25 Chinese Snappers: $25K",
        "Distribution: TGE",
        "More SNAPS = bigger share of reward pool"
      ],
      additionalData: {
        isNew: "true",
        campaignType: "SNAPS"
      }
    }
  ],
  rey: [
    {
      id: "rey-tea3",
      title: "Tea3",
      description: "Tea3 is the web's most advanced open affiliate and referral system. It allows you to grow your onchain legacy and maximize your winnings across our entire ecosystem.",
      rewardPool: "Points + USDT + Multipliers",
      participants: "Active Users with 2+ invitees",
      timeLeft: "Active",
      category: "Affiliate System",
      platform: "Rey",
      link: "https://app.rey.xyz/rjarivi",
      logo: "/assets/Info Fi Logo/Rey.svg",
      source: "https://app.rey.xyz/rjarivi",
      referralLink: "https://app.rey.xyz/rjarivi",
      claimPeriod: "Ongoing",
      vestingSchedule: "No vesting",
      distributionPlatform: "Rey",
      campaignRules: [
        "100 points for each joined user",
        "1% of Shill + Swap points per referred user",
        "0.5X multipliers on first 10, 25 and 50 users joined, then after every 50 users joined",
        "Multipliers can increase up to a total of 5X",
        "5000 points for a campaign created using your referral code + a share in USDT (TBD)",
        "Must be an active user with at least 2 invitees to qualify",
        "No bots or fake engagement allowed",
        "Sybil farming will result in blacklisting",
        "Squads provide additional multipliers for ambassadors"
      ]
    }
  ],
  aira: [
    {
      id: "aira-folks-finance",
      title: "Folks Finance",
      description: "The Folks Finance x Airaa campaign runs for about 4 months starting with the pre-TGE phase, followed by 3 months post-TGE. It's designed to reward contributors across Twitter, Discord, and onchain through the Auraboard leaderboard. Folks Finance is the leading crosschain DeFi lending protocol backed by Coinbase Ventures, Jump, ParaFi, OKX Ventures, and Borderless Capital. The FOLKS token (and airdrop) will launch on November 6th, 2025.",
      rewardPool: "0.1% of $FOLKS",
      participants: "23,301",
      timeLeft: "22 Oct'25 to 22 Feb'26",
      category: "DeFi",
      platform: "Airaa",
      link: "https://airaa.xyz/project/folks-finance",
      logo: "https://pbs.twimg.com/profile_images/1898632548495831040/7blTbbiv_400x400.jpg",
      source: "https://x.com/AiraaAgent/status/1980980664770900358",
      referralLink: "https://airaa.xyz?ref=infofi",
      campaignRules: [
        "0.1% of the total $FOLKS token supply is allocated for this campaign",
        "Rewards will be split into two parts: 25% at TGE and the rest after TGE based on TVL milestones",
        "Make sure the same wallet is connected on both Folks Finance and Airaa to activate multipliers",
        "Formula: (X contributions + Discord contributions) × Folks Finance onchain usage",
        "Every position, post, and reply becomes your Aura for TGE"
      ],
      additionalData: {
        isNew: "true",
        fundsRaised: "$6.20M at $75.00M Val",
        tokenLaunch: "November 6th, 2025",
        campaignDuration: "4 months (pre-TGE + 3 months post-TGE)",
        multiplierFormula: "(X contributions + Discord contributions) × Folks Finance onchain usage",
        additionalInfo: "You will earn multipliers for:\n• Depositing and collateralising assets on Folks Finance\n• Borrowing and repaying from the protocol\n• Inviting others to join Folks Finance\n\nEURC, Circle's euro stablecoin, is now live on Folks Finance for crosschain lending and borrowing.\nFunds raised: $6.20M at $75.00M Val\n\nYou can boost your leaderboard score through onchain multipliers by:\n• Holding Folks Finance NFTs\n• Earning Folks Points, which reflect your activity in the Folks ecosystem\nMake sure the same EVM wallet address is connected on both Airaa and Folks Finance for accurate tracking.\n\n🔍 INTERACTIONS RECOMMENDED BY SOME PEOPLE (DYOR):\n• Audit Wormhole NTT implementation on Folks Finance\n• Engage with Folks Finance protocol on Zerion Rewards platform and TaskOn\n• Mint Silver Pass NFT on Folks Finance\n• Stake assets and convert SEI to iSEI on Folks Finance\n• Check Retrodrop Allocation on Folks App\n• Deposit sMON and MON and stake Monad on Folks Finance\n• Deposit USDC on Folks Finance\n• Mint Founders Pass NFT on Folks Finance\n• Register for Folks Founders Pass\n• Register for WL through official form",
        recommendedInteractions: [
          "Audit Wormhole NTT implementation on Folks Finance",
          "Engage with Folks Finance protocol on Zerion Rewards platform and TaskOn",
          "Mint Silver Pass NFT on Folks Finance",
          "Stake assets and convert SEI to iSEI on Folks Finance",
          "Check Retrodrop Allocation on Folks App",
          "Deposit sMON and MON and stake Monad on Folks Finance",
          "Deposit USDC on Folks Finance",
          "Mint Founders Pass NFT on Folks Finance",
          "Register for Folks Founders Pass",
          "Register for WL through official form"
        ]
      }
    },
    {
      id: "aira-zkagi",
      title: "ZkAGI",
      description: "The ZkAGI x Airaa Auraboard Campaign is a 3-month community initiative that rewards contributors across Twitter, Discord, and onchain activity. Up to 2.5% of ZkAGI's total token supply has been allocated for this campaign. Rewards will be released in stages based on FDV milestones verified through platforms such as DexScreener and Birdeye.",
      rewardPool: "2.5% of $ZKAGI",
      participants: "Contributors across Twitter, Discord, and onchain activity",
      timeLeft: "92D",
      category: "Campaign",
      platform: "Airaa",
      link: "https://x.com/zk_agi",
      logo: "/assets/Info Fi Logo/ZKK.png",
      source: "https://x.com/zk_agi",
      referralLink: "https://airaa.xyz?ref=infofi",
      additionalData: {
        isNew: "true"
      }
    },
    {
      id: "aira-hq",
      title: "Airaa HQ 🌾",
      description: "Airaa HQ is the central hub for Airaa ecosystem projects and community initiatives.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Platform",
      platform: "Airaa HQ",
      link: "https://airaa.xyz/project/airaa-hq-🌾",
      logo: "https://pbs.twimg.com/profile_images/1950917690605912067/5RQykFto_400x400.jpg",
      source: "https://airaa.xyz/project/airaa-hq-🌾",
      referralLink: "https://airaa.xyz?ref=infofi"
    },
    {
      id: "aira-xo-market",
      title: "XO Market",
      description: "XO Market is a decentralized trading platform for digital assets and cryptocurrencies.",
      rewardPool: "$50,000",
      participants: "To Be Confirmed",
      timeLeft: "ENDED",
      category: "Trading",
      platform: "XO Market",
      link: "https://airaa.xyz/project/xo-market",
      logo: "https://pbs.twimg.com/profile_images/1916374865168257024/rElRdBOL_400x400.jpg",
      source: "https://airaa.xyz/project/xo-market",
      referralLink: "https://airaa.xyz?ref=infofi",
      zealyLink: "https://zealy.io/cw/xomarket/invite/-qo_kHzDUN8pc-d1Azabi?questId=3d22d445-51b4-4b3f-9432-920b6f714382",
      referralCode: "XO-WAITNOMORE",
      status: "ended"
    }
  ],
  breadcrumbs: [
    {
      id: "breadcrumbs-daemons",
      title: "Dæmons",
      description: "Dæmons is an AI-enabled, Tamagotchi-meets-Pokémon blockchain experience. PvP, PvE and interactive AI-Chat.",
      rewardPool: "$500",
      participants: "To Be Confirmed",
      timeLeft: "13 days left",
      category: "Gaming",
      platform: "Breadcrumb.cash",
      link: "https://www.breadcrumb.cash/leaderboard/0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      logo: "https://pbs.twimg.com/profile_images/1848964228490940416/HmW7B-Tc_400x400.jpg",
      source: "https://x.com/breadcrumbcash/status/1978220112990667026",
      referralLink: "https://www.breadcrumb.cash/launch?ref=REF-MEAL-C4CK",
      referralCode: "REF-MEAL-C4CK",
      additionalData: {
        xHandle: "@daemons_gamefi",
        isNew: "true"
      }
    },
    {
      id: "breadcrumbs-bondi-finance",
      title: "Bondi Finance",
      description: "Bondi Finance tokenizes publicly traded corporate bonds into onchain fixed-income products. Each Bond Token represents fractional exposure to USD-denominated corporate bonds.",
      rewardPool: "$1,469 USD",
      participants: "To Be Confirmed",
      timeLeft: "14 days left",
      category: "DeFi",
      platform: "Breadcrumb.cash",
      link: "https://www.breadcrumb.cash/leaderboard/0x820C137fa70C8691f0e44Dc420a5e53c168921Dc",
      logo: "https://pbs.twimg.com/profile_images/1890906474957664256/eDEJ3Q4G_400x400.jpg",
      source: "https://x.com/breadcrumbcash/status/1978540840994668743",
      referralLink: "https://www.breadcrumb.cash/launch?ref=REF-MEAL-C4CK",
      referralCode: "REF-MEAL-C4CK",
      additionalData: {
        xHandle: "@bondifinance",
        isNew: "true"
      }
    },
    {
      id: "breadcrumbs-breadcrumb-cash",
      title: "Breadcrumb.cash",
      description: "Breadcrumb.cash is a decentralized platform for tracking and managing cryptocurrency transactions and rewards.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "DeFi",
      platform: "Breadcrumb.cash",
      link: "https://www.breadcrumb.cash/leaderboard/0x0000000000000000000000000000000000000000",
      logo: "https://pbs.twimg.com/profile_images/1916876277388046337/Qny5yRI2_400x400.png",
      source: "https://x.com/breadcrumbcash",
      referralLink: "https://www.breadcrumb.cash/launch?ref=REF-MEAL-C4CK",
      referralCode: "REF-MEAL-C4CK",
      additionalData: {
        bakers: "6,888",
        crumbsDistributed: "354,261"
      }
    },
    {
      id: "breadcrumbs-dream-space-hq",
      title: "Dream Space HQ",
      description: "Dreamspace is the first vibe coding canvas for crypto's creatives ✨ we make it easy for anyone — not just devs — to build, ship, and monetize onchain apps without touching code. dream it → generate it → ship it → monetize it.",
      rewardPool: "$0.1 WETH",
      participants: "To Be Confirmed",
      timeLeft: "7 days left",
      category: "Development Tools",
      platform: "Breadcrumb.cash",
      link: "https://www.breadcrumb.cash/leaderboard/0x4200000000000000000000000000000000000006",
      logo: "https://pbs.twimg.com/profile_images/1944738936120639488/0ali8N6b_400x400.jpg",
      source: "https://x.com/breadcrumbcash/status/1978569404410462652",
      referralLink: "https://www.breadcrumb.cash/launch?ref=REF-MEAL-C4CK",
      referralCode: "REF-MEAL-C4CK",
      status: "ended",
      additionalData: {
        xHandle: "@dreamspaceHQ",
        isNew: "true"
      }
    },
    {
      id: "breadcrumbs-blackmirror-xp",
      title: "blackmirror_xp",
      description: "$MIRROR — The Official Black Mirror Token — Built on @korprotocol. Backed by @avax, @solana, @republiccrypto, @animocabrands",
      rewardPool: "20,000 $MIRROR",
      participants: "Top 100",
      timeLeft: "7D",
      category: "Token",
      platform: "Breadcrumb.cash",
      link: "https://www.breadcrumb.cash/leaderboard/0xe1bfA25468AF64e366ddAFC9D91bCc6c97439A14",
      logo: "https://pbs.twimg.com/profile_images/1859995016476667905/-B0m6i66_400x400.jpg",
      source: "https://x.com/breadcrumbcash/status/1970885609586569569",
      referralLink: "https://www.breadcrumb.cash/launch?ref=REF-MEAL-C4CK",
      referralCode: "REF-MEAL-C4CK",
      status: "ended",
      additionalData: {
        bakers: "2,805",
        airdropRecipients: "Top 100",
        crumbsDistributed: "41,584",
        xHandle: "@blackmirror_xp"
      }
    }
  ],
  mindoai: [
    {
      id: "mindoai-tria",
      title: "Tria",
      description: "A self-custodial neobank that unifies trading, spending, and earning in a single app - with no bridges, no gas, and no intermediaries. Pay, trade, and earn yield across any network and currency! Tria has raised $12M and partnered with 70+ top protocols, including Arbitrum, Polygon, Injective, Sentient, Aethir, and Katana.",
      rewardPool: "$120K $TRIA ($40K/Month)",
      participants: "Top 100 Minders",
      timeLeft: "92D",
      category: "Neobank",
      platform: "MindoAi",
      link: "https://mindoshare.ai/projects/useTria",
      logo: "https://pbs.twimg.com/profile_images/1947271337057079296/_smOX_4e_200x200.jpg",
      source: "https://x.com/MindoAI/status/1978086845243170915",
      referralLink: "https://mindoshare.ai/kol?ref=cmg6kqx8u00x0sd3wasc2tbca",
      campaignRules: [
        "Sign up at app.tria.so and create your @tria account",
        "Complete KYC and receive your Visa-powered card",
        "Connect any wallet - no bridging or gas required",
        "Start spending via Apple Pay or Google Pay, and trade using BestPath on the web app",
        "Create content about self-custodial neobanking and how Tria compares to Plasma",
        "Cover how Tria unifies consumer and institutional finance into a single model",
        "Discuss economic loops between card usage, yield generation, and token value capture",
        "Explore the macro narrative: programmable finance for both humans and AI agents"
      ],
      additionalData: {
        isNew: "true"
      }
    },
    {
      id: "mindoai-cryptorubic",
      title: "Rubic",
      description: "Rubic. Your Best Rate Finder across 70+ chains and 360+ DEXs, bridges, aggregators & intent protocols. For users and dApps.",
      rewardPool: "$30,000",
      participants: "Top 100 Minders",
      timeLeft: "TBD",
      category: "DeFi Aggregator",
      platform: "Rubic",
      link: "https://mindoshare.ai/projects/MindoAI",
      logo: "https://pbs.twimg.com/profile_images/1965705110043967488/TUJOs4nC_200x200.jpg",
      source: "https://x.com/CryptoRubic/status/1968633624124666199",
      referralLink: "https://mindoshare.ai/kol?ref=cmg6kqx8u00x0sd3wasc2tbca",
      campaignRules: [
        "Follow @CryptoRubic on X → stay updated on Rubic's 5th birthday campaign news and drops",
        "Create original (not AI) content about Rubic's app — highlight its real value for traders",
        "Post in your own CT style — tweets, threads, or QRTs all work",
        "Check the Campaign Playbook weekly → sync with activities and events",
        "Engage with Rubic's official content — like, comment, QRT, and help push the narrative",
        "Earn rewards → by the end of the campaign, the Top 100 Minders will split the $30K pool"
      ]
    },
    {
      id: "mindoai-mindoai",
      title: "MindoAI",
      description: "The attention-to-capital engine of crypto—AI-native, on-chain aware, and built to score real influence, price belief, and prove ROI.",
      rewardPool: "$100K MND ($33.3K/Month)",
      participants: "Top 100 Minders",
      timeLeft: "Aug 18, 2025 - Nov 18, 2025",
      category: "AI Platform",
      platform: "MindoAI",
      link: "https://mindoshare.ai/projects/MindoAI",
      logo: "https://pbs.twimg.com/profile_images/1957881940905979907/8PQntyUv_400x400.jpg",
      source: "https://x.com/CryptoRubic/status/1968633624124666199",
      referralLink: "https://mindoshare.ai/kol?ref=cmg6kqx8u00x0sd3wasc2tbca",
      campaignRules: [
        "Follow @MindoAI on X to stay updated on the project's vision and progress",
        "Create original (not AI) educational content about MindoAI and InfoFI narrative",
        "Share your content on X as a post, thread, or QRT — keep it authentic to your community's voice",
        "Engage with MindoAI's official content on X directly — like, comment, and spread the word",
        "By the end of the campaign - TOP-100 minders will enjoy rewards from the 30,000$ pool"
      ]
    }
  ],
  galxe: [
    {
      id: "galxe-dagama-s2",
      title: "daGama (S2)",
      description: "Following its first success, daGama launches Season 2! Explore and champion the AI-powered Arbitrum protocol making recommendations transparent, trusted & rewarding.",
      rewardPool: "$65,000 in $DGMA tokens (0.17% of total)",
      participants: "TBD",
      timeLeft: "21 Oct'25 to 21 Jan'26",
      category: "AI Protocol",
      platform: "Galxe",
      link: "https://app.galxe.com/hub/invite?code=GICyJr43Nj1NKCIpDtJlpV7gSBHFvpYO6y3IpKCZD4=",
      logo: "https://cdn.galxe.com/galaxy/05f44e717a054f9182a6ec5bf82363ff/.jpeg_thumbnail.webp",
      source: "https://x.com/Galxe/status/1980967622117323169",
      referralLink: "https://dagama.go.link/?adj_t=1go1g649&adj_label=N4ax7I",
      referralCode: "N4ax7I",
      additionalData: {
        isNew: "true",
        additionalInfo: "🌍 daGama is a RWL (Real World Locations) platform that leverages blockchain and AI technology to provide authentic info and trusted recommendations.\n\n💡 RWL (Real World Locations) are all real-world places, both commercial and non-commercial, integrated through WEB3 infrastructure. This integration combines common real-world locations with the advantages of blockchain technology, fostering mass adoption.\n\nUp to $65K in $DGMA for top Aura contributors",
        campaignDuration: "3 months (Season 2)",
        totalRewards: "$65,000 in $DGMA tokens",
        tokenAllocation: "0.17% of total supply",
        xAccount: "https://x.com/dagama_world",
        xHandle: "dagama_world"
      }
    },
    {
      id: "mememarket-galxe",
      title: "MemeMarket",
      description: "MemeMarket rewards creators and market movers shaping crypto culture. The final sprint to TGE has begun. Up to $100,000 in $MFUN available for top Aura contributors and GalxeQuest participants.",
      rewardPool: "$100,000 of $MFUN",
      participants: "Top Aura Contributors & GalxeQuest Participants",
      timeLeft: "2025/10/13 02:30:00 - 2025/12/16",
      category: "Meme Token",
      platform: "Galxe",
      link: "https://app.galxe.com/quest/mememarket/starboard/794",
      logo: "https://cdn.galxe.com/galaxy/192/72ff9759-eae4-4603-bef6-05551dd0f730.png",
      source: "https://x.com/Galxe/status/1979185882637963513",
      referralLink: "https://app.galxe.com/hub/invite?code=GICyJr43Nj1NKCIpDtJlpV7gSBHFvpYO6y3IpKCZD4=",
      claimPeriod: "Ongoing",
      vestingSchedule: "TBA",
      distributionPlatform: "Galxe",
      campaignRules: [
        "Post relevant content on X to increase your social impact",
        "Complete GalxeQuest tasks to earn rewards",
        "Build Aura index through social engagement",
        "Top contributors receive $MFUN tokens"
      ],
      additionalData: {
        xAccount: "https://x.com/MemeMarketFun",
        xHandle: "MemeMarketFun",
        getStartedLink: "https://app.galxe.com/quest/mememarket/GCiTet8JSG?refer=space_home",
        joinProjectLink: "https://mememarket.fun/mfun-public-sale"
      }
    },
    {
      id: "xyo-galxe",
      title: "XYO",
      description: "XYO is a global network making real-world data reliable, bridging the physical world with web3 apps. Up to $50,000 in $XL1 tokens is available for top Aura contributors and GalxeQuest participants.",
      rewardPool: "$50K in XL1* $25K for Galxe Quest, $25K for Starboard Aura contributors",
      participants: "Top Aura Contributors & GalxeQuest Participants",
      timeLeft: "Started: 2025/10/10, End: TBA",
      category: "Data Network",
      platform: "Galxe",
      link: "https://app.galxe.com/quest/xyo/starboard/792",
      logo: "https://cdn.galxe.com/galaxy/cdca05cad9884969a5b9cd4017f0d2b1/.png_thumbnail.webp",
      source: "https://x.com/Galxe/status/1978498854652670295",
      referralLink: "https://app.galxe.com/hub/invite?code=GICyJr43Nj1NKCIpDtJlpV7gSBHFvpYO6y3IpKCZD4=",
      claimPeriod: "Ongoing",
      vestingSchedule: "Distributed via Earndrop over 12 months",
      distributionPlatform: "Galxe",
      campaignRules: [
        "Complete GalxeQuest tasks to earn rewards",
        "Build Aura index through social engagement",
        "Top contributors receive $XL1 tokens",
        "Rewards distributed via Earndrop over 12 months"
      ],
      additionalData: {
        xAccount: "https://x.com/OfficialXYO",
        xHandle: "OfficialXYO"
      }
    },
    {
      id: "ditto-labs-galxe",
      title: "Ditto Labs",
      description: "Lead your heroes in Ditto Quest and grow your onchain legacy in the Ditto Portal. Build your Aura, climb the leaderboard & earn from 1.5% of the upcoming $DITTO airdrop.",
      rewardPool: "1.5% of $DITTO Supply",
      participants: "Ditto Labs Starboard and Galxe Quest Participants",
      timeLeft: "2025/10/12 21:30:00 - 2025/11/13",
      category: "Gaming",
      platform: "Galxe",
      link: "https://app.galxe.com/quest/DittoLabs/starboard/793",
      logo: "https://cdn.galxe.com/galaxy/logo/397c3693-6134-45b4-a254-d27a7fa981ed.png",
      source: "https://x.com/Galxe/status/1977721704840355949",
      referralLink: "https://app.galxe.com/hub/invite?code=GICyJr43Nj1NKCIpDtJlpV7gSBHFvpYO6y3IpKCZD4=",
      claimPeriod: "Ongoing",
      vestingSchedule: "TBA",
      distributionPlatform: "Galxe",
      campaignRules: [
        "Play Ditto Quest pixel-art idle RPG",
        "Farm, craft, breed, and fight monsters",
        "Build Aura index through social engagement",
        "Earn $DITTO and USDT through combat and progression"
      ],
      additionalData: {
        xAccount: "https://x.com/dittocoin",
        xHandle: "dittocoin",
        gameDescription: "Our flagship title, Ditto Quest, is a pixel-art idle RPG where players farm, craft, breed, and fight monsters to earn real rewards. Designed as a stable faucet economy, Ditto Quest rewards players with $DITTO and even USDT through combat and progression."
      }
    },
    {
      id: "x1-ecochain-galxe",
      title: "X1 EcoChain",
      description: "X1 EcoChain is a Layer-1 blockchain powered by thousands of plug-and-play X1Nodes running in homes and offices worldwide. Up to $100,000 in $X1 coins are available for top Aura contributors.",
      rewardPool: "$100,000 in $X1 coins (1% of total)",
      participants: "Top Aura Contributors",
      timeLeft: "Started: 2025/08/01",
      category: "Blockchain",
      platform: "Galxe",
      link: "https://app.galxe.com/quest/x1ecochain/starboard/791",
      logo: "https://cdn.galxe.com/tooljet/logoframe.png",
      source: "https://x.com/Galxe/status/1971210524718506385",
      referralLink: "https://app.galxe.com/hub/invite?code=GICyJr43Nj1NKCIpDtJlpV7gSBHFvpYO6y3IpKCZD4=",
      claimPeriod: "Ongoing",
      vestingSchedule: "TBA",
      distributionPlatform: "Galxe",
      campaignRules: [
        "Build Aura index through social engagement",
        "Complete GalxeQuest tasks",
        "Top contributors receive $X1 coins",
        "1% of total $X1 supply distributed"
      ],
      additionalData: {
        xAccount: "https://x.com/X1_EcoChain",
        xHandle: "X1_EcoChain",
        technicalDetails: "X1 EcoChain is a Layer-1 network secured by Proof of Authority validators running on X1Nodes consuming just 3 watts per hour. Fully EVM-compatible, it delivers sub-cent gas fees, instant finality, and carbon-light operation—bringing smart-contract utility to anyone with a power outlet."
      }
    },
    {
      id: "assemble-ai-galxe",
      title: "Assemble AI",
      description: "AI-Powered Crypto News Super App - http://ns3.ai | Read News & Earn $ASM | Breaking News Alerts | 98% Global Crypto News Coverage | AI News Analysis & Market Summary",
      rewardPool: "$100,000 in $ASM tokens",
      participants: "Top 200 contributors (Season 1)",
      timeLeft: "Season 1: 18 September – 18 November 2025",
      category: "AI / News",
      platform: "Galxe",
      link: "https://app.galxe.com/quest/AssembleProtocol/starboard/790",
      logo: "https://cdn.galxe.com/galaxy/logo/f43bd1dd-4347-41a8-bc69-87050f048459.png",
      source: "https://x.com/Galxe/status/1968689948086706597",
      referralLink: "https://app.galxe.com/hub/invite?code=GICyJr43Nj1NKCIpDtJlpV7gSBHFvpYO6y3IpKCZD4=",
      claimPeriod: "Distributed in Season 1 (18 September – 18 November 2025), Season 2 TBA",
      vestingSchedule: "To Be Confirmed",
      distributionPlatform: "Galxe",
      campaignRules: [
        "In Season 1 (18 September – 18 November 2025), we're distributing $50,000 in $ASM tokens among the top 200 contributors, with rewards increasing by tier.",
        "The second season, with the remaining $50,000, will be announced later.",
        "Campaign Full Details: https://x.com/Assemble_io/status/1969012579059056645"
      ],
      additionalData: {
        xAccount: "https://x.com/Assemble_io",
        xHandle: "Assemble_io"
      }
    },
    {
      id: "threshold-network-galxe",
      title: "Threshold Network",
      description: "The Leading Decentralized Wrapped Bitcoin. Unleash Bitcoin's full potential, without giving up control.",
      rewardPool: "Up to 50K USDC (Galxe Quest & Starboard)",
      participants: "Galxe Quest & Starboard Participants",
      timeLeft: "Phase 1: Ends October 30 (Quest #1), October 24 (Quest #2). Phase 2: Running until December 14, 2025.",
      category: "DeFi / Wrapped Bitcoin",
      platform: "Galxe",
      link: "https://app.galxe.com/quest/Threshold/starboard/755",
      logo: "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0xd88f19d444019b3726d83099c8c1dd9b85f19bac-1665454500991901234.jpeg",
      source: "https://x.com/TheTNetwork/status/1978472380424151245",
      referralLink: "https://app.galxe.com/hub/invite?code=GICyJr43Nj1NKCIpDtJlpV7gSBHFvpYO6y3IpKCZD4=",
      claimPeriod: "All rewards are distributed in USDC only.",
      vestingSchedule: "To Be Confirmed",
      distributionPlatform: "Galxe",
      campaignRules: [
        "Phase 1: Starboard Series - Two introductory quests on Galxe.",
        "Starboard Series #1: Follow Threshold and tBTC (Ends: October 30). Rewards: 250 winners share $500 USDC ($2 each). Required before Quest #2.",
        "Starboard Series #2: Spread the Word About tBTC (Ends: October 24). Eligibility: 3,000 AURA points. Rewards: 90 qualified winners share $4,500 USDC (~$45 each).",
        "How to qualify: Create Galxe account, Connect ERC-20 wallet, Submit wallet address, Tweet about 'Threshold network' and 'tBTC' (correct info only), Verification by Threshold team, Galxe account address must match submitted address.",
        "Phase 2: Starboard Rank - Share posts about Threshold on X with 'Threshold Network' and 'tBTC'. Engagement impacts Aura Points and leaderboard ranking. Running until December 14, 2025.",
        "Participation Guidelines: Accuracy and professionalism essential. Misinformation/duplication leads to disqualification.",
        "Note: tBTC is not undergoing TGE/token launch. Threshold does not issue NFTs. Rewards in USDC only. Repeated/misleading posts lead to 500 AURA point deduction or removal.",
        "Reward structure: Top 1–5: $500 USDC each; Top 6–10: $400 USDC each.",
        "FAQs: https://x.com/TheTNetwork/status/1978472380424151245"
      ],
      additionalData: {
        xAccount: "https://x.com/TheTNetwork",
        xHandle: "TheTNetwork"
      }
    },
    {
      id: "dolomite-galxe",
      title: "Dolomite",
      description: "A next-gen margin trading, lending, and hedging protocol on Arbitrum.",
      rewardPool: "500 Aura → +10 XP; 2,500 Aura → +20 XP; 10,000 Aura → +30 XP",
      participants: "Community Members",
      timeLeft: "Ongoing",
      category: "DeFi / Trading",
      platform: "Galxe",
      link: "https://app.galxe.com/quest/dolomite/starboard/757",
      logo: "https://cdn.galxe.com/galaxy/avatar/2d4f5b4d-4730-4134-827f-e88a9b14b3af.jpeg",
      source: "https://app.galxe.com/quest/dolomite/starboard/757",
      referralLink: "https://app.galxe.com/hub/invite?code=GICyJr43Nj1NKCIpDtJlpV7gSBHFvpYO6y3IpKCZD4=",
      claimPeriod: "Ongoing",
      vestingSchedule: "To Be Confirmed",
      distributionPlatform: "Galxe",
      campaignRules: [
        "Learn more about Dolomite Community XP here: https://docs.dolomite.io/community-xp"
      ],
      additionalData: {
        xAccount: "https://x.com/Dolomite_io",
        xHandle: "Dolomite_io"
      }
    },
    {
      id: "kadena-galxe",
      title: "Kadena",
      description: "Founded in the U.S. in 2017 by Stuart Popejoy and Will Martino - creators of J.P. Morgan's first blockchain and leaders of the SEC's Crypto Committee - Kadena delivers industry-leading performance as the only scalable Layer 1 Proof of Work blockchain.",
      rewardPool: "$50,000 worth of $KDA",
      participants: "Galxe Quest & Starboard Participants",
      timeLeft: "2025/09/08 20:30:00 - 2025/12/08 21:30:00 GMT+05:30",
      category: "Blockchain",
      platform: "Galxe",
      link: "https://app.galxe.com/quest/Kadena/starboard/650",
      logo: "https://cdn.galxe.com/galaxy/logo/0b22f7cb-caef-4581-89af-4199c29c1e3f.png",
      source: "https://x.com/Galxe/status/1965067856149967124",
      referralLink: "https://app.galxe.com/hub/invite?code=GICyJr43Nj1NKCIpDtJlpV7gSBHFvpYO6y3IpKCZD4=",
      claimPeriod: "To Be Confirmed",
      vestingSchedule: "To Be Confirmed",
      distributionPlatform: "Galxe",
      campaignRules: [],
      additionalData: {
        xAccount: "https://x.com/kadena_io",
        xHandle: "kadena_io"
      }
    }
  ],
  pulse: [
    {
      id: "pulse-grvt",
      title: "GRVT",
      description: "Trade, Invest, Earn. Finance that just flows. Get going in minutes, see results for years.",
      rewardPool: "$30k USD in $ZK",
      participants: "To Be Confirmed",
      timeLeft: "72D",
      category: "Trading Platform",
      platform: "GRVT",
      link: "https://grvt.io/exchange/sign-up?ref=G5UAMXN",
      logo: "https://pbs.twimg.com/profile_images/1967849095126732800/dNax4nHs_400x400.jpg",
      source: "https://x.com/PulseInfra/status/1975229575899844754",
      referralLink: "https://grvt.io/exchange/sign-up?ref=G5UAMXN",
      referralCode: "G5UAMXN",
      additionalData: {
        isNew: "true"
      }
    },
    {
      id: "pulse-boost",
      title: "Boost Season 2",
      description: "Boost provides enhanced trading capabilities and market acceleration tools for cryptocurrency traders.",
      rewardPool: "5M $BOOST",
      participants: "To Be Confirmed",
      timeLeft: "68D",
      category: "Trading Tools",
      platform: "Boost",
      link: "https://www.alphabot.app/pulse/boost",
      logo: "/assets/Info Fi Logo/Boost.jpg",
      source: "https://www.alphabot.app/pulse/boost",
      referralLink: "https://www.alphabot.app?ref=infofi"
    },
    {
      id: "pulse-aegis",
      title: "Aegis",
      description: "Aegis offers comprehensive security solutions and protection mechanisms for cryptocurrency investments.",
      rewardPool: "0.5% $AEG SUPPLY",
      participants: "To Be Confirmed",
      timeLeft: "62D",
      category: "Security",
      platform: "Aegis",
      link: "https://www.alphabot.app/pulse/aegis",
      logo: "https://pbs.twimg.com/profile_images/1769752309536329728/rhm7QxPy_400x400.jpg",
      source: "https://www.alphabot.app/pulse/aegis",
      referralLink: "https://www.alphabot.app?ref=infofi"
    },
    {
      id: "pulse-belong",
      title: "Belong",
      description: "Belong creates community-driven investment opportunities and social trading experiences.",
      rewardPool: "1% OF SUPPLY",
      participants: "To Be Confirmed",
      timeLeft: "15D",
      category: "Community",
      platform: "Belong",
      link: "https://www.alphabot.app/pulse/belong",
      logo: "https://imagedelivery.net/tfbbUDELTH59IbQ61fGnYg/affda674-0b3c-460f-f876-85e466a7a800/public",
      source: "https://www.alphabot.app/pulse/belong",
      referralLink: "https://www.alphabot.app?ref=infofi"
    },
    {
      id: "pulse-campnetwork",
      title: "Camp Network",
      description: "Camp Network provides networking opportunities and collaborative investment strategies in Web3.",
      rewardPool: "$25k USDC",
      participants: "To Be Confirmed",
      timeLeft: "17D",
      category: "Networking",
      platform: "Camp Network",
      link: "https://www.alphabot.app/pulse/campnetwork",
      logo: "https://imagedelivery.net/tfbbUDELTH59IbQ61fGnYg/1edbfd58-2721-4f47-7969-36af6d020700/public",
      source: "https://www.alphabot.app/pulse/campnetwork",
      referralLink: "https://www.alphabot.app?ref=infofi"
    },
    {
      id: "pulse-sixr",
      title: "SixR Cricket",
      description: "SixR Cricket offers advanced trading algorithms and automated investment strategies for cryptocurrency markets.",
      rewardPool: "$100k in $SIXR",
      participants: "To Be Confirmed",
      timeLeft: "1D 5H",
      category: "Algorithmic Trading",
      platform: "SixR Cricket",
      link: "https://www.alphabot.app/pulse/sixr",
      logo: "https://imagedelivery.net/tfbbUDELTH59IbQ61fGnYg/14d11263-ffcc-40d3-a96e-f95f288e0500/public",
      source: "https://www.alphabot.app/pulse/sixr",
      referralLink: "https://www.alphabot.app?ref=infofi"
    },
    {
      id: "pulse-imua",
      title: "Imua",
      description: "Imua provides innovative trading solutions and market momentum strategies for cryptocurrency investors.",
      rewardPool: "$100k in $IMUA",
      participants: "To Be Confirmed",
      timeLeft: "17D",
      category: "Trading Strategy",
      platform: "Imua",
      link: "https://www.alphabot.app/pulse/imua",
      logo: "https://pbs.twimg.com/profile_images/1897344257419259904/NO5Mn3FM_400x400.jpg",
      source: "https://www.alphabot.app/pulse/imua",
      referralLink: "https://www.alphabot.app?ref=infofi"
    },
  ],
  xeet: [
    {
      id: "xeet-iopn",
      title: "IOPn",
      description: "Join \"The Internet of People\" with $100,000 per month in $OPN $300,000 in total rewards over the next 3 months paid out at TGE (date TBA). IOPn is building OPN chain which is a scalable L1 that integrates decentralized digital identity, real-world asset tokenization, and sovereign AI infrastructure to empower users with borderless digital ownership.",
      rewardPool: "$300K $OPN + Xeets Top 100 receive $100K OPN per monthly tournament",
      participants: "TBD",
      timeLeft: "23 Oct'25 to 23 Jan'26",
      category: "Infrastructure",
      platform: "Xeet",
      link: "https://badge.iopn.io/?ref=WLUNWO8G",
      logo: "https://www.xeet.ai/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1929775799478956032%2FeNc_Kixr_400x400.jpg&w=32&q=75",
      source: "https://x.com/xeetdotai/status/1980997976844574839",
      referralLink: "https://badge.iopn.io/?ref=WLUNWO8G",
      referralCode: "WLUNWO8G",
      additionalData: {
        isNew: "true",
        additionalInfo: "IOPn is a decentralised infrastructure pioneering the OPN Chain, a sovereign ready L1 designed for identity verified participants. IOPn provides solutions in real world asset tokenisation, sovereign AI, and decentralised ownership.\n\nClaim Your Badge: https://badge.iopn.io/?ref=WLUNWO8G\nDocs: https://iopn.gitbook.io/iopn/origin-nft-gamified-proof-of-participation#what-is-rep",
        campaignDuration: "3 months",
        totalRewards: "$300,000 in $OPN tokens",
        monthlyTournament: "$100K OPN for top 100 Xeets participants",
        earlyAdopterBadge: "https://badge.iopn.io/?ref=WLUNWO8G",
        xAccount: "https://x.com/IOPn_io",
        xHandle: "IOPn_io"
      }
    },
    {
      id: "xeet-kona",
      title: "KonaDeFi",
      description: "KonaDeFi is a consumer-focused DeFi ecosystem on Abstract offering products for trading, lending, and experimental DeFi. Features KONA token and Kona Points reward system.",
      rewardPool: "1.5M Kona Points",
      participants: "360",
      timeLeft: "Started 10/6/2025",
      category: "DeFi",
      platform: "KonaDeFi",
      link: "https://www.xeet.ai/signals/kona?tab=tournament",
      logo: "https://www.xeet.ai/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1962662588598362112%2FGS93TWpm_400x400.png&w=32&q=75",
      source: "https://x.com/xeetdotai/status/1975216472206061592",
      referralLink: "https://www.xeet.ai/refer/rjarivi",
      claimPeriod: "100 participants rewarded",
      vestingSchedule: "TBD",
      distributionPlatform: "Xeet",
      campaignRules: [
        "Complete quests to earn extra rewards",
        "Connect Abstract Wallet to claim quest rewards",
        "Follow Froth on X for additional points",
        "Scoring resolves end of day and changes dynamically",
        "Tournament started 10/6/2025",
        "1.5M Kona Points reward pool for top 100 participants"
      ],
      additionalData: {
        isNew: "true"
      }
    },
    {
      id: "xeet-solstice",
      title: "Solstice",
      description: "Solstice is focused on delivering stable, real yield through strategies that don't rely on hype or speculation. Our approach combines proven delta-neutral trading, robust infrastructure, and institutional-grade risk management to build a foundation for long-term positive returns.",
      rewardPool: "1% $SLX Token Supply",
      participants: "1,581",
      timeLeft: "Sep 29, 2025 - Ongoing",
      category: "Yield Platform",
      platform: "Solstice",
      link: "https://www.xeet.ai/signals/solstice",
      logo: "https://pbs.twimg.com/profile_images/1916876277388046337/Qny5yRI2_400x400.png",
      source: "https://www.xeet.ai/signals/solstice",
      referralLink: "https://app.solstice.finance/earn-flares?ref=TAuyCWirvp",
      referralCode: "E7E3RQNSFy",
      claimPeriod: "100 participants rewarded",
      vestingSchedule: "TBD",
      distributionPlatform: "Xeet",
      campaignRules: [
        "Complete quests to earn extra rewards",
        "Partner codes: ORCA and RAYDIUM",
        "Focus on stable, real yield strategies",
        "Delta-neutral trading approach"
      ]
    },
    {
      id: "xeet-myriad-market",
      title: "Myriad Markets",
      description: "Prediction Markets for everything! From crypto, politics and sports to gaming, culture and technology. Trade your opinion.",
      rewardPool: "1 Billion $MYR Points",
      participants: "1,127",
      timeLeft: "Sep 25, 2025 - Ongoing",
      category: "Prediction Markets",
      platform: "Myriad Markets",
      link: "https://www.xeet.ai/signals/myriad-market",
      logo: "https://www.xeet.ai/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1949824545403101184%2FbdrlDoUR_400x400.jpg&w=32&q=75",
      source: "https://www.xeet.ai/signals/myriad-market",
      referralLink: "https://www.xeet.ai/refer/godofbayc",
      claimPeriod: "500 participants rewarded",
      vestingSchedule: "TBD",
      distributionPlatform: "Xeet",
      campaignRules: [
        "Complete quests to earn extra rewards",
        "Trade predictions on crypto, politics, sports",
        "Participate in gaming, culture and technology markets",
        "Trade your opinion across all categories"
      ]
    },
    {
      id: "xeet-abstract",
      title: "Abstract",
      description: "Abstract is an Ethereum Layer-2 built with the ZK Stack, offering fast, low-fee transactions with full EVM compatibility. It features the Abstract Global Wallet for seamless onboarding and a developer portal to deploy and scale Web3 apps.",
      rewardPool: "Xeets",
      participants: "5,308",
      timeLeft: "Sep 25, 2025 - Ongoing",
      category: "Layer 2",
      platform: "Abstract",
      link: "https://www.xeet.ai/signals/abstract",
      logo: "https://pbs.twimg.com/profile_images/1947751080705630208/0OQFUJxI_400x400.jpg",
      source: "https://www.xeet.ai/signals/abstract",
      referralLink: "https://www.xeet.ai/refer/godofbayc",
      claimPeriod: "Everyone rewarded",
      vestingSchedule: "TBD",
      distributionPlatform: "Xeet",
      campaignRules: [
        "Complete quests to earn extra rewards",
        "Built with ZK Stack for Ethereum Layer-2",
        "Fast, low-fee transactions with EVM compatibility",
        "Abstract Global Wallet for seamless onboarding"
      ]
    },
    {
      id: "xeet-xeet",
      title: "Xeet InfoFI",
      description: "Influence should be measured by the impact you make, not just the noise you make. How do you compare vs your peers? Join Xeet Leagues and find out.",
      rewardPool: "Xeets",
      participants: "26,343",
      timeLeft: "Jun 11, 2025 - Ongoing",
      category: "Social Platform",
      platform: "Xeet",
      link: "https://www.xeet.ai/signals/xeet",
      logo: "https://www.xeet.ai/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1947308130301255680%2FZ71pe0B2_400x400.png&w=32&q=75",
      source: "https://www.xeet.ai/signals/xeet",
      referralLink: "https://www.xeet.ai/refer/rjarivi",
      claimPeriod: "Everyone rewarded",
      vestingSchedule: "TBD",
      distributionPlatform: "Xeet",
      campaignRules: [
        "Complete quests to earn extra rewards",
        "Join Xeet Leagues to compare with peers",
        "Measure influence by impact, not noise",
        "Participate in social trading competitions"
      ]
    },
    {
      id: "xeet-vdex",
      title: "VDEX",
      description: "Trade Anything, Anywhere. VDEX is the gasless, omnichain sovereign DEX with CEX speed. Perps & prediction markets across crypto, equities, and FX on ETH, SOL, BSC, ARB, and AVAX.",
      rewardPool: "0.5% $VDEX over 3 months",
      participants: "303",
      timeLeft: "Oct 1, 2025 - Jan 1, 2026",
      category: "DEX",
      platform: "VDEX",
      link: "https://www.xeet.ai/signals/vdex",
      logo: "https://pbs.twimg.com/profile_images/1916876277388046337/Qny5yRI2_400x400.png",
      source: "https://www.xeet.ai/signals/vdex",
      referralLink: "https://app.vdex.trade/?referral=TornadoTitanium1825",
      claimPeriod: "33% per month for top 150",
      vestingSchedule: "3 months",
      distributionPlatform: "Xeet",
      campaignRules: [
        "Complete quests to earn extra rewards",
        "Trade on VDEX omnichain DEX",
        "Participate in perps & prediction markets",
        "Support across ETH, SOL, BSC, ARB, and AVAX"
      ]
    }
  ]
};