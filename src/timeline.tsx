"use client";

import { WorkflowIcon } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { Courier_Prime } from "next/font/google";
import { cn } from "@/src/shared/utils/classnames";
import { useState } from "react";
import FloatingNavigation from "./floating-navigation";
import { AnimatedModalDemo } from "./widgets/auth-modal";
import { Button } from "./shared/ui/button";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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

// Цветовые схемы
const themes = {
  vintage: {
    background: "#F2F1EC",
    cardBg: "#fefdf8",
    primary: "#b85c44",
    text: "#333",
    title: "#2c1810",
    subtitle: "#6b7280",
  },
  dark: {
    background: "#1a1a1a",
    cardBg: "#2d2d2d",
    primary: "#6366f1",
    text: "#e5e7eb",
    title: "#ffffff",
    subtitle: "#9ca3af",
  },
  ocean: {
    background: "#0f172a",
    cardBg: "#1e293b",
    primary: "#06b6d4",
    text: "#e2e8f0",
    title: "#ffffff",
    subtitle: "#94a3b8",
  },
  sunset: {
    background: "#fef3c7",
    cardBg: "#fefdf8",
    primary: "#f59e0b",
    text: "#374151",
    title: "#1f2937",
    subtitle: "#6b7280",
  },
  forest: {
    background: "#f0fdf4",
    cardBg: "#ffffff",
    primary: "#16a34a",
    text: "#374151",
    title: "#1f2937",
    subtitle: "#6b7280",
  },
  purple: {
    background: "#faf5ff",
    cardBg: "#ffffff",
    primary: "#8b5cf6",
    text: "#374151",
    title: "#1f2937",
    subtitle: "#6b7280",
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

const TimelineCard = ({
  item,
  priority,
  theme,
}: {
  item: TimelineItem;
  priority?: boolean;
  theme: typeof themes.vintage;
}) => {
  return (
    <div>
      <div
        className={`w-full relative h-40 md:h-80 ${item.imageBgColor} rounded-lg mb-4 flex items-center justify-center ${item.textColor} overflow-hidden`}
      >
        {item.imageUrl ? (
          <Image
            priority={priority}
            src={item.imageUrl}
            alt={item.title}
            fill
            className="w-full h-full object-cover"
          />
        ) : (
          <span>{item.imagePlaceholder}</span>
        )}
      </div>
      <h3
        className="text-xl font-bold mb-3 font-serif"
        style={{ color: theme.title }}
      >
        {item.title}
      </h3>
      <p
        className="text-sm leading-relaxed font-serif"
        style={{ color: theme.text }}
      >
        {item.description}
      </p>
    </div>
  );
};

const ThemeSelector = ({
  currentTheme,
  onThemeChange,
}: {
  currentTheme: keyof typeof themes;
  onThemeChange: (theme: keyof typeof themes) => void;
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {Object.keys(themes).map((themeKey) => {
        const theme = themes[themeKey as keyof typeof themes];
        const isActive = currentTheme === themeKey;

        return (
          <Button
            key={themeKey}
            onClick={() => onThemeChange(themeKey as keyof typeof themes)}
            className={cn(isActive ? "scale-110 shadow-lg" : "hover:shadow-md")}
            style={{
              background: isActive
                ? `linear-gradient(135deg, ${theme.primary}, ${theme.primary}dd)`
                : theme.primary,
              boxShadow: isActive
                ? `0 10px 25px ${theme.primary}40`
                : "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            {themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}
          </Button>
        );
      })}
    </div>
  );
};

const Timeline = () => {
  const [currentTheme, setCurrentTheme] =
    useState<keyof typeof themes>("vintage");
  const theme = themes[currentTheme];

  return (
    <div
      className={`${courierPrime.className} font-serif py-6 px-4 transition-all duration-300 ease-in-out`}
      style={{ backgroundColor: theme.background }}
    >
      <AnimatedModalDemo />
      <h1
        className="text-3xl font-bold mb-2 text-center transition-colors duration-300"
        style={{ color: theme.title }}
      >
        Our story
      </h1>
      <p
        className="text-center mb-8 transition-colors duration-300"
        style={{ color: theme.subtitle }}
      >
        The journey of two brothers teaming up to build something meaningful.
      </p>

      <ThemeSelector
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />

      <div
        className="max-w-xl mx-auto p-6 hidden md:block transition-all duration-300"
        style={{
          background: theme.cardBg,
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          borderRadius: "12px",
        }}
      >
        <TimelineCard item={timelineData[0]} priority theme={theme} />
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
            borderRadius: "12px",
            transition: "all 0.3s ease-in-out",
          }}
          date={timelineData[0].date}
          iconStyle={{
            background: theme.primary,
            color: "#fff",
            transition: "all 0.3s ease-in-out",
          }}
          icon={<WorkflowIcon />}
          contentArrowStyle={{
            borderRight: `7px solid ${theme.cardBg}`,
            transition: "all 0.3s ease-in-out",
          }}
        >
          <TimelineCard item={timelineData[0]} priority theme={theme} />
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
              borderRadius: "12px",
              transition: "all 0.3s ease-in-out",
            }}
            date={item.date}
            iconStyle={{
              background: theme.primary,
              color: "#fff",
              transition: "all 0.3s ease-in-out",
            }}
            icon={<WorkflowIcon />}
            contentArrowStyle={{
              borderRight: `7px solid ${theme.cardBg}`,
              transition: "all 0.3s ease-in-out",
            }}
          >
            <TimelineCard item={item} priority={index < 2} theme={theme} />
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{
            background: theme.primary,
            color: "#fff",
            transition: "all 0.3s ease-in-out",
          }}
          icon={<WorkflowIcon />}
        />
      </VerticalTimeline>
      <FloatingNavigation />
    </div>
  );
};

export default Timeline;
