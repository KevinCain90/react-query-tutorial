import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

export const ButtonText = styled.span`
  font-size: 16px;
`;

export const ButtonIcon = styled(FontAwesomeIcon)<{ $isSelected: boolean }>`
  color: ${({ $isSelected }) =>
      $isSelected ? '#FFF' : '#D4D4D4'};
  font-size: 18px;
  margin-right: 8px;
`;

export const StyledButton = styled.div<{ $isSelected: boolean }>`
  background-color: ${({ $isSelected }) =>
      $isSelected ? '#162B74' : '#FFF'};
  color: ${({ $isSelected }) =>
      $isSelected ? '#FFF' : '#162B74'};
  display: flex;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid #162B74;
  cursor: pointer;
  &:last-of-type {
    border-bottom: none;
  }
`;