export type Destinations = {
  hotelName: string;
  description: string;
  price: number,
  departureAirport: string,
  location: string,
  hotelImage: string,
  starRating: number,
  guests: {
    adults: number,
    children: number,
    infant?: number,
  },
  departureDate: string,
  holidayLength: string,
}[];

export type SortingOptions = {
  name: string;
  icon: string;
}[];