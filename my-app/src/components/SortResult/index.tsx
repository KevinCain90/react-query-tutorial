import { SortResultProps } from "./types";

import './index.css';

import { faSortAlphaDown, faPoundSign, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SortResult: React.FC<SortResultProps> = ({
  currentSelection,
  options,
  sortBy,
}) => {
  return (
    <div data-testid="sort-result" className='button-container'>
      {options.map(option => {
        const buttonClass = option.name === currentSelection ? 'button button-active' : 'button';

        return (
          <div key={option.name} className={buttonClass} onClick={() => sortBy(option.name)}>
            <span className='button-text'>
              sort 
              {option.name !== 'alphabetically' ? ' by ' : ' '}
              <strong>{option.name}</strong>
            </span>
            {' '}
            <FontAwesomeIcon className='button-icon' icon={option.icon === 'alpha' ? faSortAlphaDown : option.icon === 'starRating' ? faStar : faPoundSign } />
          </div>
        )
      })}
    </div>
  )
};

export default SortResult;