import { SortResultProps } from "./types";

const SortResult: React.FC<SortResultProps> = ({
  currentSelection,
  options,
  sortBy,
}) => {
  console.log({currentSelection}, {options}, sortBy)
  return (
    <div data-testid="sort-result">
      Sort Result
    </div>
  )
};

export default SortResult;