"use client";

import Image from "next/image";
import { Button } from "@/src/shared/ui/button";
import { cn } from "@/src/shared/utils/classnames";
import { type TStoryCategory } from "@entities/Story/model/types";
import { storyThemes } from "@entities/Story/lib/config";
import { BookOpen, Plus, Share2, Trash2, Pencil, Calendar } from "lucide-react";

export interface StoryCardItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  imageUrl?: string;
}

export interface StoryGroup {
  id: string;
  title: string;
  subtitle?: string;
  category: TStoryCategory;
  items: StoryCardItem[];
}

export interface StoriesBoardProps {
  heading?: string;
  subheading?: string;
  groups: StoryGroup[];
  onCreateGroup?: () => void;
  onEditGroup?: (id: string) => void;
  onDeleteGroup?: (id: string) => void;
  onShareGroup?: (id: string) => void;
  onAddCard?: (groupId: string) => void;
  className?: string;
}

function GroupHeader({
  group,
  onEdit,
  onDelete,
  onShare,
}: {
  group: StoryGroup;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onShare?: (id: string) => void;
}) {
  const theme = storyThemes[group.category];
  return (
    <div
      className="flex items-center justify-between p-5 border rounded-xl"
      style={{ background: theme.cardBg, borderColor: theme.border }}
    >
      <div>
        <h3 className="text-xl font-semibold" style={{ color: theme.title }}>
          {group.title}
        </h3>
        {group.subtitle && (
          <p className="mt-1 text-sm" style={{ color: theme.subtitle }}>
            {group.subtitle}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={() => onShare?.(group.id)}>
          <Share2 className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onEdit?.(group.id)}>
          <Pencil className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onDelete?.(group.id)}>
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

function GroupItemCard({ item }: { item: StoryCardItem }) {
  return (
    <div
      className="flex items-start gap-4 p-4 rounded-xl bg-white/70 border"
      style={{ borderColor: "#eee" }}
    >
      <div className="relative w-[96px] h-[96px] rounded-lg overflow-hidden bg-neutral-100">
        {item.imageUrl && (
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="flex-1">
        <h4 className="text-base font-semibold text-neutral-800">
          {item.title}
        </h4>
        {item.date && (
          <div className="mt-1 text-xs text-neutral-500 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {item.date}
          </div>
        )}
        {item.description && (
          <p className="mt-2 text-sm text-neutral-600 break-all">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function StoriesBoard({
  heading = "Your Stories",
  subheading = "Create and manage your personal timelines",
  groups,
  onCreateGroup,
  onEditGroup,
  onDeleteGroup,
  onShareGroup,
  onAddCard,
  className,
}: StoriesBoardProps) {
  return (
    <div className={cn("px-4 py-6", className)}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-neutral-900 text-2xl font-semibold">
            <BookOpen className="w-5 h-5 text-amber-600" /> {heading}
          </div>
          <p className="text-sm text-neutral-500 mt-1">{subheading}</p>
        </div>
        <Button
          onClick={onCreateGroup}
          className="rounded-full px-4"
          style={{ background: "#b85c44", color: "#fff" }}
        >
          <Plus className="w-4 h-4 mr-2" /> New Story
        </Button>
      </div>

      <div className="space-y-6">
        {groups.map((group) => {
          const theme = storyThemes[group.category];
          return (
            <div
              key={group.id}
              className="rounded-2xl border"
              style={{ background: "#fff", borderColor: theme.border }}
            >
              <GroupHeader
                group={group}
                onEdit={onEditGroup}
                onDelete={onDeleteGroup}
                onShare={onShareGroup}
              />

              <div className="p-5">
                <div
                  className="rounded-2xl p-4"
                  style={{ background: `${theme.accent}10` }}
                >
                  {group.items.map((it) => (
                    <div key={it.id} className="mb-4 last:mb-0">
                      <GroupItemCard item={it} />
                    </div>
                  ))}

                  <button
                    className="w-full mt-4 border-2 border-dashed rounded-xl py-3 text-sm flex items-center justify-center gap-2 hover:bg-neutral-50"
                    style={{ borderColor: theme.border, color: theme.title }}
                    onClick={() => onAddCard?.(group.id)}
                  >
                    <Plus className="w-4 h-4" /> Add Card
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
