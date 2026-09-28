export interface SocialPost {
  id: string;
  platform: "facebook" | "instagram";
  author: {
    name: string;
    role: string;
    handle: string;
    avatar: string;
    verified: boolean;
  };
  date: string;
  content: string;
  tags: string[];
  image: string;
  imageAlt: string;
  likes: string;
  comments: number;
  shares?: number;
  url: string;
}

export const socialPosts: SocialPost[] = [
  {
    id: "post-fb-01",
    platform: "facebook",
    author: {
      name: "Ratnesh Patel",
      role: "वरिष्ठ प्रदेश उपाध्यक्ष, बिहार • HAM(S)",
      handle: "@RatneshPatelHAM",
      avatar: "/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp",
      verified: true,
    },
    date: "September 2026",
    content:
      "\"हम का एक ही लक्ष्य एवं एक ही सपना, स्वस्थ एवं विकसित बिहार हो अपना !!\" हिंदुस्तानी अवाम मोर्चा (सेक्युलर) के राज्यस्तरीय संकल्प को जन-जन तक पहुँचाने और सामाजिक समरसता को सशक्त करने हेतु समर्पित।",
    tags: ["#HAMS", "#BiharVikas", "#RatneshPatel", "#SamajikNyay"],
    image: "/images/ratnesh-patel/hero/hero1.webp",
    imageAlt: "HAM(S) leadership mission with Shri Jitan Ram Manjhi and Ratnesh Patel",
    likes: "2.4K",
    comments: 184,
    shares: 342,
    url: "https://www.facebook.com/RatneshPatelHAM/",
  },
  {
    id: "post-ig-01",
    platform: "instagram",
    author: {
      name: "Ratnesh Patel",
      role: "Senior State Vice President, Bihar",
      handle: "@ratneshpatelham",
      avatar: "/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp",
      verified: true,
    },
    date: "September 2026",
    content:
      "हैं तैयार हम, आपकी लड़ाई लड़ने को, बिहार को विकसित बनाने को! राष्ट्रीय अध्यक्ष डॉ. संतोष कुमार सुमन जी के कुशल नेतृत्व में बिहार के समग्र विकास की दिशा में निरंतर अग्रसर।",
    tags: ["#RatneshPatel", "#HAMSecular", "#Leadership", "#Bihar"],
    image: "/images/ratnesh-patel/hero/hero2.webp",
    imageAlt: "Statewide leadership address by Dr. Santosh Kumar Suman and Ratnesh Patel",
    likes: "1.8K",
    comments: 126,
    url: "https://www.instagram.com/ratneshpatelham",
  },
  {
    id: "post-fb-02",
    platform: "facebook",
    author: {
      name: "Ratnesh Patel",
      role: "वरिष्ठ प्रदेश उपाध्यक्ष, बिहार • HAM(S)",
      handle: "@RatneshPatelHAM",
      avatar: "/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp",
      verified: true,
    },
    date: "September 2026",
    content:
      "कुढ़नी, मुजफ्फरपुर सहित तिरहुत प्रमंडल के किसान भाइयों एवं क्षेत्रीय कार्यकर्ताओं के साथ जन संवाद। नहरों में नियमित सिंचाई, फसल क्षतिपूर्ति एवं ग्रामीण विकास हमारी शीर्ष प्राथमिकता है।",
    tags: ["#KisanKalyan", "#Muzaffarpur", "#Tirhut", "#JanSamwad"],
    image: "/images/ratnesh-patel/profile/ratnesh-patel.webp",
    imageAlt: "Ratnesh Patel during grassroots public representation",
    likes: "3.1K",
    comments: 245,
    shares: 412,
    url: "https://www.facebook.com/RatneshPatelHAM/",
  },
  {
    id: "post-ig-02",
    platform: "instagram",
    author: {
      name: "Ratnesh Patel",
      role: "Senior State Vice President, Bihar",
      handle: "@ratneshpatelham",
      avatar: "/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp",
      verified: true,
    },
    date: "September 2026",
    content:
      "हमारा संकल्प: बेहतर बिहार, विकसित बिहार! श्रद्धेय जीतन राम मांझी जी के विचारों से प्रेरणा लेकर दलित, वंचित एवं शोषित वर्गों के उत्थान हेतु संगठन को नई शक्ति प्रदान कर रहे हैं।",
    tags: ["#JitanRamManjhi", "#HAMS", "#SocialJustice", "#BiharLeadership"],
    image: "/images/ratnesh-patel/hero/hero3.webp",
    imageAlt: "Vision of Shri Jitan Ram Manjhi and party mission",
    likes: "2.1K",
    comments: 153,
    url: "https://www.instagram.com/ratneshpatelham",
  },
  {
    id: "post-fb-03",
    platform: "facebook",
    author: {
      name: "Ratnesh Patel",
      role: "वरिष्ठ प्रदेश उपाध्यक्ष, बिहार • HAM(S)",
      handle: "@RatneshPatelHAM",
      avatar: "/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp",
      verified: true,
    },
    date: "August 2026",
    content:
      "तीन दशकों का जनसेवा का सफर—1995 समता पार्टी से लेकर वर्तमान हिंदुस्तानी अवाम मोर्चा (सेक्युलर) तक। जनता के विश्वास और पार्टी कार्यकर्ताओं के स्नेह का हृदय से आभार।",
    tags: ["#30YearsOfPublicService", "#Kudhani", "#Patna", "#RatneshPatel"],
    image: "/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp",
    imageAlt: "Ratnesh Patel official portrait",
    likes: "4.5K",
    comments: 389,
    shares: 620,
    url: "https://www.facebook.com/RatneshPatelHAM/",
  },
];
