"use client";

import {
  Briefcase,
  Heart,
  Plane,
  Home,
  Brush,
  BarChart3,
  Award,
  Flower2,
  Gem,
  Luggage,
  MapPin,
  Camera,
  Music4,
  Baby,
  Share2,
  Edit3,
  Trash2,
  BookOpen,
} from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import { cn } from "@/src/shared/utils/classnames";
import { useState } from "react";
import FloatingNavigation from "./floating-navigation";
import { Button } from "./shared/ui/button";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

type StoryCategory =
  | "default"
  | "career"
  | "love"
  | "travel"
  | "family"
  | "hobbies";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
  imagePlaceholder: string;
  imageBgColor: string;
  textColor: string;
  arrowDirection: "left" | "right";
}

// Темы для категорий
const themes: Record<
  StoryCategory,
  {
    background: string;
    cardBg: string;
    primary: string;
    accent: string;
    text: string;
    title: string;
    subtitle: string;
    border: string;
    radius: string;
  }
> = {
  default: {
    background: "#F2F1EC",
    cardBg: "#FEFDF8",
    primary: "#B85C44",
    accent: "#EAD6C7",
    text: "#333333",
    title: "#2C1810",
    subtitle: "#6B7280",
    border: "#E7E5E4",
    radius: "14px",
  },
  career: {
    background: "#F6F7FB",
    cardBg: "#FFFFFF",
    primary: "#7EA6F6",
    accent: "#B7B6C1",
    text: "#2F3747",
    title: "#1E2A3A",
    subtitle: "#6B7280",
    border: "#E5E7EB",
    radius: "12px",
  },
  love: {
    background: "#FFF6F6",
    cardBg: "#FFFFFF",
    primary: "#F7A8B8",
    accent: "#FFC7B2",
    text: "#463C3C",
    title: "#3B2D2D",
    subtitle: "#8B6E6E",
    border: "#FDE2E2",
    radius: "18px",
  },
  travel: {
    background: "#F3FAFF",
    cardBg: "#FFFFFF",
    primary: "#8ED1F9",
    accent: "#6ADFD4",
    text: "#24424A",
    title: "#17363C",
    subtitle: "#6A8A92",
    border: "#DDECF2",
    radius: "10px",
  },
  family: {
    background: "#FFFBE8",
    cardBg: "#FFFFFF",
    primary: "#F7E27E",
    accent: "#8FD29A",
    text: "#3C3F2E",
    title: "#2B2E20",
    subtitle: "#767B63",
    border: "#F5EFD0",
    radius: "16px",
  },
  hobbies: {
    background: "#FBF7FF",
    cardBg: "#FFFFFF",
    primary: "#B79CF7",
    accent: "#FFB589",
    text: "#2F2A3D",
    title: "#231C33",
    subtitle: "#756B8C",
    border: "#ECE3FF",
    radius: "14px",
  },
};

const timelineData: TimelineItem[] = [
  {
    date: "MAR 2024",
    title: "The Beginning",
    description:
      "David and Felix first met and decided to start their entrepreneurial journey together. They shared a vision of building something meaningful and impactful.",
    imagePlaceholder: "[The Beginning]",
    imageBgColor: "bg-blue-500",
    textColor: "text-white",
    arrowDirection: "left",
    imageUrl: "https://buildpad.io/assets/our-story/david-asia.webp",
  },
  {
    date: "APR 2024",
    title: "AIConvert",
    description:
      "David and Felix started working on AIConvert. They were excited about the project and its potential. David handled the technical development while Felix focused on marketing and business development.",
    imagePlaceholder: "[AIConvert Image]",
    imageBgColor: "bg-gray-300",
    textColor: "text-gray-500",
    arrowDirection: "right",
    imageUrl: "https://buildpad.io/assets/our-story/david-asia.webp",
  },
  {
    date: "APR 2024",
    title: "This was harder than we thought...",
    description:
      "Building and marketing AIConvert proved more challenging than expected. Getting signups was difficult, milestones weren&apos;t met, and Felix&apos;s financial situation became strained.",
    imageUrl:
      "https://buildpad.io/assets/our-story/harder-than-we-thought.webp",
    imagePlaceholder: "[Struggle Image]",
    imageBgColor: "bg-gray-300",
    textColor: "text-gray-500",
    arrowDirection: "left",
  },
  {
    date: "JUN 2024",
    title: "TinderRoast",
    description:
      "Exploring new ideas, they were inspired by a viral AI that roasts based on post history. They applied this concept to dating profiles, but it didn&apos;t work out as planned.",
    imagePlaceholder: "TinderRoast.com",
    imageBgColor: "bg-red-500",
    textColor: "text-white",
    arrowDirection: "right",
  },
  {
    date: "JUN 2024",
    title: "We're not giving up",
    description:
      "Despite the challenges, they remained committed to their vision. They continued to work on AIConvert, exploring new ideas, and refining their approach.",
    imagePlaceholder: "TinderRoast.com",
    imageBgColor: "bg-gray-300",
    textColor: "text-gray-500",
    arrowDirection: "left",
  },
  {
    date: "JUN 2024",
    title: "We're not giving up",
    description:
      "Despite the challenges, they remained committed to their vision. They continued to work on AIConvert, exploring new ideas, and refining their approach. They were determined to make it work.",
    imagePlaceholder: "We're not giving up",
    imageBgColor: "bg-gray-300",
    textColor: "text-gray-500",
    arrowDirection: "right",
  },
  {
    date: "JUN 2024",
    title: "We're not giving up",
    description:
      "Despite the challenges, they remained committed to their vision. They continued to work on AIConvert, exploring new ideas, and refining their approach. They were determined to make it work.",
    imagePlaceholder: "We're not giving up",
    imageBgColor: "bg-gray-300",
    textColor: "text-gray-500",
    arrowDirection: "left",
  },
  {
    date: "JUN 2024",
    title: "We're not giving up",
    description:
      "Despite the challenges, they remained committed to their vision. They continued to work on AIConvert, exploring new ideas, and refining their approach. They were determined to make it work.",
    imagePlaceholder: "We're not giving up",
    imageBgColor: "bg-gray-300",
    textColor: "text-gray-500",
    arrowDirection: "right",
  },
  {
    date: "JUN 2024",
    title: "We're not giving up",
    description:
      "Despite the challenges, they remained committed to their vision. They continued to work on AIConvert, exploring new ideas, and refining their approach. They were determined to make it work.",
    imagePlaceholder: "We're not giving up",
    imageBgColor: "bg-gray-300",
    textColor: "text-gray-500",
    arrowDirection: "left",
  },
  {
    date: "JUN 2024",
    title: "We're not giving up",
    description:
      "Despite the challenges, they remained committed to their vision. They continued to work on AIConvert, exploring new ideas, and refining their approach. They were determined to make it work.",
    imagePlaceholder: "We're not giving up",
    imageBgColor: "bg-gray-300",
    textColor: "text-gray-500",
    arrowDirection: "right",
  },
];

const CategoryIcon = ({ category }: { category: StoryCategory }) => {
  const iconProps = { className: "w-5 h-5" } as const;
  switch (category) {
    case "default":
      return <BookOpen {...iconProps} />;
    case "career":
      return <Briefcase {...iconProps} />;
    case "love":
      return <Heart {...iconProps} />;
    case "travel":
      return <Plane {...iconProps} />;
    case "family":
      return <Home {...iconProps} />;
    case "hobbies":
      return <Brush {...iconProps} />;
  }
};

const TimelineCard = ({
  item,
  priority,
  theme,
  category,
}: {
  item: TimelineItem;
  priority?: boolean;
  theme: (typeof themes)[StoryCategory];
  category: StoryCategory;
}) => {
  const isPhotoForward = category === "travel";
  const isSoftRounded = category === "love" || category === "family";

  return (
    <div className="relative">
      <div className="absolute right-2 top-2 z-10 flex items-center gap-1">
        <button
          aria-label="Edit"
          className="rounded-md p-1.5 bg-white/80 backdrop-blur text-[13px] shadow hover:shadow-md transition"
          style={{ color: theme.text, border: `1px solid ${theme.border}` }}
        >
          <Edit3 className="w-4 h-4" />
        </button>
        <button
          aria-label="Share"
          className="rounded-md p-1.5 bg-white/80 backdrop-blur text-[13px] shadow hover:shadow-md transition"
          style={{ color: theme.text, border: `1px solid ${theme.border}` }}
        >
          <Share2 className="w-4 h-4" />
        </button>
        <button
          aria-label="Delete"
          className="rounded-md p-1.5 bg-white/80 backdrop-blur text-[13px] shadow hover:shadow-md transition"
          style={{ color: theme.text, border: `1px solid ${theme.border}` }}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div
        className={cn(
          "w-full relative h-40 md:h-80 mb-4 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:-translate-y-0.5",
          isSoftRounded ? "rounded-2xl" : "rounded-xl",
          isPhotoForward ? "bg-white" : item.imageBgColor,
          item.textColor
        )}
        style={{
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          border: isPhotoForward ? `8px solid #fff` : undefined,
          transform: isPhotoForward ? "rotate(-1deg)" : undefined,
        }}
      >
        {item.imageUrl ? (
          <Image
            priority={priority}
            src={item.imageUrl}
            alt={item.title}
            fill
            className={cn(
              "w-full h-full object-cover",
              isPhotoForward ? "scale-[1.02]" : ""
            )}
          />
        ) : (
          <span>{item.imagePlaceholder}</span>
        )}
      </div>

      <div className="mb-3 flex items-center gap-2">
        <span
          className="inline-flex items-center justify-center rounded-full"
          style={{
            width: 28,
            height: 28,
            background: theme.accent,
            color: theme.title,
          }}
        >
          <CategoryIcon category={category} />
        </span>
        <h3 className="text-xl font-bold" style={{ color: theme.title }}>
          {item.title}
        </h3>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: theme.text }}>
        {item.description}
      </p>

      {category === "career" && (
        <div className="mt-4">
          <div
            className="h-2 rounded-full overflow-hidden"
            style={{ background: theme.border }}
          >
            <div
              className="h-full rounded-full"
              style={{ width: "60%", background: theme.primary }}
            />
          </div>
          <div className="mt-1 text-xs" style={{ color: theme.subtitle }}>
            Goal progress
          </div>
        </div>
      )}

      {/* Значки категории */}
      <div className="mt-3 flex flex-wrap gap-2">
        {category === "career" && (
          <>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs"
              style={{ background: `${theme.primary}1a`, color: theme.title }}
            >
              <BarChart3 className="w-3.5 h-3.5" /> Metrics
            </span>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs"
              style={{ background: `${theme.accent}33`, color: theme.title }}
            >
              <Award className="w-3.5 h-3.5" /> Skills
            </span>
          </>
        )}
        {category === "love" && (
          <>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs"
              style={{ background: `${theme.primary}1a`, color: theme.title }}
            >
              <Flower2 className="w-3.5 h-3.5" /> Flowers
            </span>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs"
              style={{ background: `${theme.accent}33`, color: theme.title }}
            >
              <Gem className="w-3.5 h-3.5" /> Moments
            </span>
          </>
        )}
        {category === "travel" && (
          <>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs"
              style={{ background: `${theme.primary}1a`, color: theme.title }}
            >
              <Luggage className="w-3.5 h-3.5" /> Trip
            </span>
            <button
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs hover:opacity-90"
              style={{ background: `${theme.accent}33`, color: theme.title }}
            >
              <MapPin className="w-3.5 h-3.5" /> View map
            </button>
          </>
        )}
        {category === "family" && (
          <>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs"
              style={{ background: `${theme.primary}1a`, color: theme.title }}
            >
              <Home className="w-3.5 h-3.5" /> Home
            </span>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs"
              style={{ background: `${theme.accent}33`, color: theme.title }}
            >
              <Baby className="w-3.5 h-3.5" /> Kids
            </span>
          </>
        )}
        {category === "hobbies" && (
          <>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs"
              style={{ background: `${theme.primary}1a`, color: theme.title }}
            >
              <Camera className="w-3.5 h-3.5" /> Photo
            </span>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs"
              style={{ background: `${theme.accent}33`, color: theme.title }}
            >
              <Music4 className="w-3.5 h-3.5" /> Music
            </span>
          </>
        )}
      </div>
    </div>
  );
};

const CategorySelector = ({
  current,
  onChange,
}: {
  current: StoryCategory;
  onChange: (category: StoryCategory) => void;
}) => {
  const items: { key: StoryCategory; label: string }[] = [
    { key: "default", label: "Default" },
    { key: "career", label: "Career" },
    { key: "love", label: "Love" },
    { key: "travel", label: "Travel" },
    { key: "family", label: "Family" },
    { key: "hobbies", label: "Hobbies" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
      {items.map(({ key, label }) => {
        const active = current === key;
        const t = themes[key];
        return (
          <Button
            key={key}
            onClick={() => onChange(key)}
            variant={active ? "default" : "ghost"}
            className={cn(
              "rounded-full px-4 py-2 transition",
              active ? "shadow" : "hover:shadow"
            )}
            style={{
              background: active ? t.primary : undefined,
              color: active ? "#fff" : t.title,
              border: `1px solid ${t.border}`,
            }}
          >
            <span className="mr-2 inline-flex">
              <CategoryIcon category={key} />
            </span>
            {label}
          </Button>
        );
      })}
    </div>
  );
};

const Timeline = () => {
  const [category, setCategory] = useState<StoryCategory>("default");
  const theme = themes[category];

  return (
    <div
      className={`${inter.className} py-6 px-4 transition-all duration-300 ease-in-out print:p-0 print:bg-white`}
      style={{ backgroundColor: theme.background }}
    >
      <h1
        className="text-3xl font-bold mb-2 text-center transition-colors duration-300"
        style={{ color: theme.title }}
      >
        My Story
      </h1>
      <p
        className="text-center mb-8 transition-colors duration-300"
        style={{ color: theme.subtitle }}
      >
        Create personal stories and timelines with cozy, minimal design.
      </p>

      <div className="flex items-center justify-center gap-3 mb-3">
        <CategorySelector current={category} onChange={setCategory} />
      </div>
      <div className="flex items-center justify-center mb-6">
        <Button
          onClick={() => window.print()}
          className="rounded-full px-4"
          style={{ background: theme.primary, color: "#fff" }}
        >
          Export PDF
        </Button>
      </div>

      <div
        className="max-w-xl mx-auto p-6 hidden md:block transition-all duration-300"
        style={{
          background: theme.cardBg,
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          borderRadius: theme.radius,
          border: `1px solid ${theme.border}`,
        }}
      >
        <TimelineCard
          item={timelineData[0]}
          priority
          theme={theme}
          category={category}
        />
      </div>

      <VerticalTimeline layout="2-columns">
        <VerticalTimelineElement
          className={cn(
            "vertical-timeline-element--work transform md:hidden transition-all duration-300",
            timelineData[0].arrowDirection === "right"
              ? "-rotate-1"
              : "rotate-1"
          )}
          contentStyle={{
            background: theme.cardBg,
            color: theme.text,
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            borderRadius: theme.radius,
            border: `1px solid ${theme.border}`,
            transition: "all 0.3s ease-in-out",
          }}
          date={timelineData[0].date}
          iconStyle={{
            background: theme.primary,
            color: "#fff",
            transition: "all 0.3s ease-in-out",
          }}
          icon={<CategoryIcon category={category} />}
          contentArrowStyle={{
            borderRight: `7px solid ${theme.cardBg}`,
            transition: "all 0.3s ease-in-out",
          }}
        >
          <TimelineCard
            item={timelineData[0]}
            priority
            theme={theme}
            category={category}
          />
        </VerticalTimelineElement>
        {timelineData.slice(1).map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={cn(
              "vertical-timeline-element--work transform transition-all duration-300",
              item.arrowDirection === "right" ? "-rotate-1" : "rotate-1"
            )}
            contentStyle={{
              background: theme.cardBg,
              color: theme.text,
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              borderRadius: theme.radius,
              border: `1px solid ${theme.border}`,
              transition: "all 0.3s ease-in-out",
            }}
            date={item.date}
            iconStyle={{
              background: theme.primary,
              color: "#fff",
              transition: "all 0.3s ease-in-out",
            }}
            icon={<CategoryIcon category={category} />}
            contentArrowStyle={{
              borderRight: `7px solid ${theme.cardBg}`,
              transition: "all 0.3s ease-in-out",
            }}
          >
            <TimelineCard
              item={item}
              priority={index < 2}
              theme={theme}
              category={category}
            />
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{
            background: theme.primary,
            color: "#fff",
            transition: "all 0.3s ease-in-out",
          }}
          icon={<CategoryIcon category={category} />}
        />
      </VerticalTimeline>
      <div className="print:hidden">
        <FloatingNavigation />
      </div>
    </div>
  );
};

export default Timeline;
