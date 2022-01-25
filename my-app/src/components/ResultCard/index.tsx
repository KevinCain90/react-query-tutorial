import { ResultCardProps } from "./types";

const ResultCard: React.FC<ResultCardProps> = ({
  key,
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
    <div data-testid='result-card'>
      hello
    </div>
  )
};

export default ResultCard;