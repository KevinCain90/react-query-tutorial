import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { 
  StyledArticle, 
  StyledImageContainer,
  StyledImage,
  StyledInnerContainer,
  StyledInfoContainer,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledStarRatingDiv,
  StyledInfoP,
  StyledBookNowButton,
  StyledPriceSpan,
  StyledReadMoreDiv,
  StyledDescriptionP,
  StyledBottomDiv,
  StyledBottomContentDiv,
} from "./styles";
import { ResultCardProps } from "./types";

const ResultCard: React.FC<ResultCardProps> = ({
  hotelName,
  location,
  hotelImage,
  starRating,
  guests,
  holidayLength,
  departureDate,
  departureAirport,
  price,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const adultText = guests.adults === 1 ? 'Adult, ' : 'Adults, ';
  const childText = guests.children === 1 ? 'Child, ' : 'Children, ';

  return (
    <StyledArticle data-testid='result-card'>
      <StyledInnerContainer>
        <StyledImageContainer>
          <StyledImage data-testid='hotel-image' src={require(`../../../public/images/${hotelImage}`)} alt={hotelName}/>
          <StyledReadMoreDiv data-testid='read-more' onClick={handleClick}>
            <span>
              <strong>{isOpen ? 'Read less' : 'Read more'}</strong> about this hotel 
            </span>
            <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
          </StyledReadMoreDiv>
        </StyledImageContainer>
        <StyledInfoContainer>
          <StyledH2>
            {hotelName}
          </StyledH2>
          <StyledH3>
            {location}
          </StyledH3>
          <StyledStarRatingDiv $starRating={starRating} />
          <StyledInfoP>
            <strong>{guests.adults}</strong> {adultText}
            <strong>{guests.children}</strong> {childText}
            {guests.infant ? `& ${guests.infant} infant` : ''}
          </StyledInfoP>
          <StyledInfoP>
            <strong>{departureDate}</strong> for <strong>{holidayLength}</strong>
          </StyledInfoP>
           <StyledInfoP>
            Departing from <strong>{departureAirport}</strong>
          </StyledInfoP>
          <StyledBookNowButton>
            Book now <br/>
            <StyledPriceSpan>£{price.toFixed(2)}</StyledPriceSpan>
          </StyledBookNowButton>
        </StyledInfoContainer>
      </StyledInnerContainer>
      {isOpen && (
        <StyledBottomDiv>
          <StyledBottomContentDiv>
            <StyledH4>Overview</StyledH4>
            <StyledDescriptionP>
              {description}
            </StyledDescriptionP>
          </StyledBottomContentDiv>
          
        </StyledBottomDiv>
      )}
    </StyledArticle>
  )
};

export default ResultCard;