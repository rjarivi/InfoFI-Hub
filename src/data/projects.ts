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
  campaignRules?: string[];
  claimPeriod?: string;
  vestingSchedule?: string;
  distributionPlatform?: string;
}

export const projectsData: Record<string, Project[]> = {
  kaito: [
    {
      id: "kaito-metawin",
      title: "MetaWin Web3 Ecosystem",
      description: "Earn a share of $100K USDC Monthly for sharing about the MetaWin Web3 ecosystem. Start Winning in Web3 today.",
      rewardPool: "$100k USDC / month",
      participants: "Top 100 Creators",
      timeLeft: "Sep 23, 2025 - TBD",
      category: "Gaming",
      platform: "MetaWin",
      link: "https://x.com/MetaWin",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1477846541826236416.jpg/w=48&q=90",
      source: "https://x.com/KaitoAI/status/1970793784565755986",
      referralLink: "https://metawin.com?ref=infofi",
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
      referralLink: "https://bitdealer.io?ref=infofi",
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
      referralLink: "https://app.multipli.fi?ref=infofi",
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
      referralLink: "https://turtle.xyz?ref=infofi"
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
      referralLink: "https://hyperpie.xyz?ref=infofi",
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
      category: "Gaming",
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
      referralLink: "https://wardenprotocol.org?ref=infofi",
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
      id: "kaito-surf",
      title: "Surf",
      description: "100K CYBER to top 100 Creators, split equally over 5 months",
      rewardPool: "100K CYBER",
      participants: "Top 100 Creators",
      timeLeft: "Jul 01, 2025 - Nov 30, 2025",
      category: "AI",
      platform: "Surf",
      link: "https://x.com/Surf_Copilot",
      logo: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img-large%252F1916868318671052800.jpg/w=48&q=90",
      source: "https://x.com/Surf_Copilot/status/1940032975833637163",
      referralLink: "https://surf.ai?ref=infofi",
      claimPeriod: "Upcoming",
      vestingSchedule: "No vesting",
      distributionPlatform: "Kaito",
      campaignRules: [
        "100K CYBER and Surf Waitlist points for top CT minds and high-signal yapCreatorsers"
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
      referralLink: "https://talus.network?ref=infofi",
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
      id: "bantr-morph",
      title: "Morph",
      description: "Morph is a decentralized exchange and DeFi protocol built on Ethereum Layer 2.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "DeFi",
      platform: "Morph",
      link: "https://bantr.fun/project/morph",
      logo: "https://bantr.fun/_next/image?url=https%3A%2F%2Fstatic.highongrowth.xyz%2Fenterprise%2Fundefined%2F9f41746babce47d89f28441d9b1ad6f9.jpg&w=96&q=75",
      source: "https://bantr.fun/project/morph",
      referralLink: "https://bantr.fun?ref=infofi"
    },
    {
      id: "bantr-cointel",
      title: "Cointel",
      description: "Cointel provides intelligent trading insights and market analysis for cryptocurrency traders.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Analytics",
      platform: "Cointel",
      link: "https://bantr.fun/project/cointel",
      logo: "https://bantr.fun/_next/image?url=https%3A%2F%2Fstatic.highongrowth.xyz%2Fenterprise%2F660be03a7851c55d93a0f21e%2F3335fb7ecc1346a087e494f402c5e663.jpg&w=96&q=75",
      source: "https://bantr.fun/project/cointel",
      referralLink: "https://bantr.fun?ref=infofi"
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
      referralLink: "https://bantr.fun?ref=infofi"
    }
  ],
  wallchain: [
    {
      id: "wallchain-genome",
      title: "Genome Protocol",
      description: "2% of $NOME Supply for Top Quackers! Genome Protocol is Web3's user engagement engine - a modular, intelligent middleware layer.",
      rewardPool: "2% of $NOME Supply",
      participants: "Top Quackers",
      timeLeft: "Active",
      category: "Infrastructure",
      platform: "Genome Protocol",
      link: "https://app.wallchain.xyz/genome",
      logo: "https://app.wallchain.xyz/external-bucket/hashed/image-url/Quacks%20Master%20Logo%20(1).5c9b7f5d483f83b65ffe0ef1d64a3940.png",
      source: "https://app.wallchain.xyz/genome",
      referralLink: "https://app.wallchain.xyz/leaderboards?ref=godofbayc"
    },
    {
      id: "wallchain-limitless",
      title: "Limitless Exchange",
      description: "0.5% of Supply for Top Quackers! Limitless is the largest prediction market on Base (>$260M bet) and the easiest way to trade your favorite assets.",
      rewardPool: "0.5% of Supply",
      participants: "Top Quackers",
      timeLeft: "Active",
      category: "Trading",
      platform: "Limitless Exchange",
      link: "https://app.wallchain.xyz/limitless",
      logo: "https://app.wallchain.xyz/external-bucket/static/companies/limitless/limitless_logo_small_white.svg",
      source: "https://app.wallchain.xyz/limitless",
      referralLink: "https://app.wallchain.xyz/leaderboards?ref=godofbayc"
    },
    {
      id: "wallchain-covalent",
      title: "Covalent",
      description: "Covalent provides unified APIs to access blockchain data across multiple networks.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Data",
      platform: "Covalent",
      link: "https://app.wallchain.xyz/covalent",
      logo: "https://app.wallchain.xyz/external-bucket/hashed/small-icon-white-url/covalent_logo_small_white.0c5b80a9056a4c0bd91e6578993d3747.svg",
      source: "https://app.wallchain.xyz/covalent",
      referralLink: "https://app.wallchain.xyz/leaderboards?ref=godofbayc"
    },
    {
      id: "wallchain-heyelsa",
      title: "HeyElsa",
      description: "HeyElsa is an AI-powered assistant for Web3 and cryptocurrency interactions.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "AI",
      platform: "HeyElsa",
      link: "https://app.wallchain.xyz/heyelsa",
      logo: "https://app.wallchain.xyz/external-bucket/static/companies/heyelsa/heyelsa_logo_small_white.svg",
      source: "https://app.wallchain.xyz/heyelsa",
      referralLink: "https://app.wallchain.xyz/leaderboards?ref=godofbayc"
    },
    {
      id: "wallchain-idos",
      title: "idOS",
      description: "idOS provides decentralized identity solutions for Web3 applications.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Identity",
      platform: "idOS",
      link: "https://app.wallchain.xyz/idOS",
      logo: "https://app.wallchain.xyz/external-bucket/hashed/small-icon-white-url/idOS_logo_small_white.f42e82eaac479b488a36c86257708db4.svg",
      source: "https://app.wallchain.xyz/idOS",
      referralLink: "https://app.wallchain.xyz/leaderboards?ref=godofbayc"
    },
    {
      id: "wallchain-apecoin",
      title: "ApeCoin R.A.I.D",
      description: "ApeCoin R.A.I.D is a community-driven initiative for the ApeCoin ecosystem.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Community",
      platform: "ApeCoin R.A.I.D",
      link: "https://app.wallchain.xyz/apecoin",
      logo: "https://app.wallchain.xyz/external-bucket/hashed/small-icon-white-url/apecoin%20R.A.I.D_logo_small_white.4b4fd669b7be64a77341c5542042e561.svg",
      source: "https://app.wallchain.xyz/apecoin",
      referralLink: "https://app.wallchain.xyz/leaderboards?ref=godofbayc"
    }
  ],
  cookie: [],
  rey: [
    {
      id: "rey-tea3",
      title: "Tea3 - Advanced Onchain Affiliate System",
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
      id: "aira-xo-market",
      title: "XO Market",
      description: "XO Market is a decentralized trading platform for digital assets and cryptocurrencies.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Trading",
      platform: "XO Market",
      link: "https://airaa.xyz/project/xo-market",
      logo: "https://pbs.twimg.com/profile_images/1916374865168257024/rElRdBOL_400x400.jpg",
      source: "https://airaa.xyz/project/xo-market",
      referralLink: "https://airaa.xyz?ref=infofi"
    },
    {
      id: "aira-capx",
      title: "CapX",
      description: "CapX provides capital markets solutions and investment opportunities in the Web3 space.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Finance",
      platform: "CapX",
      link: "https://airaa.xyz/project/capx",
      logo: "https://pbs.twimg.com/profile_images/1952769112058236928/Vgl1S3bK_400x400.jpg",
      source: "https://airaa.xyz/project/capx",
      referralLink: "https://airaa.xyz?ref=infofi"
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
    }
  ],
  breadcrumbs: [],
  mindoai: [
    {
      id: "mindoai-cryptorubic",
      title: "CryptoRubic",
      description: "CryptoRubic provides comprehensive cryptocurrency market analysis and trading insights.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Analytics",
      platform: "CryptoRubic",
      link: "https://mindoshare.ai/projects/CryptoRubic",
      logo: "https://pbs.twimg.com/profile_images/1965705110043967488/TUJOs4nC_200x200.jpg",
      source: "https://mindoshare.ai/projects/CryptoRubic",
      referralLink: "https://mindoshare.ai?ref=infofi"
    },
    {
      id: "mindoai-mindoai",
      title: "MindoAI",
      description: "MindoAI is an artificial intelligence platform specializing in cryptocurrency market analysis and predictions.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "AI",
      platform: "MindoAI",
      link: "https://mindoshare.ai/projects/MindoAI",
      logo: "https://pbs.twimg.com/profile_images/1957881940905979907/8PQntyUv_400x400.jpg",
      source: "https://mindoshare.ai/projects/MindoAI",
      referralLink: "https://mindoshare.ai?ref=infofi"
    }
  ],
  parle: [
    {
      id: "parle-platform",
      title: "Parle - InfoFi Reward Engine",
      description: "An InfoFi-native reward engine for token creators and communities. Our algorithm tracks real engagement. No bots. No whales gaming the system. Just signals.",
      rewardPool: "To Be Confirmed",
      participants: "Token Creators & Communities",
      timeLeft: "Active",
      category: "Reward Engine",
      platform: "Parle",
      link: "https://parle.xyz",
      logo: "/assets/Info Fi Logo/parle.svg",
      source: "https://parle.xyz",
      referralLink: "https://parle.xyz?ref=infofi",
      claimPeriod: "Ongoing",
      vestingSchedule: "To Be Confirmed",
      distributionPlatform: "Parle",
      campaignRules: [
        "Algorithm tracks real engagement only",
        "No bots or fake engagement allowed",
        "No whales gaming the system",
        "Launch your circle in 60 seconds",
        "No code required, pure momentum",
        "Built-in community features"
      ]
    }
  ],
  pulse: [
    {
      id: "pulse-boost",
      title: "Boost Season 2",
      description: "Boost provides enhanced trading capabilities and market acceleration tools for cryptocurrency traders.",
      rewardPool: "5M $BOOST",
      participants: "To Be Confirmed",
      timeLeft: "81D",
      category: "Trading Tools",
      platform: "Boost",
      link: "https://www.alphabot.app/pulse/boost",
      logo: "https://pbs.twimg.com/profile_images/1972611732351688704/i1h1Cju4_400x400.jpg",
      source: "https://www.alphabot.app/pulse/boost",
      referralLink: "https://www.alphabot.app?ref=infofi"
    },
    {
      id: "pulse-aegis",
      title: "Aegis",
      description: "Aegis offers comprehensive security solutions and protection mechanisms for cryptocurrency investments.",
      rewardPool: "0.5% $AEG SUPPLY",
      participants: "To Be Confirmed",
      timeLeft: "75D",
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
      timeLeft: "29D",
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
      timeLeft: "31D",
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
      timeLeft: "14D",
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
      timeLeft: "31D",
      category: "Trading Strategy",
      platform: "Imua",
      link: "https://www.alphabot.app/pulse/imua",
      logo: "https://pbs.twimg.com/profile_images/1897344257419259904/NO5Mn3FM_400x400.jpg",
      source: "https://www.alphabot.app/pulse/imua",
      referralLink: "https://www.alphabot.app?ref=infofi"
    },
    {
      id: "pulse-play-ai",
      title: "Play AI",
      description: "Play AI combines artificial intelligence with gaming mechanics to create engaging trading experiences.",
      rewardPool: "0.5% OF SUPPLY",
      participants: "To Be Confirmed",
      timeLeft: "4H 17M",
      category: "AI Gaming",
      platform: "Play AI",
      link: "https://www.alphabot.app/pulse/play-ai",
      logo: "https://imagedelivery.net/tfbbUDELTH59IbQ61fGnYg/76fafd84-c9d7-4a00-8b2b-3421fcf6cd00/public",
      source: "https://www.alphabot.app/pulse/play-ai",
      referralLink: "https://www.alphabot.app?ref=infofi"
    }
  ],
  xeet: [
    {
      id: "xeet-solstice",
      title: "Solstice",
      description: "Solstice provides advanced trading signals and market analysis for cryptocurrency traders.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Trading Signals",
      platform: "Solstice",
      link: "https://www.xeet.ai/signals/solstice",
      logo: "https://pbs.twimg.com/profile_images/1916876277388046337/Qny5yRI2_400x400.png",
      source: "https://www.xeet.ai/signals/solstice",
      referralLink: "https://www.xeet.ai/refer/godofbayc"
    },
    {
      id: "xeet-myriad-market",
      title: "Myriad Market",
      description: "Myriad Market offers comprehensive market analysis and trading opportunities across multiple asset classes.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Market Analysis",
      platform: "Myriad Market",
      link: "https://www.xeet.ai/signals/myriad-market",
      logo: "https://www.xeet.ai/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1949824545403101184%2FbdrlDoUR_400x400.jpg&w=32&q=75",
      source: "https://www.xeet.ai/signals/myriad-market",
      referralLink: "https://www.xeet.ai/refer/godofbayc"
    },
    {
      id: "xeet-abstract",
      title: "Abstract",
      description: "Abstract provides innovative trading strategies and market insights for advanced cryptocurrency traders.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Trading Strategy",
      platform: "Abstract",
      link: "https://www.xeet.ai/signals/abstract",
      logo: "https://pbs.twimg.com/profile_images/1947751080705630208/0OQFUJxI_400x400.jpg",
      source: "https://www.xeet.ai/signals/abstract",
      referralLink: "https://www.xeet.ai/refer/godofbayc"
    },
    {
      id: "xeet-xeet",
      title: "Xeet",
      description: "Xeet is a comprehensive platform for cryptocurrency trading signals and market analysis.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Platform",
      platform: "Xeet",
      link: "https://www.xeet.ai/signals/xeet",
      logo: "https://www.xeet.ai/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1947308130301255680%2FZ71pe0B2_400x400.png&w=32&q=75",
      source: "https://www.xeet.ai/signals/xeet",
      referralLink: "https://www.xeet.ai/refer/godofbayc"
    }
  ]
};