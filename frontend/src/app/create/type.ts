export type FormType = {
  title: string;
  prompt: string;
  solution: string;
  initialContent: string;
  expectedString: string;
  level: Level | "";
};
export enum Level {
  Beginner,
  Intermediate,
  Hard,
}
