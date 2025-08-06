import {
  BookOpen,
  CardSim,
  FileUp,
  Palette,
  Plus,
  Settings,
} from "lucide-react";
import { FloatingDock } from "./ui/floating-dock";

const links = [
  {
    title: "My stories",
    icon: (
      <BookOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Cards",
    icon: (
      <CardSim className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Add card",
    icon: (
      <Plus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Upload PDF",
    icon: (
      <FileUp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Color theme",
    icon: (
      <Palette className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Settings",
    icon: (
      <Settings className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

const FloatingNavigation = () => {
  return (
    <FloatingDock
      desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2"
      mobileClassName="fixed bottom-4 left-4"
      items={links}
    />
  );
};

export default FloatingNavigation;
