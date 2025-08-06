"use client";

import { WorkflowIcon } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { Courier_Prime } from "next/font/google";
import { cn } from "@/lib/utils";

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
}: {
  item: TimelineItem;
  priority?: boolean;
}) => {
  return (
    <div>
      <div
        className={`w-full relative h-80 ${item.imageBgColor} rounded-t-lg mb-4 flex items-center justify-center ${item.textColor} overflow-hidden`}
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
      <h3 className="vertical-timeline-element-title text-xl font-bold mb-3 font-serif">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed font-serif">
        {item.description}
      </p>
    </div>
  );
};

const Timeline = () => {
  return (
    <div
      className={`${courierPrime.className} font-serif py-6 px-4 bg-[#F2F1EC]`}
    >
      <h1 className="text-3xl font-bold mb-2 text-center">Our story</h1>
      <p className="text-center text-gray-500 mb-8">
        The journey of two brothers teaming up to build something meaningful.
      </p>
      <div
        className="max-w-xl mx-auto p-6 hidden md:block"
        style={{
          background: "#fefdf8",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          borderRadius: "12px",
        }}
      >
        <TimelineCard item={timelineData[0]} priority />
      </div>

      <VerticalTimeline layout="2-columns">
        <VerticalTimelineElement
          className={cn(
            "vertical-timeline-element--work transform md:hidden",
            timelineData[0].arrowDirection === "right"
              ? "-rotate-1"
              : "rotate-1"
          )}
          contentStyle={{
            background: "#fefdf8",
            color: "#333",
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            borderRadius: "12px",
          }}
          // contentArrowStyle={{
          //   [item.arrowDirection === "left" ? "borderLeft" : "borderRight"]:
          //     "7px solid #b85c44",
          // }}
          date={timelineData[0].date}
          iconStyle={{ background: "#b85c44", color: "#fff" }}
          icon={<WorkflowIcon />}
        >
          <TimelineCard item={timelineData[0]} priority />
        </VerticalTimelineElement>
        {timelineData.slice(1).map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={cn(
              "vertical-timeline-element--work transform",
              item.arrowDirection === "right" ? "-rotate-1" : "rotate-1"
            )}
            contentStyle={{
              background: "#fefdf8",
              color: "#333",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              borderRadius: "12px",
            }}
            // contentArrowStyle={{
            //   [item.arrowDirection === "left" ? "borderLeft" : "borderRight"]:
            //     "7px solid #b85c44",
            // }}
            date={item.date}
            iconStyle={{ background: "#b85c44", color: "#fff" }}
            icon={<WorkflowIcon />}
          >
            <TimelineCard item={item} priority={index < 2} />
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: "#b85c44", color: "#fff" }}
          icon={<WorkflowIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
