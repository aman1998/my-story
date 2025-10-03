export type TStoryCategory =
  | "default"
  | "career"
  | "love"
  | "travel"
  | "family"
  | "hobbies";

export interface IStoryCategory {
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
