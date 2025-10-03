"use client";

import Image from "next/image";
import { cn } from "@/src/shared/utils/classnames";
import { storyThemes, type StoryCategory } from "@/src/shared/config/story";
import {
  Briefcase,
  Heart,
  Plane,
  Home,
  Brush,
  Share2,
  Edit3,
  Trash2,
  MapPin,
} from "lucide-react";

export interface StoryItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: StoryCategory;
  coverUrl?: string;
  location?: string; // for travel
  progressPercent?: number; // for career
  tags?: string[];
}

export interface StoryListProps {
  stories: StoryItem[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onShare?: (id: string) => void;
  className?: string;
}

const CategoryIcon = ({ category }: { category: StoryCategory }) => {
  const iconProps = { className: "w-4 h-4" } as const;
  switch (category) {
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

function StoryCard({
  item,
  onEdit,
  onDelete,
  onShare,
}: {
  item: StoryItem;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onShare?: (id: string) => void;
}) {
  const theme = storyThemes[item.category];
  const isTravel = item.category === "travel";
  const isSoft = item.category === "love" || item.category === "family";

  return (
    <div
      className={cn(
        "relative group flex flex-col overflow-hidden transition-all",
        "hover:-translate-y-0.5",
        isSoft ? "rounded-2xl" : "rounded-xl"
      )}
      style={{
        background: theme.cardBg,
        border: `1px solid ${theme.border}`,
        borderRadius: theme.radius,
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
      }}
    >
      <div className="absolute right-2 top-2 z-10 flex items-center gap-1">
        <button
          aria-label="Edit"
          onClick={() => onEdit?.(item.id)}
          className="rounded-md p-1.5 bg-white/80 backdrop-blur text-[13px] shadow hover:shadow-md transition"
          style={{ border: `1px solid ${theme.border}`, color: theme.title }}
        >
          <Edit3 className="w-4 h-4" />
        </button>
        <button
          aria-label="Share"
          onClick={() => onShare?.(item.id)}
          className="rounded-md p-1.5 bg-white/80 backdrop-blur text-[13px] shadow hover:shadow-md transition"
          style={{ border: `1px solid ${theme.border}`, color: theme.title }}
        >
          <Share2 className="w-4 h-4" />
        </button>
        <button
          aria-label="Delete"
          onClick={() => onDelete?.(item.id)}
          className="rounded-md p-1.5 bg-white/80 backdrop-blur text-[13px] shadow hover:shadow-md transition"
          style={{ border: `1px solid ${theme.border}`, color: theme.title }}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div
        className={cn(
          "relative w-full h-44 sm:h-48 md:h-56",
          isSoft ? "rounded-t-2xl" : "rounded-t-xl"
        )}
        style={{
          background: isTravel ? "#fff" : `${theme.accent}20`,
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        {item.coverUrl ? (
          <Image
            src={item.coverUrl}
            alt={item.title}
            fill
            className={cn("object-cover", isTravel ? "scale-[1.02]" : "")}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : null}
        {isTravel && (
          <div
            className="absolute inset-1 pointer-events-none"
            style={{ border: "8px solid #fff", transform: "rotate(-0.5deg)" }}
          />
        )}
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <span
            className="inline-flex items-center justify-center rounded-full"
            style={{
              width: 26,
              height: 26,
              background: theme.accent,
              color: theme.title,
            }}
          >
            <CategoryIcon category={item.category} />
          </span>
          <h3
            className="text-base sm:text-lg font-semibold truncate"
            style={{ color: theme.title }}
            title={item.title}
          >
            {item.title}
          </h3>
        </div>

        <p
          className="text-sm leading-relaxed line-clamp-3"
          style={{ color: theme.text }}
        >
          {item.description}
        </p>

        <div
          className="mt-3 flex items-center justify-between text-xs"
          style={{ color: theme.subtitle }}
        >
          <span>{item.date}</span>
          {item.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> {item.location}
            </span>
          )}
        </div>

        {typeof item.progressPercent === "number" && (
          <div className="mt-3">
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ background: theme.border }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.max(0, Math.min(100, item.progressPercent))}%`,
                  background: theme.primary,
                }}
              />
            </div>
            <div className="mt-1 text-[11px]" style={{ color: theme.subtitle }}>
              Goal progress
            </div>
          </div>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex px-2 py-1 rounded-full text-[11px]"
                style={{ background: `${theme.primary}1a`, color: theme.title }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function StoryList({
  stories,
  onEdit,
  onDelete,
  onShare,
  className,
}: StoryListProps) {
  // По умолчанию мяглый тёплый фон, но компонент рендерится прозрачным, чтобы вписываться в страницы
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {stories.map((item) => (
        <StoryCard
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
          onShare={onShare}
        />
      ))}
    </div>
  );
}

export default StoryList;
