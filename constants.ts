import {
  ExperienceItem,
  EducationItem,
  SkillCategory,
  PressItem,
  VideoContentItem,
} from "./types";

export const PERSONAL_INFO = {
  name: "May Nwokoro",
  role: "Corporate Communications",
  email: "maynwokoro.o@gmail.com",
  phone: "+234 811-866-5580",
  location: "Lagos, Nigeria",
  linkedin: "https://www.linkedin.com/in/may-nwokoro-791744245/",
  bio: " Adept at leveraging social media to build digital communities and boost brand visibility, with experience in content creation, media relations, and administrative support. Currently pursuing an Executive Master in Corporate Communications to further specialize in comprehensive corporate messaging and reputation management.",
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Social Media & Content Strategy",
    skills: [
      "Social Media Management",
      "Content Creation",
      "Video Production & Editing",
    ],
  },
  {
    category: "Written Communication",
    skills: [
      "Newsletter & Press Release Writing",
      "Proofreading",
    ],
  },
  {
    category: "Relationship Management",
    skills: [
      "Stakeholder Engagement",
      "Relationship Building",
    ],
  },
  {
    category: "Digital & Administrative Skills",
    skills: [
      "Graphic Design",
      "Data Entry",
      "MS Office (Word, Excel, PowerPoint)",
      "Email/Inbox Management",
      "Internal / External Media Communication",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Media and Communications Specialist",
    company: "Charterhouse Lagos",
    period: "May 2025 - Present",
    description: [
      "Designed and implemented a social media strategy that grew the school's community from 16,000+ to 40,000+ followers and boosted brand visibility by 150%, significantly enhancing digital reach and engagement.",
      "Led end-to-end content strategy and production across website, social media, newsletters, and print, ensuring consistent messaging and brand voice across all channels.",
      "Directed, filmed, and edited video campaigns that supported admissions marketing and reinforced brand storytelling, strengthening audience connection.",
      "Managed media enquiries and secured positive press coverage, supporting the school's public reputation and stakeholder engagement.",
      "Delivered professional newsletters, press releases, and publications that improved communication with parents and stakeholders.",
    ],
  },
  {
    id: 2,
    role: "Communications & Marketing Assistant",
    company: "Charterhouse Lagos",
    period: "May 2024 - May 2025",
    description: [
      "Developed and executed a comprehensive social media content calendar, resulting in an increase in follower engagement from 157 to 16,000+ and a 100% growth in online brand visibility.",
      "Developed and implemented a streamlined process for content creation, reducing project delivery time by 15%.",
      "Wrote newsletters, press releases, and edited documents to ensure high-quality outputs and consistent brand messaging.",
      "Directed, shot, and edited videos to support marketing campaigns and brand storytelling initiatives.",
    ],
  },
  {
    id: 3,
    role: "Marketing Intern",
    company: "Charterhouse Lagos",
    period: "April 2023 - April 2024",
    description: [
      "Created engaging content for social media platforms to align with brand goals and increase audience engagement.",
      "Conducted market research and data analysis to provide actionable insights that informed marketing strategies.",
      "Collaborated with cross-functional teams, including HR, sales, product management, and design, to ensure cohesive strategies.",
      "Coordinated social media activities, proofreading, and provided administrative support to streamline marketing operations.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: "Executive Master in Corporate Communication",
    institution: "Valencia International University (VIU), Spain / Rome Business School (RBS), Nigeria",
    year: "2025-2026",
    details: "Currently pursuing",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Marketing",
    institution: "University of Benin, Edo State, NG",
    year: "Sept 2016 - Aug 2021",
    details: "Major: Marketing Communication",
  },
  {
    id: 3,
    degree: "Social Media Marketing and Advertising Specialist",
    institution: "Digital Marketing Skill Institute",
    year: "March 2024",
  },
  {
    id: 4,
    degree: "Public Relations and Marketing Communications",
    institution: "LinkedIn",
    year: "October 2023",
  },
  {
    id: 5,
    degree: "Virtual Assistant",
    institution: "ALX_Africa",
    year: "September 2022",
  },
];

export const PRESS_PORTFOLIO: PressItem[] = [
  {
    id: 1,
    title: "Charterhouse Lagos Announces the Launch of Its Secondary School",
    platform: "Website/Tv station/Newspaper",
    date: "October 2023",
    type: "press-release",
    link: "https://charterhouselagos-my.sharepoint.com/:w:/p/may_nwokoro/IQDYhjAarqfxS5xu6U8lVC-fAXDuDoWG9fLDHOhMiolPRE4?e=qc2hbG",
  },
  {
    id: 2,
    title: "UK Representatives Visit Charterhouse Lagos Campus Site Ahead of School Launch",
    platform: "Website",
    date: "February 2024",
    type: "press-release",
    link: "https://charterhouselagos.com/news-and-events/press-release-launch/",
  },
  {
    id: 3,
    title: "Charterhouse Lagos Unveils Its British Academic Model and Traditional Values Approach",
    platform: "Website",
    date: "2023 - 2024",
    type: "press-release",
    link: "https://charterhouselagos.com/newsletter/"
  },
  {
    id: 4,
    title: "Charterhouse Lagos - Traditional Values. British Academic Excellence",
    platform: "Newsletter (Internal/External)",
    date: "October 2023",
    type: "newsletter",
    link: "https://charterhouselagos.com/newsletter/newsletter-october-2023/"
  },
];

export const VIDEO_CONTENT: VideoContentItem[] = [
  {
    id: 1,
    title: "Another Beautiful Chapter in our boarding Series",
    role: "Scriptwriter/Video Editor",
    purpose: "Student testimonial video to showcase boarding life and student journey",
    platform: "Instagram",
    instagramUrl: "https://www.instagram.com/reel/DOOTI0bgnlf/?igsh=MW90M3J4YnB1ODFrbw==",
  },
  {
    id: 2,
    title: "Boarding Life Through Shikemi's Eyes",
    role: "Scriptwriter/Editor",
    purpose: "Highlighting student experience and school culture for social engagement",
    platform: "Instagram",
    instagramUrl: "https://www.instagram.com/p/DOF06c9AozU/",
  },
 
  {
    id: 3,
    title: "Invitation to School Programs – Open Days, British High Commissioner Events",
    role: "Script Writer/Video Editor",
    purpose: "To invite prospects to our events and create awareness",
    platform: "Instagram",
    instagramUrl: "https://www.instagram.com/reel/DOnwtKgArPv/?igsh=YnJ1bHd6dDFjdnlx",
  },
  {
    id: 4,
    title: "Open Day Highlights with Eva",
    role: "Script Writer/Video Editor",
    purpose: "To capture the excitement of the open day",
    platform: "Instagram",
    instagramUrl: "https://www.instagram.com/reel/DPWfmR2AmDj/?igsh=MTdkMm54MnVzbnh2ZA==",
  },
    {
    id: 5,
    title: "A day in the life of a secondary student",
    role: "Script Writer/Video Editor",
    purpose: "To showcase the daily life of a secondary student",
    platform: "Instagram",
    instagramUrl: "https://www.instagram.com/reel/DOyev16gpBE/?igsh=MWsxcWtib3g0YzRoaw==",
  },
   {
    id: 6,
    title: "Meet Our Students – (LinkedIn Live Session)",
    role: "Script writer",
    purpose: "Script and flow for live session featuring students with the Director",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/posts/johntoddfrsa_teachersday-charterhouselagos-educationexcellence-activity-7379510478605139968-X0k_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzMx10B1lP970yyZzxK7ZswHn9ifqGsSaY",
  },
];
