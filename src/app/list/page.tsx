import { StoryItem } from "@widgets/story-list";
import StoriesBoard, { type StoryGroup } from "@widgets/stories-board";

const items: StoryItem[] = [
  {
    id: "1",
    title: "Promotion",
    description: "Senior Frontend Engineer",
    date: "2025-03-01",
    category: "career",
    progressPercent: 70,
    tags: ["React", "Leadership"],
  },
  {
    id: "2",
    title: "Trip to Japan",
    description: "Kyoto, Tokyo, Nara",
    date: "2024-11-12",
    category: "travel",
    coverUrl: "/covers/artwork.png",
    location: "Kyoto",
  },
  {
    id: "3",
    title: "Wedding",
    description: "Cozy ceremony with family",
    date: "2023-06-20",
    category: "love",
    tags: ["Family", "Ceremony"],
  },
];

const groups: StoryGroup[] = [
  {
    id: "g1",
    title: "Title",
    subtitle: "test",
    category: "hobbies",
    items: [
      {
        id: "c1",
        title: "Test",
        date: new Date().toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        description:
          "https://leonardo.osnova.io/cee65a1e-c212-579a-a9a5-7b163bd71b56/-/scale_crop/1184x/-/format/webp/",
        imageUrl: "/covers/artwork.png",
      },
    ],
  },
];

export default function ListPage() {
  return (
    <div className="py-4">
      <StoriesBoard
        groups={groups}
        heading="Your Stories"
        subheading="Create and manage your personal timelines"
      />
    </div>
  );
}
