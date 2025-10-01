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
      description: "Morph is a decentralized exchange and DeFi protocol built on Ethereum Layer 2",
      category: "DeFi"
    },
    "bantr-cointel": {
      title: "Cointel",
      description: "Cointel provides intelligent trading insights and market analysis for cryptocurrency traders",
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
      description: "Myriad Market offers comprehensive market analysis and trading opportunities across multiple asset classes",
      category: "Market Analysis"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "Abstract provides innovative trading strategies and market insights for advanced cryptocurrency traders",
      category: "Trading Strategy"
    },
    "xeet-xeet": {
      title: "Xeet",
      description: "Xeet is a comprehensive platform for cryptocurrency trading signals and market analysis",
      category: "Platform"
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
      description: "Morph is a decentralized exchange and DeFi protocol built on Ethereum Layer 2",
      category: "DeFi"
    },
    "bantr-cointel": {
      title: "Cointel",
      description: "Cointel provides intelligent trading insights and market analysis for cryptocurrency traders",
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
      description: "Myriad Market offers comprehensive market analysis and trading opportunities across multiple asset classes",
      category: "Market Analysis"
    },
    "xeet-abstract": {
      title: "Abstract",
      description: "Abstract provides innovative trading strategies and market insights for advanced cryptocurrency traders",
      category: "Trading Strategy"
    },
    "xeet-xeet": {
      title: "Xeet",
      description: "Xeet is a comprehensive platform for cryptocurrency trading signals and market analysis",
      category: "Platform"
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
    }
  }
};

// Function to translate project data
export function translateProject(project: Project, language: Language): Project {
  const translations = projectTranslations[language];
  console.log(`🔍 translateProject called: project.id=${project.id}, language=${language}`);
  console.log(`📊 translations exist=${!!translations}, project translation exists=${!!translations?.[project.id]}`);
  
  if (!translations || !translations[project.id]) {
    console.log(`❌ No translation found for ${project.id} in ${language}, returning original`);
    return project; // Return original if no translation exists
  }
  
  const translated = {
    ...project,
    ...translations[project.id]
  };
  
  console.log(`✅ Translation applied: ${project.id}`);
  console.log(`📝 Original description: ${project.description}`);
  console.log(`🌍 Translated description: ${translated.description}`);
  
  return translated;
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
      referralLink: "https://morphl2.io"
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
      referralLink: "https://www.cointel.io/en/login"
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
      source: "https://x.com/genome_protocol/status/1947644407311650895",
      referralLink: "https://edge.genomeprotocol.com/profile/1543320?refCode=GNM-9e3962062B056",
      referralCode: "GNM-9e3962062B056"
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
      referralLink: "https://limitless.exchange/?r=VGYFXR4N34"
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
      referralLink: "https://www.covalenthq.com"
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
      referralLink: "https://app.heyelsa.ai/referral/NRSQKU"
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
      referralLink: "https://app.idos.network/?ref=96337B76"
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
      source: "https://x.com/OxSimpleFarmer/status/1961422732240777396",
      referralLink: "https://apechain.com"
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
      referralCode: "REF-MEAL-C4CK"
    },
    {
      id: "breadcrumbs-a0x",
      title: "A0x",
      description: "A0x is an advanced trading bot and automation platform for cryptocurrency markets.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Trading Bot",
      platform: "A0x",
      link: "https://www.breadcrumb.cash/leaderboard/0x820C5F0fB255a1D18fd0eBB0F1CCefbC4D546dA7",
      logo: "https://pbs.twimg.com/profile_images/1916876277388046337/Qny5yRI2_400x400.png",
      source: "https://x.com/a0xbot/status/1972697312024506709",
      referralLink: "https://www.breadcrumb.cash/launch?ref=REF-MEAL-C4CK"
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
      referralLink: "https://app.solstice.finance/earn-flares?ref=TAuyCWirvp",
      referralCode: "E7E3RQNSFy"
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
      referralLink: "https://www.xeet.ai/refer/rjarivi"
    },
    {
      id: "xeet-vdex",
      title: "Vdex",
      description: "Vdex provides advanced trading signals and market analysis for cryptocurrency traders.",
      rewardPool: "To Be Confirmed",
      participants: "To Be Confirmed",
      timeLeft: "TBD",
      category: "Trading Signals",
      platform: "Vdex",
      link: "https://www.xeet.ai/signals/vdex",
      logo: "https://pbs.twimg.com/profile_images/1916876277388046337/Qny5yRI2_400x400.png",
      source: "https://www.xeet.ai/signals/vdex",
      referralLink: "https://app.vdex.trade/?referral=TornadoTitanium1825"
    }
  ]
};