import { 
  StyledArticle, 
  StyledImageContainer,
  StyledImage,
  StyledInnerContainer,
  StyledInfoContainer,
  StyledH2,
  StyledH3,
  StyledStarRatingDiv,
  StyledInfoP,
  StyledBookNowButton,
  StyledPriceSpan,
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

  const adultText = guests.adults === 1 ? 'Adult, ' : 'Adults, ';
  const childText = guests.adults === 1 ? 'Adult, ' : 'Adults, ';

  return (
    <StyledArticle data-testid='result-card'>
      <StyledInnerContainer>
        <StyledImageContainer>
          <StyledImage src={require(`../../../public/images/${hotelImage}`)} alt={hotelName}/>
        </StyledImageContainer>
        <StyledInfoContainer>
          <StyledH2>
            {hotelName}
          </StyledH2>
          <StyledH3>
            {location}
          </StyledH3>
          <StyledStarRatingDiv $starRating={starRating} >star rating here</StyledStarRatingDiv>
          <StyledInfoP>
            <strong>{guests.adults}</strong> {adultText}
            <strong>{guests.children}</strong> {childText}
            {guests.infant ? `& ${guests.infant} infant` : ''}
          </StyledInfoP>
          <StyledInfoP>
            <strong>{departureDate}</strong> for <strong>{holidayLength}</strong>
          </StyledInfoP>
          <StyledBookNowButton>
            Book now <br/>
            <StyledPriceSpan>£{price}</StyledPriceSpan>
          </StyledBookNowButton>
        </StyledInfoContainer>
      </StyledInnerContainer>
    </StyledArticle>
  )
};

export default ResultCard;