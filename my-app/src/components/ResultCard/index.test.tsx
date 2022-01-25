import ResultCard from '.';

import { render, screen } from '@testing-library/react';
// used to be able to select test id in the document
import '@testing-library/jest-dom/extend-expect';
import { ResultCardProps } from './types';

const props: ResultCardProps = {
  hotelName: "Iberostar Grand Salome",
  description: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Gold courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
  price: 1136.50,
  departureAirport: "East Midlands",
  location: "Costa Adeje, Tenerife",
  hotelImage: "thumbnail_hotel-image-2.png",
  starRating: 5,
  guests: {
    adults: 2,
    children: 2,
    infant: 1
  },
  departureDate: "3rd July 2021",
  holidayLength: "7 days",
};

const renderComponent = () => render(<ResultCard {...props} />);

describe('<ResultCard />', () => {
  it('Renders the page without error', () => {
    renderComponent();
    expect(screen.getByTestId('result-card')).toBeInTheDocument();
  });
});