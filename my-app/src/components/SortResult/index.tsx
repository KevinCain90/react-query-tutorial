import { SortResultProps } from "./types";

import { ButtonContainer, ButtonText, ButtonIcon, StyledButton } from "./styles";

import { faSortAlphaDown, faPoundSign, faStar } from "@fortawesome/free-solid-svg-icons";

const SortResult: React.FC<SortResultProps> = ({
  currentSelection,
  options,
  sortBy,
}) => {
  return (
    <ButtonContainer data-testid="sort-result">
      {options.map(option => {
        const isSelected = option.name === currentSelection;

        return (
          <StyledButton $isSelected={isSelected} key={option.name} onClick={() => sortBy(option.name)}>
            <ButtonText>
              sort 
              {option.name !== 'alphabetically' ? ' by ' : ' '}
              <strong>{option.name}</strong>
            </ButtonText>
            {' '}
            <ButtonIcon $isSelected={isSelected} icon={option.icon === 'alpha' ? faSortAlphaDown : option.icon === 'star' ? faStar : faPoundSign } />
          </StyledButton>
        )
      })}
    </ButtonContainer>
  )
};

export default SortResult;