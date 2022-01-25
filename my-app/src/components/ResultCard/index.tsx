import { 
  StyledArticle, 
  StyledImageContainer,
  StyledImage,
  StyledInnerContainer,
  StyledInfoContainer,
  StyledH2,
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
        </StyledInfoContainer>
      </StyledInnerContainer>
    </StyledArticle>
  )
};

export default ResultCard;