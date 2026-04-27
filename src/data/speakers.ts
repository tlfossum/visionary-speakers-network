export interface Speaker {
  id: string;
  name: string;
  credential: string;
  headshotUrl: string | null;
  talkTitle: string;
  talkSubtitle: string;
  bio: string;
  description: string;
  takeaways: string[];
  fee: string;
  videoUrl: string;
  oneSheetUrl: string;
  email: string;
}

export const speakers: Speaker[] = [
  {
    id: "larry-namer",
    name: "Larry Namer",
    credential: "Co-Founder, E! Entertainment Television",
    headshotUrl: null,
    talkTitle: "The OffScript Advantage",
    talkSubtitle: "How to recognize inflection points and move before competitors do",
    bio: "Larry Namer co-founded E! Entertainment Television and has spent five decades building, disrupting, and reinventing media enterprises across the globe. He has launched successful ventures in the United States, China, Russia, and throughout Europe — navigating political, cultural, and technological disruption at every turn. His track record is not theory. It is a career built on moving first.",
    description: "Larry Namer built E! Entertainment from a single idea into a global media empire — before the internet, before streaming, before anyone knew what a cable network could become. He has spent five decades navigating disruption, recognizing the moments before industries shift, and moving first. This is a master class in pattern recognition from someone who has lived it at the highest levels of American media.",
    takeaways: [
      "Identify inflection points before your competitors see them coming",
      "Reframe failure as the data that successful pivots are built from",
      "Make bold decisions with incomplete information — and why waiting costs more",
      "Build resilience into organizational culture, not just leadership",
      "Turn decades of disruption experience into a competitive advantage",
    ],
    fee: "$20,000 – $35,000",
    videoUrl: "",
    oneSheetUrl: "/one-sheets/larry-namer.pdf",
    email: "terry@thestageadvantage.com",
  },
  {
    id: "hap-klopp",
    name: "Hap Klopp",
    credential: "Founder, The North Face",
    headshotUrl: null,
    talkTitle: "How Organizations Lose Their Edge — and How to Get It Back",
    talkSubtitle: "A framework for identifying momentum loss and rebuilding relevance",
    bio: "Hap Klopp built The North Face from a small San Francisco climbing shop into one of the most recognized outdoor brands on the planet. After leading the company through decades of growth, he has spent his career since studying what separates organizations that sustain excellence from those that quietly drift into irrelevance — and why the answer is almost never the market.",
    description: "Hap Klopp built The North Face from a small San Francisco climbing shop into one of the most recognized outdoor brands on the planet. He has spent decades studying why successful companies stall — and the answer is almost never the market. It's what happens inside when success breeds complacency. His talk gives leadership teams a clear framework for diagnosing organizational drift and the tools to reverse it before it becomes a crisis.",
    takeaways: [
      "Recognize the early warning signs of organizational stall before they become visible",
      "Understand why success itself is one of the greatest risks a company faces",
      "Build a culture of deliberate experimentation that outlasts any single leader",
      "Regain strategic clarity when the path forward stops looking obvious",
      "Inspire teams to move with the urgency of a startup inside an established organization",
    ],
    fee: "$20,000 – $35,000",
    videoUrl: "",
    oneSheetUrl: "/one-sheets/hap-klopp.pdf",
    email: "terry@thestageadvantage.com",
  },
  {
    id: "larry-kasanoff",
    name: "Larry Kasanoff",
    credential: "Hollywood Producer · Mortal Kombat · Terminator 2",
    headshotUrl: null,
    talkTitle: "Innovation Demands a Touch of Madness",
    talkSubtitle: "How Hollywood's most creative pressure creates the world's best business lessons",
    bio: "Larry Kasanoff has produced some of the most successful entertainment franchises in Hollywood history, including Mortal Kombat and Terminator 2. He has spent a career operating at the intersection of massive creative risk and massive commercial stakes — where the cost of playing it safe is extinction, and the reward for genuine boldness is a franchise that lasts for decades.",
    description: "Larry Kasanoff has produced some of the most successful entertainment franchises in Hollywood history. He has spent a career operating at the intersection of massive creative risk and massive commercial stakes, where the cost of playing it safe is extinction. His talk translates the creative chaos of Hollywood into practical frameworks for innovation, risk tolerance, and building bold organizational culture.",
    takeaways: [
      "Reverse complacency by understanding what actually kills creative momentum",
      "Build habits of idea generation that survive pressure and deadlines",
      "Ask for what you want — and why most organizations are too timid to do it",
      "Bring productive play into high-stakes environments without losing accountability",
      "Make the case for bold bets when everyone around you wants to wait",
    ],
    fee: "$20,000 – $35,000",
    videoUrl: "",
    oneSheetUrl: "/one-sheets/larry-kasanoff.pdf",
    email: "terry@thestageadvantage.com",
  },
];
