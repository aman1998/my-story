"use client";

import { WorkflowIcon } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { Courier_Prime } from "next/font/google";

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
];

const Timeline = () => {
  return (
    <div className={`${courierPrime.className} font-serif`}>
      <VerticalTimeline layout="2-columns">
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work "
            contentStyle={{
              background: "#fefdf8",
              color: "#333",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
            }}
            // contentArrowStyle={{
            //   [item.arrowDirection === "left" ? "borderLeft" : "borderRight"]:
            //     "7px solid #b85c44",
            // }}
            date={item.date}
            iconStyle={{ background: "#b85c44", color: "#fff" }}
            icon={<WorkflowIcon />}
          >
            <div
              className={`w-full relative h-80 ${item.imageBgColor} rounded-t-lg mb-4 flex items-center justify-center ${item.textColor} overflow-hidden`}
            >
              {item.imageUrl ? (
                <Image
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
