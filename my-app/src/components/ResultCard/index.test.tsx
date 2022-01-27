import ResultCard from '.';

import { fireEvent, render, screen } from '@testing-library/react';
// used to be able to select test id in the document
import '@testing-library/jest-dom/extend-expect';
import { ResultCardProps } from './types';
import { getByTextWithMarkup } from '../utils';

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
  it('displays the click more chevron icon correctly', async () => {
    renderComponent();
    const chevronIcon = await screen.findByTitle('chevron');
    expect(chevronIcon).toBeInTheDocument();
  });
  it('displays the read more text in overview', async () => {
    renderComponent();
    const readMoreDiv = screen.getByTestId('read-more');
    fireEvent.click(readMoreDiv);
    const readMoreText = await screen.findByText('The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Gold courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.');
    expect(readMoreText).toBeInTheDocument();
  });
  it('displays read less when clicked', async () => {
    renderComponent();
    const readMoreDiv = screen.getByTestId('read-more');
    fireEvent.click(readMoreDiv);
    const readLessText = await screen.findByText('Read less');
    expect(readLessText).toBeInTheDocument();
  });
  it('displays resort name correctly', async () => {
    renderComponent();
    const resortNameText = await screen.findByText('Iberostar Grand Salome');
    expect(resortNameText).toBeInTheDocument();
  });
  it('displays location correctly', async () => {
    renderComponent();
    const locationText = await screen.findByText('Costa Adeje, Tenerife');
    expect(locationText).toBeInTheDocument();
  });
  it('displays guest information correctly', async () => {
    const { queryByText } = renderComponent();
    getByTextWithMarkup('2 Adults, 2 Children, & 1 infant', queryByText);
  });
  it('displays departure airport info correctly', async () => {
    const { queryByText } = renderComponent();
    getByTextWithMarkup('Departing from East Midlands', queryByText);
  });
  it('displays book now text correctly', async () => {
    renderComponent();
    const bookNowText = await screen.findByText('Book now');
    expect(bookNowText).toBeInTheDocument();
  });
  it('displays price correctly', async () => {
    renderComponent();
    const priceText = await screen.findByText('£1136.50');
    expect(priceText).toBeInTheDocument();
  });
  it('check hotel image exists', async () => {
    renderComponent();
    const hotelImg = screen.getByTestId('hotel-image');
    expect(hotelImg).toBeInTheDocument();
  });
});