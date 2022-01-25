export type ResultCardProps = {
  key: string;
  hotelName: string;
  location: string;
  hotelImage: string;
  starRating: number;
  guests: {
    adults: number,
    children: number,
    infant?: number,
  },
  holidayLength: string,
  departureDate: string,
  departureAirport: string,
  price: number,
  description: string,
};