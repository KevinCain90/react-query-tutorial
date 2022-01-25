export type SortResultProps = {
  currentSelection: string;
  options: {
    name: string;
    icon: string;
  }[];
  sortBy: (currentSelection: string) => void
};