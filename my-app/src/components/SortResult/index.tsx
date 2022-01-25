import { SortResultProps } from "./types";

import { faSortAlphaDown, faPoundSign, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SortResult: React.FC<SortResultProps> = ({
  currentSelection,
  options,
  sortBy,
}) => {
  return (
    <div data-testid="sort-result">
      {options.map(option => {
        return (
          <div key={option.name} onClick={() => sortBy(option.name)}>
            <span>
              sort 
              {option.name !== 'Hotel' ? ' by ' : ' '}
              <strong>{option.name}</strong>
            </span>
            {' '}
            <FontAwesomeIcon icon={option.icon === 'alpha' ? faSortAlphaDown : option.icon === 'starRating' ? faStar : faPoundSign } />
          </div>
        )
      })}
    </div>
  )
};

export default SortResult;