export type StoryCategory = "career" | "love" | "travel" | "family" | "hobbies";

export const storyThemes: Record<
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
