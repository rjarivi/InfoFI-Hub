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
  campaignRules?: string[];
  claimPeriod?: string;
  vestingSchedule?: string;
  distributionPlatform?: string;
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
    "breadcrumbs-a0x": {
      title: "A0x",
      description: "A0x is an advanced trading bot and automation platform for cryptocurrency markets",
      category: "Trading Bot"
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
    "cookie-lab": {
      title: "LAB",
      description: "LAB is the ultimate multi-chain trading ecosystem with lowest fees. A comprehensive trading platform enabling users to trade, deploy, and analyze tokens with exceptional speed, precision, and control across any platform.",
      category: "Trading Infrastructure"
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
      title: "Tea3 - Advanced Onchain Affiliate System",
      description: "Tea3 is the web's most advanced open affiliate and referral system. It allows you to grow your onchain legacy and maximize your winnings across our entire ecosystem.",
      category: "Affiliate System"
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
    "parle-platform": {
      title: "Parle Platform",
      description: "Parle Platform is a comprehensive social media and content creation platform for Web3 communities.",
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
    }
  },
  es: {
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
    "breadcrumbs-a0x": {
      title: "A0x",
      description: "A0x es una plataforma avanzada de bots de trading y automatización para mercados de criptomonedas",
      category: "Bot de Trading"
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
    "cookie-lab": {
      title: "LAB",
      description: "LAB es el ecosistema de trading multi-cadena definitivo con las tarifas más bajas. Una plataforma de trading integral que permite a los usuarios comerciar, desplegar y analizar tokens con velocidad, precisión y control excepcionales en cualquier plataforma.",
      category: "Infraestructura de Trading"
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
    "wallchain-limitless": {
      title: "Limitless Exchange",
      description: "¡0.5% del suministro para los mejores Quackers! Limitless es el mercado de predicciones más grande en Base (>$260M en apuestas) y la forma más fácil de operar tus activos favoritos.",
      category: "Trading"
    },
    "rey-tea3": {
      title: "Tea3 - Sistema de Afiliados Onchain Avanzado",
      description: "Tea3 es el sistema de afiliados y referidos abierto más avanzado de la web. Te permite hacer crecer tu legado onchain y maximizar tus ganancias en todo nuestro ecosistema.",
      category: "Sistema de Afiliados"
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
    "parle-platform": {
      title: "Plataforma Parle",
      description: "La Plataforma Parle es una plataforma integral de redes sociales y creación de contenido para comunidades Web3.",
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
    }
  },
  fr: {
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
    "wallchain-genome": {
      title: "Protocole Genome",
      description: "2% de l'offre de $NOME pour les meilleurs Quackers! Genome Protocol est le moteur d'engagement utilisateur de Web3 - une couche middleware modulaire et intelligente",
      category: "Infrastructure"
    },
    "cookie-lab": {
      title: "LAB",
      description: "LAB est l'écosystème de trading multi-chaînes ultime avec les frais les plus bas. Une plateforme de trading complète permettant aux utilisateurs de trader, déployer et analyser des tokens avec une vitesse, précision et contrôle exceptionnels sur toute plateforme.",
      category: "Infrastructure de Trading"
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
    "breadcrumbs-a0x": {
      title: "A0x",
      description: "A0x est un bot de trading avancé et une plateforme d\'automatisation pour les marchés de cryptomonnaies",
      category: "Bot de Trading"
    },
    "wallchain-limitless": {
      title: "Limitless Exchange",
      description: "0.5% de l'offre pour les meilleurs Quackers! Limitless est le plus grand marché de prédictions sur Base (>260M$ de paris) et le moyen le plus facile de trader vos actifs favoris.",
      category: "Trading"
    },
    "rey-tea3": {
      title: "Tea3 - Système d'Affiliation Onchain Avancé",
      description: "Tea3 est le système d'affiliation et de parrainage ouvert le plus avancé du web. Il vous permet de développer votre héritage onchain et de maximiser vos gains dans tout notre écosystème.",
      category: "Système d'Affiliation"
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
    "parle-platform": {
      title: "Plateforme Parle",
      description: "La Plateforme Parle est une plateforme complète de médias sociaux et de création de contenu pour les communautés Web3.",
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
    "wallchain-genome": {
      title: "Genome Protokoll",
      description: "2% des $NOME-Angebots für Top Quackers! Genome Protocol ist Web3's Benutzerengagement-Motor - eine modulare, intelligente Middleware-Schicht",
      category: "Infrastruktur"
    },
    "cookie-lab": {
      title: "LAB",
      description: "LAB ist das ultimative Multi-Chain-Trading-Ökosystem mit den niedrigsten Gebühren. Eine umfassende Trading-Plattform, die Benutzern ermöglicht, Token mit außergewöhnlicher Geschwindigkeit, Präzision und Kontrolle auf jeder Plattform zu handeln, bereitzustellen und zu analysieren.",
      category: "Trading-Infrastruktur"
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
    "parle-platform": {
      title: "Parle-Plattform",
      description: "Die Parle-Plattform ist eine umfassende Social-Media- und Content-Erstellungsplattform für Web3-Communities.",
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
      title: "Tea3 - Advanced Onchain Affiliate System",
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
    "parle-platform": {
      title: "Parle Platform",
      description: "Parle Platform is a comprehensive communication and sharing system in the Web3 space",
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
    "breadcrumbs-a0x": {
      title: "A0x",
      description: "A0xは、暗号通貨市場向けの高度なトレーディングボットと自動化プラットフォームです",
      category: "トレーディングボット"
    },
    "wallchain-limitless": {
      title: "Limitless Exchange",
      description: "トップQuackersに供給量の0.5%！LimitlessはBaseで最大の予測市場（>2億6千万ドルのベット）で、お気に入りの資産を取引する最も簡単な方法です。",
      category: "トレーディング"
    },
    "rey-tea3": {
      title: "Tea3 - 高度なオンチェーンアフィリエイトシステム",
      description: "Tea3は、ウェブで最も高度なオープンアフィリエイト・紹介システムです。オンチェーンのレガシーを成長させ、エコシステム全体で勝利を最大化できます。",
      category: "アフィリエイトシステム"
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
    "parle-platform": {
      title: "Parleプラットフォーム",
      description: "Parleプラットフォームは、Web3コミュニティ向けの包括的なソーシャルメディア・コンテンツ作成プラットフォームです。",
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
    "cookie-lab": {
      title: "LAB",
      description: "LABは最低手数料の究極のマルチチェーントレーディングエコシステムです。ユーザーが任意のプラットフォームで例外的な速度、精度、制御でトークンを取引、展開、分析できる包括的なトレーディングプラットフォームです。",
      category: "トレーディングインフラ"
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
      title: "Tea3 - Advanced Onchain Affiliate System",
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
    "parle-platform": {
      title: "Parle Platform",
      description: "Parle Platform은 Web3 공간에서 포괄적인 커뮤니케이션 및 공유 시스템입니다",
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
    "breadcrumbs-a0x": {
      title: "A0x",
      description: "A0x는 암호화폐 시장을 위한 고급 거래 봇 및 자동화 플랫폼입니다",
      category: "거래 봇"
    },
    "wallchain-limitless": {
      title: "Limitless Exchange",
      description: "상위 Quacker를 위한 공급량의 0.5%! Limitless는 Base에서 가장 큰 예측 시장(>2억 6천만 달러 베팅)이며 좋아하는 자산을 거래하는 가장 쉬운 방법입니다.",
      category: "트레이딩"
    },
    "rey-tea3": {
      title: "Tea3 - 고급 온체인 제휴 시스템",
      description: "Tea3는 웹에서 가장 고급스러운 오픈 제휴 및 추천 시스템입니다. 온체인 레거시를 성장시키고 전체 생태계에서 승리를 극대화할 수 있습니다.",
      category: "제휴 시스템"
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
    "parle-platform": {
      title: "Parle 플랫폼",
      description: "Parle 플랫폼은 Web3 커뮤니티를 위한 포괄적인 소셜 미디어 및 콘텐츠 제작 플랫폼입니다.",
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
    "cookie-lab": {
      title: "LAB",
      description: "LAB은 최저 수수료의 궁극적인 멀티체인 거래 생태계입니다. 사용자가 모든 플랫폼에서 예외적인 속도, 정확성 및 제어로 토큰을 거래, 배포 및 분석할 수 있는 포괄적인 거래 플랫폼입니다.",
      category: "거래 인프라"
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
      title: "Tea3 - Advanced Onchain Affiliate System",
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
    "parle-platform": {
      title: "Parle Platform",
      description: "Parle Platform is a comprehensive communication and sharing system in the Web3 space",
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
    "breadcrumbs-a0x": {
      title: "A0x",
      description: "A0x是用于加密货币市场的高级交易机器人和自动化平台",
      category: "交易机器人"
    },
    "wallchain-limitless": {
      title: "Limitless Exchange",
      description: "为顶级Quackers提供0.5%的供应量！Limitless是Base上最大的预测市场（>2.6亿美元投注），是交易您喜爱资产的最简单方式。",
      category: "交易"
    },
    "rey-tea3": {
      title: "Tea3 - 高级链上联盟系统",
      description: "Tea3是网络上最先进的开放联盟和推荐系统。它允许您发展链上遗产并在整个生态系统中最大化您的收益。",
      category: "联盟系统"
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
    "parle-platform": {
      title: "Parle平台",
      description: "Parle平台是为Web3社区提供全面的社交媒体和内容创作平台。",
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
    "cookie-lab": {
      title: "LAB",
      description: "LAB是终极多链交易生态系统，具有最低费用。一个综合交易平台，使用户能够在任何平台上以卓越的速度、精度和控制力交易、部署和分析代币。",
      category: "交易基础设施"
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
    "parle-platform": {
      title: "منصة Parle",
      description: "منصة Parle هي نظام شامل للتواصل والمشاركة في مساحة Web3",
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
    "breadcrumbs-a0x": {
      title: "A0x",
      description: "A0x هو روبوت تداول متقدم ومنصة أتمتة لأسواق العملات المشفرة",
      category: "روبوت التداول"
    },
    "wallchain-limitless": {
      title: "تبادل Limitless",
      description: "0.5% من العرض لأفضل Quackers! Limitless هو أكبر سوق تنبؤات على Base (>260 مليون دولار رهان) وأسهل طريقة لتداول أصولك المفضلة",
      category: "التداول"
    },
    "rey-tea3": {
      title: "Tea3 - نظام الشراكة المتقدم على السلسلة",
      description: "Tea3 هو أكثر أنظمة الشراكة والتحويل المفتوحة تطوراً على الويب. يتيح لك تنمية إرثك على السلسلة وتحقيق أقصى استفادة من أرباحك عبر نظامنا البيئي بالكامل.",
      category: "نظام الشراكة"
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
    "parle-platform": {
      title: "منصة Parle",
      description: "منصة Parle هي منصة شاملة للوسائط الاجتماعية وإنشاء المحتوى لمجتمعات Web3.",
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
    "cookie-lab": {
      title: "LAB",
      description: "LAB هو النظام البيئي النهائي للتداول متعدد السلاسل مع أقل الرسوم. منصة تداول شاملة تمكن المستخدمين من تداول ونشر وتحليل الرموز المميزة بسرعة ودقة وتحكم استثنائيين عبر أي منصة.",
      category: "بنية تحتية للتداول"
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
      timeLeft: "Sep 12 - Oct 13, 2025",
      category: "Analytics",
      platform: "Cointel",
      link: "https://bantr.fun/project/cointel",
      logo: "https://bantr.fun/_next/image?url=https%3A%2F%2Fstatic.highongrowth.xyz%2Fenterprise%2F660be03a7851c55d93a0f21e%2F3335fb7ecc1346a087e494f402c5e663.jpg&w=96&q=75",
      source: "https://bantr.fun/project/cointel",
      referralLink: "https://www.cointel.io/en/login",
      claimPeriod: "TBD",
      vestingSchedule: "TBD",
      distributionPlatform: "Bantr",
      campaignRules: [
        "Post on X with @cointel_io + $COLS or include Cointel in your post",
        "Share thoughtful, quality content (see creator kit for tips)",
        "Spread awareness and earn your way up the leaderboard",
        "Rally your community to dive into Cointel",
        "Creator Kit: https://docs.google.com/document/d/1-CupwMBF7Hk6X0vP6pFMdKrwnQPP1Iv7exEQYHvg19w/edit"
      ]
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
    }
  ],
  wallchain: [
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
      id: "cookie-lab",
      title: "LAB",
      description: "LAB is the ultimate multi-chain trading ecosystem with lowest fees. A comprehensive trading platform enabling users to trade, deploy, and analyze tokens with exceptional speed, precision, and control across any platform.",
      rewardPool: "1.5M LAB ($52,500)",
      participants: "500,000 $COOKIE Pool",
      timeLeft: "Starting: 08 Oct 2025",
      category: "Trading Infrastructure",
      platform: "LAB",
      link: "https://www.cookie.community/multi-airdrop/68e011f8a5242ed5e52722b2#tasks",
      logo: "https://assets.cookie.community//assets/community/farming-projects/e9c58e2b-72a4-43d7-8b89-babe5353ad1f/logoUrl.webp?random=1759514759386",
      source: "https://x.com/LABtrade_/status/1967249197314494775",
      referralLink: "https://www.cookie.community/multi-airdrop/68e011f8a5242ed5e52722b2#tasks",
      claimPeriod: "2 days",
      vestingSchedule: "6 months vesting, 40% TGE",
      distributionPlatform: "Cookie",
      campaignRules: [
        "Follow @LABtrade_ on X (Twitter)",
        "Join Discord Server",
        "Join Telegram Channel",
        "Accumulate Cookie Points - Snapshot taken on 05 Oct 2025",
        "Complete 3 tasks to be eligible for farming",
        "Farming opens on 08 Oct 2025",
        "Multi-round structure: Guaranteed Round, Stakers FCFS, General Access",
        "Guaranteed Round: 2025-10-08 at 7:30 PM - 2025-10-09 at 7:29 PM",
        "Round II - Stakers FCFS: 2025-10-09 at 7:30 PM - 2025-10-10 at 7:29 PM",
        "General Access: 2025-10-10 at 7:30 PM - 2025-10-11 at 7:29 PM",
        "Connect wallet to participate",
        "Stake $COOKIE tokens for allocation"
      ],
      additionalData: {
        isNew: "true",
        totalSupply: "1,000,000,000 LAB",
        fdv: "$35,000,000",
        tradingVolume: "$500M+ processed",
        revenue: "$2.5M+ generated",
        tradingFees: "0.5% (lowest on market)",
        supportedChains: "Solana, BNB, Base, Abstract, HyperEVM"
      }
    }
  ],
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
      referralLink: "https://airaa.xyz?ref=infofi",
      zealyLink: "https://zealy.io/cw/xomarket/invite/-qo_kHzDUN8pc-d1Azabi?questId=3d22d445-51b4-4b3f-9432-920b6f714382",
      referralCode: "XO-WAITNOMORE"
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
  breadcrumbs: [
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
      id: "breadcrumbs-a0x",
      title: "A0x",
      description: "A0x is an advanced trading bot and automation platform for cryptocurrency markets.",
      rewardPool: "23,000,000 A0X",
      participants: "892 Bakers",
      timeLeft: "10 days",
      category: "Trading Bot",
      platform: "A0x",
      link: "https://www.breadcrumb.cash/leaderboard/0x820C5F0fB255a1D18fd0eBB0F1CCefbC4D546dA7",
      logo: "https://pbs.twimg.com/profile_images/1916876277388046337/Qny5yRI2_400x400.png",
      source: "https://x.com/a0xbot/status/1972697312024506709",
      referralLink: "https://www.breadcrumb.cash/launch?ref=REF-MEAL-C4CK",
      additionalData: {
        airdropRecipients: "Top 150",
        crumbsDistributed: "36,000"
      }
    }
  ],
  mindoai: [
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
      id: "pulse-grvt",
      title: "GRVT",
      description: "Trade, Invest, Earn. Finance that just flows. Get going in minutes, see results for years.",
      rewardPool: "$30k USD in $ZK",
      participants: "To Be Confirmed",
      timeLeft: "Ends in 78D",
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