import BookingContainer from '.';

import { render, screen } from '@testing-library/react';
// used to be able to select test id in the document
import '@testing-library/jest-dom/extend-expect';

const renderComponent = () => render(<BookingContainer />);

describe('<BookingContainer />', () => {
  it('Renders the page without error', () => {
    renderComponent();
    expect(screen.getByTestId('booking-container')).toBeInTheDocument();
  });
});

